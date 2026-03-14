import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/HeroSection.jsx';
import OperationalSystems from '@/components/OperationalSystems.jsx';
import WhoWeWorkWith from '@/components/WhoWeWorkWith.jsx';
import SystemsBenefits from '@/components/SystemsBenefits.jsx';
import PlatformOverview from '@/components/PlatformOverview.jsx';
import FinalCTA from '@/components/FinalCTA.jsx';

const HomePage = () => {
  return (
    <div className="bg-background min-h-screen text-foreground">
      <Helmet>
        <title>NivoraTech - Custom AI-Powered Software Systems</title>
        <meta name="description" content="We design and build intelligent software platforms such as booking systems, CRM platforms, workflow automation tools, and operational dashboards that help businesses streamline operations and scale efficiently." />
      </Helmet>

      <HeroSection />
      <OperationalSystems />
      <WhoWeWorkWith />
      <SystemsBenefits />
      <PlatformOverview />
      <FinalCTA />
    </div>
  );
};

export default HomePage;