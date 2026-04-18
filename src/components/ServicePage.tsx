import Link from "next/link";
import Image from "next/image";

interface ServicePageProps {
  title: string;
  tagline: string;
  description: string;
  highlights: { heading: string; body: string }[];
  heroImage?: string;
  ctaText?: string;
}

export default function ServicePage({
  title,
  tagline,
  description,
  highlights,
  heroImage,
  ctaText = "Ready to get started?",
}: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative text-white py-20 px-4 overflow-hidden">
        {heroImage ? (
          <>
            <Image
              src={heroImage}
              alt={title}
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-slate-900/65" />
          </>
        ) : (
          <div className="absolute inset-0 bg-slate-900" />
        )}
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Services
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-5">{title}</h1>
          <p className="text-slate-300 text-lg">{tagline}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-slate-600 text-lg leading-relaxed">{description}</p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">What&apos;s Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item) => (
              <div key={item.heading} className="p-6 bg-white rounded-xl border border-slate-200">
                <h3 className="text-base font-semibold text-slate-900 mb-2">{item.heading}</h3>
                <p className="text-sm text-slate-500">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-blue-600 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">{ctaText}</h2>
        <p className="text-blue-100 mb-8 max-w-lg mx-auto">
          Contact us to discuss your project. We&apos;ll put together a custom solution that fits your needs and budget.
        </p>
        <Link
          href="/contact"
          className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-blue-50 transition-colors"
        >
          Get a Free Quote
        </Link>
      </section>
    </>
  );
}
