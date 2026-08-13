"use client";

import { Canvas } from "@react-three/fiber";
import HeroNodes from "@/components/three/HeroNodes";

export default function HeroScene({ isMobile = false }: { isMobile?: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 12], fov: 60 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <HeroNodes isMobile={isMobile} />
    </Canvas>
  );
}