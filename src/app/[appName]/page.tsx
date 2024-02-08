"use client";

import { EnglishText } from "@/components/english";
import { SpanishText } from "@/components/spanish";
import { useSearchParams } from "next/navigation";

const h1Styles = "mb-3 text-3xl font-semibold";
const h2Styles = "m-3 text-2xl font-semibold";
const pStyles = "m-0 max-w-[90ch] text-sm opacity-50";
const mainStyles = `flex min-h-screen flex-col items-center justify-between p-12 before:absolute before:h-[100vh] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]`;

const email = "info@ricardomejiastravieso.com";

const AppPage = ({
  params: { appName, ...rest },
}: {
  params: { appName: string };
}) => {
  const name = appName.toUpperCase();
  const url = useSearchParams();
  const lang = url.get("lang") || "en";

  return lang === "es" ? (
    <SpanishText name={name} />
  ) : (
    <EnglishText name={name} />
  );
};

export default AppPage;
