// src/components/PartnersSection.jsx
import { motion } from 'framer-motion';
import googlePartner from '../assets/partners/google-partner.webp';
import facebook from '../assets/partners/facebook.png';
import linkedin from '../assets/partners/linkedin.png';
import microsoft from '../assets/partners/microsoft.png';
import semrush from '../assets/partners/semrush.png';
import youtube from '../assets/partners/youtube.png';


const partners = [
  { name: "Google Partner", image: googlePartner },
  { name: "Google Rating 5.0", image: facebook },
  { name: "The Drum", image: linkedin },
  { name: "HubSpot Certified", image: microsoft },
  { name: "Forbes Council", image: semrush },
  { name: "Semrush", image: youtube },
];

export default function PartnersSection() {
  const allPartners = [...partners, ...partners, ...partners]; // Triple for smoother loop

  return (
    <section className="relative w-full bg-zinc-950 py-16 md:py-24 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-red-500 font-black text-[10px] uppercase tracking-[0.4em]"
        >
          Accreditations & Global Network
        </motion.p>
      </div>

      <div className="relative group">
        {/* Infinite Marquee */}
        <div className="flex animate-slide-left-infinite whitespace-nowrap will-change-transform">
          <div className="flex items-center gap-8 px-4">
            {allPartners.map((partner, idx) => (
              <div
                key={`${partner.name}-${idx}`}
                className="flex-shrink-0 flex items-center justify-center w-48 h-24 bg-white/[0.03] backdrop-blur-xl border border-white/5 rounded-2xl hover:bg-white/[0.07] hover:border-red-500/20 transition-all duration-500 group/item"
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="h-10 w-auto object-contain transition-all duration-700"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Outer Edge Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}