import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaHeart, FaHandshake } from 'react-icons/fa';

const features = [
    {
        title: 'We Understand Aesthetics',
        description: 'You cannot put an ugly ad on Instagram and expect people to care. We know exactly what styles, colors, and vibes people in Sri Lanka actually pause to look at.',
        icon: <FaEye />,
    },
    {
        title: 'Quality Over Quantity',
        description: 'We do not just chase empty followers. We build campaigns designed to find people who genuinely love your visual brand and want to buy what you sell.',
        icon: <FaHeart />,
    },
    {
        title: 'Total Transparency',
        description: 'You will always know exactly how much you are spending and exactly what visual assets are working best. No hiding behind confusing marketing terms.',
        icon: <FaHandshake />,
    },
];

const InstagramAdsWhyChoose = () => {
    return (
        <section className="relative bg-black py-20 md:py-35 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[150px]" />
                <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-indigo-600/3 rounded-full blur-[180px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-14">
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-8">
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                <span className="text-red-400 font-semibold text-xs uppercase tracking-[0.2em]">Why Trust iTek</span>
                            </div>

                            <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.85] tracking-tight mb-10 uppercase">
                                VISUAL. <br />
                                <span className="bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text text-transparent italic">IMPACT.</span>
                            </h2>

                            <p className="text-gray-400 text-xl md:text-2xl font-medium leading-relaxed max-w-xl">
                                We believe your brand should look just as premium online as it does in real life. We craft Instagram ads that people actually enjoy looking at.
                            </p>
                        </motion.div>
                    </div>

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

export default InstagramAdsWhyChoose;
