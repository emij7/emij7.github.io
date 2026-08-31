"use client";

import { useEffect } from "react";

export default function LegacyRedirect({ target, label }) {
  useEffect(() => {
    window.location.replace(`/#${target}`);
  }, [target]);

  return (
    <main className="legacy-redirect">
      <p>{label}</p>
      <a href={`/#${target}`}>Continue</a>
    </main>
  );
}
