import React from 'react';
import HomeHero from './HomeHero';
import HomeServices from './HomeServices';
import HomeAbout from './HomeAbout';
import HomeWhyChoose from './HomeWhyChoose';
import HomeTestimonials from './HomeTestimonials';
import HomeBlog from './HomeBlog';
import HomeCaseStudies from './HomeCaseStudies';
import HomeFaq from './HomeFaq';
import ServicesShowcaseHome from './Homeservice.jsx';

export default function Home() {
    return (
        <div className="relative selection:bg-red-600 selection:text-white min-h-screen mt-[-130px]">
            <HomeHero />
            <HomeServices />
            <HomeAbout />
            <HomeWhyChoose />
            <ServicesShowcaseHome />
            <HomeBlog />
            <HomeCaseStudies />
            <HomeTestimonials />
            <HomeFaq />
        </div>
    );
}
