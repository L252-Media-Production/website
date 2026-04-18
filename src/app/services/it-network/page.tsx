import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT & Network | L252 Media Production",
  description:
    "Reliable IT and network infrastructure for churches and businesses — secure Wi-Fi, connectivity for livestreaming, and ongoing IT support.",
};

export default function ITNetworkPage() {
  return (
    <ServicePage
      title="IT & Network"
      tagline="Keep your organization connected with reliable, secure network infrastructure built for modern ministry and business."
      description="A strong network is the backbone of everything you do — from livestreaming services to accepting digital giving to enabling your team to work efficiently. We design and deploy IT and network solutions tailored to churches and businesses, ensuring dependable connectivity for staff, guests, and media operations. Whether you need a fresh infrastructure buildout or an upgrade to your existing setup, we handle it with care and long-term reliability in mind."
      highlights={[
        {
          heading: "Secure Wi-Fi Networks",
          body: "Segregated networks for staff, guests, and AV systems — ensuring security, performance, and reliability across your facility.",
        },
        {
          heading: "Livestream Connectivity",
          body: "Wired and wireless infrastructure optimized for consistent, high-bandwidth video uploads with minimal latency or drops.",
        },
        {
          heading: "Structured Cabling",
          body: "Professional Cat6/fiber installation with clean cable management, labeling, and documentation for easy future maintenance.",
        },
        {
          heading: "Network Hardware & Routing",
          body: "Enterprise-grade routers, switches, and access points configured for performance, security, and easy management.",
        },
        {
          heading: "IT Support & Maintenance",
          body: "Ongoing support, software updates, hardware troubleshooting, and monitoring so your systems stay running when it matters.",
        },
        {
          heading: "Workstation & Device Setup",
          body: "Setup and configuration of computers, tablets, and peripheral devices for staff and production teams.",
        },
      ]}
      ctaText="Ready for a network that works as hard as you do?"
    />
  );
}
