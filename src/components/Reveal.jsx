"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, className = "", delay = 0, variant = "rise" }) {
  const elementRef = useRef(null);
  const [phase, setPhase] = useState("idle");

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("visible");
      return undefined;
    }

    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.96) {
      setPhase("visible");
      return undefined;
    }

    setPhase("ready");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setPhase("visible");
        observer.disconnect();
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`reveal reveal-${variant} ${phase === "ready" ? "reveal-ready" : ""} ${
        phase === "visible" ? "is-visible" : ""
      } ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}s` }}
    >
      {children}
    </div>
  );
}
