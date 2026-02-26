import React from 'react';
import ProjectsHero from './ProjectsHero';
import ProjectsShowcase from './ProjectsShowcase';
import heroVisual from '../../assets/services/project1.webp';
import ProjectWhyChoose from './projectWhychooseus';
import CTA from './cta';

const Projects = () => {
    return (
        <div className="bg-black relative text-white selection:bg-red-600 selection:text-white min-h-screen mt-[-130px]">
            <ProjectsHero heroImage={heroVisual} />
            <ProjectsShowcase />
            <ProjectWhyChoose/>
            <CTA/>
        </div>
    );
};

export default Projects;
