import React from 'react';
import { motion } from 'motion/react';
import { DeronSymbol } from './DeronSymbol';

export const Applications: React.FC = () => {
  return (
    <section
      id="aplicaciones"
      className="relative bg-white text-[#111111] py-24 md:py-36 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-14 md:mb-20 pb-6 border-b border-[#111111]/10"
      >
        <h2 className="font-monument text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#111111]">
          DERON en uso
        </h2>
      </motion.div>

      {/* Grid of 2x2 on Desktop, 1 column on mobile (cards occupy 100% of width) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 w-full">
        {/* Mockup 1: Tarjeta de fidelidad (Fondo negro, logo blanco, puntos de fidelidad) */}
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="w-full border border-[#111111]/10 bg-[#F4F4F2] p-4 sm:p-8 md:p-12 flex flex-col justify-between group hover:border-[#111111] hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
        >
          <div className="mb-6">
            <span className="text-xs uppercase tracking-[0.2em] font-monument text-[#111111]">
              Tarjeta de Fidelidad
            </span>
          </div>

          {/* Rendered CSS/SVG Card */}
          <div className="py-6 flex items-center justify-center w-full">
            <div className="w-full max-w-full sm:max-w-[340px] aspect-[1.586/1] bg-[#111111] text-white p-4 sm:p-6 rounded-xl border border-white/20 shadow-xl flex flex-col justify-between relative overflow-hidden transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-2xl">
              {/* Card Header */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-white/50 block">
                    Fidelidad &middot; NFC
                  </span>
                  <h4 className="font-monument text-xs font-bold uppercase tracking-widest text-white mt-1">
                    PROGRAMA DE FIDELIDAD
                  </h4>
                </div>
                <div className="w-8 h-8">
                  <DeronSymbol color="#FFFFFF" size={32} />
                </div>
              </div>

              {/* Loyalty Stamp Points Grid */}
              <div className="my-auto py-2">
                <span className="text-[8px] uppercase tracking-[0.2em] text-white/40 block mb-2">
                  Registro de Visitas
                </span>
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <div
                      key={num}
                      className={`aspect-square rounded-full border flex items-center justify-center text-[9px] font-mono ${
                        num <= 7
                          ? 'border-white bg-white text-black font-bold'
                          : 'border-white/30 text-white/40 bg-transparent'
                      }`}
                    >
                      {num <= 7 ? '✓' : num}
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between text-[8px] uppercase tracking-widest text-white/50 border-t border-white/10 pt-2 font-mono">
                <span>ID: DR-89201</span>
                <span>TAP TO COLLECT</span>
              </div>
            </div>
          </div>

          <p className="mt-4 text-xs sm:text-sm text-[#111111]/70 leading-relaxed font-space">
            Tarjeta digital de fidelidad con chip integrado para acumular puntos y premios al instante en cada consumición.
          </p>
        </motion.div>

        {/* Mockup 2: Stand en mostrador (Stand visto de frente en entorno de mostrador sobrio) */}
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
          className="w-full border border-[#111111]/10 bg-[#F4F4F2] p-4 sm:p-8 md:p-12 flex flex-col justify-between group hover:border-[#111111] hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
        >
          <div className="mb-6">
            <span className="text-xs uppercase tracking-[0.2em] font-monument text-[#111111]">
              Stand en Mostrador
            </span>
          </div>

          {/* Rendered CSS/SVG Counter Stand Setting */}
          <div className="py-4 sm:py-6 flex items-center justify-center w-full">
            <div className="w-full max-w-full sm:max-w-[340px] min-h-[220px] sm:min-h-[240px] aspect-[1.4/1] sm:aspect-[1.586/1] bg-white border border-[#111111]/10 p-3 sm:p-4 rounded-xl shadow-inner relative flex flex-col justify-end items-center overflow-hidden transition-all duration-500 group-hover:shadow-lg">
              {/* Countertop horizon line */}
              <div className="absolute inset-x-0 bottom-0 h-14 sm:h-16 bg-[#EBEBE8] border-t border-[#111111]/15" />

              {/* Stand rendered upright on the counter */}
              <div className="relative z-10 flex flex-col items-center mb-2.5 sm:mb-4 transition-transform duration-500 group-hover:-translate-y-2">
                {/* Stand vertical face */}
                <div className="w-24 sm:w-28 h-32 sm:h-36 bg-[#111111] text-white p-2.5 sm:p-3 rounded-t-md rounded-b-xs flex flex-col justify-between items-center shadow-2xl border border-black">
                  <div className="w-5 h-5 sm:w-6 sm:h-6">
                    <DeronSymbol color="#FFFFFF" size="100%" />
                  </div>
                  <div className="text-center px-0.5">
                    <p className="text-[7px] font-bold uppercase tracking-wider text-white leading-tight">
                      Tu Opinión Cuenta
                    </p>
                    <div className="flex justify-center gap-0.5 mt-1 text-white text-[9px] sm:text-[10px]">
                      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    </div>
                  </div>
                  <div className="w-full border border-white/20 py-0.5 sm:py-1 text-center bg-white/5">
                    <span className="text-[6px] uppercase tracking-widest text-white/80 font-mono block">
                      TAP NFC
                    </span>
                  </div>
                </div>
                {/* Solid counter base */}
                <div className="w-28 sm:w-32 h-2 sm:h-2.5 bg-[#1F1F1F] rounded-b-xs shadow-md" />
                {/* Stand shadow on counter */}
                <div className="w-32 sm:w-36 h-2 bg-black/20 rounded-full blur-[2px] mt-0.5" />
              </div>
            </div>
          </div>

          <p className="mt-4 text-xs sm:text-sm text-[#111111]/70 leading-relaxed font-space">
            Presencia equilibrada en la línea de cobro o recepción, capturando la reseña justo en el momento de mayor satisfacción.
          </p>
        </motion.div>

        {/* Mockup 3: Sticker circular (Fondo negro, logo blanco) */}
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-full border border-[#111111]/10 bg-[#F4F4F2] p-4 sm:p-8 md:p-12 flex flex-col justify-between group hover:border-[#111111] hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
        >
          <div className="mb-6">
            <span className="text-xs uppercase tracking-[0.2em] font-monument text-[#111111]">
              Sticker Circular
            </span>
          </div>

          {/* Rendered CSS/SVG Circular Sticker */}
          <div className="py-6 flex items-center justify-center w-full">
            <div className="w-full max-w-full sm:max-w-[340px] aspect-[1.586/1] flex items-center justify-center relative">
              <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-[#111111] text-white border-2 border-white/20 shadow-2xl p-4 flex flex-col items-center justify-center relative transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105">
                {/* Concentric subtle groove circles */}
                <div className="absolute inset-2 border border-white/10 rounded-full pointer-events-none" />
                <div className="absolute inset-5 border border-dashed border-white/15 rounded-full pointer-events-none" />

                {/* Centered Symbol */}
                <div className="w-12 h-12 flex items-center justify-center mb-1">
                  <DeronSymbol color="#FFFFFF" size={48} />
                </div>

                <span className="font-monument text-[9px] uppercase tracking-[0.25em] font-bold text-white">
                  DERON
                </span>
                <span className="text-[7px] uppercase tracking-[0.2em] text-white/50 mt-1 font-mono">
                  TAP FOR REVIEWS
                </span>
              </div>
            </div>
          </div>

          <p className="mt-4 text-xs sm:text-sm text-[#111111]/70 leading-relaxed font-space">
            Adhesivo ultra resistente con capa de apantallamiento ferromagnético para aplicar directamente en mesas, escaparates o barras.
          </p>
        </motion.div>

        {/* Mockup 4: Tarjeta de visita (Fondo blanco, logo negro, datos de contacto) */}
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
          className="w-full border border-[#111111]/10 bg-[#F4F4F2] p-4 sm:p-8 md:p-12 flex flex-col justify-between group hover:border-[#111111] hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
        >
          <div className="mb-6">
            <span className="text-xs uppercase tracking-[0.2em] font-monument text-[#111111]">
              Tarjeta de Visita
            </span>
          </div>

          {/* Rendered CSS/SVG White Business Card */}
          <div className="py-6 flex items-center justify-center w-full">
            <div className="w-full max-w-full sm:max-w-[340px] aspect-[1.586/1] bg-white text-[#111111] p-4 sm:p-6 rounded-xl border border-[#111111]/20 shadow-xl flex flex-col justify-between transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-2xl">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-monument text-xs font-bold uppercase tracking-widest text-[#111111]">
                    DERON SUPPLY
                  </h4>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#111111]/50 block mt-0.5">
                    Hardware &middot; NFC Solutions
                  </span>
                </div>
                <div className="w-8 h-8">
                  <DeronSymbol color="#111111" size={32} />
                </div>
              </div>

              {/* Contact Data Details */}
              <div className="space-y-1 font-mono text-[9px] text-[#111111]/80 border-t border-[#111111]/10 pt-3">
                <div className="flex justify-between">
                  <span className="text-[#111111]/40 uppercase">Email:</span>
                  <span className="font-medium">deronsupply@gmail.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#111111]/40 uppercase">Web:</span>
                  <span>deron.supply</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#111111]/40 uppercase">NFC:</span>
                  <span>vCard Digital Pass</span>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-4 text-xs sm:text-sm text-[#111111]/70 leading-relaxed font-space">
            Tarjeta ejecutiva con chip NFC para compartir al instante información de contacto, catálogo o enlace a reservas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
