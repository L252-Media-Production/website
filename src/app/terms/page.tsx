import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | L252 Media Production",
  description: "Terms of service for L252 Media Production — governing your use of our website and services.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-slate-300">Last updated: {new Date().getFullYear()}</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose prose-slate max-w-none">
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            These terms govern your use of L252 Media Production's website and services.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Services Provided</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            L252 Media Production specializes in AV and IT/Network installations. All services provided are subject to these terms.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Payments</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Invoices for services will be issued through InvoiceNinja, and payments can be made via Stripe or PayPal. By making a payment through one of these platforms, you also agree to the terms and conditions of Stripe and PayPal. L252 Media Production does not store payment information and is not responsible for any issues arising from the use of these payment processors.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Refund Policy</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            We offer refunds for payments made within 15 days of the invoice date. Refunds will only be issued if the service has not commenced or if there is a mutual agreement. Please contact us within this timeframe to request a refund.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Client Responsibilities</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            You are responsible for providing accurate information when engaging our services and for timely communication. Failure to provide necessary information or cooperation may result in delays or additional costs.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Limitation of Liability</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            To the fullest extent permitted by law, L252 Media Production shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services or website. Our total liability to you for any claim shall not exceed the amount paid for the services provided.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Intellectual Property</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            All content on this website, including text, images, and branding, is the intellectual property of L252 Media Production and may not be used without our permission.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Modifications to Services</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            We reserve the right to modify or discontinue our services at any time, with or without notice.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Governing Law</h2>
          <p className="text-slate-600 leading-relaxed mb-12">
            These terms are governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law principles.
          </p>

          <div className="mt-12 pt-8 border-t border-slate-200 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} L252 Media Production. All Rights Reserved.</p>
          </div>
        </div>
      </section>
    </>
  );
}
