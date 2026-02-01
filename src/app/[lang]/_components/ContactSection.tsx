"use client";
import { useTranslation } from "@/hooks/useTranslation";
import { useEffect, useRef } from "react";
import { Mail } from "lucide-react";

export function ContactSection() {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  return (
    <section
      id="contact"
      className="relative py-20 px-4 sm:px-6 overflow-hidden bg-white dark:bg-black"
    >
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-black dark:text-white">
          {t("contactUs")}
        </h2>
        <Mail className="w-16 h-16 text-gray-700 dark:text-gray-300 mx-auto mb-6" />
        <a
          href="mailto:recrucontact@yandex.ru"
          className="text-2xl font-semibold text-gray-900 dark:text-gray-100 hover:text-black dark:hover:text-white transition block mb-4"
        >
          recrucontact@yandex.ru
        </a>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-12">
          {t("feedback")}
        </p>

        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl max-w-3xl mx-auto">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover grayscale"
          >
            <source src="/animations/business-video.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
