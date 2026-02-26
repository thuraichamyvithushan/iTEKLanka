import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    { question: "How quickly can I see results from Google Ads?", answer: "Google Ads can start driving traffic immediately after launch. However, meaningful performance improvements usually appear within the first 2–4 weeks as data is collected, bids are optimised, and ads are refined for better conversions." },
    { question: "Do you manage my Google Ads budget or just the campaigns?", answer: "We offer full-service management, including budget allocation, daily optimisation, bid adjustments, and performance reporting. You retain full control and transparency." },
    { question: "What types of Google Ads do you manage?", answer: "We manage the full suite: Search Ads, Display Network, Performance Max, Shopping Ads, Video (YouTube), App campaigns, and more." },
    { question: "How do you track conversions and ROI?", answer: "We use Google Analytics 4 + Google Tag Manager for accurate conversion tracking. We set up enhanced conversions and custom ROI dashboards." },
    { question: "Why should I hire a Google Ads agency?", answer: "Google Ads is extremely competitive. Agencies bring years of data, advanced bidding strategies, and constant algorithm updates — delivering significantly better ROI." },
];

export default function HomeFaq() {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleFaq = (index) => setOpenIndex(openIndex === index ? null : index);

    return (
        <section className="relative w-full bg-white py-24 md:py-40 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-50/20 rounded-full blur-[150px]" />
                <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-indigo-50/15 rounded-full blur-[180px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <div className="text-center mb-12 md:mb-30">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-4 px-6 py-3 bg-black/5 backdrop-blur-sm border border-black/5 rounded-full mb-8"
                    >
                        <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-red-700 font-semibold text-sm uppercase tracking-[0.3em]">Common Inquiries</span>
                    </motion.div>

                    <h2 className="text-6xl md:text-9xl font-black text-gray-900 leading-none tracking-[-0.04em] mb-10 uppercase">
                        EXPERT <span className="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent italic">ANSWERS</span>
                    </h2>

                    <div className="h-0.5 w-28 bg-gradient-to-r from-red-500/30 to-rose-500/30 mx-auto mb-10 rounded-full" />
                </div>

                <div className="space-y-6 md:space-y-8">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className={`w-full text-left p-10 md:p-14 rounded-[3rem] transition-all duration-700 border flex flex-col items-start ${openIndex === index
                                    ? 'bg-black text-white border-transparent shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)]'
                                    : 'bg-gray-50 text-gray-900 border-gray-100 hover:border-red-500/30 hover:bg-white hover:shadow-2xl'
                                    }`}
                            >
                                <div className="w-full flex justify-between items-center gap-8">
                                    <h5 className="text-2xl md:text-2xl font-black uppercase tracking-tight italic leading-tight">
                                        {faq.question}
                                    </h5>
                                    <span className={`text-4xl md:text-5xl font-light transition-transform duration-700 ${openIndex === index ? 'rotate-45 text-red-500' : 'group-hover:text-red-500'
                                        }`}>
                                        +
                                    </span>
                                </div>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-10 md:pt-14 border-t border-white/10 mt-10 md:mt-14">
                                                <p className={`text-lg md:text-xl leading-relaxed font-medium ${openIndex === index ? 'text-gray-400' : 'text-gray-500'
                                                    }`}>
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
