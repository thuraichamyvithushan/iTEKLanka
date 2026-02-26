import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const AboutValues = () => {
    const values = [
        {
            id: "01",
            title: "OUR VISION",
            content: "TO BECOME THE MOST TRUSTED & RESULTS-OBSESSED DIGITAL GROWTH PARTNER FOR SRI LANKAN BUSINESSES AND GLOBAL BRANDS — TURNING AMBITION INTO MEASURABLE DOMINANCE.",
            accent: "from-red-600 to-rose-600"
        },
        {
            id: "02",
            title: "OUR MISSION",
            content: "TO EMPOWER SRI LANKAN BUSINESSES AND GLOBAL BRANDS TO DOMINATE DIGITAL CHANNELS, GROW SUSTAINABLY, AND WIN IN COMPETITIVE MARKETS — WITH COMPLETE TRANSPARENCY AND MEASURABLE ROI.",
            accent: "from-red-700 to-rose-500"
        },
        {
            id: "03",
            title: "OUR PHILOSOPHY",
            content: "RESULTS OVER REPORTS. TRANSPARENCY OVER PROMISES. GROWTH OVER VANITY. WE BELIEVE IN BUILDING LONG-TERM PARTNERSHIPS BASED ON HONEST DATA, RELENTLESS EXECUTION, AND SHARED SUCCESS.",
            accent: "from-rose-600 to-red-500"
        }
    ];

    return (
        <section className="py-28 md:py-38 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-red-50/50 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-rose-50/40 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    {values.map((val, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative bg-white border border-gray-100 rounded-[3rem] p-10 md:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_100px_-20px_rgba(239,68,68,0.15)] transition-all duration-700 overflow-hidden"
                        >
                            {/* Background Number */}
                            <span className="absolute -top-10 -right-4 text-[12rem] font-black text-black/[0.03] select-none group-hover:text-red-500/[0.06] transition-colors duration-700 italic">
                                {val.id}
                            </span>

                            <div className="relative z-10">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "60px" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 + idx * 0.2 }}
                                    className="h-1 bg-red-600 mb-8 rounded-full"
                                />

                                <h3 className="text-2xl font-black text-gray-900 mb-8 uppercase tracking-tight group-hover:text-red-600 transition-colors">
                                    {val.title}
                                </h3>

                                <p className="text-xl md:text-2xl font-black leading-tight bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent group-hover:from-red-600 group-hover:to-rose-600 transition-all duration-700 uppercase italic tracking-tight">
                                    "{val.content}"
                                </p>
                            </div>

                            {/* Bottom Accent */}
                            <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${val.accent} transform translate-y-full group-hover:translate-y-0 transition-transform duration-500`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutValues;
