import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import googleLogo from '../../assets/home/g-ads.png';
import seo from '../../assets/home/seo.png';
import social from '../../assets/home/socialmedia.png';
import web from '../../assets/home/website.png'

const services = [
    {
        name: 'Google Ads',
        color: 'from-red-600 to-red-500',
        heading: 'STOP WASTING BUDGET ON CLICKS THAT DON’T CONVERT.',
        description:
            'Our award-winning strategists use precision targeting to put your brand in front of high-intent buyers, ensuring every dollar works harder for your bottom line.',
        cta: 'Explore Google Ads',
        path: '/services/google-ads',
        logo: googleLogo,
    },
    {
        name: 'SEO',
        color: 'from-red-600 to-red-500',
        heading: 'RANK HIGHER AND DRIVE ORGANIC GROWTH.',
        description:
            'Comprehensive SEO strategies to improve visibility, traffic, and conversions without paid ads.',
        cta: 'Explore SEO',
        path: '/services/seo',
        logo: seo,
    },
    {
        name: 'Social Media',
        color: 'from-red-600 to-red-500',
        heading: 'BUILD REAL CONNECTIONS WITH YOUR AUDIENCE.',
        description:
            'Targeted social campaigns across platforms to boost engagement and brand loyalty.',
        cta: 'Explore Social',
        path: '/services/social-media-marketing',
        logo: social,
    },
    {
        name: 'Website',
        color: 'from-red-600 to-red-500',
        heading: 'MODERN WEBSITES THAT CONVERT.',
        description:
            'Responsive, fast-loading sites designed for performance, SEO, and user experience.',
        cta: 'Explore Web',
        path: '/services/web-design',
        logo: web,
    },

];

export default function HomeServices() {
    const [activeService, setActiveService] = useState(services[0]);

    return (
        <section className="relative bg-white py-20 md:py-32 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/40 via-white to-rose-50/30" />
                <div className="absolute -top-40 -right-40 w-[900px] h-[900px] bg-red-100/20 rounded-full blur-3xl" />
                <div className="absolute bottom-[-30%] left-[-20%] w-[700px] h-[700px] bg-rose-100/15 rounded-full blur-[200px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
                <div className="mb-16 md:mb-24 flex flex-col items-center">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="block text-sm font-black text-red-600 uppercase tracking-[0.3em] mb-4"
                    >
                        Capabilities
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[0.82] tracking-tight uppercase"
                    >
                        WORLD-CLASS
                        <br />
                        <span className="bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent">MARKETING.</span>
                    </motion.h2>
                </div>

                <div className="flex flex-wrap gap-3 sm:gap-4 mb-10 justify-center">
                    {services.map((service) => (
                        <motion.button
                            key={service.name}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setActiveService(service)}
                            className={`px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-500 border ${service.name === activeService.name
                                ? 'bg-black text-white border-black'
                                : 'bg-black/5 text-gray-600 border-black/5 hover:border-black/20 hover:text-black'
                                }`}
                        >
                            {service.name}
                        </motion.button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeService.name}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 1.05, y: -20 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    >
                        <div className="bg-gray-50/50 backdrop-blur-xl border border-gray-100 rounded-[2.5rem] p-10 md:p-14 text-left flex flex-col items-start">
                            <h3 className="text-3xl sm:text-4xl font-black text-gray-900 mb-8 leading-tight uppercase tracking-tight text-left">
                                {activeService.heading}
                            </h3>
                            <p className="text-xl text-gray-600 leading-relaxed mb-12 font-medium text-left">
                                {activeService.description}
                            </p>

                            <Link to={activeService.path}>
                                <motion.button
                                    whileHover={{ scale: 1.05, x: 10 }}
                                    className="group flex items-center gap-4 text-red-500 font-black uppercase tracking-widest text-sm"
                                >
                                    {activeService.cta}
                                    <span className="text-2xl transition-transform group-hover:translate-x-2">→</span>
                                </motion.button>
                            </Link>
                        </div>

                        <div className="relative group">
                            <div className={`absolute inset-0 bg-gradient-to-br ${activeService.color} opacity-20 blur-3xl rounded-full transition-all duration-700 group-hover:opacity-40 scale-75`} />
                            <div className="relative bg-gray-50/50 backdrop-blur-xl border border-gray-100 rounded-[2.5rem] h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden">
                                {activeService.logo ? (
                                    <motion.img
                                        initial={{ scale: 0.8, rotate: -5 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        src={activeService.logo}
                                        alt={activeService.name}
                                        className="w-78 h-auto drop-shadow-[0_0_50px_rgba(239,68,68,0.1)]"
                                    />
                                ) : (
                                    <div className="text-black/5 font-black text-9xl select-none uppercase tracking-tighter">
                                        {activeService.name.slice(0, 2)}
                                    </div>
                                )}
                                <div className="absolute top-6 right-6 px-4 py-1.5 bg-black/5 rounded-full border border-black/5 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                                    Active Strategy
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
