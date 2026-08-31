"use client";

import Link from "next/link";
import { useEffect } from "react";

const STORAGE_KEY = "portfolio-language";

export default function LanguageSwitcher({ locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;

    const savedLocale = window.localStorage.getItem(STORAGE_KEY);
    const isEnglishHome = locale === "en" && window.location.pathname === "/";

    if (isEnglishHome && savedLocale === "es") {
      window.location.replace(`/es/${window.location.hash}`);
    }
  }, [locale]);

  const remember = (nextLocale) => {
    window.localStorage.setItem(STORAGE_KEY, nextLocale);
  };

  return (
    <div className="language-switcher" aria-label="Language selector">
      <Link
        href="/"
        onClick={() => remember("en")}
        aria-current={locale === "en" ? "page" : undefined}
      >
        EN
      </Link>
      <span aria-hidden="true">/</span>
      <Link
        href="/es/"
        onClick={() => remember("es")}
        aria-current={locale === "es" ? "page" : undefined}
      >
        ES
      </Link>
    </div>
  );
}
