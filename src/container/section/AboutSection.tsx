import { Environment, OrbitControls } from '@react-three/drei';
import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Canvas } from 'react-three-fiber';

import NextImage from '@/components/NextImage';
import MultipleCandy from '@/container/3d/MultipleCandy';
import VendingMachine from '@/container/3d/VendingMachine';
import VendingMachineLight from '@/container/light/VendingMachineLight';
import CandyDetailModal from '@/container/modal/CandyDetailModal';

export default function AboutSection() {
  return (
    <section className='relative flex max-h-screen min-h-screen overflow-hidden bg-about bg-cover bg-center bg-no-repeat'>
      <CandyDetailModal />
      <div className='relative z-10 m-8 flex w-full justify-center text-white  sm:m-16'>
        <div className='layout z-10 flex justify-center'>
          <PlaySection />
        </div>
        <div className='absolute inset-0 h-full w-full '>
          <div>
            <h1 className='font-heading text-[max(calc(100vw/30),36px)] leading-none '>
              Top PicKs
            </h1>
          </div>
        </div>
      </div>
      <div className='pointer-events-none absolute inset-0 h-full w-full'>
        <Parallax className='absolute -bottom-8 w-full' speed={-10}>
          <NextImage
            src='/images/assets/base/ground.png'
            width={2001}
            height={654}
            alt='ground'
            className='hidden w-full sm:block'
          />
        </Parallax>

        <Parallax className='absolute right-[5%] top-[15%] w-[7%]' speed={10}>
          <NextImage
            src='/images/assets/particle/planet-small-1.png'
            width={164}
            height={117}
            alt='planet'
            className='w-full'
          />
        </Parallax>

        <Parallax
          className='absolute -left-[5%] bottom-[5%] w-[25%] sm:w-[15%]'
          speed={-5}
        >
          <NextImage
            src='/images/assets/particle/planet-big-1.png'
            width={282}
            height={282}
            alt='planet'
            className='w-full'
          />
        </Parallax>
      </div>
    </section>
  );
}

function PlaySection() {
  return (
    <div className='z-10 h-full w-full max-w-sm rounded-t-full rounded-b-full border  border-white p-8 2xl:max-w-lg'>
      <div className=' h-full w-full overflow-hidden rounded-t-full rounded-b-full bg-gradient-to-b from-c-blue-light to-c-blue-dark'>
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
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
  );
}
