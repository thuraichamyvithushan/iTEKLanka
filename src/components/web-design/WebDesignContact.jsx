import React from 'react';
import { motion } from 'framer-motion';

const WebDesignContact = () => {
    return (
        <section className="relative bg-black py-20 md:py-35 overflow-hidden text-center">
            {/* Background glow orbs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-red-600/10 rounded-full blur-[160px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-rose-900/10 rounded-full blur-[140px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-950/20 rounded-full blur-[120px]" />
            </div>

            {/* Subtle grid lines */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                    backgroundSize: '80px 80px',
                }}
            />

            <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-10"
                >
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-red-400 font-semibold text-xs uppercase tracking-[0.25em]">Let's Work Together</span>
                </motion.div>

                {/* Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 }}
                    className="text-5xl sm:text-7xl md:text-8xl font-black text-white leading-[0.85] tracking-[-0.04em] mb-8 uppercase"
                >
                    Ready to
                    <br />
                    <span className="bg-gradient-to-r from-red-500 via-rose-400 to-red-600 bg-clip-text text-transparent italic">
                        Elevate?
                    </span>
                </motion.h2>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                    className="text-gray-400 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto mb-14"
                >
                    Let's build the digital foundation your brand deserves.
                    Fill out our contact form and we'll get back to you within 2 hours.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.3 }}
                >
                    <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-4 px-14 py-6 bg-gradient-to-r from-red-600 to-rose-600 text-white font-black text-lg uppercase tracking-[0.2em] rounded-2xl shadow-2xl shadow-red-900/40 hover:shadow-red-700/60 transition-all duration-500"
                    >
                        Contact Us
                        <span className="text-2xl">→</span>
                    </motion.a>
                </motion.div>

                {/* Info pills */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16"
                >
                    <div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-gray-400 text-sm font-medium">
                        <span className="text-red-500">✆</span>
                        +94 77 123 4567
                    </div>
                    <div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-gray-400 text-sm font-medium">
                        <span className="text-red-500">✉</span>
                        thuraichamyvithushan19@gmail.com
                    </div>
                    <div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-gray-400 text-sm font-medium">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
                        &lt; 2hr Response
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WebDesignContact;
