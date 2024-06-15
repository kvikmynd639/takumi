import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { Sileighty } from './Sileighty';

export default function SileightyScene() {
    return(
        <Canvas shadows camera={{ position: [5, 5, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight
          castShadow
          position={[10, 10, 10]}
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Stage adjustCamera intensity={0.5} environment="city">
          <Sileighty />
        </Stage>
        <OrbitControls />
      </Canvas>
    )
}