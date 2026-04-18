import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | L252 Media Production",
  description: "Privacy policy for L252 Media Production — how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-slate-300">Last updated: {new Date().getFullYear()}</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose prose-slate max-w-none">
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            At L252 Media Production, we are committed to protecting your privacy. This privacy policy outlines how we collect, use, and protect your personal information.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Information We Collect</h2>

          <h3 className="text-lg font-semibold text-slate-800 mt-6 mb-3">Personal Information</h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            We may collect your name, email address, phone number, and other details when you fill out forms on our website.
          </p>

          <h3 className="text-lg font-semibold text-slate-800 mt-6 mb-3">Usage Data</h3>
          <p className="text-slate-600 leading-relaxed mb-8">
            We collect data about how you interact with our website, such as IP address, browser type, and time spent on our pages.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-600 mb-8">
            <li>To provide our AV and IT/Network installation services.</li>
            <li>To communicate with you regarding your inquiries or billing.</li>
            <li>To improve our website and services based on your usage patterns.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Cookies and Tracking</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            We use cookies and similar technologies to track user interactions on our website and improve user experience. Cookies are small files that are stored on your device. You can disable cookies through your browser settings; however, this may affect some functionalities of our website.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Data Retention</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            We retain personal information for as long as necessary to fulfill the purposes for which it was collected, unless a longer retention period is required by law.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Third-Party Payment Processors</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            We use InvoiceNinja to issue invoices, and payments are processed securely through Stripe and PayPal. L252 Media Production does not store payment information. Please review the privacy policies of Stripe and PayPal for more details.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Data Deletion Requests</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            If you wish to request the deletion of your personal information, please contact us at{" "}
            <a
              href="mailto:privacy@twomediapros.com"
              className="text-blue-600 hover:text-blue-500 font-medium"
            >
              privacy@twomediapros.com
            </a>
            . We will respond to your request within the timeframe required by applicable law.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Data Security</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            We use industry-standard security measures to protect your information from unauthorized access or disclosure.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Changes to This Privacy Policy</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            We may update this policy from time to time. Any changes will be posted on this page, and, where appropriate, notified to you via email. Please review this policy periodically to stay informed.
          </p>

          <div className="mt-12 pt-8 border-t border-slate-200 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} L252 Media Production. All Rights Reserved.</p>
          </div>
        </div>
      </section>
    </>
  );
}
