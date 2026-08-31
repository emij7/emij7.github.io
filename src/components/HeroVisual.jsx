"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import officialLogo from "../../assets/img/logo.png";
import OrbitNavigation from "./OrbitNavigation";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => <VisualFallback />,
});

function VisualFallback() {
  return (
    <div className="visual-fallback" aria-hidden="true">
      <span className="visual-logo">
        <Image src={officialLogo} alt="" sizes="160px" />
      </span>
    </div>
  );
}

export default function HeroVisual({ signature, scope, navigation }) {
  const [visualMode, setVisualMode] = useState("fallback");
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const saveData = navigator.connection?.saveData === true;

    const updateMode = () => {
      setReduceMotion(reduced.matches);
      setVisualMode(!saveData ? "model" : "fallback");
    };

    updateMode();
    reduced.addEventListener("change", updateMode);

    return () => {
      reduced.removeEventListener("change", updateMode);
    };
  }, []);

  return (
    <div className="hero-visual" aria-label={signature}>
      <div className="visual-grid" aria-hidden="true" />
      <div className="visual-corner visual-corner-top" aria-hidden="true" />
      <div className="visual-corner visual-corner-bottom" aria-hidden="true" />

      <div className="model-stage" aria-hidden="true">
        {visualMode === "model" ? (
          <HeroCanvas reduceMotion={reduceMotion} />
        ) : (
          <VisualFallback />
        )}
      </div>

      <OrbitNavigation labels={navigation} />

      <div className="visual-caption">
        <span>{signature}</span>
        <div className="scope-list">
          {scope.map((item, index) => (
            <span key={item}>
              <i aria-hidden="true">0{index + 1}</i>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
