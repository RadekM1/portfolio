import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import React from "react";
import { AppProviders } from "../lib/context/app-provider";
import { Toaster } from "../components/ui/sonner";
import Script from "next/script";

const roboto = Roboto({
  weight: "400",
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Radek Morong - Webové aplikace",
  description:
    "Profesionální vývoj moderních webových aplikací, responzivních firemních webů a e-shopů. Specializuji se na digitalizaci firemních procesů a tvorbu aplikací na míru.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "webové aplikace",
    "vývoj webu",
    "firemní aplikace",
    "e-shopy",
    "webové stránky",
    "digitalizace",
    "programování na míru",
    "React",
    "Next.js",
    "responzivní design",
  ],
  authors: [{ name: "Radek Morong", url: "https://www.radekmorong.cz" }],
  alternates: {
    canonical: "https://www.radekmorong.cz",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" suppressHydrationWarning>
      <body
        className={`flex flex-col w-full bg-white dark:bg-slate-900 text-center justify-center ${roboto.variable} antialiased`}
      >
        <Script
          async
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-2XR1Z1E1D8"
        />
        <Script strategy="afterInteractive" id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2XR1Z1E1D8');
        `}
        </Script>
        <AppProviders>
          <main>{children}</main>
          <Toaster richColors expand={true} />
        </AppProviders>
      </body>
    </html>
  );
}
