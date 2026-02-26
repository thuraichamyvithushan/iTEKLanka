import { motion } from 'framer-motion';
import darkBgSvg from '../../assets/dark-birds-bg.svg';
import blog1 from '../../assets/blog/seo.png';

const blogPosts = [
    { category: "Agency", date: "Nov 18, 2025", author: "Mithushan", title: "How SEO Audit Help You Fix Hidden Issues", image: blog1, link: "/blog/seo-audit" },
    { category: "Branding", date: "Nov 18, 2025", author: "Mithushan", title: "Why Your Business Needs a Strong Brand", image: blog1, link: "/blog/strong-brand" },
    { category: "Business Tips", date: "Nov 18, 2025", author: "Mithushan", title: "Why Local SEO Matters for UK Businesses", image: blog1, link: "/blog/local-seo-uk" },
    { category: "Agency", date: "Nov 20, 2025", author: "Mithushan", title: "The Future of Digital Marketing in 2026", image: blog1, link: "/blog/future-marketing" },
];

export default function HomeBlog() {
    return (
        <section className="relative w-full py-24 md:py-40 overflow-hidden bg-black">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-[1000px] h-[1000px] bg-red-600/5 rounded-full blur-[200px]" />
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-violet-600/3 rounded-full blur-[180px]" />
                <img src={darkBgSvg} alt="" className="w-full h-full object-cover opacity-10 mix-blend-overlay rotate-180" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
                <div className="mb-20 flex flex-col items-center">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="block text-red-500 font-black text-xs uppercase tracking-[0.3em] mb-4"
                    >
                        Insights
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.82] tracking-tight uppercase"
                    >
                        LATEST FROM
                        <br />
                        <span className="bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent">OUR BLOG.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {blogPosts.map((post, idx) => (
                        <motion.a
                            key={post.title}
                            href={post.link}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group bg-white/5 backdrop-blur-xl border border-white/8 rounded-[2rem] overflow-hidden transition-all duration-500 hover:bg-white/[0.08] hover:border-red-500/30"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                                <div className="absolute top-6 left-6 px-4 py-1.5 bg-red-600/90 backdrop-blur-md rounded-full text-[10px] font-black text-white uppercase tracking-widest">
                                    {post.category}
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex items-center gap-4 text-[10px] font-black text-white/40 uppercase tracking-widest mb-6">
                                    <span>{post.date}</span>
                                    <span className="w-1 h-1 bg-red-500 rounded-full" />
                                    <span>{post.author}</span>
                                </div>

                                <h3 className="text-xl font-black text-white mb-8 line-clamp-3 uppercase tracking-tight leading-tight group-hover:text-red-500 transition-colors">
                                    {post.title}
                                </h3>

                                <span className="text-red-500 font-black uppercase tracking-widest text-[11px] group-hover:translate-x-2 inline-block transition-transform">
                                    Read Article →
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-12 py-5 bg-white text-black font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-red-600 hover:text-white transition-all duration-500"
                    >
                        All Perspectives
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
