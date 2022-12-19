import { Dialog, Transition } from '@headlessui/react';
import React from 'react';

import { CandyData } from '@/data/candy';

import ArrowLink from '@/components/links/ArrowLink';
import NextImage from '@/components/NextImage';

import useCandyStore from '@/store/useCandyStore';

import { CandyType } from '@/types/candy.';

export default function CandyDetailModal() {
  const close = useCandyStore.useClose();
  const isOpen = useCandyStore.useIsOpen();
  const state = useCandyStore.useState();

  function closeModal() {
    close();
  }

  return (
    <>
      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={React.Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={React.Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-sm transform  overflow-hidden rounded-2xl bg-gradient-to-br from-c-blue-light to-c-blue-dark p-6 text-left text-center align-middle shadow-xl transition-all'>
                  <NextImage
                    src={`/images/assets/candy/${
                      CandyData[state?.type as keyof typeof CandyType].url
                    }.png`}
                    width={1024}
                    height={1024}
                    alt={CandyData[state?.type as keyof typeof CandyType].name}
                    className='aspect-square w-full overflow-hidden rounded-2xl '
                    useSkeleton
                  />
                  <Dialog.Title
                    as='h1'
                    className='mt-4 font-body font-medium  text-white'
                  >
                    {CandyData[state?.type as keyof typeof CandyType].name}
                    <br />
                    Candy
                  </Dialog.Title>
                  <div className='mt-5'>
                    <p className='font-body text-sm text-white'>
                      {
                        CandyData[state?.type as keyof typeof CandyType]
                          .description
                      }
                    </p>
                  </div>

                  <div className='mt-8'>
                    <ArrowLink
                      href={`/candy?type=${
                        CandyData[state?.type as keyof typeof CandyType].url
                      }`}
                      className='text-white'
                    >
                      Details
                    </ArrowLink>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
