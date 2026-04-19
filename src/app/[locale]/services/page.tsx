import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({ params }: PageProps<"/[locale]/services">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Services" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function ServicesPage({ params }: PageProps<"/[locale]/services">) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ServicesPageContent />;
}

function ServicesPageContent() {
  const t = useTranslations("Services");
  const items = t.raw("items") as Array<{ title: string; href: string; description: string }>;

  return (
    <>
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            {t("badge")}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-5">{t("heroTitle")}</h1>
          <p className="text-slate-300 text-lg">{t("heroSubtitle")}</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-6">
          {items.map((item, i) => (
            <div
              key={item.href}
              className="flex flex-col sm:flex-row items-start gap-6 p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold text-lg">
                {i + 1}
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h2>
                <p className="text-slate-500 text-sm mb-4">{item.description}</p>
                <Link
                  href={item.href as "/services/av-installation"}
                  className="text-blue-600 hover:text-blue-500 text-sm font-semibold"
                >
                  {t("learnMore")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-600 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">{t("ctaTitle")}</h2>
        <p className="text-blue-100 mb-8 max-w-lg mx-auto">{t("ctaSubtitle")}</p>
        <Link
          href="/contact"
          className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-blue-50 transition-colors"
        >
          {t("contactUs")}
        </Link>
      </section>
    </>
  );
}
