import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        name: "Alex Thompson",
        role: "CEO, TechFlow",
        content: "iTek LANKA transformed our digital presence. Their attention to detail and commitment to excellence is unparalleled in the industry.",
        avatar: "https://i.pravatar.cc/150?u=alex"
    },
    {
        name: "Sarah Chen",
        role: "Marketing Director, GlobalReach",
        content: "Working with iTek was a game-changer. Our conversion rates increased by 150% within the first three months of launching the new site.",
        avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
        name: "James Wilson",
        role: "Founder, InnovateHQ",
        content: "The level of precision and strategic thinking the iTek team brought to our project was impressive. They truly understand next-gen precision.",
        avatar: "https://i.pravatar.cc/150?u=james"
    },
    {
        name: "Michael Rodriguez",
        role: "CTO, NexaCore",
        content: "The technical expertise at iTek is second to none. They built a scalable solution that fits our global needs perfectly and securely.",
        avatar: "https://i.pravatar.cc/150?u=michael"
    },
    {
        name: "Emily Blunt",
        role: "Creative Lead, StudioX",
        content: "A truly diverse team that brings fresh perspectives to every challenge. iTek is our go-to partner for all things digital marketing and design.",
        avatar: "https://i.pravatar.cc/150?u=emily"
    }
];

export default function HomeTestimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const extendedTestimonials = [...testimonials, ...testimonials.slice(0, 2)];

    return (
        <section className="relative bg-black text-white py-24 md:py-40 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-8 text-red-500"
                    >
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="font-black text-[10px] uppercase tracking-[0.4em]">Client Voices</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl sm:text-6xl md:text-7xl font-black uppercase leading-[0.85] tracking-tighter"
                    >
                        Trusted by the
                        <br />
                        <span className="bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent italic">Industry Leaders.</span>
                    </motion.h2>
                </div>

                <div className="relative group/carousel">
                    <div className="overflow-hidden pb-12">
                        <motion.div
                            className="flex gap-6 md:gap-8"
                            animate={{ x: `-${currentIndex * (100 / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1))}%` }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {extendedTestimonials.map((t, idx) => (
                                <div
                                    key={`${t.name}-${idx}`}
                                    className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] flex-shrink-0"
                                >
                                    <div className="h-full group relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] hover:border-red-500/30 transition-all duration-500 flex flex-col">
                                        <div className="absolute top-8 right-8 text-6xl text-white/5 font-serif group-hover:text-red-500/10 transition-colors pointer-events-none">"</div>

                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-red-500/20 flex-shrink-0">
                                                <img
                                                    src={t.avatar}
                                                    alt={t.name}
                                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-white uppercase tracking-tight text-sm">{t.name}</h4>
                                                <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest">{t.role}</p>
                                            </div>
                                        </div>

                                        <p className="text-gray-400 leading-relaxed font-medium group-hover:text-white transition-colors mb-8 flex-grow">
                                            "{t.content}"
                                        </p>

                                        <div className="h-px w-12 bg-red-600 group-hover:w-full transition-all duration-1000" />
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <div className="flex justify-center gap-3">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-1.5 transition-all duration-500 rounded-full ${currentIndex === idx ? 'w-12 bg-red-600' : 'w-4 bg-white/20 hover:bg-white/40'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
