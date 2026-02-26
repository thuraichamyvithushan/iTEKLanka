import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaBolt, FaSearch, FaGlobeAmericas, FaHandshake, FaShieldAlt } from 'react-icons/fa';

const AboutWhyPartner = () => {
    const benefits = [
        { icon: <FaChartLine />, title: "Proven ROI Results", desc: "Real-world performance with strong revenue growth" },
        { icon: <FaBolt />, title: "Fast Execution", desc: "Quick wins + scalable long-term strategies" },
        { icon: <FaSearch />, title: "Radical Transparency", desc: "Monthly reports, live dashboards, zero black boxes" },
        { icon: <FaGlobeAmericas />, title: "Sri Lanka Roots – Global Scale", desc: "Local insight with international-level execution" },
        { icon: <FaHandshake />, title: "Monthly Rolling", desc: "No long contracts – results keep you here" },
        { icon: <FaShieldAlt />, title: "Full-Funnel Expertise", desc: "SEO + Paid + CRO + Retention – complete growth stack" },
    ];

    return (
        <section className="py-24 md:py-32 bg-black">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight mb-6">
                        WHY PARTNER WITH <br className="hidden md:block" />
                        <span className="text-red-600">iTEK SOLUTIONS?</span>
                    </h2>
                    <div className="w-24 h-1 bg-red-600 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="group relative p-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] hover:border-red-500/50 hover:bg-white/[0.07] transition-all duration-500"
                        >
                            <div className="text-5xl mb-8 text-red-600 transform group-hover:scale-110 transition-transform duration-500 origin-left">
                                {benefit.icon}
                            </div>
                            <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-wide group-hover:text-red-500 transition-colors duration-300">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-400 font-medium leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                {benefit.desc}
                            </p>

                            {/* Corner accent */}
                            <div className="absolute top-8 right-8 w-1.5 h-1.5 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutWhyPartner;
