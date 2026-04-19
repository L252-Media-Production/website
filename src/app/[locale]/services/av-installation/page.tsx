import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ServicePage from "@/components/ServicePage";

export async function generateMetadata({ params }: PageProps<"/[locale]/services/av-installation">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AVInstallation" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function AVInstallationPage({ params }: PageProps<"/[locale]/services/av-installation">) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AVInstallationPageContent />;
}

function AVInstallationPageContent() {
  const t = useTranslations("AVInstallation");
  const highlights = t.raw("highlights") as Array<{ heading: string; body: string }>;

  return (
    <ServicePage
      title={t("title")}
      tagline={t("tagline")}
      description={t("description")}
      highlights={highlights}
      ctaText={t("ctaText")}
    />
  );
}
