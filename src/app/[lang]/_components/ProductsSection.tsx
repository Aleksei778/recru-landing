"use client";
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";
import {
    Users,
    FileText,
    Bot,
    Calendar,
    TrendingUp,
    Bell,
    ExternalLink,
} from "lucide-react";

export function ProductsSection() {
    const { language } = useLanguage();
    const { t } = useTranslation();

    const products = [
        {
            icon: Users,
            titleKey: "products.massEmails",
            descKey: "products.massEmailsDesc",
        },
        {
            icon: FileText,
            titleKey: "products.mailMerge",
            descKey: "products.mailMergeDesc",
        },
        {
            icon: Bot,
            titleKey: "products.emailVerification",
            descKey: "products.emailVerificationDesc",
        },
        {
            icon: Calendar,
            titleKey: "products.scheduling",
            descKey: "products.schedulingDesc",
        },
        {
            icon: TrendingUp,
            titleKey: "products.personalization",
            descKey: "products.personalizationDesc",
        },
        {
            icon: Bell,
            titleKey: "products.followUps",
            descKey: "products.followUpsDesc",
        },
    ];

    return (
        <section
            id="products"
            className="py-16 px-4 bg-white dark:bg-black transition-colors relative"
        >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-black/5 dark:bg-white/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-black/5 dark:bg-white/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
            </div>

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
                        {t("productsTitle")}
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                        {t("productsSubtitle")}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {products.map((product, i) => {
                        const Icon = product.icon;
                        return (
                            <div
                                key={i}
                                className="group relative flex flex-col h-full bg-white dark:bg-gray-900 p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-black dark:bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

                                <div className="flex-1">
                                    <div className="relative inline-flex mb-4">
                                        <div className="absolute inset-0 bg-black dark:bg-white rounded-xl blur-lg opacity-10 group-hover:opacity-30 transition-opacity duration-300"></div>
                                        <div className="relative w-14 h-14 rounded-xl bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 flex items-center justify-center group-hover:border-black dark:group-hover:border-white transition-colors duration-300">
                                            <Icon className="w-7 h-7 text-black dark:text-white" />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                                        {t(product.titleKey)}
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                                        {t(product.descKey)}
                                    </p>
                                </div>

                                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-800">
                                    <Link
                                        href={`/${language}/faq`}
                                        className="group/link relative inline-flex items-center justify-between w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                                    >
                    <span className="relative text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover/link:text-black dark:group-hover/link:text-white transition-colors duration-300">
                      {t("moreDetails")}
                    </span>

                                        <ExternalLink className="relative w-4 h-4 text-gray-400 group-hover/link:text-black dark:group-hover/link:text-white transition-colors duration-300" />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center mt-16">
                    <Link
                        href={`/${language}/profile`}
                        className="group relative inline-flex items-center justify-center px-8 py-4 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl bg-black dark:bg-white"
                    >
                        <div className="absolute inset-0 bg-gray-800 dark:bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="absolute inset-0 bg-black/20 dark:bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                        <div className="relative flex items-center gap-3">
                            <Users className="w-6 h-6 text-white dark:text-black" />
                            <span className="text-white dark:text-black text-lg font-bold tracking-wide">
                {t("addToGmail")}
              </span>
                            <svg
                                className="w-5 h-5 ml-1 text-white dark:text-black transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                ></path>
                            </svg>
                        </div>

                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-700 dark:group-hover:border-gray-300 rounded-2xl transition-all duration-300"></div>
                    </Link>

                    <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm">
            <span className="inline-flex items-center gap-1">
              <Users className="w-4 h-4" />
                {t("chromeRequired") || "Доступно в любом браузере"}
            </span>
                    </p>
                </div>
            </div>
        </section>
    );
}