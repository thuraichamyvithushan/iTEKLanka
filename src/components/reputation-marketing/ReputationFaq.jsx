import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reputationFaqs = [
    {
        question: "Is reputation marketing different from reputation management?",
        answer: "Management is defensive (fixing negative links); Marketing is offensive. We proactively build and amplify positive content and reviews to make trust your primary sales driver."
    },
    {
        question: "How do you get real customers to leave reviews?",
        answer: "We use ethical, automated follow-up systems that reach out to your customers at the peak of their happiness, making it incredibly easy for them to share their positive experience."
    },
    {
        question: "What if we get a negative review?",
        answer: "It happens to everyone. We help you respond with professionalism and transparency, turning a negative moment into a public demonstration of your great customer service."
    },
    {
        question: "Does this help with my SEO?",
        answer: "Massively. Google values 'Expertise, Authoritativeness, and Trust' (E-E-A-T). Having a strong profile of recent, positive reviews is a huge ranking signal for local search."
    }
];

const ReputationFaq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="relative bg-white py-20 md:py-35 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-50/20 rounded-full blur-[150px]" />
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
                        <span className="text-red-700 font-semibold text-sm uppercase tracking-[0.3em]">Trust Inquiries</span>
                    </motion.div>

                    <h2 className="text-6xl md:text-9xl font-black text-gray-900 leading-none tracking-[-0.04em] mb-10 uppercase">
                        DEEP <span className="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent italic text-5xl md:text-9xl tracking-tight">ANSWERS</span>
                    </h2>
                </div>

                <div className="space-y-6 md:space-y-8">
                    {reputationFaqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
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
};

export default ReputationFaq;
