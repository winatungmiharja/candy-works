import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import DetailSection from '@/container/section/DetailSection';

export default function CandyPage() {
  return (
    <Layout>
      <Seo templateTitle='Candy' />

      <DetailSection />
    </Layout>
  );
}
