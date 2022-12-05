import React from 'react';

import GLTFModel from '@/components/model/GLTFModel';

export default function VendingMachine() {
  return <GLTFModel url='/images/vending-machine/scene.glb' scale={0.04} />;
}
