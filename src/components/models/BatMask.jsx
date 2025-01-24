/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: David Wigforss (https://sketchfab.com/dwigfor)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/batman-mask-6cb464f240ee478cafe88e8d41229081
Title: Batman Mask
*/
"use client";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function BatMask(props) {
  const { nodes, materials } = useGLTF(
    "/models/bat-mask-transformed.glb"
  );

  const modelRef = useRef();

  useFrame((state, delta, xrFrame) => {
    modelRef.current.rotation.y += 0.003;
  });

  return (
    <group
      {...props}
      dispose={null}
      ref={modelRef}
      scale={[10, 10, 10]}
      position={[0, -1.5, 0]}
    >
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

useGLTF.preload("/models/bat-mask-transformed.glb");
