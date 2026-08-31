"use client";

import BatLogo from "./models/BatLogo";
import RenderModel from "./RenderModel";

export default function HeroCanvas({ reduceMotion = false }) {
  return (
    <RenderModel className="hero-canvas">
      <BatLogo reduceMotion={reduceMotion} />
    </RenderModel>
  );
}
