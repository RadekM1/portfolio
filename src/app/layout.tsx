import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "../components/themeProvider";

const roboto = Roboto({
  weight: "400",
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Radek Morong - Webové aplikace",
  description:
    "Vývoj webových aplikací (firemní aplikace, osobní weby, e-shopy)",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`flex flex-col w-full bg-white dark:bg-slate-900 text-center justify-center ${roboto.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <header className=""></header>
          <main>{children}</main>
          <footer>footer context</footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
