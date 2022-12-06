import React from 'react';
import { HiOutlineEye } from 'react-icons/hi';

import clsxm from '@/lib/clsxm';

import { AboutPage } from '@/data/about';

export default function InstructionCard({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsxm(
        'flex max-w-xs items-center justify-between gap-8 rounded-3xl bg-gradient-to-br from-c-purple-light via-c-purple-dark to-c-purple-dark px-6 py-5',
        className
      )}
    >
      <div>
        <h5 className='font-body text-2xl font-medium text-white'>
          {AboutPage.button.title}
        </h5>
        <p className='font-body  text-white/90'>
          {AboutPage.button.description}
        </p>
      </div>
      <HiOutlineEye size={36} />
    </div>
  );
}
