import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AV Installation | L252 Media Production",
  description:
    "Custom audio-visual installations for churches and businesses — projectors, sound systems, and livestream setups designed to enhance your space.",
};

export default function AVInstallationPage() {
  return (
    <ServicePage
      title="AV Installation"
      tagline="Elevate every service, meeting, and message with professional audio-visual systems built for your space."
      description="We design and install custom audio-visual solutions for churches and businesses of all sizes. From projectors and screens to surround sound systems and full livestream setups, every installation is tailored to ensure that every seat in your space enjoys crystal-clear audio and engaging visuals. Whether you're starting from scratch or upgrading an existing system, our team handles design, installation, and configuration from end to end."
      highlights={[
        {
          heading: "Projectors & Display Systems",
          body: "High-brightness projectors, LED walls, and screens sized and positioned for maximum visibility in your space.",
        },
        {
          heading: "Sound Systems",
          body: "Professionally tuned speaker systems, subwoofers, and monitor mixes that deliver clear, even audio across every seat.",
        },
        {
          heading: "Livestream Infrastructure",
          body: "Camera setups, capture hardware, encoding equipment, and platform integration for reliable, high-quality live broadcasts.",
        },
        {
          heading: "Stage & Lighting",
          body: "Stage lighting design and installation that creates the right atmosphere — from intimate gatherings to large-scale productions.",
        },
        {
          heading: "Control Systems",
          body: "User-friendly control panels and automation so your team can operate complex AV systems with confidence.",
        },
        {
          heading: "Cable Management & Infrastructure",
          body: "Clean, organized cabling and infrastructure that keeps your system reliable and easy to maintain long-term.",
        },
      ]}
      ctaText="Ready to transform your space?"
    />
  );
}
