"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const RenderModel = ({ children, className }) => {
  return (
    <Canvas
      className={className}
      camera={{ position: [0, 0, 8], fov: 32 }}
      dpr={[1, 1.35]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={1.7} />
      <directionalLight position={[4, 6, 5]} intensity={2.4} color="#fffbd1" />
      <pointLight position={[-4, -2, 4]} intensity={1.2} color="#62cde3" />
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  );
};

export default RenderModel;
