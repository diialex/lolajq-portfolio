'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import {
  MeshDistortMaterial,
  Sphere,
  Environment,
  OrbitControls,
} from '@react-three/drei';
import { useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

const PALETTE = [
  '#1a1a1a', // charcoal
  '#3a3632', // ink
  '#6b6660', // stone más oscuro (era #8b8680)
  '#8a7340', // gold más oscuro (era #c5a258)
  '#6f5832', // bronze más oscuro (era #8a6f3f)
  '#1a1a1a', // vuelta a charcoal
];

const CYCLE_SECONDS = 18;

function PaletteSphere() {
  const matRef = useRef<any>(null);
  const colors = useMemo(() => PALETTE.map((hex) => new THREE.Color(hex)), []);
  const tmpColor = useMemo(() => new THREE.Color(), []);
  const elapsed = useRef(0);

  useFrame((_, delta) => {
    if (!matRef.current) return;
    elapsed.current += delta;
    const tRaw = (elapsed.current / CYCLE_SECONDS) * (colors.length - 1);
    const t = tRaw % (colors.length - 1);
    const i = Math.floor(t);
    const frac = t - i;
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
  // Se calcula UNA VEZ, nunca cambia → no hay re-montajes
  const [isDesktop] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(min-width: 768px)').matches
      : true
  );

  // useMemo para que las props no cambien de referencia entre renders
  const camera = useMemo(
    () => ({
      position: [0, 0, isDesktop ? 5 : 7] as [number, number, number],
      fov: 45,
    }),
    [isDesktop]
  );

  const style = useMemo(
    () => ({
      touchAction: 'pan-y' as const,
      pointerEvents: (isDesktop ? 'auto' : 'none') as 'auto' | 'none',
    }),
    [isDesktop]
  );

  return (
    <div className="absolute inset-0 z-0 h-full w-full bg-stone-50">
      <Canvas camera={camera} dpr={[1, 2]} style={style}>
        {isDesktop && (
          <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.35} />
        )}
        {/* Iluminación de estudio sin Environment */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-5, -3, -5]} intensity={0.5} />
        <pointLight position={[0, 3, 2]} intensity={0.4} />
        <PaletteSphere />
      </Canvas>
    </div>
  );
}