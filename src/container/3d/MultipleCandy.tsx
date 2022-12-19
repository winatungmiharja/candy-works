import React from 'react';

import SingleCandy from '@/container/3d/SingleCandy';

export default function MultipleCandy() {
  React;
  return (
    <group>
      {/* Chupa-chupz */}
      <SingleCandy name='chupa-cupz' position={[-0.34, 0.82, -0.15]} />

      {/* Dalgona */}
      <SingleCandy name='dalgona' position={[0.93, 0.72, -0.15]} />

      {/* Mentoz */}
      <SingleCandy name='mentoz' position={[-1.05, 0.785, -0.15]} />

      {/* Suguz */}
      <SingleCandy name='suguz' position={[0.3, 0.79, -0.15]} />
    </group>
  );
}
