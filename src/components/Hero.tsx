import React from 'react';
import { motion } from 'motion/react';
import { DeronSymbol } from './DeronSymbol';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:h-screen lg:min-h-[600px] bg-white flex flex-col items-center justify-between pt-24 pb-12 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto text-center"
    >
      <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto py-4">
        {/* Large DERON symbol: 90px on mobile (<640px), 140px on tablet/desktop */}
        <motion.div
          id="hero-symbol-wrapper"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 md:mb-10 w-[90px] h-[90px] sm:w-[140px] sm:h-[140px] md:w-44 md:h-44 flex items-center justify-center"
        >
          <DeronSymbol color="#111111" size="100%" className="w-full h-full" />
        </motion.div>

        {/* Brand Title: DERON (Responsive clamp without mobile overflow) */}
        <motion.h1
          id="hero-main-title"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="font-hero text-[clamp(40px,8vw,88px)] font-bold tracking-[clamp(0.08em,1.5vw,0.22em)] text-[#111111] uppercase leading-[0.95] select-none pl-[clamp(0.08em,1.5vw,0.22em)] max-w-full overflow-hidden"
        >
          DERON
        </motion.h1>

        {/* Subtitle: 15px on mobile, 18px on tablet/desktop */}
        <motion.p
          id="hero-subtitle"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="mt-6 md:mt-8 max-w-2xl text-[15px] sm:text-[18px] md:text-xl text-[#111111]/80 font-normal leading-relaxed font-space px-2"
        >
          El punto de contacto entre tu negocio y tus clientes
        </motion.p>
      </div>

      {/* Smooth scroll cue to Concept (44x44px min tap target) */}
      <motion.button
        type="button"
        onClick={() => {
          document.getElementById('concepto')?.scrollIntoView({ behavior: 'smooth' });
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="pb-2 min-h-[44px] min-w-[44px] text-[#111111]/40 hover:text-[#111111] transition-colors flex flex-col items-center justify-center gap-1.5 focus:outline-none cursor-pointer group touch-manipulation"
        aria-label="Desplazar a concepto"
      >
        <span className="text-[10px] uppercase font-monument tracking-[0.25em]">Explorar</span>
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="group-hover:translate-y-1 transition-transform"
        >
          <path d="M7 13l5 5 5-5M12 4v14" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.button>
    </section>
  );
};
