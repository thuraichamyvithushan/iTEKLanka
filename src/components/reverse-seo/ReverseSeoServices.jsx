import React from 'react';
import { motion } from 'framer-motion';
import {
    FaShieldAlt, FaArrowDown, FaPlusCircle, FaSearchMinus, FaUserSecret, FaBullseye
} from 'react-icons/fa';

const services = [
    {
        title: 'Result Suppression',
        description: 'We push negative or unfair search results off the first page by building up more powerful, positive assets.',
        icon: <FaArrowDown className="text-5xl" />,
        accent: 'red-600'
    },
    {
        title: 'Positive Promotion',
        description: 'Elevating the great things people say about you. We ensure your best achievements are what customers see first.',
        icon: <FaPlusCircle className="text-5xl" />,
        accent: 'rose-600'
    },
    {
        title: 'Content Dilution',
        description: 'Strategic creation of high-authority content that naturally pushes unwanted links further down the search stack.',
        icon: <FaShieldAlt className="text-5xl" />,
        accent: 'red-500'
    },
    {
        title: 'De-Indexing Requests',
        description: 'When legal grounds exist, we manage the technical and administrative process of requesting link removal from search engines.',
        icon: <FaSearchMinus className="text-5xl" />,
        accent: 'rose-500'
    },
    {
        title: 'Discrete Presence',
        description: 'We work quietly in the background. Our strategies are natural and ethical, ensuring your reputation fix stays permanent.',
        icon: <FaUserSecret className="text-5xl" />,
        accent: 'red-700'
    },
    {
        title: 'Crisis Monitoring',
        description: 'Real-time monitoring of your brand mentions across the web, allowing us to respond to threats before they rank.',
        icon: <FaBullseye className="text-5xl" />,
        accent: 'rose-700'
    },
];

const cardVariants = {
    initial: { opacity: 0, y: 60 },
    animate: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, duration: 1.1, ease: [0.16, 1, 0.3, 1] }
    }),
    hover: {
        y: -12,
        scale: 1.03,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export default function ReverseSeoServices() {
    return (
        <section className="relative bg-white py-20 md:py-30 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/40 via-white to-rose-50/30" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-12 md:mb-30">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="inline-flex items-center gap-4 px-6 py-3 bg-black/5 backdrop-blur-sm border border-black/5 rounded-full mb-8"
                    >
                        <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-red-700 font-semibold text-sm uppercase tracking-[0.3em]">
                            THE DEFENSE STRATEGY
                        </span>
                    </motion.div>

                    <h2 className="text-5xl sm:text-7xl md:text-9xl font-black text-gray-900 leading-none tracking-[-0.04em] mb-10 uppercase">
                        REPUTATION <span className="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">DEFENSE</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-3xl mx-auto leading-relaxed">
                        Take back control of your search engine results. We use advanced SEO techniques to manage what the world sees about your brand.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={cardVariants}
                            initial="initial"
                            whileInView="animate"
                            whileHover="hover"
                            viewport={{ once: true, margin: "-80px" }}
                            className="group relative"
                        >
                            <div className={`
                relative h-full p-10 md:p-12 rounded-3xl
                bg-white border border-gray-100
                hover:border-red-400/40 hover:shadow-xl
                transition-all duration-700 overflow-hidden
                shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)]
              `}>
                                <div className={`
                  w-24 h-24 rounded-3xl bg-gray-50 border border-gray-100
                  flex items-center justify-center mb-10
                  transition-all duration-600 shadow-md
                  group-hover:scale-110 group-hover:rotate-3
                `}>
                                    <div className={`text-black group-hover:text-red-600 transition-colors duration-500`}>
                                        {service.icon}
                                    </div>
                                </div>

                                <h3 className="text-2xl md:text-4xl font-black text-gray-700 mb-6 tracking-tight leading-none uppercase italic">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 text-lg leading-relaxed mb-12 group-hover:text-gray-800 transition-colors">
                                    {service.description}
                                </p>

                                <div className="flex items-center justify-between mt-auto">
                                    <div className={`
                      h-0.5 w-16 bg-gray-200 rounded-full
                      group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-${service.accent} group-hover:to-transparent
                      transition-all duration-700
                    `} />
                                    <div className={`text-black opacity-40 group-hover:text-red-600 group-hover:opacity-100 transition-all duration-500 text-4xl font-light`}>
                                        →
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
