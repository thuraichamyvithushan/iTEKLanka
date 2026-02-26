import React from 'react';
import YoutubeAdsHeroSection from './YoutubeAdsHeroSection';
import YoutubeAdsServicesSection from './YoutubeAdsServicesSection';
import YoutubeAdsWhyChoose from './YoutubeAdsWhyChoose';
import YoutubeAdsBenefits from './YoutubeAdsBenefits';
import YoutubeAdsFaq from './YoutubeAdsFaq';
import WebCTA from '../web-design/webCta';

const YoutubeAds = () => {
    return (
        <div className='bg-black relative text-white selection:bg-red-600 selection:text-white min-h-screen mt-[-130px]'>
            <YoutubeAdsHeroSection />
            <YoutubeAdsServicesSection />
            <YoutubeAdsWhyChoose />
            <YoutubeAdsBenefits />
            <YoutubeAdsFaq />
            <WebCTA />
        </div>
    );
};

export default YoutubeAds;
