// src/app/[lang]/faq/page.tsx
import { headers } from "next/headers";
import FAQContent from "./_components/FAQContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const titles = {
    ru: "FAQ - Recru",
    en: "FAQ - Recru",
  };

  const descriptions = {
    ru: "Часто задаваемые вопросы о Recru - все ответы на ваши вопросы о массовом найме",
    en: "Frequently Asked Questions about Recru - all answers about mass hiring",
  };

  return {
    title: titles[lang as keyof typeof titles] || titles.en,
    description:
      descriptions[lang as keyof typeof descriptions] || descriptions.en,
  };
}

export default async function FAQPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return <FAQContent lang={lang} />;
}
