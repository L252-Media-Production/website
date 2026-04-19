import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export async function generateMetadata({ params }: PageProps<"/[locale]/about">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "About" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function AboutPage({ params }: PageProps<"/[locale]/about">) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AboutPageContent />;
}

function AboutPageContent() {
  const t = useTranslations("About");
  const founders = t.raw("founders") as Array<{
    role: string;
    name: string;
    image: string;
    bio: string[];
    skills: string[];
  }>;
  const values = t.raw("values") as Array<{ title: string; body: string }>;

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

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-6 text-slate-600 text-lg leading-relaxed">
          <p>{t("intro1")}</p>
          <p>{t("intro2")}</p>
          <p>{t("intro3")}</p>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">{t("foundersHeading")}</h2>
            <p className="text-slate-500 max-w-xl mx-auto">{t("foundersSubtitle")}</p>
          </div>

          <div className="space-y-16">
            {founders.map((founder, i) => (
              <div
                key={founder.name}
                className={`flex flex-col lg:flex-row gap-10 items-start ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-shrink-0 w-full lg:w-72">
                  <div className="relative w-full aspect-[3/4] lg:aspect-auto lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 288px"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-1">
                    {founder.role}
                  </p>
                  <h3 className="text-3xl font-bold text-slate-900 mb-5">{founder.name}</h3>
                  <div className="space-y-4 text-slate-600 leading-relaxed mb-6">
                    {founder.bio.map((paragraph, j) => (
                      <p key={j}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {founder.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
            {t("valuesHeading")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((item) => (
              <div key={item.title} className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="text-base font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-600 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">{t("ctaTitle")}</h2>
        <p className="text-blue-100 mb-8 max-w-lg mx-auto">{t("ctaSubtitle")}</p>
        <Link
          href="/contact"
          className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-blue-50 transition-colors"
        >
          {t("getInTouch")}
        </Link>
      </section>
    </>
  );
}
