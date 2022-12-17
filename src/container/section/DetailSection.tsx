import { Environment, OrbitControls } from '@react-three/drei';
import React from 'react';
import { Canvas } from 'react-three-fiber';

import clsxm from '@/lib/clsxm';

import { CandyData } from '@/data/candy';

import Candy from '@/container/3d/Candy';
import MultipleCandy from '@/container/3d/MultipleCandy';
import VendingMachineLight from '@/container/light/VendingMachineLight';

export default function DetailSection() {
  const [active, setActive] = React.useState<number>(0);
  const dataLength = Object.keys(CandyData).length;
  const data = Object.values(CandyData);
  return (
    <div className='relative flex max-h-max min-h-screen bg-c-blue-light sm:max-h-screen'>
      <div className='relative z-10 flex w-full  flex-col-reverse text-white sm:grid   sm:grid-cols-2 '>
        <div className='mx-4 my-2 flex min-h-[50vh] flex-col gap-8 sm:my-16 sm:mx-12 sm:flex-row 2xl:mx-16'>
          {/* Navigator */}
          <div className='relative flex h-fit w-full items-center justify-center  sm:h-full sm:w-fit'>
            <div className='absolute top-1/2 h-[0.5px] w-full translate-y-1/2 bg-white sm:hidden'></div>
            <div className='absolute left-1/2 hidden h-full w-[0.5px] -translate-x-1/2 bg-white sm:block'></div>
            <div className='z-10 flex justify-between gap-4 sm:h-1/2 sm:flex-col sm:gap-0'>
              {[...Array(dataLength)].map((_, idx) => (
                <button
                  onClick={() => setActive(idx)}
                  key={idx}
                  className={clsxm(
                    'flex h-12 w-12 items-center justify-center rounded-full border bg-c-blue-light',
                    [idx === active ? 'border-white' : 'border-transparent']
                  )}
                >
                  <span
                    className={clsxm(
                      'h-4 w-4',
                      'flex-shrink-0 rounded-full border border-white ',
                      'transition-all duration-100 ease-in-out',
                      [
                        idx === active
                          ? 'bg-white'
                          : 'bg-white/20 hover:bg-white hover:shadow-md hover:shadow-white/20',
                      ]
                    )}
                  >
                    &nbsp;
                  </span>
                </button>
              ))}
            </div>
          </div>
          {/* Detail Produk */}
          <div className='h-full w-full ml-3'>
            {/* 
            //!TODO Warren
            */}
            <h1 className='font-heading text-[calc(75vw/15)] leading-none'>{data[active].name}</h1>
            
            {/* Description */}
            <h2 className= 'mt-10 text-[calc(25vw/10)] font-body'>Description</h2>
            <p className='mt-5 mb-5 font-body text-white/90'>{data[active].description}</p>
            <hr></hr>

            {/* Nutrition */}
            <h2 className= 'mt-5 text-[calc(25vw/10)] font-body'>Nutrition</h2>
            <p className='mt-5 mb-5 font-body text-white/90'>{data[active].nutrition}</p>
            <hr></hr>

            {/* Ingredients */}
            <h2 className= 'mt-5 text-[calc(25vw/10)] font-body'>Ingredients</h2>
            <p className='mt-5 mb-5 font-body text-white/90'>{data[active].ingredients}</p>
            <hr></hr>

          </div>
        </div>
        <div className='mt-12  h-full max-h-[50vh] w-full overflow-hidden p-4 sm:mt-0 sm:max-h-max sm:p-0'>
          {/* Model */}
          <div className='flex h-full w-full items-center justify-center rounded-3xl bg-c-purple-dark sm:rounded-none '>
            <Canvas
              shadows
              dpr={[1, 2]}
              camera={{ position: [0, 0, 4], fov: 50 }}
            >
              <VendingMachineLight />
              <React.Suspense fallback={null}>
                <mesh>
                  <Candy
                    name={data[active].url}
                    position={[0, 0, 0]}
                    scale={0.15}
                  />
                  <MultipleCandy />
                </mesh>
                <Environment preset='city' />
              </React.Suspense>
              <OrbitControls
                autoRotate={true}
                autoRotateSpeed={0.5}
                zoomSpeed={0.25}
                minZoom={40}
                maxZoom={140}
                enablePan={true}
                dampingFactor={0.05}
                minPolarAngle={Math.PI / 2.5}
                maxPolarAngle={Math.PI / 2.5}
              />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
}
