import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import reputationBg from '../../assets/services/reputation2.avif'; 

export default function ReputationHero() {
    const { scrollY } = useScroll();
    const parallaxY = useTransform(scrollY, [0, 600], [0, 120]);
    const subtleRotate = useTransform(scrollY, [0, 800], [0, 4]);
    const overlayOpacity = useTransform(scrollY, [0, 400], [0.15, 0.04]);

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-black pt-34 pb-32">
            {/* Background atmosphere */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-black to-indigo-950/10" />
                <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-red-600/4 rounded-full blur-3xl" />

                <div className="absolute inset-0 opacity-[0.015] mix-blend-soft-light pointer-events-none">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <filter id="noise">
                            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" />
                        </filter>
                        <rect width="100%" height="100%" filter="url(#noise)" />
                    </svg>
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 xl:gap-8 items-center">
                    {/* Left Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="inline-flex items-center gap-3 px-5 mt-2 py-2.5 bg-white/5 backdrop-blur-md border border-white/8 rounded-full mb-10">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-red-400/90 font-semibold text-xs uppercase tracking-[0.2em]">
                                SOCIAL PROOF MASTERY
                            </span>
                        </div>

                        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-[0.82] tracking-[-0.04em] mb-4 uppercase">
                            TRUST
                            <br />
                            <span className="bg-gradient-to-r from-red-500 via-red-400 to-rose-500 bg-clip-text text-transparent">
                                EARNED.
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300/90 font-medium max-w-xl leading-relaxed mb-14">
                            We help you turn your customer's happiness into your most powerful marketing tool, building a bulletproof brand through authentic social proof in the Sri Lankan market.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5">
                            <Link to="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.04, y: -4 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="group relative px-12 py-6 bg-gradient-to-r from-red-600 to-rose-600 text-white font-black rounded-2xl shadow-2xl shadow-red-900/30 overflow-hidden text-sm uppercase tracking-widest w-full sm:w-auto"
                                >
                                    <span className="relative z-10">Build Your Trust</span>
                                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                </motion.button>
                            </Link>

                            <Link to="/projects">
                                <motion.button
                                    whileHover={{ scale: 1.04, y: -3 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-12 py-6 bg-transparent text-white font-black border border-white/20 hover:border-white/60 rounded-2xl transition-all duration-500 text-sm uppercase tracking-widest backdrop-blur-sm w-full sm:w-auto"
                                >
                                    Our Impact
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Visual */}
                    <div className="relative">
                        <motion.div
                            style={{ y: parallaxY, rotateZ: subtleRotate }}
                            className="relative z-10 rounded-[3rem] overflow-hidden border border-white/6 backdrop-blur-xl bg-black/40 shadow-[0_60px_140px_-40px_rgba(0,0,0,0.7)]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
                            <motion.div
                                style={{ opacity: overlayOpacity }}
                                className="absolute inset-0 bg-red-900/8 backdrop-blur-[2px] pointer-events-none"
                            />
                            <img
                                src={reputationBg}
                                alt="Brand reputation and trust building"
                                className="w-full h-auto object-cover scale-[1.04] transition-transform duration-[1200ms]"
                            />
                            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between px-10 text-xs font-mono text-white/70">
                                <div>REVIEWS • CITATIONS • PROOF</div>
                                <div className="flex items-center gap-4">
                                    <div className="flex gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                        <div className="w-2 h-2 rounded-full bg-emerald-400/40" />
                                    </div>
                                    <span>100% AUTHENTIC</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
