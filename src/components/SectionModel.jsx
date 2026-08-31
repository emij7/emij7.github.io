"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const SectionCanvas = dynamic(() => import("./SectionCanvas"), { ssr: false });

export default function SectionModel({ type, className = "" }) {
  const containerRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (navigator.connection?.saveData === true) return undefined;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(reduced.matches);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setEnabled(true);
        observer.disconnect();
      },
      { rootMargin: "320px 0px" },
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`section-model section-model-${type} ${className}`} aria-hidden="true">
      {enabled ? <SectionCanvas type={type} reduceMotion={reduceMotion} /> : null}
    </div>
  );
}
