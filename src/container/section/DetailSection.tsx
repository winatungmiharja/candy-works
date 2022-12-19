import { Environment, OrbitControls } from '@react-three/drei';
import { useRouter } from 'next/router';
import React from 'react';
import { HiMinus, HiOutlineShoppingBag, HiPlus } from 'react-icons/hi';
import { Canvas } from 'react-three-fiber';

import clsxm from '@/lib/clsxm';

import { CandyData } from '@/data/candy';

import Button from '@/components/buttons/Button';
import ArrowLink from '@/components/links/ArrowLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Candy from '@/container/3d/Candy';
import VendingMachineLight from '@/container/light/VendingMachineLight';

import useCandyStore from '@/store/useCandyStore';

import { CandyDataType, CandyType } from '@/types/candy.';

export default function DetailSection() {
  const router = useRouter();
  const type = (router.query.type as keyof typeof CandyType) ?? 'mentoz';
  const [active, setActive] = React.useState<keyof typeof CandyType>(type);
  const close = useCandyStore.useClose();

  React.useEffect(() => {
    close();
  }, [close]);

  return (
    <div className='relative flex max-h-max min-h-screen bg-c-blue-light sm:max-h-screen'>
      <div className='absolute right-16 top-16 z-30'>
        <Button className='w-fit gap-4'>
          <HiOutlineShoppingBag /> Add to Bag
        </Button>
      </div>
      <div className='relative z-10 flex w-full  flex-col-reverse text-white sm:grid   sm:grid-cols-2 '>
        <div className='mx-4 my-2 flex min-h-[50vh] flex-col gap-8 sm:my-16 sm:mx-12 sm:flex-row 2xl:mx-16'>
          {/* Navigator */}
          <div className='relative flex h-fit w-full items-center justify-center  sm:h-full sm:w-fit'>
            <div className='absolute top-1/2 h-[0.5px] w-full translate-y-1/2 bg-white sm:hidden'></div>
            <div className='absolute left-1/2 hidden h-full w-[0.5px] -translate-x-1/2 bg-white sm:block'></div>
            <div className='z-10 flex justify-between gap-4 sm:h-1/2 sm:flex-col sm:gap-0'>
              {(Object.keys(CandyData) as (keyof typeof CandyType)[]).map(
                (key) => (
                  <button
                    onClick={() => setActive(key)}
                    key={key}
                    className={clsxm(
                      'flex h-12 w-12 items-center justify-center rounded-full border bg-c-blue-light',
                      [key === active ? 'border-white' : 'border-transparent']
                    )}
                  >
                    <span
                      className={clsxm(
                        'h-4 w-4',
                        'flex-shrink-0 rounded-full border border-white ',
                        'transition-all duration-100 ease-in-out',
                        [
                          key === active
                            ? 'bg-white'
                            : 'bg-white/20 hover:bg-white hover:shadow-md hover:shadow-white/20',
                        ]
                      )}
                    >
                      &nbsp;
                    </span>
                  </button>
                )
              )}
            </div>
          </div>
          {/* Detail Produk */}
          <div className='ml-3 mr-3 h-full w-full'>
            <ArrowLink
              as={UnstyledLink}
              className='inline-flex items-center'
              href='/#about'
              direction='left'
            >
              Back to Home
            </ArrowLink>
            {/* Title */}
            <h1 className='mt-8 font-heading text-[max(calc(75vw/15),45px)] leading-none'>
              {CandyData[active].name}
            </h1>
            <div className='mt-5 flex w-full flex-col space-y-5'>
              {/* Description */}
              <InformationTabs
                active={active}
                param='description'
                title='Description'
                initial={true}
              />
              {/* Nutrition */}
              <InformationTabs
                active={active}
                param='nutrition'
                title='Nutrition'
              />
              {/* Ingredients */}
              <InformationTabs
                active={active}
                param='ingredients'
                title='Ingredients'
              />
            </div>
          </div>
        </div>
        <div className='mt-12 h-full max-h-[50vh] w-full overflow-hidden p-4 sm:mt-0 sm:max-h-max sm:p-0'>
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
                    name={CandyData[active].url}
                    position={[0, 0, 0]}
                    scale={0.15}
                  />
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

function InformationTabs({
  active,
  title,
  param,
  initial = false,
}: {
  active: keyof typeof CandyType;
  title: string;
  param: keyof CandyDataType;
  initial?: boolean;
}) {
  const [isOpen, setIsOpen] = React.useState<boolean>(initial);

  return (
    <>
      <div className='w-full '>
        <div className='flex justify-between'>
          <h2 className='font-body text-[min(calc(25vw/10),20px)]'>{title}</h2>
          <Button variant='ghost' onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? <HiPlus /> : <HiMinus />}
          </Button>
        </div>
        <p
          className={clsxm(
            'font-body text-sm text-white/90 transition-all  duration-200 ease-out',
            isOpen ? 'h-auto pt-4 opacity-100' : 'h-0  opacity-0'
          )}
        >
          {CandyData[active][param]}
        </p>
      </div>
      <hr />
    </>
  );
}
