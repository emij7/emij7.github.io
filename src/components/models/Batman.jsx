/*
Model: Batman by TapmodStudio — CC-BY-4.0
https://sketchfab.com/3d-models/batman-6e54eb66a143449d8101e2d2a092ead4
*/
"use client";

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Batman({ reduceMotion = false, ...props }) {
  const { nodes, materials } = useGLTF("/models/batman-transformed.glb", "/draco/");
  const modelRef = useRef(null);

  useFrame((state) => {
    if (!modelRef.current || reduceMotion) return;
    modelRef.current.position.y = -1.2 + Math.sin(state.clock.elapsedTime * 0.85) * 0.1;
    modelRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.22) * 0.08;
  });

  return (
    <group
      {...props}
      dispose={null}
      ref={modelRef}
      scale={[1.3, 1.3, 1.3]}
      position={[0, -1.2, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface19_Plach_0.geometry}
        material={materials.Plach}
        scale={0.022}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LP_complite_0.geometry}
        material={materials.complite}
        scale={0.022}
      />
    </group>
  );
}

useGLTF.preload("/models/batman-transformed.glb", "/draco/");
