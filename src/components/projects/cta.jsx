import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTiktok, FaFacebookF } from 'react-icons/fa';

const CTA = () => {
    return (
        <section className="py-24 md:pt-0 pb-40 bg-black relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[180px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter uppercase grayscale opacity-30">
                        CONNECT WITH US
                    </h2>

                    <h3 className="text-4xl md:text-6xl font-black text-white mb-10 uppercase tracking-tight">
                        JOIN THE <span className="text-red-600">iTEK COMMUNITY.</span>
                    </h3>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-16 font-medium leading-relaxed">
                        We're more than an agency — we're a movement of growth-obsessed Sri Lankan entrepreneurs and marketers. Follow us for real case studies, growth tips and behind-the-scenes wins.
                    </p>

                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            { icon: <FaInstagram />, label: "Instagram", link: "#", color: "hover:bg-[#E4405F]" },
                            { icon: <FaTiktok />, label: "TikTok", link: "#", color: "hover:bg-black hover:border-white" },
                            { icon: <FaFacebookF />, label: "Facebook", link: "#", color: "hover:bg-[#1877F2]" }
                        ].map((social, idx) => (
                            <motion.a
                                key={idx}
                                href={social.link}
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                className={`
                  group flex items-center gap-4 px-10 py-5 
                  bg-white/5 backdrop-blur-md border border-white/10 
                  rounded-2xl text-white text-lg font-black uppercase tracking-widest
                  transition-all duration-300 ${social.color}
                `}
                            >
                                <span className="text-2xl">{social.icon}</span>
                                <span>{social.label}</span>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
