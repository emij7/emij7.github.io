/*
Model: Batman Mask by David Wigforss — CC-BY-NC-4.0
https://sketchfab.com/3d-models/batman-mask-6cb464f240ee478cafe88e8d41229081
*/
"use client";

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function BatMask({ reduceMotion = false, ...props }) {
  const { nodes, materials } = useGLTF("/models/bat-mask-transformed.glb", "/draco/");
  const modelRef = useRef(null);

  useFrame((state) => {
    if (!modelRef.current || reduceMotion) return;
    modelRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.32) * 0.7;
    modelRef.current.position.y = -0.8 + Math.sin(state.clock.elapsedTime * 0.6) * 0.05;
  });

  return (
    <group {...props} dispose={null} ref={modelRef} scale={[10, 10, 10]} position={[0, -0.8, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={
          materials.obj_MISC_Clothing_MaskClothing_Mask_DC_Batmanmatnet1MAT_Clothing_Mask_DC_Batman
        }
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/bat-mask-transformed.glb", "/draco/");
