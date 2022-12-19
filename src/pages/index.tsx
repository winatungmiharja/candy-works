import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import AboutSection from '@/container/section/AboutSection';
import LandingSection from '@/container/section/LandingSection';

export default function IndexPage() {
  return (
    <Layout>
      <Seo />
      <LandingSection />
      <AboutSection />
    </Layout>
  );
}
