import React from 'react';
import { motion } from 'motion/react';

export const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Nos contactas',
      tag: 'INICIO',
      description:
        'Nos escribes por WhatsApp o email con el nombre de tu negocio y el enlace a tu perfil de Google Maps.',
    },
    {
      number: '02',
      title: 'Configuramos',
      tag: 'NFC + QR',
      description:
        'Programamos el chip NFC con tu enlace directo de Google Maps. Doble acceso integrado: NFC por contacto y QR por escaneo.',
    },
    {
      number: '03',
      title: 'Personalizamos',
      tag: 'DISEÑO',
      description:
        'Adaptamos el stand con la identidad visual de tu negocio para que encaje con naturalidad en tu mostrador.',
    },
    {
      number: '04',
      title: 'Lo tienes listo',
      tag: 'EN USO',
      description:
        'Recibes el stand ya configurado. Lo colocas en tu mostrador y tus clientes empiezan a dejar reseñas ese mismo día.',
    },
  ];

  return (
    <section
      id="proceso"
      className="relative bg-[#111111] text-white py-24 md:py-32 px-4 sm:px-6 md:px-12 overflow-hidden"
    >
      {/* Subtle large number watermark */}
      <div
        aria-hidden="true"
        className="watermark absolute right-0 top-1/2 -translate-y-1/2 text-[240px] md:text-[320px] font-extrabold leading-none text-white/[0.02] select-none pointer-events-none font-['Syne'] pr-4 md:pr-8"
      >
        04
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12 md:mb-20 pb-6 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 block mb-2 font-monument-wide">
              Proceso
            </span>
            <h2 className="font-monument text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white">
              Cómo trabajamos
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-sm sm:text-base text-white/60 font-space max-w-sm"
          >
            Sin complicaciones, sin burocracia. De la idea al mostrador en unos pocos pasos.
          </motion.p>
        </div>

        {/* Steps — horizontal timeline on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              className="bg-[#111111] p-6 sm:p-8 xl:p-10 flex flex-col gap-6 group hover:bg-[#181818] transition-colors duration-300"
            >
              {/* Number + Tag row */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-5xl sm:text-6xl font-bold text-white/10 group-hover:text-white/20 transition-colors duration-300 leading-none select-none">
                  {step.number}
                </span>
                <span className="font-monument-wide text-[10px] uppercase tracking-[0.2em] text-white/40 border border-white/15 px-2 py-0.5 group-hover:border-white/30 group-hover:text-white/60 transition-all duration-300">
                  {step.tag}
                </span>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/10 group-hover:bg-white/20 transition-colors duration-300" />

              {/* Title + Description */}
              <div className="space-y-3">
                <h3 className="font-monument text-lg sm:text-xl font-bold uppercase tracking-tight text-white leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed font-space group-hover:text-white/75 transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom detail line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
          className="mt-10 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-white/30 font-monument-wide"
        >
          <span>De la idea al mostrador</span>
          <span>4 pasos · Sin fricciones</span>
        </motion.div>
      </div>
    </section>
  );
};
