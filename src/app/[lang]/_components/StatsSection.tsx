"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";

export function StatsSection() {
  const { t } = useTranslation();

  return (
    <section className="relative py-2 md:py-2 flex items-center bg-white dark:bg-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
          <div className="relative w-full h-[280px] grayscale">
            <Image
              src="/images/investments-solo.png"
              alt="Recruitment Analytics"
              fill
              className="object-contain opacity-80 dark:opacity-60"
            />
          </div>

          <div className="text-center space-y-3">
            <div>
              <p className="text-base mb-1 text-gray-700 dark:text-gray-300">
                {t("stats")}
              </p>
              <span className="text-3xl md:text-4xl font-bold text-black dark:text-white">
                1 000 000
              </span>
            </div>
            <div>
              <p className="text-base mb-1 text-gray-700 dark:text-gray-300">
                {t("statsCampaigns")}
              </p>
              <span className="text-3xl md:text-4xl font-bold text-black dark:text-white">
                1000
              </span>
            </div>
          </div>

          <div className="relative w-full h-[280px] grayscale">
            <Image
              src="/images/investments-group.png"
              alt="Team Collaboration"
              fill
              className="object-contain opacity-80 dark:opacity-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
