import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Projects" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ProjectsPageContent />;
}

const CATEGORIES = [
  {
    key: "avInstallation" as const,
    href: "/projects/av-installation" as const,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    key: "liveEvents" as const,
    href: "/projects/live-events" as const,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      </svg>
    ),
  },
  {
    key: "itProjects" as const,
    href: "/projects/it-projects" as const,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
] as const;

function ProjectsPageContent() {
  const t = useTranslations("Projects");

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
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {CATEGORIES.map(({ key, href, icon }) => (
            <Link
              key={key}
              href={href}
              className="group flex flex-col items-center text-center p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="mb-5 w-16 h-16 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {icon}
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {t(`${key}.label`)}
              </h2>
              <p className="text-sm text-slate-500 mb-4">{t(`${key}.description`)}</p>
              <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-500">
                {t("viewProjects")}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
