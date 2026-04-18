import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | L252 Media Production",
  description:
    "Get in touch with L252 Media Production for a free quote on AV installation, event production, IT & network, or training services.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Get in Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-5">Contact Us</h1>
          <p className="text-slate-300 text-lg">
            Tell us about your project. We&apos;ll get back to you with a customized solution and a free quote.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Jane"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Smith"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="jane@yourorganization.com"
              />
            </div>

            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-slate-700 mb-1">
                Organization / Church Name
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your church or business"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">
                Service Interest
              </label>
              <select
                id="service"
                name="service"
                className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a service...</option>
                <option value="av-installation">AV Installation</option>
                <option value="event-production">Event Production</option>
                <option value="it-network">IT & Network</option>
                <option value="training">Training</option>
                <option value="multiple">Multiple Services</option>
                <option value="unsure">Not Sure Yet</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                Tell us about your project
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Describe your space, goals, current setup, and any specific needs..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-md transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
