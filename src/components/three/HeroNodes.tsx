"use client";

import { useRef, useMemo, useLayoutEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const SIGNAL_AMBER = new THREE.Color("#FF5A1F");
const SIGNAL_AMBER_BRIGHT = new THREE.Color("#FFE8DC");

const BASE_SCALE = 1;
const HOVER_SCALE = 1.4;
const NEAREST_COUNT = 3;
const EASE_SPEED = 0.1;
const MAX_HOVER_DISTANCE = 3.5;

export default function HeroNodes({ isMobile = false }: { isMobile?: boolean }) {
  const NODE_COUNT = isMobile ? 40 : 100;

  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const { camera } = useThree();

  const raycaster = useMemo(() => new THREE.Raycaster(), []);
  const groundPlane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), []);
  const cursorWorld = useMemo(() => new THREE.Vector3(), []);

  const nodeData = useMemo(
    () =>
      Array.from({ length: NODE_COUNT }, () => ({
        base: new THREE.Vector3(
          (Math.random() - 0.5) * 22,
          (Math.random() - 0.5) * 14,
          (Math.random() - 0.5) * 6
        ),
        phase: Math.random() * Math.PI * 2,
        speed: 0.15 + Math.random() * 0.15,
        currentScale: BASE_SCALE,
        targetScale: BASE_SCALE,
      })),
    [NODE_COUNT]
  );

  useLayoutEffect(() => {
    if (!meshRef.current) return;
    for (let i = 0; i < NODE_COUNT; i++) {
      meshRef.current.setColorAt(i, SIGNAL_AMBER);
    }
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
  }, [NODE_COUNT]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;

    // Cursor tracking is a desktop-only enhancement — skipped entirely
    // on mobile, both because touch has no persistent hover position,
    // and to keep the per-frame work light on weaker devices.
    let cursorActive = false;
    if (!isMobile) {
      raycaster.setFromCamera(state.pointer, camera);
      cursorActive = raycaster.ray.intersectPlane(groundPlane, cursorWorld) !== null;
    }

    const positions = nodeData.map((node) => {
      const x = node.base.x;
      const y = node.base.y + Math.sin(time * node.speed + node.phase) * 0.6;
      const z = node.base.z + Math.cos(time * node.speed + node.phase) * 0.4;
      return new THREE.Vector3(x, y, z);
    });

    let nearest = new Set<number>();
    if (!isMobile && cursorActive) {
      const ranked = positions
        .map((pos, i) => ({ index: i, dist: pos.distanceTo(cursorWorld) }))
        .sort((a, b) => a.dist - b.dist);
      nearest = new Set(
        ranked
          .filter((d) => d.dist < MAX_HOVER_DISTANCE)
          .slice(0, NEAREST_COUNT)
          .map((d) => d.index)
      );
    }

    nodeData.forEach((node, i) => {
      node.targetScale = nearest.has(i) ? HOVER_SCALE : BASE_SCALE;
      node.currentScale += (node.targetScale - node.currentScale) * EASE_SPEED;

      dummy.position.copy(positions[i]);
      dummy.scale.setScalar(node.currentScale);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);

      const t = (node.currentScale - BASE_SCALE) / (HOVER_SCALE - BASE_SCALE);
      meshRef.current!.setColorAt(i, SIGNAL_AMBER.clone().lerp(SIGNAL_AMBER_BRIGHT, t));
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
  });

  return (
    <instancedMesh key={NODE_COUNT} ref={meshRef} args={[undefined, undefined, NODE_COUNT]}>
      <sphereGeometry args={[0.05, 8, 8]} />
      {/* <meshBasicMaterial vertexColors color="#ffffff" transparent opacity={0.7} /> */}
    </instancedMesh>
  );
}