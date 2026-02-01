// app/[lang]/page.tsx

import { HeroSection } from "./_components/HeroSection";
import { AdvantagesSection } from "./_components/AdvantagesSection";
import { ProductsSection } from "./_components/ProductsSection";
import { StatsSection } from "./_components/StatsSection";
import { ContactSection } from "./_components/ContactSection";
import DspTakedownSection from "./_components/RecruitmentSection";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div className="relative z-10">
      <main className="grow">
        <HeroSection />
          <div className="w-full h-px bg-black dark:bg-white rounded-full" />
        <AdvantagesSection />
          <div className="w-full h-px bg-black dark:bg-white rounded-full" />
        <ProductsSection />
          <div className="w-full h-px bg-black dark:bg-white rounded-full" />
          <DspTakedownSection />
          <div className="w-full h-px bg-black dark:bg-white rounded-full" />
          <StatsSection />
          <div className="w-full h-px bg-black dark:bg-white rounded-full" />
          <ContactSection />
      </main>
    </div>
  );
}
