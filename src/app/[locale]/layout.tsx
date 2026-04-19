import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
