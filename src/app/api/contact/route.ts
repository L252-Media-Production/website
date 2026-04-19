import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { firstName, lastName, email, organization, service, message, recaptchaToken } = body;

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Verify reCAPTCHA
  const recaptchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
  });
  const recaptchaData = await recaptchaRes.json();
  if (!recaptchaData.success) {
    return NextResponse.json({ error: "reCAPTCHA verification failed" }, { status: 400 });
  }

  const subject = organization
    ? `New Contact Request from ${organization}`
    : `New Contact Request from ${firstName} ${lastName}`;

  const internalHtml = `
    <h2>${subject}</h2>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    ${organization ? `<p><strong>Organization:</strong> ${organization}</p>` : ""}
    ${service ? `<p><strong>Service Interest:</strong> ${service}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p style="white-space:pre-wrap">${message}</p>
  `;

  const confirmationHtml = `
    <p>Hi ${firstName},</p>
    <p>Thank you for reaching out to L252 Media Production! We've received your message and will get back to you within 1–2 business days.</p>
    <p>Here's a copy of what you sent us:</p>
    <blockquote style="border-left:3px solid #e2e8f0;margin:16px 0;padding:12px 16px;color:#475569">
      ${organization ? `<p><strong>Organization:</strong> ${organization}</p>` : ""}
      ${service ? `<p><strong>Service Interest:</strong> ${service}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${message}</p>
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
