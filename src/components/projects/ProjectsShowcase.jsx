import React, { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

// Pink Automotive
import pinkMain from '../../assets/Projects Images/PA/Pi-Au-main.png';
import pink1 from '../../assets/Projects Images/PA/001.png';
import pink2 from '../../assets/Projects Images/PA/002.png';
// import pink3 from '../../assets/Projects Images/PA/003.jpg';

// MotoTrekkin
import motoMain from '../../assets/Projects Images/MOTO TREKKIN/motot-main.jpg';
import moto1 from '../../assets/Projects Images/MOTO TREKKIN/001.png';
import moto2 from '../../assets/Projects Images/MOTO TREKKIN/002.png';
import moto3 from '../../assets/Projects Images/MOTO TREKKIN/003.png';


// Pizza Times Jaffna
import pizzaMain from '../../assets/Projects Images/PIZZA TIMES/001.png';
import pizza1 from '../../assets/Projects Images/PIZZA TIMES/002.png';
import pizza2 from '../../assets/Projects Images/PIZZA TIMES/003.png';
// import pizza3 from '../../assets/Projects Images/PIZZA TIMES/3.jpg';

// Vanys Garlands
import vanysMain from '../../assets/Projects Images/VANYS GARLANDS/vany-main.jpg';
import vanys1 from '../../assets/Projects Images/VANYS GARLANDS/001.png';
import vanys2 from '../../assets/Projects Images/VANYS GARLANDS/002.png';
import vanys3 from '../../assets/Projects Images/VANYS GARLANDS/003.png';

// // Huntsman Optics
import huntsmanMain from '../../assets/Projects Images/Huntsman/Huntsman-main.png';
import huntsman1 from '../../assets/Projects Images/Huntsman/001.png';
import huntsman2 from '../../assets/Projects Images/Huntsman/002.png';
import huntsman3 from '../../assets/Projects Images/Huntsman/003.png';

// // Alien Snail
import alienMain from '../../assets/Projects Images/ALIEN SNAIL/Alien-Snail-main.png';
import alien1 from '../../assets/Projects Images/ALIEN SNAIL/001.png';
import alien2 from '../../assets/Projects Images/ALIEN SNAIL/002.png';
import alien3 from '../../assets/Projects Images/ALIEN SNAIL/003.png';

const projects = [
    {
        name: 'Pink Automotive – Safe & Trusted Vehicle Care',
        description: 'A modern automotive service website built to showcase professional car repair, maintenance, and mechanical solutions across Australia. Designed for trust-building, service clarity, and seamless booking enquiries.',
        image: pinkMain,
        gallery: [
            pink1,
            pink2
        ],
        category: 'Web Design & Development',
        websiteUrl: 'https://pinkautomotive.com.au/'
    },
    {
        name: 'MotoTrekkin – Adventure Motorcycle Tours',
        description: 'A high-energy website showcasing motorcycle tours, adventure packages, and booking options for riders seeking thrilling experiences. Built for clarity, conversions, and adventure branding.',
        image: motoMain,
        gallery: [moto1,
            moto2,
            moto3],
        category: 'Tour & Adventure Website',
        websiteUrl: 'https://mototrekkin.com/'
    },
    {
        name: 'Pizza Times Jaffna – Digital Marketing Campaign',
        description: 'A results-driven digital marketing campaign designed to increase brand awareness, boost online orders, and dominate local search in Jaffna. The strategy focused on social media advertising, local SEO optimisation, paid promotions, and conversion-focused landing improvements to drive measurable sales growth.',
        image: pizzaMain,
        gallery: [pizza1,
            pizza2,
            ],
        category: 'Digital Marketing',
        websiteUrl: 'https://www.facebook.com/pizzajaffna/'
    },
    {
        name: 'Vanys Garlands – Handmade Decorative Garlands',
        description: 'A visually rich website for handmade decorative garlands, highlighting craftsmanship, product details, and easy ordering options for customers.',
        image: vanysMain,
        gallery: [vanys1,
            vanys2,
            vanys3],
        category: 'Handmade Product Website',
        websiteUrl: 'https://vanysgarlands.com/'
    },
    {
        name: 'Huntsman Optics – Precision Optical Solutions',
        description: 'A sleek e-commerce website for premium eyewear and optical products. Designed for performance, product presentation, and seamless online shopping experience.',
        image: huntsmanMain,
        gallery: [
            huntsman1,
            huntsman2,
            huntsman3
        ],
        category: 'E-commerce',
        websiteUrl: 'https://huntsmanoptics.com/au/'
    },
    {
        name: 'Alien Snail – Creative Digital Brand',
        description: 'A bold and modern brand website crafted to reflect creativity and uniqueness. Built with strong visual identity, smooth animations, and engaging storytelling.',
        image: alienMain,
        gallery: [
            alien1,
            alien2,
            alien3
        ],
        category: 'Branding & Web Design',
        websiteUrl: 'https://aliensnail.com.au/'
    }
];


const ProjectsShowcase = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeImageIdx, setActiveImageIdx] = useState(0);

    const openModal = (project) => {
        setSelectedProject(project);
        setActiveImageIdx(0);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <section className="relative bg-white py-20 md:py-35 overflow-hidden">
            {/* Light atmosphere */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-1/4 -left-1/4 w-[900px] h-[900px] bg-red-50/30 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 -right-1/4 w-[700px] h-[700px] bg-rose-50/20 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-40 space-y-12 md:space-y-0 text-left">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-4 px-6 py-3 bg-black/5 backdrop-blur-sm border border-black/5 rounded-full mb-8"
                        >
                            <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-red-700 font-semibold text-sm uppercase tracking-[0.3em]">
                                Full Portfolio
                            </span>
                        </motion.div>

                        <h2 className="text-6xl md:text-9xl font-black text-gray-900 leading-[0.82] tracking-[-0.04em] mb-10 uppercase">
                            OUR <br />
                            <span className="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent italic">PROJECTS</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed border-l-4 border-red-500 pl-10 pt-2">
                            A collection of our most impactful work across various industries and technologies.
                        </p>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-12 py-6 bg-black text-white rounded-2xl hover:bg-red-600 transition-all font-black uppercase tracking-widest text-xs shadow-2xl shadow-black/20"
                    >
                        Contact For Inquiries +
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="group relative cursor-pointer"
                            onClick={() => openModal(project)}
                        >
                            <div className="aspect-[4/5] overflow-hidden rounded-[3.5rem] bg-gray-50 border border-gray-100 shadow-xl group-hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] transition-all duration-1000 relative mb-10">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1.5s]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                <div className="absolute inset-0 flex flex-col justify-end p-12 opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-700">
                                    <h3 className="text-4xl font-black text-white mb-4 tracking-tighter uppercase leading-none">{project.name}</h3>
                                    <p className="text-gray-300 text-lg font-medium">{project.description}</p>
                                </div>
                            </div>

                            <div className="px-6">
                                <h3 className="text-3xl font-black tracking-tight uppercase italic text-red-600 group-hover:text-black transition-colors duration-500">{project.name}</h3>
                                <div className="flex items-center gap-4 mt-4">
                                    <div className="w-8 h-[2px] bg-red-500 group-hover:w-16 transition-all duration-700" />
                                    <p className="text-gray-500 font-black uppercase tracking-[0.2em] text-xs">{project.category}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Project Details Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeModal}
                            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-6xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row h-full max-h-[90vh]"
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-8 right-8 z-50 w-12 h-12 bg-black/10 hover:bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center border border-black/5 transition-all text-black"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Left: Gallery Section */}
                            <div className="w-full lg:w-[60%] bg-gray-50 relative overflow-hidden group/gallery">
                                <div className="h-full w-full  flex items-center justify-center">
                                    <motion.img
                                        key={activeImageIdx}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                        src={selectedProject.gallery[activeImageIdx]}
                                        className="w-300 h-auto "
                                        alt={`${selectedProject.name} gallery ${activeImageIdx}`}
                                    />
                                </div>

                                {/* Gallery Nav */}
                                <div className="absolute p bottom-10 left-1/2 -translate-x-1/2 flex gap-3 px-6 py-3 bg-white/20 backdrop-blur-xl rounded-full border border-white/30">
                                    {selectedProject.gallery.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveImageIdx(idx)}
                                            className={`h-2 transition-all duration-300 rounded-full ${activeImageIdx === idx ? 'w-8 bg-black' : 'w-2 bg-black/20 hover:bg-black/40'}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Right: Info Section */}
                            <div className="w-full lg:w-[40%] p-10 md:p-16 overflow-y-auto bg-white flex flex-col justify-center">
                                <div className="mb-4 mt-10">
                                    <div className="inline-block px-4 py-1.5 bg-red-100 text-red-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                                        {selectedProject.category}
                                    </div>
                                    <h2 className="text-4xl md:text-4xl font-black text-black uppercase leading-tight tracking-tighter mt-6 mb-8 italic">
                                        {selectedProject.name}
                                    </h2>
                                    <div className="w-20 h-1 bg-red-600 mb-10" />
                                </div>

                                <div className="space-y-8">
                                    <div>
                                        <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mb-4">Project Overview</h4>
                                        <p className="text-gray-600 text-lg leading-relaxed font-medium">
                                            {selectedProject.description}
                                        </p>
                                    </div>

                                    <div className="pt-10 flex flex-col gap-4">
                                        <motion.a
                                            href={selectedProject.websiteUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full py-6 bg-black text-white text-center rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-black/10 hover:bg-red-600 transition-all"
                                        >
                                            Visit Live Website
                                        </motion.a>
                                        <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-2">
                                            Handcrafted by iTek Solutions
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ProjectsShowcase;
