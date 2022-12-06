import { animated, config, useSpring } from '@react-spring/three';
import React from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import useCandyStore from '@/store/useCandyStore';

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
  const [hover, setHover] = React.useState<boolean>(false);
  const [active, setActive] = React.useState<boolean>(false);

  const open = useCandyStore.useOpen();

  const gltf = useLoader(GLTFLoader, `/images/candy/${name}.glb`);
  const spring = useSpring({
    scale: hover ? 1.2 : 1,
    config: config.wobbly,
  });

  React.useEffect(() => {
    active && open();
    setActive(false);
  }, [active, open]);

  return (
    <animated.mesh
      {...spring}
      onClick={() => setActive(true)}
      onPointerEnter={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <primitive object={gltf.scene} position={position} scale={scale} />
    </animated.mesh>
  );
}
