import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import worldSvgRaw from "../../assets/world.svg?raw";


const branchData = {
  Australia: {
    country: "Australia",
    city: "NSW",
    address: "17 Metford CI, Metford NSW 2323",
    phone: "+61 450 662 270",
  },
  Canada: {
    country: "Canada",
    city: "Toronto",
    address: "100 King Street, Toronto",
    phone: "+1 437 450 8131",
  },
  UnitedKingdom: {
    country: "United Kingdom",
    city: "London",
    address: "Hadlow Road, Welling, London, United Kingdom",
    phone: "+44 7456 095003",
  },
  SriLanka: {
    country: "Sri Lanka",
    city: "Jaffna",
    address: "Mariyamman veethy, Thirunelvely, Jaffna.",
    phone: "+94 11 123 4567",
  },
};

export default function GlobalPresence() {
  const [tooltip, setTooltip] = useState(null);

  const handleMouseMove = (e) => {
    const target = e.target;
    const path = target.closest("path");
    if (!path) {
      if (tooltip) setTooltip(null);
      return;
    }

    const classList = Array.from(path.classList);
    const countryKey = classList.find((cls) => branchData[cls]);

    if (countryKey) {
      setTooltip({
        ...branchData[countryKey],
        x: e.clientX,
        y: e.clientY,
      });
    } else {
      setTooltip(null);
    }
  };

  const handleMouseOut = () => {
    setTooltip(null);
  };

  return (
    <div className="relative bg-black py-24 md:py-32 overflow-hidden select-none">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10 px-6 lg:px-12"
      >
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black tracking-tight text-white uppercase leading-none">
          Global <span className="text-red-500 italic">Reach.</span>
        </h2>
        <p className="mt-6 text-base sm:text-lg md:text-2xl text-gray-500 max-w-3xl mx-auto font-medium">
          Architecting digital solutions across continents. Delivering excellence without borders.
        </p>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          onMouseMove={handleMouseMove}
          onMouseOver={handleMouseMove}
          onMouseOut={handleMouseOut}
          className="relative w-full z-10 
            [&_path.Australia]:fill-red-600 [&_path.Australia]:cursor-pointer [&_path.Australia]:transition-all [&_path.Australia]:duration-500 hover:[&_path.Australia]:fill-white
            [&_path.Canada]:fill-red-600 [&_path.Canada]:cursor-pointer [&_path.Canada]:transition-all [&_path.Canada]:duration-500 hover:[&_path.Canada]:fill-white
            [&_path.UnitedKingdom]:fill-red-600 [&_path.UnitedKingdom]:cursor-pointer [&_path.UnitedKingdom]:transition-all [&_path.UnitedKingdom]:duration-500 hover:[&_path.UnitedKingdom]:fill-white
            [&_path.SriLanka]:fill-red-600 [&_path.SriLanka]:cursor-pointer [&_path.SriLanka]:transition-all [&_path.SriLanka]:duration-500 hover:[&_path.SriLanka]:fill-white
          "
        >
          <div
            className="w-full opacity-80 [&>svg]:w-full [&>svg]:h-auto [&>svg]:fill-zinc-900 [&>svg]:stroke-white/20 [&>svg]:stroke-[1.2]"
            dangerouslySetInnerHTML={{ __html: worldSvgRaw }}
          />
        </motion.div>
      </div>

      <AnimatePresence>
        {tooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="fixed bg-white/10 backdrop-blur-xl text-white p-6 rounded-3xl border border-white/20 shadow-2xl w-72 z-50 pointer-events-none"
            style={{
              top: tooltip.y + 20,
              left: Math.min(tooltip.x + 20, window.innerWidth - 300)
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <h3 className="font-black text-xs uppercase tracking-widest text-red-500">
                Active Node
              </h3>
            </div>
            <h4 className="font-bold text-xl mb-2">
              {tooltip.city}, {tooltip.country}
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">{tooltip.address}</p>
            <div className="pt-4 border-t border-white/10 flex items-center gap-3">
              <div className="text-[10px] font-black uppercase text-gray-500">Secure Line</div>
              <p className="text-sm font-bold text-white">{tooltip.phone}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
