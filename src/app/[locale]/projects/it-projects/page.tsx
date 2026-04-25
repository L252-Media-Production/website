import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ProjectCard from "@/components/ProjectCard";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Projects" });
  return {
    title: `${t("itProjects.heroTitle")} | L252 Media Production`,
    description: t("itProjects.heroSubtitle"),
  };
}

export default async function ITProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ITProjectsContent />;
}

const PROJECTS = [
  {
    name: "Shure SCM820 Webapp",
    logo: "/images/shure-scm820.png",
    description: "A web application for configuring and controlling the Shure SCM820 IntelliMix Automatic Microphone Mixer.",
    externalLink: "https://github.com/L252-Media-Production/shure-scm820-webapp",
    externalLinkLabel: "View on GitHub →",
  },
  {
    name: "Transcendent Enterprise",
    logo: "/images/transcendent-logo.png",
    description: "Network upgrades and 40TB Server/TrueNAS deployment.",
    externalLink: undefined,
    externalLinkLabel: undefined,
  },
  {
    name: "Greater New York Conference Youth Department",
    logo: "/images/gnycyouth-logo.png",
    description: "Full website redesign with WooCommerce and Square payment integration, plus CRM integrations to streamline member management and event registration.",
    externalLink: undefined,
    externalLinkLabel: undefined,
  },
  {
    name: "Bronx-Manhattan SDA School",
    logo: "/images/bmsda-logo.png",
    description: "IT network setup and ongoing support for a private K-8 school in NYC, including secure Wi-Fi, device management, and user support.",
    externalLink: undefined,
    externalLinkLabel: undefined,
  },
];

function ITProjectsContent() {
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-5">{t("itProjects.heroTitle")}</h1>
          <p className="text-slate-300 text-lg">{t("itProjects.heroSubtitle")}</p>
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
