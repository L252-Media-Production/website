import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: PageProps<"/[locale]/terms">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Terms" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function TermsPage({ params }: PageProps<"/[locale]/terms">) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <TermsPageContent />;
}

function TermsPageContent() {
  const t = useTranslations("Terms");

  return (
    <>
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t("heroTitle")}</h1>
          <p className="text-slate-300">{t("lastUpdated", { year: new Date().getFullYear() })}</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-slate-600 leading-relaxed mb-8">{t("intro")}</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">{t("servicesProvided")}</h2>
          <p className="text-slate-600 leading-relaxed mb-8">{t("servicesProvidedText")}</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">{t("payments")}</h2>
          <p className="text-slate-600 leading-relaxed mb-8">{t("paymentsText")}</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">{t("refundPolicy")}</h2>
          <p className="text-slate-600 leading-relaxed mb-8">{t("refundPolicyText")}</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">{t("clientResponsibilities")}</h2>
          <p className="text-slate-600 leading-relaxed mb-8">{t("clientResponsibilitiesText")}</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">{t("limitationOfLiability")}</h2>
          <p className="text-slate-600 leading-relaxed mb-8">{t("limitationOfLiabilityText")}</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">{t("intellectualProperty")}</h2>
          <p className="text-slate-600 leading-relaxed mb-8">{t("intellectualPropertyText")}</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">{t("modifications")}</h2>
          <p className="text-slate-600 leading-relaxed mb-8">{t("modificationsText")}</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">{t("governingLaw")}</h2>
          <p className="text-slate-600 leading-relaxed mb-12">{t("governingLawText")}</p>
        </div>
      </section>
    </>
  );
}
