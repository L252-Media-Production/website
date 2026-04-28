"use client";

import { useState } from "react";

const plans = [
  {
    id: "starter",
    name: "Basic System Review",
    badge: "Get Started",
    badgeColor: "bg-slate-100 text-slate-600",
    highlight: false,
    price: 350,
    href: "https://billing.twomediapros.com/client/subscriptions/VolejRejNm/purchase",
    features: [
      "1-hour on-site visit by a Technician",
      "Visual inspection and functional test of Audio, Video, and Lighting systems",
      "Identification of major flaws, outdated gear, or immediate risk points",
      "Basic summary report with improvement recommendations",
      "Ideal for churches, schools, event spaces, and offices seeking quick insight",
    ],
    notIncluded: [
    ],
  },
  {
    id: "professional",
    name: "Plus System Review",
    badge: "Most Popular",
    badgeColor: "bg-blue-600 text-white",
    highlight: true,
    price: 500,
    href: "https://billing.twomediapros.com/client/subscriptions/Wpmbk5ezJn/purchase",
    features: [
      "Includes everything in the Basic System Review:",
      "2-hour site visit by a System Engineer",
      "In-depth analysis of signal flow, equipment performance, and system integration",
      "Inventory of existing gear (brand/model/function)",
      "Recommendations for optimizing current system performance",
      "Visual documentation (photos/diagrams)",
      "Post-visit virtual consultation to review findings",
    ],
    notIncluded: [
    ],
  },
  {
    id: "premier",
    name: "Deep Dive Strategy",
    badge: "Full Service",
    badgeColor: "bg-slate-900 text-white",
    highlight: false,
    price: 850,
    href: "https://billing.twomediapros.com/client/subscriptions/Opnel5aKBz/purchase",
    features: [
      "Includes everything in the Plus System Review:",
      "Up to 4 hours on-site with a Senior System Engineer",
      "Full audit of Audio, Video, Lighting, and Network/Control systems",
      "Signal path tracing and troubleshooting",
      "Acoustic/environmental impact review",
      "Custom report with a phased improvement strategy",
      "Budget-conscious upgrade recommendations with cost estimates",
      "Final presentation meeting (in person or virtual)",
    ],
    notIncluded: [],
  },
];

export default function SystemReviewPage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const activePlan = plans.find((p) => p.id === activeModal);

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Professional AV &amp; IT Assessment
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-5">
            System Review Services
          </h1>
          <p className="text-slate-300 text-lg">
            Get a clear picture of your AV, lighting, and IT infrastructure.
            Our engineers come on-site to assess, document, and guide your next steps —
            so you can make informed decisions with confidence.
          </p>
        </div>
      </section>

      {/* Plans grid */}
      <section className="pt-20 pb-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-2xl border p-8 shadow-sm transition-all ${
                plan.highlight
                  ? "border-blue-500 shadow-blue-100 shadow-lg"
                  : "border-slate-200 hover:border-slate-300 hover:shadow-md"
              }`}
            >
              {/* Badge */}
              <span
                className={`self-start text-xs font-semibold px-3 py-1 rounded-full mb-5 ${plan.badgeColor}`}
              >
                {plan.badge}
              </span>

              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                {plan.name}
              </h2>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-slate-900">
                  ${plan.price.toLocaleString()}
                </span>
                <span className="text-sm text-slate-500">one-time</span>
              </div>

              {/* Included features */}
              <ul className="space-y-3 mb-6 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Not included */}
              {plan.notIncluded.length > 0 && (
                <ul className="space-y-2 mb-8 border-t border-slate-100 pt-5">
                  {plan.notIncluded.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-slate-400">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              )}

              <button
                onClick={() => setActiveModal(plan.id)}
                className={`mt-auto w-full py-3 rounded-lg font-semibold text-sm transition-colors ${
                  plan.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-slate-900 text-white hover:bg-slate-700"
                }`}
              >
                Get {plan.name}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing notice */}
      <section className="pb-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto border border-slate-200 rounded-xl py-4 px-6 bg-slate-50">
          <p className="text-center text-sm text-slate-600 flex items-center justify-center gap-2">
            <svg className="h-4 w-4 shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Prices listed are for the <strong className="text-slate-700 font-semibold">&nbsp;NYC Metro area</strong>. &nbsp;Travel and pricing may vary for locations outside this region — <a href="/contact" className="text-blue-600 hover:underline">contact us</a> for a custom quote.
          </p>
        </div>
      </section>

      {/* Lightbox modal */}
      {activeModal && activePlan && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl"
            style={{ height: "80vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
              <span className="font-semibold text-slate-900">
                {activePlan.name} Plan — Checkout
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={activePlan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline"
                >
                  Open in new tab ↗
                </a>
                <button
                  onClick={() => setActiveModal(null)}
                  className="text-slate-400 hover:text-slate-700 transition-colors"
                  aria-label="Close"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* iframe */}
            <iframe
              src={activePlan.href}
              className="w-full border-0"
              style={{ height: "calc(80vh - 57px)" }}
              title={`${activePlan.name} plan checkout`}
            />
          </div>
        </div>
      )}
    </>
  );
}
