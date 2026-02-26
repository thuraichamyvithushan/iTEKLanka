import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
    {
        title: 'ORGANIC REACH EXPANSION',
        description: 'Dominate feeds without relying solely on ad spend. We optimize your content for algorithms to reach more people naturally.'
    },
    {
        title: 'USER TRUST & LOALTY',
        description: 'Consistent, high-quality content and active community management build a brand that people trust and return to.'
    },
    {
        title: 'DATA-DRIVEN INSIGHTS',
        description: 'Understand exactly what your audience likes and when they engage, allowing you to refine your business decisions.'
    }
];

const SocialMarketingBenefits = () => {
    return (
        <section className="relative bg-black pt-0 py-0 mt-0 mb-20 overflow-hidden">
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
                            className="relative z-10 p-12 md:p-20 bg-white shadow-2xl rounded-[4rem] overflow-hidden"
                        >
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-50" />

                            <h3 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tighter uppercase leading-[0.8] italic">
                                GROW <br />
                                <span className="text-red-600">CONNECTED</span>
                            </h3>

                            <p className="text-gray-600 text-xl mb-12 font-medium leading-relaxed">
                                Effective social marketing is the heartbeat of modern business, turning passive observers into active customers.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8 relative z-10">
                                <div className="p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:border-red-500/30 transition-all duration-500 shadow-sm">
                                    <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2">3.5<span className="text-2xl">x</span></div>
                                    <div className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">Reach Boost</div>
                                </div>
                                <div className="p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:border-red-500/30 transition-all duration-500 shadow-sm">
                                    <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2">24/7</div>
                                    <div className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">Community Pulse</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="absolute -bottom-10 -right-10 hidden xl:flex flex-col justify-center items-center h-48 w-48 bg-red-600 text-white p-8 rounded-[3rem] shadow-2xl z-20 border border-white/20"
                        >
                            <div className="text-5xl font-black mb-1">PRO</div>
                            <p className="text-[10px] font-black uppercase text-center tracking-widest leading-tight">
                                BRAND <br /> AUTHORITY
                            </p>
                        </motion.div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-8">
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                <span className="text-red-400 font-semibold text-xs uppercase tracking-[0.2em]">The Marketing Edge</span>
                            </div>

                            <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.85] uppercase">
                                WHY SOCIAL <br />
                                <span className="bg-gradient-to-r from-gray-400 to-gray-200 bg-clip-text text-transparent italic opacity-40 text-4xl md:text-7xl">STRATEGY</span>
                            </h2>

                            <div className="space-y-12">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="group relative">
                                        <div className="flex items-start gap-8">
                                            <div className="mt-2 h-[2px] w-12 bg-white/10 group-hover:w-20 group-hover:bg-red-500 transition-all duration-700" />
                                            <div>
                                                <h4 className="text-white text-xl md:text-2xl font-black uppercase tracking-[0.1em] mb-4 group-hover:text-red-500 transition-colors duration-500">
                                                    {benefit.title}
                                                </h4>
                                                <p className="text-gray-400 text-lg leading-relaxed font-medium max-w-xl">
                                                    {benefit.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialMarketingBenefits;
