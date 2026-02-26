import { useRef } from 'react';
import { motion } from 'framer-motion';

const services = [
  // Paid Advertising
  { title: "Google Ads", category: "Paid Advertising", description: "Precision targeting to put your brand in front of high-intent buyers." },
  { title: "Google Display Marketing", category: "Paid Advertising", description: "Strategic visual reach across the web's most relevant placements." },
  { title: "Google Remarketing", category: "Paid Advertising", description: "Intelligent re-engagement strategies for your most valuable visitors." },
  { title: "Google Shopping Ads", category: "Paid Advertising", description: "Direct product visibility where performance and purchase intent meet." },
  { title: "Invalid or Fraud Click", category: "Paid Advertising", description: "Advanced protection for your advertising budget against malicious clicks." },
  { title: "Pay Per Click", category: "Paid Advertising", description: "Data-driven PPC campaigns leveraging AI and creative strategy." },
  { title: "YouTube Ads", category: "Paid Advertising", description: "Compelling video storytelling designed for high-impact conversions." },
  { title: "LinkedIn Advertising", category: "Paid Advertising", description: "Sophisticated B2B targeting to reach key decision makers." },

  // Social Media
  { title: "Social Media Advertising", category: "Social Media", description: "Scaleable reach on social platforms through targeted ad spend." },
  { title: "Social Media Marketing", category: "Social Media", description: "Building community and engagement through authentic storytelling." },
  { title: "TikTok Advertising", category: "Social Media", description: "Creative short-form video that cuts through for younger audiences." },
  { title: "X Advertising", category: "Social Media", description: "Real-time engagement and trend-based reach for your brand." },
  { title: "Facebook Advertising", category: "Social Media", description: "Deep demographic and interest-based targeting for maximum ROI." },
  { title: "Instagram Advertising", category: "Social Media", description: "Visual-first conversion strategies on the world's most creative platform." },

  // SEO
  { title: "SEO", category: "SEO", description: "Sustainable organic growth and authority for long-term visibility." },
  { title: "SEO Audit", category: "SEO", description: "Comprehensive health check for your site's technical and content SEO." },
  { title: "SEO Consultancy", category: "SEO", description: "Strategic guidance to navigate the evolving search landscape." },
  { title: "Reverse SEO", category: "SEO", description: "Managing and optimizing your online presence for better reputation." },
  { title: "Reputation Marketing", category: "SEO", description: "Building and protecting brand authority through strategic content." },
  { title: "Local SEO GMP", category: "SEO", description: "Dominating local search and map results for your physical locations." },

  // Web & Design
  { title: "Web Design", category: "Web & Design", description: "Premium, high-performance web experiences that convert visitors." },
  { title: "IT Manage Service", category: "Web & Design", description: "Expert managed IT solutions to power your digital infrastructure." },
  { title: "UI/UX & Branding", category: "Web & Design", description: "User-centric design coupled with powerful brand identity systems." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function ServicesShowcaseHome() {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="relative bg-white py-24 md:py-40 overflow-hidden ">
      {/* Subtle light ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/40 via-white to-rose-50/30" />
        <div className="absolute -top-40 -left-40 w-[900px] h-[900px] bg-red-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-30%] right-[-20%] w-[700px] h-[700px] bg-rose-100/15 rounded-full blur-[200px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Headline */}
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 px-6 py-3 bg-black/5 backdrop-blur-sm border border-black/5 rounded-full mb-8"
          >
            <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
            <span className="text-red-700 font-semibold text-sm uppercase tracking-[0.3em]">
              Signature Capabilities
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black text-gray-900 leading-[0.82] tracking-tight uppercase"
          >
            OUR
            <br />
            <span className="bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent">SERVICES.</span>
          </motion.h2>
          <div className="h-1 w-32 bg-red-600 mt-10 rounded-full mx-auto" />
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative bg-white border border-gray-100 rounded-[2.5rem] p-8 lg:p-10 transition-all duration-700 hover:border-red-400/40 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_80px_-20px_rgba(239,68,68,0.18)] flex flex-col h-full overflow-hidden"
            >
              {/* Highlight Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative flex flex-col h-full z-10">
                {/* Category Tag */}
                <div className="text-[10px] font-black text-red-600 uppercase tracking-widest mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  {service.category}
                </div>

                {/* Index Number */}
                <div className="text-black/5 font-black text-6xl absolute top-[-10px] right-[-10px] group-hover:text-red-500/10 transition-colors pointer-events-none italic">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight group-hover:text-red-600 transition-colors leading-none italic">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm font-medium mb-10 group-hover:text-gray-800 transition-colors">
                  {service.description}
                </p>

                {/* Accent Line + Arrow */}
                <div className="mt-auto flex items-center justify-between">
                  <div className="h-0.5 w-12 bg-gray-100 rounded-full group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-transparent transition-all duration-700" />
                  <div className="text-red-500 text-3xl font-light opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                    →
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}