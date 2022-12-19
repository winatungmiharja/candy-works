import { Environment, OrbitControls } from '@react-three/drei';
import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Canvas } from 'react-three-fiber';

import { AboutPage } from '@/data/about';
import { CandyData } from '@/data/candy';

import NextImage from '@/components/NextImage';
import MultipleCandy from '@/container/3d/MultipleCandy';
import VendingMachine from '@/container/3d/VendingMachine';
import InstructionCard from '@/container/card/InstructionCard';
import TopPicksCard from '@/container/card/TopPicksCard';
import VendingMachineLight from '@/container/light/VendingMachineLight';
import CandyDetailModal from '@/container/modal/CandyDetailModal';

export default function AboutSection() {
  return (
    <section
      id='about'
      className='relative flex min-h-screen overflow-hidden bg-about bg-cover bg-center bg-no-repeat sm:max-h-screen'
    >
      <CandyDetailModal />
      <div className='relative z-10 mx-4 my-16 flex w-full flex-col justify-center gap-8 text-white sm:mx-12  sm:flex-row 2xl:mx-16'>
        <div className='relative flex w-full flex-col items-center'>
          <div className='block  flex-col gap-6 sm:hidden'>
            <InstructionCard />
            <p className='my-4 max-w-xs font-body text-white/90 sm:mt-0'>
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator.
            </p>
          </div>
          <PlaySection />
        </div>
        <div className='inset-0  h-full w-full sm:absolute'>
          <div>
            <h1 className='font-heading text-[max(calc(100vw/30),36px)] leading-none '>
              Top PicKs
            </h1>
            <div className='mt-8 space-y-4'>
              <TopPicksCard data={CandyData.mentoz} />
              <TopPicksCard data={CandyData.suguz} />
            </div>
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
    <div className='relative z-10 h-full min-h-[70vh] w-full max-w-xs rounded-t-full rounded-b-full border border-white  p-8 sm:min-h-min 2xl:max-w-lg'>
      <div className='absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-full flex-col gap-6 sm:flex'>
        <div className='flex items-center'>
          <hr className='w-16 border-white' />
          <InstructionCard />
        </div>
        <div className='flex items-center'>
          <hr className='w-[calc(24px+64px)] border-transparent' />
          <p className='max-w-xs  font-body text-white/90'>
            {AboutPage.information}
          </p>
        </div>
      </div>
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
