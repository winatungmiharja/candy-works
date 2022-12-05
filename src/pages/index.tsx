import { Environment, OrbitControls } from '@react-three/drei';
import * as React from 'react';
import { Canvas } from 'react-three-fiber';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import MultipleCandy from '@/container/3d/MultipleCandy';
import VendingMachine from '@/container/3d/VendingMachine';
import VendingMachineLight from '@/container/light/VendingMachineLight';
import CandyDetailModal from '@/container/modal/CandyDetailModal';

export default function IndexPage() {
  return (
    <Layout>
      <Seo />
      <main className='bg-dark'>
        <div className='layout'>
          <h1 className='font-heading text-white'>Candy Works</h1>
          <div className='h-screen w-full'>
            <CandyDetailModal />
            <Canvas
              shadows
              dpr={[1, 2]}
              camera={{ position: [0, 0, 4], fov: 50 }}
            >
              <VendingMachineLight />
              <React.Suspense fallback={null}>
                <mesh>
                  <VendingMachine />
                  <MultipleCandy />
                </mesh>
                <Environment preset='city' />
              </React.Suspense>
              <OrbitControls
                // autoRotate={true}
                // autoRotateSpeed={-0.1}
                // zoomSpeed={0.25}
                // minZoom={40}
                // maxZoom={140}
                enablePan={true}
                dampingFactor={0.05}
                minPolarAngle={Math.PI / 2.5}
                maxPolarAngle={Math.PI / 2.5}
              />
            </Canvas>
          </div>
        </div>
      </main>
    </Layout>
  );
}
