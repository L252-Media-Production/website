import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | L252 Media Production",
  description:
    "AV installation, event production, IT & network infrastructure, and training for churches and businesses.",
};

const services = [
  {
    title: "AV Installation",
    href: "/services/av-installation",
    description:
      "Elevate your worship services or business presentations with custom audio-visual installations. From projectors and sound systems to livestream setups, we design and install solutions that enhance the message and ensure every seat enjoys crystal-clear audio and engaging visuals.",
  },
  {
    title: "Event Production",
    href: "/services/event-production",
    description:
      "Bring your church or business events to life with professional event production services. Whether it's a worship concert, conference, or special celebration, we handle sound, lighting, and visuals to create a seamless, impactful experience that engages your audience and leaves lasting memories.",
  },
  {
    title: "IT & Network",
    href: "/services/it-network",
    description:
      "Empower your organization with reliable IT and network infrastructure. From secure Wi-Fi for staff and guests to seamless connectivity for livestreaming, our solutions ensure your ministry or business stays connected — online and offline.",
  },
  {
    title: "Training",
    href: "/services/training",
    description:
      "We offer hands-on training in audio, projection, and livestreaming to help you master the essentials. Our approach breaks down complex concepts into simple, practical steps, minimizing technical jargon and empowering you with the confidence to operate independently.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            L252 Media Production
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-5">Our Services</h1>
          <p className="text-slate-300 text-lg">
            End-to-end AV and IT solutions for churches and businesses — designed, installed, and supported by our team.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-6">
          {services.map((service, i) => (
            <div
              key={service.href}
              className="flex flex-col sm:flex-row items-start gap-6 p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold text-lg">
                {i + 1}
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h2>
                <p className="text-slate-500 text-sm mb-4">{service.description}</p>
                <Link
                  href={service.href}
                  className="text-blue-600 hover:text-blue-500 text-sm font-semibold"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-600 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Not sure where to start?</h2>
        <p className="text-blue-100 mb-8 max-w-lg mx-auto">
          Reach out and tell us about your goals. We&apos;ll help you figure out the right solution.
        </p>
        <Link
          href="/contact"
          className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-blue-50 transition-colors"
        >
          Contact Us
        </Link>
      </section>
    </>
  );
}
