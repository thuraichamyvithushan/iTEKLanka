import React from 'react';
import { motion } from 'framer-motion';

const points = [
    'Facebook & Instagram Ad Mastery',
    'LinkedIn Reach for Professional Services',
    'Colombo-Focused Demographic Targeting',
    'Conversion Tracking & ROI Maps',
    'Stop-the-Scroll Content Direction',
];

export default function SocialMediaContent() {
    return (
        <section className="relative bg-black py-20 md:py-0 md:pb-30 overflow-hidden">
            {/* Dark atmosphere elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-[1000px] h-[1000px] bg-red-600/5 rounded-full blur-[200px]" />
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-violet-600/3 rounded-full blur-[180px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row gap-24 xl:gap-32 items-center">
                    {/* Visual Side */}
                    <div className="w-full lg:w-1/2 relative group">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2 }}
                            className="relative z-10 p-8 sm:p-12 md:p-20 bg-white shadow-2xl rounded-[3rem] sm:rounded-[4rem] overflow-hidden"
                        >
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-50" />

                            <h3 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tighter uppercase leading-[0.8] italic">
                                SCALE <br />
                                <span className="text-red-600 font-black">FAST</span>
                            </h3>

                            <p className="text-gray-600 text-lg sm:text-xl mb-12 font-medium leading-relaxed">
                                We help Sri Lankan brands stop fighting for attention and start building legitimate presence in every smartphone feed.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 relative z-10">
                                <div className="p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:border-red-500/30 transition-all duration-500 shadow-sm">
                                    <div className="text-4xl sm:text-5xl font-black text-gray-900 mb-2">4.8x</div>
                                    <div className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">Avg. ROAS</div>
                                </div>
                                <div className="p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:border-red-500/30 transition-all duration-500 shadow-sm">
                                    <div className="text-4xl sm:text-5xl font-black text-gray-900 mb-2">85<span className="text-xl sm:text-2xl">%</span></div>
                                    <div className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">Market Reach</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Metadata */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="absolute -bottom-10 -right-10 hidden xl:flex flex-col justify-center items-center h-48 w-48 bg-red-600 text-white p-8 rounded-[3rem] shadow-2xl z-20 border border-white/20"
                        >
                            <div className="text-5xl font-black mb-1">ROI</div>
                            <p className="text-[10px] font-black uppercase text-center tracking-widest leading-tight">
                                MARKET <br /> LEADERSHIP
                            </p>
                        </motion.div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-8">
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                <span className="text-red-400 font-semibold text-xs uppercase tracking-[0.2em]">Social Strategy</span>
                            </div>

                            <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.85] uppercase">
                                FEED IS YOUR <br />
                                <span className="bg-gradient-to-r from-gray-400 to-gray-200 bg-clip-text text-transparent italic opacity-40 text-4xl md:text-7xl">REAL MARKETPLACE.</span>
                            </h2>

                            <p className="text-gray-400 text-xl md:text-2xl font-medium leading-relaxed mb-16 max-w-xl">
                                Don't throw money at "Boost Post" buttons. We build sophisticated advertising funnels that capture high-intent buyers where they spend their time.
                            </p>

                            <div className="space-y-8">
                                {points.map((point, index) => (
                                    <div key={index} className="flex items-center gap-8 group">
                                        <div className="h-[2px] w-12 bg-white/10 group-hover:w-20 group-hover:bg-red-500 transition-all duration-700" />
                                        <span className="text-white text-lg font-black uppercase tracking-[0.3em] group-hover:text-red-500 transition-colors duration-500">
                                            {point}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
