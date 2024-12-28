/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Ian Dowson (https://sketchfab.com/eonie316)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/batman-1989-logo-b15d3d63097946959dd4ba76edf1fdb6
Title: Batman 1989 Logo
*/
"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function BatLogo(props) {
  const { nodes, materials } = useGLTF("/models/bat-logo-transformed.glb");
  return (
    <group
      {...props}
      dispose={null}
      position={[0, -1.5, 0]}
      scale={[0.37, 0.37, 0.37]}
      rotation={[0.2, 0.4, 0]}
    >
      <mesh
        name="Badge_0"
        castShadow
        receiveShadow
        geometry={nodes.Badge_0.geometry}
        material={materials.Badge1}
        position={[0, 3.003, 0]}
      />
      <mesh
        name="InnerRing_0"
        castShadow
        receiveShadow
        geometry={nodes.InnerRing_0.geometry}
        material={materials["In-Edge"]}
        position={[0, 3.003, 0]}
        scale={0.969}
      />
      <mesh
        name="BatLogo_0"
        castShadow
        receiveShadow
        geometry={nodes.BatLogo_0.geometry}
        material={materials.Badge}
        position={[0, 3.003, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/bat-logo-transformed.glb");
