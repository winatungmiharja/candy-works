import React from 'react';

import ArrowLink from '@/components/links/ArrowLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';

import { CandyDataType } from '@/types/candy.';

export default function TopPicksCard({ data }: { data: CandyDataType }) {
  const { url, name, sold } = data;
  return (
    <div className='flex max-w-xs gap-8 rounded-[calc(16px+12px)] bg-white/75 p-3 '>
      <NextImage
        src={`/images/assets/candy/${url}.png`}
        width={1024}
        height={1024}
        alt={name}
        className='w-16 overflow-hidden rounded-2xl sm:w-20'
        useSkeleton
      />
      <div className='flex flex-col justify-center'>
        <ArrowLink
          as={UnstyledLink}
          className='inline-flex items-center font-body text-lg font-medium text-c-blue-dark sm:text-2xl'
          href={`/candy?type=${data.url}`}
        >
          {name}
        </ArrowLink>
        <p className='font-body font-medium text-c-purple-dark'>{`${sold} sold`}</p>
      </div>
    </div>
  );
}
