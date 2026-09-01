"use client";

import { usePathname } from "next/navigation";
import Sound from "./Sound";

export default function DocumentShell({ children, fontVariable }) {
  const pathname = usePathname();
  const locale = pathname?.startsWith("/es") ? "es" : "en";

  return (
    <html lang={locale} className={fontVariable}>
      <body>
        {children}
        <Sound />
      </body>
    </html>
  );
}
