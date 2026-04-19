import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: PageProps<"/[locale]/privacy-policy">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PrivacyPolicy" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function PrivacyPolicyPage({ params }: PageProps<"/[locale]/privacy-policy">) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PrivacyPolicyPageContent />;
}

function PrivacyPolicyPageContent() {
  const t = useTranslations("PrivacyPolicy");
  const useList = t.raw("useList") as string[];

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

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">{t("infoWeCollect")}</h2>

          <h3 className="text-lg font-semibold text-slate-800 mt-6 mb-3">{t("personalInfo")}</h3>
          <p className="text-slate-600 leading-relaxed mb-6">{t("personalInfoText")}</p>

          <h3 className="text-lg font-semibold text-slate-800 mt-6 mb-3">{t("usageData")}</h3>
          <p className="text-slate-600 leading-relaxed mb-8">{t("usageDataText")}</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">{t("howWeUse")}</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-600 mb-8">
            {useList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">{t("cookies")}</h2>
          <p className="text-slate-600 leading-relaxed mb-8">{t("cookiesText")}</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">{t("dataRetention")}</h2>
          <p className="text-slate-600 leading-relaxed mb-8">{t("dataRetentionText")}</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">{t("thirdParty")}</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            {t.rich("thirdPartyText", {
              stripe: (chunks) => (
                <a
                  href="https://stripe.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-500 font-medium"
                >
                  {chunks}
                </a>
              ),
              paypal: (chunks) => (
                <a
                  href="https://www.paypal.com/webapps/mpp/ua/privacy-full"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-500 font-medium"
                >
                  {chunks}
                </a>
              ),
            })}
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">{t("dataDeletion")}</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            {t.rich("dataDeletionText", {
              email: (chunks) => (
                <a
                  href="mailto:privacy@twomediapros.com"
                  className="text-blue-600 hover:text-blue-500 font-medium"
                >
                  {chunks}
                </a>
              ),
            })}
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">{t("dataSecurity")}</h2>
          <p className="text-slate-600 leading-relaxed mb-8">{t("dataSecurityText")}</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">{t("changes")}</h2>
          <p className="text-slate-600 leading-relaxed mb-8">{t("changesText")}</p>
        </div>
      </section>
    </>
  );
}
