import React from 'react';
import { motion } from 'framer-motion';
import bannerVideo from '../../assets/banner.mp4';

const AboutHero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-37 pb-20 mt-[-130px]">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                >
                    <source src={bannerVideo} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Background atmosphere */}
            <div className="absolute inset-0 pointer-events-none z-[1]">
                <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-black to-indigo-950/10" />
                <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-3xl opacity-60" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-red-600/3 rounded-full blur-[180px]" />

                {/* Noise overlay */}
                <div className="absolute inset-0 opacity-[0.02] mix-blend-soft-light pointer-events-none">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <filter id="noiseAbout">
                            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" />
                        </filter>
                        <rect width="100%" height="100%" filter="url(#noiseAbout)" />
                    </svg>
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/8 rounded-full mb-10">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-red-400/90 font-semibold text-xs uppercase tracking-[0.3em]">
                            OUR IDENTITY
                        </span>
                    </div>

                    <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] tracking-tight mb-10 uppercase">
                        WE ARE
                        <br />
                        <span className="bg-gradient-to-r from-red-500 via-red-400 to-rose-500 bg-clip-text text-transparent">
                            iTEK SOLUTIONS.
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl lg:text-3xl text-gray-300/80 font-medium max-w-5xl mx-auto leading-tight mb-14">
                        Sri Lanka's Proudly Homegrown Leader in Performance Marketing,
                        <span className="text-white block mt-2">SEO & Digital Growth Solutions.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <motion.button
                            whileHover={{ scale: 1.05, y: -4 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-12 py-6 bg-red-600 text-white font-black rounded-2xl shadow-2xl shadow-red-900/30 text-sm uppercase tracking-widest border border-red-500/50"
                        >
                            Proudly Made in Sri Lanka
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Hero bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </section>
    );
};

export default AboutHero;
