import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from './Blog';
import darkBgSvg from '../../assets/dark-birds-bg.svg';

const BlogPost = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === id);

    if (!post) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-black mb-4">POST NOT FOUND</h1>
                    <Link to="/blog" className="text-red-500 font-bold hover:underline">Return to Blog</Link>
                </div>
            </div>
        );
    }

    // Mock content for the blog posts based on their titles
    const getContent = (postId) => {
        switch (postId) {
            case "seo-success-sri-lanka-2026":
                return {
                    subtitle: "Navigating the Search Landscape in Sri Lanka",
                    paragraphs: [
                        "The Sri Lankan digital landscape is evolving rapidly. As we approach 2026, the traditional methods of SEO are being reshaped by local user behaviors and global search engine updates. Businesses in Colombo, Kandy, and beyond are now realizing that a 'one-size-fits-all' approach to SEO no longer works. It's about being relevant to the local context while maintaining global standards.",
                        "One of the key trends we're seeing is the rise of Sinhala and Tamil voice search. Real people are using their smartphones to find services in their native languages. Optimizing for these queries is becoming essential for local businesses. It's not just about translated keywords; it's about understanding the intent behind the search.",
                        "Content relevance is the heart of SEO success. For a Sri Lankan brand, this means creating content that speaks to the local culture, address local pain points, and provides solutions that are practical in the Sri Lankan economy. Search engines are getting smarter at identifying authentic, human-generated content that provides genuine value.",
                        "Technical SEO remains a pillar of organic growth. With mobile penetration at an all-time high in Sri Lanka, page speed and mobile responsiveness are non-negotiable. If your website takes more than 3 seconds to load on a 4G connection in Jaffna or Galle, you're losing potential customers to your competitors."
                    ]
                };
            case "digital-transformation-sl-sme":
                return {
                    subtitle: "Empowering Local Businesses with Technology",
                    paragraphs: [
                        "For many Sri Lankan SMEs, the jump to 'digital' can seem daunting. However, digital transformation is no longer a luxury reserved for large corporates; it's a tool for survival and growth. From simple inventory management to sophisticated e-commerce platforms, technology is leveling the playing floor for small businesses across the island.",
                        "Transitioning to digital allows SMEs to streamline their operations, reduce manual errors, and most importantly, reach a much wider audience. Imagine a local artisan shop in Galle reach customers in the UK or Australia through a well-optimized website. That is the power of true digital transformation.",
                        "Data is the new currency. Even small businesses can benefit from tracking customer preferences and sales patterns. By understanding what your customers want, when they want it, you can tailor your offerings and marketing strategies with much higher precision. These insights lead to better decision-making and higher profitability.",
                        "Security is often an afterthought for SMEs, but in a digital-first world, it must be a priority. Protecting customer data and ensuring your digital assets are secure is crucial for building trust. As Sri Lankan businesses go digital, implementing basic yet effective cybersecurity measures is a vital step in their long-term success."
                    ]
                };
            case "social-media-marketing-sl":
                return {
                    subtitle: "Connecting with the Sri Lankan Heartbeat",
                    paragraphs: [
                        "Social media in Sri Lanka is more than just advertising; it's a community space. Successful brands here understand that their social presence needs to be authentic and relatable. Whether it's a viral TikTok challenge or a thought-provoking Facebook post, the focus should be on building a genuine connection with people.",
                        "Visual storytelling is incredibly powerful. Sri Lankan audiences respond well to high-quality videos and graphics that reflect their everyday lives. Using local landmarks, cultural nuances, and relatable humor can make your brand stand out in a crowded social feed. It's about being part of the conversation, not just shouting from the sidelines.",
                        "Engagement is the metric that matters. Instead of just chasing follower counts, focus on fostering meaningful interactions. Respond to comments, ask for feedback, and create polls that encourage participation. When your followers feel heard and valued, they are more likely to become loyal customers and brand advocates.",
                        "The landscape of platforms is shifting. While Facebook remains dominant, TikTok and Instagram are growing rapidly among younger demographics. Businesses need to adapt their content strategy to suit each platform's unique style and audience. What works on LinkedIn for B2B won't necessarily resonate with the casual browser on TikTok."
                    ]
                };
            case "it-outsourcing-hub-sri-lanka":
                return {
                    subtitle: "Why the World is Looking at Sri Lanka for IT",
                    paragraphs: [
                        "Sri Lanka has quietly become a powerhouse in the global IT outsourcing industry. Our talent pool isn't just skilled; they are innovative, adaptable, and highly proficient in English. This combination of technical expertise and communication skills makes Sri Lanka a preferred destination for software development and IT services.",
                        "Cost-effectiveness without compromising quality is our biggest advantage. International firms find that they can access world-class development teams here at a fraction of the cost of local hires in Europe or North America. This allows them to scale their projects faster and more efficiently while maintaining high standards.",
                        "The government and private sector are heavily investing in infrastructure and education to support this growing industry. Dedicated IT parks and a focus on STEM education are ensuring a steady flow of fresh talent into the workforce. This commitment to the industry shows that Sri Lanka is serious about its role as a global IT hub.",
                        "Beyond just coding, Sri Lankan firms are excelling in complex areas like AI, blockchain, and cloud computing. We are moving from being just 'service providers' to becoming 'innovation partners.' Companies around the world are realizing that Sri Lankans don't just follow instructions; they add value to the projects they work on."
                    ]
                };
            default:
                return { subtitle: "", paragraphs: [] };
        }
    };

    const content = getContent(post.id);

    return (
        <div className="bg-black relative text-white selection:bg-red-600 selection:text-white min-h-screen mt-[-130px] pt-40 pb-20">
            <section className="relative w-full overflow-hidden">
                {/* Background accents */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[200px]" />
                    <img src={darkBgSvg} alt="" className="w-full h-full object-cover opacity-5 mix-blend-overlay" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <Link to="/blog" className="text-red-500 font-black text-xs uppercase tracking-widest hover:translate-x-[-8px] inline-flex items-center gap-2 transition-transform mb-8">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Back to Blog
                        </Link>

                        <div className="flex items-center gap-4 text-[10px] font-black text-white/40 uppercase tracking-widest mb-6">
                            <span className="text-red-500">{post.category}</span>
                            <span className="w-1 h-1 bg-white/20 rounded-full" />
                            <span>{post.date}</span>
                            <span className="w-1 h-1 bg-white/20 rounded-full" />
                            <span>By {post.author}</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight uppercase tracking-tight mb-8">
                            {post.title}
                        </h1>

                        <p className="text-xl md:text-2xl font-bold text-red-500 uppercase tracking-tight leading-tight">
                            {content.subtitle}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="rounded-[2.5rem] overflow-hidden mb-16 aspect-video"
                    >
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="prose prose-invert max-w-none"
                    >
                        {content.paragraphs.map((p, i) => (
                            <p key={i} className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 font-medium">
                                {p}
                            </p>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="mt-20 pt-12 border-t border-white/10"
                    >
                        <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[2rem] border border-white/10">
                            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Want more insights?</h3>
                            <p className="text-gray-400 mb-8 max-w-xl">
                                We help businesses in Sri Lanka navigate the digital landscape with custom SEO and IT solutions. Let's talk about your next project.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-block px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest text-xs rounded-xl transition-all"
                            >
                                Contact iTEK Lanka
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default BlogPost;
