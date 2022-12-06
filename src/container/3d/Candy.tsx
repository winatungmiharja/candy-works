import { animated } from '@react-spring/three';
import React from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { CandyType } from '@/types/candy.';

export default function SingleCandy({
  name,
  position,
  scale = 0.04,
}: {
  name: keyof typeof CandyType;
  position: number[];
  scale?: number;
}) {
  const gltf = useLoader(GLTFLoader, `/images/candy/${name}.glb`);

  return (
    <animated.mesh>
      <primitive object={gltf.scene} position={position} scale={scale} />
    </animated.mesh>
  );
}
