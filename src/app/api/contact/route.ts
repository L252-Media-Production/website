import { NextRequest, NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { Resend } from "resend";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "10 m"),
  analytics: true,
});

const resend = new Resend(process.env.RESEND_API_KEY);

const ALLOWED_SERVICES = new Set(["av-installation", "event-production", "it-network", "training", "multiple", "unsure", ""]);
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Detects random-looking strings (bot-generated gibberish) by checking for
// an abnormally high ratio of uppercase letters in non-leading positions within a word,
// or words that are unrealistically long.
function isRandomString(str: string): boolean {
  const words = str.trim().split(/\s+/);
  for (const word of words) {
    if (word.length > 20) return true;
    if (word.length < 6) continue;
    const midChars = word.slice(1);
    const midUpperCount = [...midChars].filter((c) => c >= "A" && c <= "Z").length;
    if (midUpperCount / midChars.length > 0.28) return true;
  }
  return false;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  const { success } = await ratelimit.limit(ip);
  if (!success) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  const body = await request.json();
  const { firstName, lastName, email, organization, service, message, recaptchaToken, website } = body;

  // Honeypot: bots fill hidden fields, humans leave them empty
  if (website) {
    return NextResponse.json({ success: true });
  }

  if (!firstName || !lastName || !email || !message || !recaptchaToken) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (
    typeof firstName !== "string" ||
    typeof lastName !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    typeof recaptchaToken !== "string" ||
    (organization !== undefined && typeof organization !== "string") ||
    (service !== undefined && typeof service !== "string")
  ) {
    return NextResponse.json({ error: "Invalid field types" }, { status: 400 });
  }

  if (
    firstName.length > 50 ||
    lastName.length > 50 ||
    email.length > 254 ||
    (organization && organization.length > 100) ||
    message.length > 5000
  ) {
    return NextResponse.json({ error: "Field exceeds maximum length" }, { status: 400 });
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  if (service !== undefined && !ALLOWED_SERVICES.has(service)) {
    return NextResponse.json({ error: "Invalid service selection" }, { status: 400 });
  }

  // Reject bot-generated gibberish (random character sequences)
  if (
    isRandomString(firstName) ||
    isRandomString(lastName) ||
    (organization && isRandomString(organization)) ||
    isRandomString(message)
  ) {
    return NextResponse.json({ error: "Message flagged as spam" }, { status: 400 });
  }

  // Verify reCAPTCHA
  const recaptchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
  });
  const recaptchaData = await recaptchaRes.json();
  if (!recaptchaData.success || recaptchaData.score < 0.7 || recaptchaData.action !== "contact_form") {
    return NextResponse.json({ error: "reCAPTCHA verification failed" }, { status: 400 });
  }

  const safeFirst = escapeHtml(firstName.trim());
  const safeLast = escapeHtml(lastName.trim());
  const safeEmail = escapeHtml(email.trim());
  const safeOrg = organization ? escapeHtml(organization.trim()) : "";
  const safeService = service ? escapeHtml(service.trim()) : "";
  const safeMessage = escapeHtml(message.trim());

  const subject = safeOrg
    ? `New Contact Request from ${safeOrg}`
    : `New Contact Request from ${safeFirst} ${safeLast}`;

  const internalHtml = `
    <h2>${subject}</h2>
    <p><strong>Name:</strong> ${safeFirst} ${safeLast}</p>
    <p><strong>Email:</strong> ${safeEmail}</p>
    ${safeOrg ? `<p><strong>Organization:</strong> ${safeOrg}</p>` : ""}
    ${safeService ? `<p><strong>Service Interest:</strong> ${safeService}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p style="white-space:pre-wrap">${safeMessage}</p>
  `;

  const confirmationHtml = `
    <p>Hi ${safeFirst},</p>
    <p>Thank you for reaching out to L252 Media Production! We've received your message and will get back to you within 1–2 business days.</p>
    <p>Here's a copy of what you sent us:</p>
    <blockquote style="border-left:3px solid #e2e8f0;margin:16px 0;padding:12px 16px;color:#475569">
      ${safeOrg ? `<p><strong>Organization:</strong> ${safeOrg}</p>` : ""}
      ${safeService ? `<p><strong>Service Interest:</strong> ${safeService}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${safeMessage}</p>
    </blockquote>
    <p>In the meantime, feel free to follow us on social media or visit our website at <a href="https://l252mp.com">l252mp.com</a>.</p>
    <p>— The L252 Media Production Team</p>
  `;

  const [internalResult, confirmationResult] = await Promise.all([
    resend.emails.send({
      from: "no-reply@twomediapros.com",
      to: "info@twomediapros.com",
      replyTo: email,
      subject,
      html: internalHtml,
    }),
    resend.emails.send({
      from: "no-reply@twomediapros.com",
      to: email,
      subject: "We received your message — L252 Media Production",
      html: confirmationHtml,
    }),
  ]);

  if (internalResult.error || confirmationResult.error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
