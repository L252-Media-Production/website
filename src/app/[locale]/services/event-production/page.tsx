import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ServicePage from "@/components/ServicePage";

export async function generateMetadata({ params }: PageProps<"/[locale]/services/event-production">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "EventProduction" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function EventProductionPage({ params }: PageProps<"/[locale]/services/event-production">) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <EventProductionPageContent />;
}

function EventProductionPageContent() {
  const t = useTranslations("EventProduction");
  const highlights = t.raw("highlights") as Array<{ heading: string; body: string }>;

  return (
    <ServicePage
      title={t("title")}
      tagline={t("tagline")}
      description={t("description")}
      highlights={highlights}
      heroImage="/images/event-production.jpg"
      ctaText={t("ctaText")}
    />
  );
}
