import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training | L252 Media Production",
  description:
    "Hands-on AV and livestream training for churches and businesses — audio, projection, and broadcasting made simple and practical.",
};

export default function TrainingPage() {
  return (
    <ServicePage
      title="Training"
      tagline="Gain the confidence to run your own systems — we teach practical skills without the technical overwhelm."
      description="Great equipment is only as effective as the people operating it. Our training program is designed to help your volunteers and staff master audio, projection, and livestreaming at their own pace. We strip away the jargon and focus on the practical steps that matter for your specific setup. Whether you're onboarding new volunteers or upskilling your existing team, we'll build their confidence so your ministry or business can operate independently and with excellence."
      highlights={[
        {
          heading: "Audio Operations",
          body: "Hands-on training covering mixing boards, microphone techniques, monitor mixes, and live sound fundamentals for your specific system.",
        },
        {
          heading: "Projection & Presentation",
          body: "Learn to run ProPresenter, EasyWorship, or other presentation software — including slide management, transitions, and troubleshooting.",
        },
        {
          heading: "Livestream Production",
          body: "Camera operation, switching, encoding, and platform management (YouTube, Facebook, and more) for live and recorded broadcasts.",
        },
        {
          heading: "Volunteer Onboarding",
          body: "Structured training programs that bring new volunteers up to speed quickly with role-specific guides and supervised practice.",
        },
        {
          heading: "Troubleshooting & Problem Solving",
          body: "We teach your team how to diagnose and fix common issues on the fly — so technical hiccups don't derail your services or events.",
        },
        {
          heading: "Custom Training Plans",
          body: "Training sessions tailored to your team's current skill level, your specific equipment, and your schedule.",
        },
      ]}
      heroImage="/images/training.jpg"
      ctaText="Empower your team to operate with confidence."
    />
  );
}
