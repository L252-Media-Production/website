import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export async function generateMetadata({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

const serviceHrefs = [
  "/services/av-installation",
  "/services/event-production",
  "/services/it-network",
  "/services/training",
];

const serviceImages = [null, "/images/event-production.jpg", null, "/images/training.jpg"];
const serviceIcons = ["📽️", "🎙️", "🌐", "🎓"];

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HomePageContent />;
}

function HomePageContent() {
  const t = useTranslations("Home");
  const servicesGrid = t.raw("servicesGrid") as Array<{ title: string; description: string }>;
  const whyItems = t.raw("whyItems") as Array<{ title: string; body: string }>;

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
            {t("badge")}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            {t.rich("heroTitle", {
              blue: (chunks) => <span className="text-blue-400">{chunks}</span>,
            })}
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            {t("heroSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-md transition-colors"
            >
              {t("getAFreeQuote")}
            </Link>
            <Link
              href="/services"
              className="px-8 py-3 border border-slate-400 hover:border-white text-slate-300 hover:text-white font-semibold rounded-md transition-colors"
            >
              {t("ourServices")}
            </Link>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">{t("whatWeDo")}</h2>
            <p className="text-slate-500 max-w-xl mx-auto">{t("whatWeDoSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesGrid.map((service, i) => (
              <Link
                key={serviceHrefs[i]}
                href={serviceHrefs[i] as "/services/av-installation"}
                className="group rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all overflow-hidden flex flex-col"
              >
                {serviceImages[i] ? (
                  <div className="relative h-40 w-full flex-shrink-0">
                    <Image
                      src={serviceImages[i]!}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                ) : (
                  <div className="h-40 flex items-center justify-center bg-slate-50 flex-shrink-0">
                    <span className="text-4xl">{serviceIcons[i]}</span>
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
              {t("viewAllServices")}
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">{t("whyL252")}</h2>
            <p className="text-slate-500 max-w-xl mx-auto">{t("whyL252Subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyItems.map((item) => (
              <div key={item.title} className="p-6 bg-white rounded-xl border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-4 bg-blue-600 text-white text-center overflow-hidden">
        <Image
          src="/images/logo-wireframe.png"
          alt=""
          width={360}
          height={110}
          aria-hidden="true"
          className="absolute right-8 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none select-none hidden sm:block"
        />
        <div className="relative">
          <h2 className="text-3xl font-bold mb-4">{t("ctaTitle")}</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">{t("ctaSubtitle")}</p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-blue-50 transition-colors"
          >
            {t("contactUsToday")}
          </Link>
        </div>
      </section>
    </>
  );
}
