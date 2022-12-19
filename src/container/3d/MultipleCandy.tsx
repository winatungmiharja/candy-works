import React from 'react';

import SingleCandy from '@/container/3d/SingleCandy';

export default function MultipleCandy() {
  React;
  return (
    <group>
      {/* Chupa-chupz */}
      <SingleCandy name='chupa-cupz' position={[-1.57, 2.03, -0.1]} />
      <SingleCandy name='chupa-cupz' position={[0.33, 2.045, -0.1]} />
      <SingleCandy name='chupa-cupz' position={[-0.34, 0.82, -0.1]} />
      <SingleCandy name='chupa-cupz' position={[0.98, -0.38, -0.1]} />
      <SingleCandy name='chupa-cupz' position={[-0.34, -1.5, -0.1]} />

      {/* Dalgona */}
      <SingleCandy name='dalgona' position={[-0.96, 1.91, -0.09]} />
      <SingleCandy name='dalgona' position={[1.53, 1.91, -0.09]} />
      <SingleCandy name='dalgona' position={[0.93, 0.72, -0.09]} />
      <SingleCandy name='dalgona' position={[-1.01, -0.47, -0.09]} />
      <SingleCandy name='dalgona' position={[1.56, -0.47, -0.09]} />
      <SingleCandy name='dalgona' position={[-1.64, -1.7, -0.08]} />
      <SingleCandy name='dalgona' position={[0.3, -1.7, -0.09]} />

      {/* Mentoz */}
      <SingleCandy name='mentoz' position={[-0.35, 1.945, -0.08]} />
      <SingleCandy name='mentoz' position={[-1.05, 0.785, -0.08]} />
      <SingleCandy name='mentoz' position={[1.62, 0.795, -0.08]} />
      <SingleCandy name='mentoz' position={[-1.635, -0.39, -0.06]} />
      <SingleCandy name='mentoz' position={[0.3, -0.39, -0.06]} />

      <SingleCandy name='mentoz' position={[0.94, -1.55, -0.06]} />

      {/* Suguz */}
      <SingleCandy name='suguz' position={[0.95, 1.98, -0.09]} />
      <SingleCandy name='suguz' position={[-1.64, 0.79, -0.09]} />
      <SingleCandy name='suguz' position={[0.3, 0.79, -0.09]} />
      <SingleCandy name='suguz' position={[-0.37, -0.42, -0.09]} />
      <SingleCandy name='suguz' position={[-0.97, -1.55, -0.09]} />
      <SingleCandy name='suguz' position={[1.57, -1.55, -0.09]} />
    </group>
  );
}
