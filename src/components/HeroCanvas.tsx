'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import {
  MeshDistortMaterial,
  Sphere,
  Environment,
  OrbitControls,
} from '@react-three/drei';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

const PALETTE = [
  '#1a1a1a',
  '#3a3632',
  '#8b8680',
  '#c5a258',
  '#8a6f3f',
  '#1a1a1a',
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

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return isDesktop;
}

export default function HeroCanvas() {
  const isDesktop = useIsDesktop();

  return (
    <div className="absolute inset-0 z-0 h-full w-full bg-stone-50">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        style={{
          touchAction: 'pan-y',
          pointerEvents: isDesktop ? 'auto' : 'none',
        }}
      >
        {isDesktop && (
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.35}
          />
        )}
        <ambientLight intensity={0.55} />
        <directionalLight position={[10, 10, 10]} intensity={0.9} />
        <PaletteSphere />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}