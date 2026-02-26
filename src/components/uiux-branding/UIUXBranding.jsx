import React from 'react';
import UIUXHero from './UIUXHero';
import UIUXServices from './UIUXServices';
import UIUXWhyChoose from './UIUXWhyChoose';
import UIUXBenefits from './UIUXBenefits';
import UIUXFaq from './UIUXFaq';
import WebCTA from '../web-design/webCta';
import heroVisual from '../../assets/services/ui.avif'; 
const UIUXBranding = () => {
    return (
        <div className="bg-black relative text-white selection:bg-red-600 selection:text-white min-h-screen mt-[-130px]">
            <UIUXHero heroImage={heroVisual} />
            <UIUXServices />
            <UIUXWhyChoose />
            <UIUXBenefits />
            <UIUXFaq />
            <WebCTA />
        </div>
    );
};

export default UIUXBranding;
