"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { Zap, Shield, TrendingUp, Settings } from "lucide-react";
import HeroLottieAnimation from "@/components/HeroLottieAnimation";

export function AdvantagesSection() {
  const { t } = useTranslation();

  const advantages = [
    {
      icon: Zap,
      titleKey: "advantages.speed",
      descKey: "advantages.speedDesc",
    },
    {
      icon: Shield,
      titleKey: "advantages.security",
      descKey: "advantages.securityDesc",
    },
    {
      icon: TrendingUp,
      titleKey: "advantages.analytics",
      descKey: "advantages.analyticsDesc",
    },
    {
      icon: Settings,
      titleKey: "advantages.flexibleSetup",
      descKey: "advantages.flexibleSetupDesc",
    },
  ];
  return (
    <section
      id="whyquicksend"
      className="
        py-16 px-4 
        bg-white dark:bg-black
        transition-colors
        relative overflow-hidden
      "
    >
      <div className="absolute inset-0 pointer-events-none opacity-40 md:opacity-100 grayscale">
        <HeroLottieAnimation />
      </div>

      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
            {t("whyTitle")}
          </h2>
          <p className="text-lg md:text-xl text-black dark:text-white max-w-2xl mx-auto">
            {t("whyDesc")}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {advantages.map((a, i) => {
                const Icon = a.icon;
                return (
                  <div
                    key={i}
                    className="
                      bg-black dark:bg-white
                      border border-gray-300 dark:border-gray-700
                      p-5 sm:p-6
                      rounded-xl
                      hover:shadow-2xl hover:border-black dark:hover:border-white
                      transition-all duration-300
                      text-center
                    "
                  >
                    <div className="flex justify-center mb-3">
                      <Icon className="w-9 h-9 text-white dark:text-black" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white dark:text-black">
                      {t(a.titleKey)}
                    </h3>
                    <p className="text-gray-300 dark:text-gray-800 text-sm sm:text-base">
                      {t(a.descKey)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex-1 relative lg:flex items-end">
            <div className="relative w-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
