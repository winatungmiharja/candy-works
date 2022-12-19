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

  const candy = useCandyStore.useCandy();

  const { scene } = useLoader(GLTFLoader, `/images/candy/${name}.glb`);
  const spring = useSpring({
    scale: hover ? 1.1 : 1,
    config: config.wobbly,
  });

  React.useEffect(() => {
    if (active) {
      candy({
        type: name,
      });
    }
    setActive(false);
  }, [active, candy, name]);

  const copiedScene = React.useMemo(() => scene.clone(), [scene]);
  return (
    <group>
      <animated.mesh
        {...spring}
        onClick={() => setActive(true)}
        onPointerEnter={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <primitive object={copiedScene} position={position} scale={scale} />
      </animated.mesh>
    </group>
  );
}
