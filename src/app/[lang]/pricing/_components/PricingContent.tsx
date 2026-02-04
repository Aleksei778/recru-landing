// src/app/[lang]/pricing/_components/PricingContent.tsx
"use client";

import { useState } from "react";
import { Rocket, Star, Crown, Check, X } from "lucide-react";
import { useTheme } from "@/contexts/theme-context";
import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";
import Link from "next/link";

interface PlanFeature {
  textRu: string;
  textEn: string;
  included: boolean;
}

interface Plan {
  id: string;
  nameRu: string;
  nameEn: string;
  icon: typeof Rocket;
  monthlyPriceRu: number;
  monthlyPriceEn: number;
  annualPriceRu: number;
  annualPriceEn: number;
  isPopular?: boolean;
  features: PlanFeature[];
}

interface PricingContentProps {
  lang: string;
}

export default function PricingContent({ lang }: PricingContentProps) {
  const [isAnnual, setIsAnnual] = useState(false);
  const { theme } = useTheme();
  const { t } = useTranslation();

  const plans: Plan[] = [
    {
      id: "trial",
      nameRu: "Пробный",
      nameEn: "Trial",
      icon: Rocket,
      monthlyPriceRu: 0,
      monthlyPriceEn: 0,
      annualPriceRu: 0,
      annualPriceEn: 0,
      features: [
        {
          textRu: "3 активные вакансии",
          textEn: "3 active vacancies",
          included: true,
        },
        {
          textRu: "50 кандидатов/месяц",
          textEn: "50 candidates/month",
          included: true,
        },
        {
          textRu: "Базовый парсинг резюме",
          textEn: "Basic resume parsing",
          included: true,
        },
        {
          textRu: "AI-скрининг",
          textEn: "AI screening",
          included: false,
        },
        {
          textRu: "Аналитика найма",
          textEn: "Recruitment analytics",
          included: false,
        },
        {
          textRu: "Email поддержка",
          textEn: "Email support",
          included: true,
        },
      ],
    },
    {
      id: "standard",
      nameRu: "Стандартный",
      nameEn: "Standard",
      icon: Star,
      monthlyPriceRu: 990,
      monthlyPriceEn: 11.5,
      annualPriceRu: 792,
      annualPriceEn: 9.2,
      isPopular: true,
      features: [
        {
          textRu: "10 активных вакансий",
          textEn: "10 active vacancies",
          included: true,
        },
        {
          textRu: "200 кандидатов/месяц",
          textEn: "200 candidates/month",
          included: true,
        },
        {
          textRu: "Продвинутый парсинг резюме",
          textEn: "Advanced resume parsing",
          included: true,
        },
        {
          textRu: "AI-скрининг кандидатов",
          textEn: "AI candidate screening",
          included: true,
        },
        {
          textRu: "Аналитика и отчеты",
          textEn: "Analytics & reports",
          included: true,
        },
        {
          textRu: "Приоритетная поддержка",
          textEn: "Priority support",
          included: true,
        },
      ],
    },
    {
      id: "premium",
      nameRu: "Премиум",
      nameEn: "Premium",
      icon: Crown,
      monthlyPriceRu: 1990,
      monthlyPriceEn: 21,
      annualPriceRu: 1592,
      annualPriceEn: 16.8,
      features: [
        {
          textRu: "Неограниченные вакансии",
          textEn: "Unlimited vacancies",
          included: true,
        },
        {
          textRu: "Неограниченные кандидаты",
          textEn: "Unlimited candidates",
          included: true,
        },
        {
          textRu: "AI-ассистент рекрутера",
          textEn: "AI recruiter assistant",
          included: true,
        },
        {
          textRu: "Расширенная аналитика",
          textEn: "Advanced analytics",
          included: true,
        },
        {
          textRu: "Интеграции (API)",
          textEn: "Integrations (API)",
          included: true,
        },
        {
          textRu: "Персональный менеджер",
          textEn: "Personal manager",
          included: true,
        },
      ],
    },
  ];

  const getPrice = (plan: Plan) => {
    if (isAnnual) {
      return lang === "ru"
        ? `₽${plan.annualPriceRu}${t("perMonth")}`
        : `$${plan.annualPriceEn}${t("perMonth")}`;
    }
    return lang === "ru"
      ? plan.monthlyPriceRu === 0
        ? "Бесплатно"
        : `₽${plan.monthlyPriceRu}${t("perMonth")}`
      : plan.monthlyPriceEn === 0
        ? "Free"
        : `$${plan.monthlyPriceEn}${t("perMonth")}`;
  };

  const getPlanName = (plan: Plan) => {
    return lang === "ru" ? plan.nameRu : plan.nameEn;
  };

  const getFeatureText = (feature: PlanFeature) => {
    return lang === "ru" ? feature.textRu : feature.textEn;
  };

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-black transition-colors">
        <main className="pt-24 pb-32 px-4 relative">
          <div className="absolute inset-x-0 bottom-0 h-[600px] pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-black dark:via-transparent z-10 opacity-70"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full opacity-40 dark:opacity-30 grayscale">
              <Image
                src="/images/businesswoman.png"
                alt="Background"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>

          <div className="container mx-auto max-w-7xl relative z-20">
            <div className="relative bg-black dark:bg-white rounded-2xl p-8 md:p-12 mb-12 text-center overflow-hidden">
              <div className="absolute inset-0 bg-gray-800/20 dark:bg-gray-200/20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700/10 dark:via-gray-300/10 to-transparent animate-shimmer"></div>

              <h1 className="text-4xl md:text-5xl font-bold text-white dark:text-black mb-4 relative z-10">
                {t("pricing")}
              </h1>
            </div>

            <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
              {t("pricingSub")}
            </p>

            <div className="flex items-center justify-center gap-4 mb-12">
              <span
                className={`font-medium ${!isAnnual ? "text-black dark:text-white" : "text-gray-500 dark:text-gray-400"}`}
              >
                {t("monthly")}
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="group relative w-14 h-7 rounded-full bg-gray-300 dark:bg-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <div
                  className={`absolute inset-0 bg-black dark:bg-white transition-opacity duration-300 ${isAnnual ? "opacity-100" : "opacity-0"}`}
                ></div>
                <span
                  className={`absolute top-1 left-1 w-5 h-5 bg-white dark:bg-black rounded-full transition-transform duration-300 shadow-md ${
                    isAnnual ? "translate-x-7" : "translate-x-0"
                  }`}
                />
              </button>
              <div className="flex items-center gap-2">
                <span
                  className={`font-medium ${isAnnual ? "text-black dark:text-white" : "text-gray-500 dark:text-gray-400"}`}
                >
                  {t("annually")}
                </span>
                <span className="px-2 py-1 bg-black dark:bg-white text-white dark:text-black text-xs rounded-full font-semibold">
                  {t("save")}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative">
              {plans.map((plan) => {
                const Icon = plan.icon;
                return (
                  <div
                    key={plan.id}
                    className={`relative rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl bg-white dark:bg-gray-900 ${
                      plan.isPopular
                        ? "border-2 border-black dark:border-white"
                        : "border-2 border-gray-200 dark:border-gray-800"
                    }`}
                  >
                    {plan.isPopular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30">
                        <div className="bg-black dark:bg-white text-white dark:text-black px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap">
                          {t("mostPopular")}
                        </div>
                      </div>
                    )}

                    {plan.isPopular && (
                      <div className="absolute inset-0 bg-black/5 dark:bg-white/5 rounded-2xl"></div>
                    )}

                    <div className="relative z-10">
                      <div className="mb-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="relative">
                            <div className="absolute inset-0 bg-black dark:bg-white blur-md opacity-20"></div>
                            <Icon className="w-8 h-8 text-black dark:text-white relative" />
                          </div>
                          <h2 className="text-2xl font-bold text-black dark:text-white">
                            {getPlanName(plan)}
                          </h2>
                        </div>

                        <div className="text-center py-4">
                          <div className="text-4xl font-bold text-black dark:text-white mb-2">
                            {getPrice(plan)}
                          </div>
                          {isAnnual && plan.id !== "trial" && (
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {t("billedAnnually")}
                            </div>
                          )}
                        </div>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className={`flex items-start gap-3 ${
                              feature.included
                                ? "text-black dark:text-white"
                                : "text-gray-400 dark:text-gray-600"
                            }`}
                          >
                            {feature.included ? (
                              <div className="relative shrink-0 mt-0.5">
                                <Check className="w-5 h-5 text-black dark:text-white relative z-10" />
                                <div className="absolute inset-0 bg-black dark:bg-white blur-sm opacity-20"></div>
                              </div>
                            ) : (
                              <div className="relative shrink-0 mt-0.5">
                                <X className="w-5 h-5 text-gray-400 dark:text-gray-600 relative z-10" />
                                <div className="absolute inset-0 bg-gray-400 dark:bg-gray-600 blur-sm opacity-20"></div>
                              </div>
                            )}
                            <span className="text-sm">
                              {getFeatureText(feature)}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="https://recru-admin.vercel.app"
                        className={`group relative w-full py-3 rounded-lg font-semibold transition-all duration-300 overflow-hidden ${
                          plan.isPopular
                            ? "bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
                            : "bg-gray-800 dark:bg-gray-700 text-white hover:bg-black dark:hover:bg-gray-600"
                        }`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700/20 dark:via-gray-300/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                        <span className="relative">
                          {plan.id === "trial"
                            ? t("tryRecru")
                            : `${t("choosePlan")} ${getPlanName(plan)}`}
                        </span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
