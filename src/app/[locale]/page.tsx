import Navbar from "../../components/ui/menu/navbar";
import React from "react";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "next-intl";
import LandingPage from "../../components/sections/landing-page";
import SecondPage from "../../components/sections/second-page";
import Reference from "../../components/sections/reference";
import StepByStep from "../../components/sections/step-by-step";
import AboutMe from "../../components/sections/about-me";
import Form from "../../components/sections/form";
import Footer from "../../components/sections/footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
    <>
      <Navbar />
      <main className="flex w-auto font-roboto text-center flex-col">
        <LandingPage />
        <article className="flex flex-col w-full items-center text-center">
          <SecondPage />
          <Reference />
          <StepByStep />
          <AboutMe />
          <Form />
        </article>
      </main>
      <Footer />
    </>
  );
}
