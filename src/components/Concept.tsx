import React from 'react';
import { motion } from 'motion/react';
import { DeronSymbol } from './DeronSymbol';

export const Concept: React.FC = () => {
  return (
    <section
      id="concepto"
      className="relative bg-[#111111] text-white min-h-[85vh] lg:h-screen lg:min-h-[600px] flex flex-col justify-between py-16 sm:py-20 px-4 sm:px-6 md:px-12 overflow-hidden"
    >
      {/* Subtle watermark decorative symbol in pure white (hidden on mobile to save GPU repaints) */}
      <div className="watermark absolute -right-16 md:right-10 top-1/2 -translate-y-1/2 w-80 md:w-[480px] h-80 md:h-[480px] opacity-[0.04] pointer-events-none select-none">
        <DeronSymbol color="#FFFFFF" size="100%" className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto w-full my-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Main Statement Title */}
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-monument text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase leading-[1.14]"
            >
              Un gesto físico que se convierte en una acción digital
            </motion.h2>
          </div>

          {/* Editorial Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="space-y-5 text-white/80 font-normal text-base md:text-lg leading-relaxed font-space"
            >
              <p>
                DERON crea stands de mostrador equipados con tecnología NFC y código QR para bares, restaurantes, barberías y comercios.
              </p>
              <p className="text-white/70">
                Al aproximar el smartphone al soporte físico, el dispositivo abre al instante la ficha de valoraciones de Google Maps del establecimiento. Sin descargas de aplicaciones ni pasos intermedios.
              </p>
            </motion.div>

            {/* Deron Symbol in White */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="flex items-center gap-4 pt-4 border-t border-white/10"
            >
              <div className="w-9 h-9 flex-shrink-0">
                <DeronSymbol color="#FFFFFF" size={36} />
              </div>
              <span className="font-monument text-xs tracking-[0.25em] text-white/60 uppercase">
                DERON &middot; Contactless
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Smooth scroll cue to Product (El Stand) */}
      <div className="relative z-10 flex justify-center w-full">
        <button
          type="button"
          onClick={() => {
            document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-white/40 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex flex-col items-center justify-center gap-1 focus:outline-none cursor-pointer group touch-manipulation"
          aria-label="Desplazar a beneficios"
        >
          <span className="text-[10px] uppercase font-monument tracking-[0.25em]">Ver beneficios</span>
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
        </button>
      </div>
    </section>
  );
};
