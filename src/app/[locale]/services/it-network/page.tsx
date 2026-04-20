import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ServicePage from "@/components/ServicePage";

export async function generateMetadata({ params }: PageProps<"/[locale]/services/it-network">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ITNetwork" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function ITNetworkPage({ params }: PageProps<"/[locale]/services/it-network">) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ITNetworkPageContent />;
}

function ITNetworkPageContent() {
  const t = useTranslations("ITNetwork");
  const highlights = t.raw("highlights") as Array<{ heading: string; body: string }>;

  return (
    <ServicePage
      title={t("title")}
      tagline={t("tagline")}
      description={t("description")}
      highlights={highlights}
      heroImage="/images/it-network.jpg"
      ctaText={t("ctaText")}
    />
  );
}
