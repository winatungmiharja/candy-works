import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import { LandingPage } from '@/data/about';

import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';

export default function LandingSection() {
  return (
    <section className='relative flex min-h-screen overflow-hidden bg-landing bg-cover  bg-center bg-no-repeat'>
      <div className='layout z-10 flex flex-col items-center justify-center  text-white'>
        <h1 className='font-heading text-[max(calc(100vw/15),64px)] leading-none '>
          Candy <br />
          WoRks
        </h1>

        <p className='mt-4 max-w-sm text-center font-body'>
          {LandingPage.description}
        </p>

        <ButtonLink href='#about' className='mt-8'>
          {LandingPage.button}
        </ButtonLink>
      </div>
      <div className='pointer-events-none absolute inset-0 h-full w-full'>
        <Parallax className='absolute -bottom-8 w-full' speed={-10}>
          <NextImage
            src='/images/assets/base/planet.png'
            width={2251}
            height={620}
            alt='planet'
            className='hidden w-full sm:block'
          />
        </Parallax>
        <Parallax
          className='absolute bottom-[5%] w-full sm:-bottom-8  '
          speed={5}
        >
          <NextImage
            src='/images/assets/base/cloud.png'
            width={2251}
            height={576}
            alt='cloud'
            className='w-full'
          />
        </Parallax>

        <Parallax
          className='absolute -right-[5%] top-[5%] w-[25%] sm:w-[15%]'
          speed={-5}
        >
          <NextImage
            src='/images/assets/particle/planet-big-1.png'
            width={299}
            height={299}
            alt='planet'
            className='w-full'
          />
        </Parallax>

        <Parallax
          className='absolute -left-[5%] top-[17%] w-[25%] sm:w-[15%]'
          speed={-3}
        >
          <NextImage
            src='/images/assets/particle/planet-big-2.png'
            width={282}
            height={282}
            alt='planet'
            className='w-full'
          />
        </Parallax>

        <Parallax className='absolute left-[15%] top-[43%] w-[7%]' speed={10}>
          <NextImage
            src='/images/assets/particle/planet-small-1.png'
            width={164}
            height={117}
            alt='planet'
            className='w-full'
          />
        </Parallax>

        <Parallax className='absolute right-[15%] top-[33%] w-[7%]' speed={15}>
          <NextImage
            src='/images/assets/particle/planet-small-2.png'
            width={136}
            height={94}
            alt='planet'
            className='w-full'
          />
        </Parallax>
      </div>
    </section>
  );
}
