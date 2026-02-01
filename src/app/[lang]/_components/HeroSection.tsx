"use client";
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  const { language } = useLanguage();
  const { t } = useTranslation();

  return (
    <section
      id="hero-section"
      className="relative pt-24 pb-20 px-4 bg-white dark:bg-black transition-colors h-[600px] overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-gray-300 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-15 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-15 dark:opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto h-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 max-w-7xl mx-auto h-full">
          <div className="text-center max-w-xl flex-1 order-2 lg:order-2 mb-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-700 to-gray-900 dark:from-white dark:via-gray-300 dark:to-gray-100">
                Recru
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              {t("description")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href={`/${language}/login`}
                className="group relative px-8 py-4 rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-gray-500/20 dark:hover:shadow-gray-400/10"
              >
                <div className="absolute inset-0 bg-black dark:bg-white group-hover:bg-gray-800 dark:group-hover:bg-gray-200 transition-all duration-500"></div>
                <span className="relative flex items-center justify-center text-white dark:text-black text-lg font-semibold tracking-wide">
                  {t("startFree")}
                  <svg
                    className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-3"
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
                </span>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/40 dark:group-hover:border-black/40 rounded-xl transition-all duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
              <Link
                href={`/${language}#whyquicksend`}
                className="group relative px-8 py-4 rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm"></div>
                <div className="absolute inset-0 border-2 border-gray-400 dark:border-gray-600 rounded-xl group-hover:border-black dark:group-hover:border-white transition-all duration-300"></div>
                <span className="relative flex items-center justify-center text-gray-900 dark:text-gray-100 text-lg font-semibold tracking-wide">
                  {t("learnMore")}
                  <svg
                    className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-y-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </span>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-black via-gray-700 to-gray-900 dark:from-white dark:via-gray-300 dark:to-gray-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
              </Link>
            </div>

            <div className="mt-12 flex justify-center space-x-4">
              <div className="w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-600 animate-pulse shadow-lg shadow-gray-400/40 dark:shadow-gray-600/40"></div>
              <div className="w-3 h-3 rounded-full bg-gray-500 dark:bg-gray-500 animate-pulse delay-75 shadow-lg shadow-gray-500/40"></div>
              <div className="w-3 h-3 rounded-full bg-gray-600 dark:bg-gray-400 animate-pulse delay-150 shadow-lg shadow-gray-600/40 dark:shadow-gray-400/40"></div>
            </div>
          </div>

          <div className="relative w-[320px] h-[320px] lg:w-[370px] lg:h-[590px] flex-shrink-0 order-1 lg:order-1 mt-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-300/30 dark:from-gray-700/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-gray-200/20 dark:from-gray-800/20 to-transparent rounded-full blur-lg"></div>
            <Image
              src="/images/image.png"
              alt="Hero Left"
              fill
              className="object-contain relative z-10 drop-shadow-lg animate-fade-in-up grayscale"
              priority
            />
          </div>

          <div className="relative w-[380px] h-[420px] lg:w-[490px] lg:h-[600px] flex-shrink-0 order-3 lg:order-3 mt-auto lg:mr-[-120px]">
            <div className="absolute inset-0 bg-gradient-to-bl from-gray-400/30 dark:from-gray-600/30 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute -inset-4 bg-gradient-to-l from-gray-300/20 dark:from-gray-700/20 to-transparent rounded-full blur-lg"></div>
            <Image
              src="/images/image-1.png"
              alt="Hero Right"
              fill
              className="object-contain relative z-10 drop-shadow-lg animate-fade-in-up grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
