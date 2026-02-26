import React from 'react';
import { motion } from 'framer-motion';

const auditBenefits = [
    {
        title: 'IMMEDIATE SITE SPEED GAINS',
        description: 'We identify the technical baggage slowing you down, helping your site load faster for better user satisfaction and ranking.'
    },
    {
        title: 'ZERO CRAWL ERRORS',
        description: 'Clean up the path for Google\'s web crawlers. We identify every 404, redirect loop, and broken script on your site.'
    },
    {
        title: 'CLEAR COMPETITOR EDGE',
        description: 'Discover exactly where your competitors are vulnerable so you can focus your marketing spend where it matters most.'
    }
];

const SeoAuditBenefits = () => {
    return (
        <section className="relative bg-black pt-0 py-0 mt-0 mb-20 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-[1000px] h-[1000px] bg-red-600/5 rounded-full blur-[200px]" />
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
                            <h3 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tighter uppercase leading-[0.8] italic">
                                FIX THE <br />
                                <span className="text-red-600">INVISIBLE</span>
                            </h3>

                            <p className="text-gray-600 text-xl mb-12 font-medium leading-relaxed">
                                Most websites are broken in ways the owners can't see. We provide the eyes you need to fix your foundation.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8 relative z-10">
                                <div className="p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:border-red-500/30 transition-all duration-500 shadow-sm">
                                    <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2">+60<span className="text-2xl">%</span></div>
                                    <div className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">Speed Increase</div>
                                </div>
                                <div className="p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:border-red-500/30 transition-all duration-500 shadow-sm">
                                    <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2">100<span className="text-2xl">%</span></div>
                                    <div className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">Clarity Gained</div>
                                </div>
                            </div>
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
                                <span className="text-red-400 font-semibold text-xs uppercase tracking-[0.2em]">Audit ROI</span>
                            </div>

                            <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.85] uppercase">
                                WHY AUDIT <br />
                                <span className="bg-gradient-to-r from-gray-400 to-gray-200 bg-clip-text text-transparent italic opacity-40 text-4xl md:text-7xl">FIRST?</span>
                            </h2>

                            <div className="space-y-12">
                                {auditBenefits.map((benefit, index) => (
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

export default SeoAuditBenefits;
