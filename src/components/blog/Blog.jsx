import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import darkBgSvg from '../../assets/dark-birds-bg.svg';
import blog1 from '../../assets/blog/blog1.webp';
import blog2 from '../../assets/blog/blog2.webp'
import blog3 from '../../assets/blog/blog3.avif'
import blog4 from '../../assets/blog/blog4.jpg'


export const blogPosts = [
    {
        id: "seo-success-sri-lanka-2026",
        category: "SEO",
        date: "Feb 24, 2026",
        author: "iTEK Lanka",
        title: "Unlocking SEO Success for Sri Lankan Businesses in 2026",
        image: blog1,
        excerpt: "Discover the latest search engine optimization strategies tailored for the Sri Lankan market to boost your online visibility and drive organic growth.",
        link: "/blog/seo-success-sri-lanka-2026"
    },
    {
        id: "digital-transformation-sl-sme",
        category: "Digital Transformation",
        date: "Feb 20, 2026",
        author: "iTEK Lanka",
        title: "Why Digital Transformation is a Must for Sri Lankan SMEs",
        image: blog2,
        excerpt: "Scale your business with modern digital tools. We explore how Sri Lankan small and medium enterprises can stay competitive in a global market.",
        link: "/blog/digital-transformation-sl-sme"
    },
    {
        id: "social-media-marketing-sl",
        category: "Social Media",
        date: "Feb 15, 2026",
        author: "iTEK Lanka",
        title: "Mastering Social Media Marketing in the Sri Lankan Landscape",
        image: blog3,
        excerpt: "Learn how to engage your audience on Facebook, TikTok, and Instagram with content that resonates with the local culture and current trends.",
        link: "/blog/social-media-marketing-sl"
    },
    {
        id: "it-outsourcing-hub-sri-lanka",
        category: "IT Services",
        date: "Feb 10, 2026",
        author: "iTEK Lanka",
        title: "Sri Lanka: The Emerging Hub for Global IT and Software Outsourcing",
        image: blog4,
        excerpt: "Explore why international companies are choosing Sri Lanka as their preferred destination for high-quality software development and IT services.",
        link: "/blog/it-outsourcing-hub-sri-lanka"
    },
];

const Blog = () => {
    return (
        <div className="bg-black relative text-white selection:bg-red-600 selection:text-white min-h-screen mt-[-130px]">
            <section className="relative w-full py-24 md:py-40 pt-40 overflow-hidden bg-black">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute bottom-0 right-0 w-[1000px] h-[1000px] bg-red-600/5 rounded-full blur-[200px]" />
                    <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-violet-600/3 rounded-full blur-[180px]" />
                    <img src={darkBgSvg} alt="" className="w-full h-full object-cover opacity-10 mix-blend-overlay rotate-180" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="mb-20">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="block text-red-500 font-black text-xs uppercase tracking-[0.3em] mb-4"
                        >
                            Our Journal
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.82] tracking-tight uppercase"
                        >
                            INSIGHTS &
                            <br />
                            <span className="bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent">STORIES.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-8 text-gray-400 max-w-2xl text-lg font-medium"
                        >
                            Stay updated with the latest trends in digital marketing, SEO, and IT solutions specifically curated for the Sri Lankan market.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {blogPosts.map((post, idx) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative"
                            >
                                <Link to={post.link} className="block">
                                    <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] mb-8">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute top-6 left-6 px-4 py-1.5 bg-red-600/90 backdrop-blur-md rounded-full text-[10px] font-black text-white uppercase tracking-widest">
                                            {post.category}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 text-[10px] font-black text-white/40 uppercase tracking-widest mb-4">
                                        <span>{post.date}</span>
                                        <span className="w-1 h-1 bg-red-500 rounded-full" />
                                        <span>{post.author}</span>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight leading-none group-hover:text-red-500 transition-colors">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-400 text-lg mb-8 line-clamp-2">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center gap-2 text-red-500 font-black uppercase tracking-widest text-xs group-hover:translate-x-2 transition-transform">
                                        Read Story
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
