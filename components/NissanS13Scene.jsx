import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import NissanS13 from './NissanS13';

const NissanS13Scene = () => {
  return (
    <Canvas camera={{ position: [-1.4, 3, 5], fov: 50 }}>
      <ambientLight intensity={1.4} />
      <directionalLight
        position={[8, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <Suspense fallback={null}>
        <group rotation={[0, Math.PI, 0]}>
          <NissanS13 />
        </group>
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}

export default NissanS13Scene;
