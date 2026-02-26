import React from 'react';
import AboutHero from './about/AboutHero';
import AboutStory from './about/AboutStory';
import AboutWhyPartner from './about/AboutWhyPartner';
import AboutValues from './about/AboutValues';
import AboutCommunity from './about/AboutCommunity';

export default function Aboutus() {
  return (
    <div className="relative selection:bg-red-600 selection:text-white min-h-screen mt-[-130px] bg-black">
      <AboutHero />
      <AboutStory />
      <AboutWhyPartner />
      <AboutValues />
      <AboutCommunity />
    </div>
  );
}
