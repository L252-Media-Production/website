import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ServicePage from "@/components/ServicePage";

export async function generateMetadata({ params }: PageProps<"/[locale]/services/training">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Training" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function TrainingPage({ params }: PageProps<"/[locale]/services/training">) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <TrainingPageContent />;
}

function TrainingPageContent() {
  const t = useTranslations("Training");
  const highlights = t.raw("highlights") as Array<{ heading: string; body: string }>;

  return (
    <ServicePage
      title={t("title")}
      tagline={t("tagline")}
      description={t("description")}
      highlights={highlights}
      heroImage="/images/training.jpg"
      ctaText={t("ctaText")}
    />
  );
}
