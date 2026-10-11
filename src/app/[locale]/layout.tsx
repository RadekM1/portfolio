import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";
import React from "react";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { AppProviders } from "../../lib/context/app-provider";
import { Toaster } from "../../components/ui/sonner";
import Script from "next/script";
import { routing } from "@/src/i18n/routing";

const roboto = Roboto({
  weight: "400",
  variable: "--font-roboto",
  subsets: ["latin"],
});

const siteUrl = "https://www.radekmorong.cz";

type LayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export const generateStaticParams = () =>
  routing.locales.map((locale) => ({ locale }));

export async function generateMetadata({
  params,
}: Omit<LayoutProps, "children">): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
    icons: {
      icon: "/favicon.ico",
    },
    keywords: t.raw("keywords") as string[],
    authors: [{ name: "Radek Morong", url: siteUrl }],
    alternates: {
      canonical:
        locale === routing.defaultLocale ? siteUrl : `${siteUrl}/${locale}`,
      languages: {
        cs: siteUrl,
        en: `${siteUrl}/en`,
      },
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`flex flex-col w-full bg-white dark:bg-slate-900 text-center justify-center ${roboto.variable} antialiased`}
      >
        <Script
          strategy="afterInteractive"
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="d2228008-e4b0-4780-a173-756530d8af2e"
        />
        <NextIntlClientProvider>
          <AppProviders>
            <main>{children}</main>
            <Toaster richColors expand={true} />
          </AppProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
