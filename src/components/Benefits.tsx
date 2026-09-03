import React from 'react';
import { motion } from 'motion/react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      title: 'Sin apps',
      description: 'El cliente no necesita instalar nada ni registrarse. Solo acercar el móvil.',
    },
    {
      title: 'Configuración en 2 minutos',
      description: 'Programamos el chip NFC con tu enlace directo de Google Maps.',
    },
    {
      title: 'Diseño personalizado',
      description: 'Adaptado al logo y a la identidad de tu negocio.',
    },
    {
      title: 'Más reseñas',
      description: 'Facilita que tus clientes valoren tu negocio en el momento exacto.',
    },
  ];

  return (
    <section
      id="beneficios"
      className="relative bg-white text-[#111111] min-h-[85vh] lg:h-screen lg:min-h-[620px] flex flex-col justify-between py-16 sm:py-20 px-4 sm:px-6 md:px-12 overflow-hidden border-t border-[#111111]/10"
    >
      <div className="max-w-7xl mx-auto w-full my-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 pb-6 border-b border-[#111111]/10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-monument text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#111111]"
          >
            Beneficios
          </motion.h2>
        </div>

        {/* Grid: 2x2 desktop, 1 column mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.1,
              }}
              className="flex flex-col justify-start p-6 md:p-8 border border-[#111111]/15 bg-[#F4F4F2] hover:border-[#111111]/30 transition-all duration-300"
            >
              <h3 className="font-monument text-xl md:text-2xl font-bold uppercase tracking-tight text-[#111111] mb-3">
                {benefit.title}
              </h3>
              <p className="text-base md:text-lg text-[#111111]/70 leading-relaxed font-space">
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