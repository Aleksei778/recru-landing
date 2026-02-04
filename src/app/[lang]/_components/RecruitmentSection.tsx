"use client";

import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/hooks/useTranslation";
import dynamic from "next/dynamic";
import {
  Users,
  Target,
  Zap,
  FileCheck,
  ArrowRight,
  Shield,
  UserCheck,
  ClipboardCheck,
} from "lucide-react";
import { useState, useEffect } from "react";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((m) => m.Player),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[400px] lg:h-[600px] flex items-center justify-center">
        <div className="relative">
          <div className="w-64 h-64 bg-gray-100 dark:bg-gray-800 rounded-full blur-2xl"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Users className="w-24 h-24 text-gray-400 dark:text-gray-500 animate-pulse" />
          </div>
        </div>
      </div>
    ),
  },
);

export default function RecruitmentSection() {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        );
      setIsMobile(mobile);
      setShowAnimation(!mobile);
    };
    const timer = setTimeout(() => {
      checkMobile();
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: Users,
      title: "dsp.features.candidates.title",
      desc: "dsp.features.candidates.description",
      iconBg: "bg-gray-100 dark:bg-gray-800",
    },
    {
      icon: Target,
      title: "dsp.features.screening.title",
      desc: "dsp.features.screening.description",
      iconBg: "bg-gray-100 dark:bg-gray-800",
    },
    {
      icon: Zap,
      title: "dsp.features.fast_hiring.title",
      desc: "dsp.features.fast_hiring.description",
      iconBg: "bg-gray-100 dark:bg-gray-800",
    },
    {
      icon: FileCheck,
      title: "dsp.features.parsing.title",
      desc: "dsp.features.parsing.description",
      iconBg: "bg-gray-100 dark:bg-gray-800",
    },
  ];

  return (
    <section
      id="recruitment"
      className="relative py-20 px-4 sm:px-6 overflow-hidden bg-white dark:bg-black"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-black/5 dark:bg-white/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-black/5 dark:bg-white/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="relative w-full lg:w-1/2 flex justify-center">
          {showAnimation ? (
            <div className="relative grayscale">
              <div className="absolute inset-0 bg-black/10 dark:bg-white/10 rounded-full blur-3xl"></div>

              <Player
                autoplay
                loop
                src="/animations/guitar.json"
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "600px",
                  maxHeight: "600px",
                }}
              />
            </div>
          ) : (
            <div className="w-full max-w-md mx-auto">
              <div className="relative">
                <div className="absolute inset-0 bg-black/20 dark:bg-white/20 rounded-full blur-3xl animate-pulse"></div>

                <div className="relative w-64 h-64 mx-auto rounded-3xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 shadow-2xl flex items-center justify-center">
                  <div className="absolute inset-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"></div>

                  <div className="relative z-10 flex flex-col items-center gap-6">
                    <Users className="w-20 h-20 text-black dark:text-white animate-float" />
                    <div className="flex gap-4">
                      <Shield className="w-10 h-10 text-gray-700 dark:text-gray-300 animate-pulse delay-75" />
                      <ClipboardCheck className="w-10 h-10 text-gray-700 dark:text-gray-300 animate-pulse delay-150" />
                      <UserCheck className="w-10 h-10 text-gray-700 dark:text-gray-300 animate-pulse delay-300" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-8">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                  Автоматизация найма
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  ATS-система с AI-скринингом кандидатов
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="flex-1 z-10">
          <div className="text-center lg:text-left mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-black dark:text-white">
              {t("dsp.title") || "Автоматизация найма с AI"}
            </h2>
            <div className="w-24 h-1.5 bg-black dark:bg-white rounded-full mx-auto lg:mx-0"></div>
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl text-center lg:text-left">
            {t("dsp.description") ||
              "Современная ATS-система с автоматическим техническим скринингом кандидатов. Сокращаем время найма и повышаем качество отбора."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {features.map(({ icon: Icon, title, desc, iconBg }, i) => (
              <div
                key={i}
                className="group relative p-6 rounded-2xl overflow-hidden transition-all duration-300 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-black dark:bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

                <div className="relative">
                  <div className="inline-flex items-center justify-center mb-4">
                    <div
                      className={`relative ${iconBg} border-2 border-gray-300 dark:border-gray-700 w-14 h-14 rounded-xl flex items-center justify-center group-hover:border-black dark:group-hover:border-white transition-colors duration-300`}
                    >
                      <Icon className="w-7 h-7 text-black dark:text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                    {t(title)}
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300">{t(desc)}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href={`/${language}/profile`}
            className="group relative inline-flex items-center justify-center px-8 py-4 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl bg-black dark:bg-white"
          >
            <div className="absolute inset-0 bg-gray-800 dark:bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="absolute inset-0 bg-black/20 dark:bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

            <div className="relative flex items-center gap-3">
              <Shield className="w-6 h-6 text-white dark:text-black" />
              <span className="text-white dark:text-black text-lg font-bold tracking-wide">
                {t("dsp.cta") || "Начать работу"}
              </span>
              <ArrowRight className="w-5 h-5 ml-1 text-white dark:text-black transition-transform duration-300 group-hover:translate-x-1" />
            </div>

            <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-700 dark:group-hover:border-gray-300 rounded-2xl transition-all duration-300"></div>
          </a>

          <div className="mt-6 flex items-center justify-start gap-3 text-sm text-gray-600 dark:text-gray-400">
            <div className="w-2 h-2 rounded-full bg-black dark:bg-white animate-pulse"></div>
            <span>
              {t("dsp.guarantee") ||
                "Бесплатный пробный период • Техподдержка 24/7"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
