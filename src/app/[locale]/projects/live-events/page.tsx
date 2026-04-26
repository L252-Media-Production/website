import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ProjectCard from "@/components/ProjectCard";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Projects" });
  return {
    title: `${t("liveEvents.heroTitle")} | L252 Media Production`,
    description: t("liveEvents.heroSubtitle"),
  };
}

export default async function LiveEventsProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <LiveEventsProjectsContent />;
}

const PROJECTS = [
  {
    name: "Fohr",
    logo: "/images/fohr-logo.png",
    description: undefined,
  },
  {
    name: "Greater New York Conference Youth Department",
    logo: "/images/gnycyouth-logo.png",
    description: undefined,
    href: "/projects/live-events/gnyc" as const,
  },
  {
    name: "MS SOUND",
    logo: "A1 and A2 Audio Engineer services for various church Sunday services.",
    description: undefined,
  },
];

function LiveEventsProjectsContent() {
  const t = useTranslations("Projects");

  return (
    <>
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Link
            href="/projects"
            className="inline-block text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors mb-6"
          >
            {t("backToProjects")}
          </Link>
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            {t("badge")}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-5">{t("liveEvents.heroTitle")}</h1>
          <p className="text-slate-300 text-lg">{t("liveEvents.heroSubtitle")}</p>
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
