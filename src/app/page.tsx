import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "AV Installation",
    href: "/services/av-installation",
    icon: "📽️",
    image: null,
    description:
      "Custom audio-visual installations for your space — projectors, sound systems, and livestream setups that ensure every seat gets crystal-clear audio and engaging visuals.",
  },
  {
    title: "Event Production",
    href: "/services/event-production",
    icon: null,
    image: "/images/event-production.jpg",
    description:
      "Professional sound, lighting, and visuals for worship concerts, conferences, and special celebrations — seamless and impactful from start to finish.",
  },
  {
    title: "IT & Network",
    href: "/services/it-network",
    icon: "🌐",
    image: null,
    description:
      "Reliable IT and network infrastructure — secure Wi-Fi, seamless connectivity for livestreaming, and solutions that keep your team and congregation connected.",
  },
  {
    title: "Training",
    href: "/services/training",
    icon: "🎓",
    image: null,
    description:
      "Hands-on training in audio, projection, and livestreaming. We break down complex concepts into practical steps so you can operate confidently and independently.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative text-white py-24 px-4 overflow-hidden">
        <Image
          src="/images/main-header.jpg"
          alt="L252 Media Production"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">
            L252 Media Production
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Expert AV Solutions with{" "}
            <span className="text-blue-400">IT Support</span> You Can Trust
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            We help churches and businesses communicate their message with
            professional audio-visual installations, live event production, and
            reliable IT infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-md transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/services"
              className="px-8 py-3 border border-slate-400 hover:border-white text-slate-300 hover:text-white font-semibold rounded-md transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">What We Do</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              From planning to installation to ongoing support, we deliver end-to-end
              AV and IT solutions tailored to your space and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all overflow-hidden flex flex-col"
              >
                {service.image ? (
                  <div className="relative h-40 w-full flex-shrink-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                ) : (
                  <div className="h-40 flex items-center justify-center bg-slate-50 flex-shrink-0">
                    <span className="text-4xl">{service.icon}</span>
                  </div>
                )}
                <div className="p-5 flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="text-blue-600 hover:text-blue-500 font-semibold text-sm"
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Why L252?</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              We combine technical expertise with a commitment to serving the
              organizations and communities that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Tailored Solutions",
                body: "No two spaces are the same. We design every installation and system around your unique needs, budget, and vision.",
              },
              {
                title: "Church & Business Focused",
                body: "We understand the nuances of worship environments and professional business settings — and know how to serve both well.",
              },
              {
                title: "Ongoing Support",
                body: "Our relationship doesn't end at installation. We're here for training, troubleshooting, and growth as your needs evolve.",
              },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-white rounded-xl border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to elevate your space?</h2>
        <p className="text-blue-100 mb-8 max-w-xl mx-auto">
          Tell us about your project and we&apos;ll put together a solution that fits your vision and your budget.
        </p>
        <Link
          href="/contact"
          className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-blue-50 transition-colors"
        >
          Contact Us Today
        </Link>
      </section>
    </>
  );
}
