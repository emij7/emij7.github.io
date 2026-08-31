"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Batman from "./models/Batman";
import BatMask from "./models/BatMask";

export default function SectionCanvas({ type, reduceMotion }) {
  return (
    <Canvas
      camera={{ position: [0, 0, type === "mask" ? 7 : 8], fov: type === "mask" ? 28 : 32 }}
      dpr={[0.75, 1.15]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={type === "mask" ? 1.9 : 1.45} />
      <directionalLight position={[4, 6, 5]} intensity={2.6} color="#fffbd1" />
      <pointLight position={[-4, -2, 4]} intensity={1.4} color="#62cde3" />
      <Suspense fallback={null}>
        {type === "mask" ? (
          <BatMask reduceMotion={reduceMotion} />
        ) : (
          <Batman reduceMotion={reduceMotion} />
        )}
      </Suspense>
    </Canvas>
  );
}
