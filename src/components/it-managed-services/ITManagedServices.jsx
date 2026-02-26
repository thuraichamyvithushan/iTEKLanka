import React from 'react';
import ManagedServicesHero from './ManagedServicesHero';
import ManagedServicesList from './ManagedServicesList';
import ManagedServicesWhyChoose from './ManagedServicesWhyChoose';
import ManagedServicesBenefits from './ManagedServicesBenefits';
import ManagedServicesFaq from './ManagedServicesFaq';
import WebCTA from '../web-design/webCta';
import heroVisual from '../../assets/services/itservice3.jpg'; // Reusing or you can replace with a more specific IT image later

const ITManagedServices = () => {
    return (
        <div className="bg-black relative text-white selection:bg-red-600 selection:text-white min-h-screen mt-[-130px]">
            <ManagedServicesHero heroImage={heroVisual} />
            <ManagedServicesList />
            <ManagedServicesWhyChoose />
            <ManagedServicesBenefits />
            <ManagedServicesFaq />
            <WebCTA />
        </div>
    );
};

export default ITManagedServices;
