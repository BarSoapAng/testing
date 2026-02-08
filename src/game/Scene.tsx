import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import type { Mesh } from 'three';

import { GAME_CONFIG } from './config';

export function Scene() {
  const cubeRef = useRef<Mesh>(null);

  useFrame((_state, delta) => {
    if (!cubeRef.current) {
      return;
    }
    cubeRef.current.rotation.x += delta * 0.6;
    cubeRef.current.rotation.y += delta * 0.8;
  });

  return (
    <>
      <color attach="background" args={[GAME_CONFIG.clearColor]} />
      <ambientLight intensity={GAME_CONFIG.lighting.ambientIntensity} />
      <directionalLight
        position={GAME_CONFIG.lighting.keyLightPosition}
        intensity={GAME_CONFIG.lighting.keyLightIntensity}
      />
      <mesh ref={cubeRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={GAME_CONFIG.colors.primary} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color={GAME_CONFIG.colors.ground} />
      </mesh>
    </>
  );
}
