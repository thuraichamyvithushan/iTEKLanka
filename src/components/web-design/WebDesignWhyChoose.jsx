import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaMapMarkerAlt, FaMedal } from 'react-icons/fa';

const features = [
    {
        title: 'Expert Team',
        description: 'Highly skilled designers and developers with years of experience across global industries.',
        icon: <FaUsers />,
    },
    {
        title: 'Sri Lanka-Focused SEO',
        description: 'Strategies tailored to dominate the local market and connect with Sri Lankan customers.',
        icon: <FaMapMarkerAlt />,
    },
    {
        title: 'Premium Quality & Support',
        description: 'We prioritize excellence in every pixel and provide ongoing support for your growth.',
        icon: <FaMedal />,
    },
];

const WebDesignWhyChoose = () => {
    return (
        <section className="relative bg-black py-20 md:py-35 overflow-hidden">
            {/* Dark atmosphere elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[150px]" />
                <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-indigo-600/3 rounded-full blur-[180px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-14">
                    {/* Left content */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-8">
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                <span className="text-red-400 font-semibold text-xs uppercase tracking-[0.2em]">Why Us</span>
                            </div>

                            <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.85] tracking-tight mb-10 uppercase">
                                WHY WORK <br />
                                <span className="bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text text-transparent italic">WITH US?</span>
                            </h2>

                            <p className="text-gray-400 text-xl md:text-2xl font-medium leading-relaxed max-w-xl">
                                We're not just building a website; we're building a tool to help you reach more customers and grow your business.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right grid */}
                    <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                className={`group relative p-10 rounded-[2.5rem] border transition-all duration-700 ${index === 0
                                    ? 'bg-gradient-to-br from-red-600 to-rose-700 sm:col-span-2 border-transparent shadow-2xl shadow-red-900/20'
                                    : 'bg-white/5 border-white/8 hover:border-white/20 hover:bg-white/10 shadow-2xl shadow-black/40'
                                    }`}
                            >
                                <div className={`text-4xl mb-8 transform group-hover:scale-110 transition-transform duration-500 ${index === 0 ? 'text-white' : 'text-red-500'
                                    }`}>
                                    {feature.icon}
                                </div>
                                <h3 className={`text-2xl md:text-3xl font-black mb-4 tracking-tight uppercase italic ${index === 0 ? 'text-white' : 'text-white'
                                    }`}>
                                    {feature.title}
                                </h3>
                                <p className={`leading-relaxed font-medium ${index === 0 ? 'text-white/80' : 'text-gray-400'
                                    }`}>
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebDesignWhyChoose;
