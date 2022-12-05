import React from 'react';
import { PrimitiveProps, useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function GLTFModel({
  url,
  ...rest
}: { url: string } & Omit<PrimitiveProps, 'object'>) {
  const gltf = useLoader(GLTFLoader, url);
  return <primitive {...rest} object={gltf.scene} />;
}
