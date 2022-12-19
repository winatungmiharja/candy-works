import clsx from 'clsx';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import PrimaryLink from '@/components/links/PrimaryLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Skeleton from '@/components/Skeleton';

export default function ComponentsPage() {
  return (
    <Layout>
      <Seo
        templateTitle='Components'
        description='Pre-built components with awesome default'
      />

      <main className='bg-c-blue-light'>
        <section>
          <div className={clsx('layout min-h-screen py-20', 'text-white')}>
            <h1>Built-in Components</h1>
            <ArrowLink direction='left' className='mt-2' href='/'>
              Back to Home
            </ArrowLink>

            <ol className='mt-8 space-y-6'>
              <li className='space-y-2'>
                <h2 className='text-lg md:text-xl'>Customize Colors</h2>

                <div className='flex flex-wrap gap-2 text-xs font-medium'>
                  <div className='flex h-10 w-10 items-center justify-center rounded bg-primary-50 text-black'>
                    50
                  </div>
                  <div className='flex h-10 w-10 items-center justify-center rounded bg-primary-100 text-black'>
                    100
                  </div>
                  <div className='flex h-10 w-10 items-center justify-center rounded bg-primary-200 text-black'>
                    200
                  </div>
                  <div className='flex h-10 w-10 items-center justify-center rounded bg-primary-300 text-black'>
                    300
                  </div>
                  <div className='flex h-10 w-10 items-center justify-center rounded bg-primary-400 text-black'>
                    400
                  </div>
                  <div className='flex h-10 w-10 items-center justify-center rounded bg-primary-500 text-black'>
                    500
                  </div>
                  <div className='flex h-10 w-10 items-center justify-center rounded bg-primary-600 text-white'>
                    600
                  </div>
                  <div className='flex h-10 w-10 items-center justify-center rounded bg-primary-700 text-white'>
                    700
                  </div>
                  <div className='flex h-10 w-10 items-center justify-center rounded bg-primary-800 text-white'>
                    800
                  </div>
                  <div className='flex h-10 w-10 items-center justify-center rounded bg-primary-900 text-white'>
                    900
                  </div>
                </div>
              </li>
              <li className='space-y-2'>
                <h2 className='text-lg md:text-xl'>UnstyledLink</h2>

                <div className='space-x-2'>
                  <UnstyledLink href='/'>Internal Links</UnstyledLink>
                  <UnstyledLink href='https://winatungmiharja.com'>
                    Outside Links
                  </UnstyledLink>
                </div>
              </li>
              <li className='space-y-2'>
                <h2 className='text-lg md:text-xl'>PrimaryLink</h2>

                <div className='space-x-2'>
                  <PrimaryLink href='/'>Internal Links</PrimaryLink>
                  <PrimaryLink href='https://winatungmiharja.com'>
                    Outside Links
                  </PrimaryLink>
                </div>
              </li>
              <li className='space-y-2'>
                <h2 className='text-lg md:text-xl'>UnderlineLink</h2>

                <div className='space-x-2'>
                  <UnderlineLink href='/'>Internal Links</UnderlineLink>
                  <UnderlineLink href='https://winatungmiharja.com'>
                    Outside Links
                  </UnderlineLink>
                </div>
              </li>
              <li className='space-y-2'>
                <h2 className='text-lg md:text-xl'>ArrowLink</h2>

                <div className='flex flex-wrap items-center gap-4'>
                  <ArrowLink href='/' direction='left'>
                    Direction Left
                  </ArrowLink>
                  <ArrowLink href='/'>Direction Right</ArrowLink>
                  <ArrowLink
                    as={UnstyledLink}
                    className='inline-flex items-center'
                    href='/'
                  >
                    Polymorphic
                  </ArrowLink>
                  <ArrowLink
                    as={ButtonLink}
                    variant='outline'
                    className='inline-flex items-center'
                    href='/'
                  >
                    Polymorphic
                  </ArrowLink>
                </div>
              </li>
              <li className='space-y-2'>
                <h2 className='text-lg md:text-xl'>ButtonLink</h2>

                <div className='flex flex-wrap gap-2'>
                  <ButtonLink
                    variant='primary'
                    href='https://winatungmiharja.com'
                  >
                    Primary Variant
                  </ButtonLink>
                  <ButtonLink
                    variant='secondary'
                    href='https://winatungmiharja.com'
                  >
                    Secondary Variant
                  </ButtonLink>
                  <ButtonLink
                    variant='outline'
                    href='https://winatungmiharja.com'
                  >
                    Outline Variant
                  </ButtonLink>
                  <ButtonLink
                    variant='ghost'
                    href='https://winatungmiharja.com'
                  >
                    Ghost Variant
                  </ButtonLink>
                </div>
              </li>
              <li className='space-y-2'>
                <h2 className='text-lg md:text-xl'>Button</h2>

                <div className='flex flex-wrap gap-2'>
                  <Button variant='primary'>Primary Variant</Button>
                  <Button variant='secondary'>Outline Variant</Button>
                  <Button variant='outline'>Outline Variant</Button>
                  <Button variant='ghost'>Ghost Variant</Button>
                </div>
                <div className='flex flex-wrap gap-2'>
                  <Button disabled variant='primary'>
                    Disabled
                  </Button>
                  <Button disabled variant='secondary'>
                    Disabled
                  </Button>
                  <Button disabled variant='outline'>
                    Disabled
                  </Button>
                  <Button disabled variant='ghost'>
                    Disabled
                  </Button>
                </div>
                <div className='flex flex-wrap gap-2'>
                  <Button isLoading variant='primary'>
                    Disabled
                  </Button>
                  <Button isLoading variant='secondary'>
                    Disabled
                  </Button>
                  <Button isLoading variant='outline'>
                    Disabled
                  </Button>
                  <Button isLoading variant='ghost'>
                    Disabled
                  </Button>
                </div>
              </li>
              <li className='space-y-2'>
                <h2 className='text-lg md:text-xl'>Custom 404 Page</h2>

                <div className='flex flex-wrap gap-2'>
                  <ButtonLink href='/404'>Visit the 404 page</ButtonLink>
                </div>
              </li>
              <li className='space-y-2'>
                <h2 className='text-lg md:text-xl'>Next Image</h2>

                <NextImage
                  useSkeleton
                  className='w-32 md:w-40'
                  src='/favicon/apple-icon-180x180.png'
                  width='180'
                  height='180'
                  alt='Icon'
                />
              </li>
              <li className='space-y-2'>
                <h2 className='text-lg md:text-xl'>Skeleton</h2>
                <Skeleton className='h-72 w-72' />
              </li>
            </ol>
          </div>
        </section>
      </main>
    </Layout>
  );
}
