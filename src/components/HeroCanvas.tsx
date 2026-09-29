'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import {
  MeshDistortMaterial,
  Sphere,
  Environment,
  OrbitControls,
} from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

// Paleta del portafolio: charcoal → ink → stone → gold → bronze → charcoal
const PALETTE = [
  '#1a1a1a', // charcoal
  '#3a3632', // ink más cálido
  '#8b8680', // stone
  '#c5a258', // gold
  '#8a6f3f', // bronze
  '#1a1a1a', // vuelta a charcoal
];

// Cuántos segundos tarda en dar la vuelta completa al ciclo
const CYCLE_SECONDS = 18;

function PaletteSphere() {
  const matRef = useRef<any>(null);
  const colors = useMemo(
    () => PALETTE.map((hex) => new THREE.Color(hex)),
    []
  );
  const tmpColor = useMemo(() => new THREE.Color(), []);
  const elapsed = useRef(0);

  useFrame((_, delta) => {
    if (!matRef.current) return;

    elapsed.current += delta;

    // t va de 0 a colors.length-1 en bucle
    const cycleDuration = CYCLE_SECONDS;
    const tRaw = (elapsed.current / cycleDuration) * (colors.length - 1);
    const t = tRaw % (colors.length - 1);

    const i = Math.floor(t);
    const frac = t - i;

    // Interpolación suave entre dos colores de la paleta
    tmpColor.copy(colors[i]).lerp(colors[i + 1], frac);
    matRef.current.color.copy(tmpColor);
  });

  return (
    <Sphere visible args={[1.4, 64, 64]}>
      <MeshDistortMaterial
        ref={matRef}
        color={PALETTE[0]}
        attach="material"
        distort={0.4}
        speed={1.2}
        roughness={0.25}
        metalness={0.65}
      />
    </Sphere>
  );
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full bg-stone-50">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.35}
        />
        <ambientLight intensity={0.55} />
        <directionalLight position={[10, 10, 10]} intensity={0.9} />
        <PaletteSphere />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}