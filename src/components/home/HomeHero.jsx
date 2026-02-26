import { motion } from 'framer-motion';
import bannerVideo from '../../assets/banner.mp4';

export default function HomeHero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-black mt-[-130px]">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                >
                    <source src={bannerVideo} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="absolute inset-0 pointer-events-none z-[1]">
                <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-black/40 to-indigo-950/10" />
                <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-red-600/4 rounded-full blur-3xl opacity-60" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-900/5 rounded-full blur-[180px] opacity-20" />
                <div className="absolute inset-0 opacity-[0.015] mix-blend-soft-light pointer-events-none">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <filter id="noise">
                            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" />
                        </filter>
                        <rect width="100%" height="100%" filter="url(#noise)" />
                    </svg>
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-10 lg:px-12 w-full pt-42 pb-22 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/8 rounded-full mb-10 text-red-500">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="font-black text-[10px] uppercase tracking-[0.4em]">
                            Next-Gen Precision
                        </span>
                    </div>

                    <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-[0.82] tracking-[-0.04em] mb-12 uppercase">
                        EMPOWER
                        <br />
                        <span className="bg-gradient-to-r from-red-600 via-rose-500 to-rose-600 bg-clip-text text-transparent italic">
                            DIGITAL.
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed mb-14">
                        We architect extraordinary digital outcomes through AI-led strategy and world-class design.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-12 py-6 bg-red-600 text-white font-black rounded-2xl shadow-2xl shadow-red-600/20 text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500"
                        >
                            Collaborate
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="group flex items-center gap-4 text-white font-black uppercase tracking-[0.2em] text-[11px]"
                        >
                            <span className="w-12 h-px bg-white/20 group-hover:w-20 group-hover:bg-red-500 transition-all duration-500" />
                            View Works
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
