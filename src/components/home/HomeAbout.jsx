import { motion } from 'framer-motion';
import teamMain from '../../assets/about1.jpg';

export default function HomeAbout() {
    return (
        <section className="relative bg-black text-white overflow-hidden py-24 md:py-40">
            <div className="absolute inset-0 pointer-events-none opacity-50">
                <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[180px]" />
                <div className="absolute inset-0 opacity-[0.01] mix-blend-soft-light pointer-events-none">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <filter id="aboutnoise">
                            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" />
                        </filter>
                        <rect width="100%" height="100%" filter="url(#aboutnoise)" />
                    </svg>
                </div>
            </div>

            <div className="relative z-10 max-w-[1300px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative order-1"
                    >
                        <div className="relative group rounded-3xl md:rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)]">
                            <img
                                src={teamMain}
                                alt="iTek Team"
                                className="w-full h-auto  brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 block"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40 group-hover:opacity-0 transition-opacity duration-700" />
                        </div>
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-start text-left order-2"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-4 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-10"
                        >
                            <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-red-500 font-black text-xs uppercase tracking-[0.4em]">
                                Foundational Identity
                            </span>
                        </motion.div>

                        <h2 className="text-6xl sm:text-7xl md:text-8xl font-black leading-[0.85] tracking-tighter mb-10 uppercase">
                            WE ARE
                            <br />
                            <span className="bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent italic">iTEK.</span>
                        </h2>

                        <h3 className="text-2xl sm:text-3xl font-black mb-8 leading-tight text-white uppercase tracking-tight">
                            DIVERSITY IN <span className="text-red-500 italic">CREATIVITY.</span>
                        </h3>

                        <p className="text-lg text-gray-400 leading-relaxed mb-12 max-w-xl font-medium">
                            At iTek Solutions, we believe digital marketing is more than just clicks and impressions. It's about engineering meaningful connections between ambitious brands and their global audiences through technical precision and diverse creative perspectives.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-12 py-5 bg-white text-black font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-red-600 hover:text-white transition-all duration-300 shadow-2xl shadow-white/5"
                        >
                            Meet the Visionaries
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
