import React from 'react';
import { motion } from 'framer-motion';

const TechnicalOverlay = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03]">
            {/* Fine Grid */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                    backgroundSize: '100px 100px'
                }}
            ></div>

            {/* Sub Grid */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                    opacity: 0.3
                }}
            ></div>

            {/* Coordinate Markers */}
            <div className="absolute top-10 left-10 font-mono text-[8px] tracking-[0.3em]">iTEK_SYS_01 // [34.908, 12.445]</div>
            <div className="absolute top-10 right-10 font-mono text-[8px] tracking-[0.3em] text-red-600">LVL_04_ENCRYPTED</div>
            <div className="absolute bottom-10 left-10 font-mono text-[8px] tracking-[0.3em]">RES_UX_PRECISION</div>
            <div className="absolute bottom-10 right-10 font-mono text-[8px] tracking-[0.3em]">©2026_ITEK_LANKA</div>

            {/* Moving Scanner Pulse */}
            <motion.div
                animate={{ y: ['-10%', '110%'] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[100px] bg-gradient-to-b from-transparent via-red-600/[0.05] to-transparent"
            />
        </div>
    );
};

export default TechnicalOverlay;
