import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../../assets/about1.jpg';

const AboutStory = () => {
    return (
        <section className="py-24 md:py-32 bg-white overflow-hidden relative">
            {/* Subtle light ambient background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/40 via-white to-rose-50/30" />
                <div className="absolute -top-40 -left-40 w-[900px] h-[900px] bg-red-100/20 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="inline-flex items-center gap-4 px-6 py-3 bg-black/5 backdrop-blur-sm border border-black/5 rounded-full mb-10">
                            <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-red-700 font-black text-xs uppercase tracking-[0.4em]">
                                Foundational Identity
                            </span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-10 uppercase tracking-tight leading-[0.9]">
                            OUR <span className="italic text-red-500">STORY.</span>
                        </h2>

                        <div className="space-y-8 text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
                            <p>
                                At iTek Solutions, we believe every ambitious Sri Lankan business — and every international brand operating here — deserves world-class digital performance without the usual agency excuses and lock-ins.
                            </p>

                            <div className="p-8 bg-gray-50 border-l-4 border-red-600 rounded-r-2xl shadow-sm">
                                <p className="text-2xl font-black text-gray-900 uppercase italic leading-tight">
                                    "WE STARTED WITH ONE OBSESSION: <span className="text-red-500">TURN CLICKS INTO REAL REVENUE.</span>"
                                </p>
                            </div>

                            <p>
                                From Jaffna to Colombo, we grew into a results-first partner trusted by eCommerce brands, service businesses, startups and global companies — delivering SEO domination, paid media scaling, conversion optimization and customer retention systems that actually compound.
                            </p>
                        </div>
                    </motion.div>

                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative"
                    >
                        <div className="relative group rounded-[3rem] overflow-hidden border border-gray-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] hover:shadow-[0_60px_120px_-30px_rgba(239,68,68,0.15)] transition-all duration-700">
                            <motion.img
                                src={aboutImage}
                                alt="iTek Solutions team"
                                className="w-full h-auto brightness-95 group-hover:brightness-105 transition-all duration-1000 block"
                                whileHover={{ scale: 1.05 }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                            {/* Glass status overlay */}
                            <div className="absolute bottom-10 left-10 right-10">
                                <div className="p-6 bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-xl">
                                    <p className="text-xs font-mono text-red-600 mb-1 font-bold">ESTABLISHED • 2020</p>
                                    <p className="text-white font-black text-lg uppercase tracking-wider drop-shadow-md">Sri Lanka's Growth Engine</p>
                                </div>
                            </div>
                        </div>

                        {/* Accent Orbs */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-100/30 rounded-full blur-[100px] pointer-events-none" />
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-red-100/20 rounded-full blur-[100px] pointer-events-none" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutStory;
