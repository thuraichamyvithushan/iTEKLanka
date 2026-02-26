import { motion } from 'framer-motion';

const features = [
    {
        title: "Digital Excellence",
        description: "We don't just build websites; we craft high-performance digital engines that drive growth and command attention.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        )
    },
    {
        title: "Strategic Innovation",
        description: "Our approach blends cutting-edge technology with creative strategy to solve complex business challenges.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        )
    },
    {
        title: "Global Expertise",
        description: "With a diverse team of specialists, we bring a wealth of international experience to every project we undertake.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
        )
    },
    {
        title: "Dedicated Partnership",
        description: "Your success is our priority. We work as an extension of your team, providing ongoing support and guidance.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        )
    }
];

export default function HomeWhyChoose() {
    return (
        <section className="relative bg-black text-white py-24 md:pb-40 pt-0 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-20 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-8 text-red-500"
                        >
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            <span className="font-black text-[10px] uppercase tracking-[0.4em]">The iTek Advantage</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl sm:text-6xl md:text-7xl font-black uppercase leading-[0.85] tracking-tighter mb-10"
                        >
                            Why brands
                            <br />
                            <span className="bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent italic">Choose Us.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-xl text-gray-400 max-w-xl mb-12 leading-relaxed"
                        >
                            We combine technical precision with creative vision to deliver digital solutions that don't just meet expectations - they redefine them.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.8 }}
                                className="group p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] hover:border-red-500/30 transition-all duration-500"
                            >
                                <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-500 mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-tight mb-4">{feature.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white transition-colors duration-500">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
