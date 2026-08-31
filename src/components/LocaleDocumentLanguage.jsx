"use client";

import { useEffect } from "react";

export default function LocaleDocumentLanguage({ locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
