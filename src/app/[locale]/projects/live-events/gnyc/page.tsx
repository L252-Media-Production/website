import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ProjectCard from "@/components/ProjectCard";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Projects" });
  return {
    title: `Greater New York Conference Youth Department | ${t("liveEvents.heroTitle")} | L252 Media Production`,
    description: t("gnyc.metaDescription"),
  };
}

export default async function GNYCProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <GNYCProjectsContent />;
}

const PROJECTS = [
  {
    name: "Young Adult Retreat",
    logo: "/images/gnycyouth-logo.png",
    description: undefined,
  },
  {
    name: "Youth Congress",
    logo: "/images/gnycyouth-logo.png",
    description: undefined,
  },
];

function GNYCProjectsContent() {
  const t = useTranslations("Projects");

  return (
    <>
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Link
            href="/projects/live-events"
            className="inline-block text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors mb-6"
          >
            {t("backToLiveEvents")}
          </Link>
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            {t("clientLabel")}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-5">Greater New York Conference Youth Department</h1>
          <p className="text-slate-300 text-lg">{t("gnyc.heroSubtitle")}</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </section>
    </>
  );
}
