'use client';

import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Environment, OrbitControls } from '@react-three/drei';

export default function HeroCanvas() {
  return (
    // z-0 y le ponemos aquí el fondo claro bg-stone-50
    <div className="absolute inset-0 z-0 bg-stone-50" style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <OrbitControls />
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        
        <Sphere visible args={[1.4, 64, 64]}>
          <MeshDistortMaterial
            color="#1c1917" // Negro metálico
            attach="material"
            distort={0.4}
            speed={1.5}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}