import React from 'react';
import { motion } from 'motion/react';
import { DeronSymbol } from './DeronSymbol';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      num: '01',
      tag: 'CERO APPS',
      title: 'Acceso instantáneo',
      description:
        'Sin descargas, sin búsquedas ni registros. El cliente acerca su teléfono y la pantalla de valoración en Google Maps se abre en un solo segundo.',
    },
    {
      num: '02',
      tag: 'DOBLE VÍA',
      title: 'NFC + Código QR',
      description:
        'Chip contactless de lectura ultrarrápida combinado con un código QR grabado para compatibilidad universal con cualquier smartphone.',
    },
    {
      num: '03',
      tag: 'PERSONALIZADO',
      title: 'Tu marca, tu estilo',
      description:
        'Diseñado y adaptado con el logo y la identidad de tu negocio para integrarse con presencia y elegancia en tu mostrador o mesas.',
    },
    {
      num: '04',
      tag: 'RESULTADOS',
      title: 'Más valoraciones',
      description:
        'Facilita que tus clientes valoren tu negocio en el momento exacto en el que han tenido una buena experiencia en tu establecimiento.',
    },
  ];

  return (
    <section
      id="beneficios"
      className="relative bg-white text-[#111111] min-h-[85vh] lg:h-screen lg:min-h-[620px] flex flex-col justify-between py-16 sm:py-20 px-4 sm:px-6 md:px-12 overflow-hidden border-t border-[#111111]/10"
    >
      {/* Subtle watermark decorative symbol */}
      <div className="watermark absolute -left-16 md:left-6 top-1/2 -translate-y-1/2 w-80 md:w-[480px] h-80 md:h-[480px] opacity-[0.03] pointer-events-none select-none">
        <DeronSymbol color="#111111" size="100%" className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto w-full my-auto relative z-10">
        {/* Section Header */}
        <div className="mb-8 md:mb-12 pb-5 border-b border-[#111111]/10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-monument-wide text-xs text-[#111111]/50 tracking-[0.25em] uppercase block mb-2">
              Ventajas directas
            </span>
            <h2 className="font-monument text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#111111] leading-[1.12]">
              Menos fricción. Más reseñas.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-sm sm:text-base md:text-lg text-[#111111]/70 font-space max-w-md"
          >
            Elimina cualquier barrera entre la satisfacción de tu cliente y la reseña pública en tu perfil de Google.
          </motion.p>
        </div>

        {/* 4 Benefits Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.08 + index * 0.08,
              }}
              className="group border border-[#111111]/15 bg-[#F4F4F2] p-5 sm:p-6 lg:p-7 flex flex-col justify-between hover:border-[#111111] hover:bg-white hover:shadow-lg transition-all duration-300 relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#111111]/40 font-bold">
                    {benefit.num}
                  </span>
                  <span className="font-monument-wide text-[10px] text-[#111111]/60 tracking-[0.2em] uppercase px-2 py-0.5 border border-[#111111]/15 bg-white">
                    {benefit.tag}
                  </span>
                </div>
                <h3 className="font-monument text-lg sm:text-xl font-bold uppercase tracking-tight text-[#111111] mb-2 leading-snug">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm md:text-[15px] text-[#111111]/75 leading-relaxed font-space mt-3">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Smooth scroll cue to Product (El Stand) */}
      <div className="relative z-10 flex justify-center w-full pt-4">
        <button
          type="button"
          onClick={() => {
            document.getElementById('producto')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-[#111111]/40 hover:text-[#111111] transition-colors min-h-[44px] min-w-[44px] flex flex-col items-center justify-center gap-1 focus:outline-none cursor-pointer group touch-manipulation"
          aria-label="Desplazar al stand"
        >
          <span className="text-[10px] uppercase font-monument tracking-[0.25em]">Ver el stand</span>
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