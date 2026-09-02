import React from 'react';
import { motion } from 'motion/react';

export const FinalCTA: React.FC = () => {
  return (
    <section
      id="cta-final"
      className="relative bg-white text-[#111111] py-20 md:py-28 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <h2 className="font-monument text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#111111] leading-[1.14]">
            Lleva DERON a tu negocio
          </h2>

          <p className="text-lg md:text-xl text-[#111111]/70 leading-relaxed font-space max-w-2xl mx-auto">
            El punto de contacto entre tu negocio y tus clientes
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.15,
            }}
            className="pt-4"
          >
            <a
              href="https://wa.me/34614217730"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 min-h-[48px] bg-[#111111] text-white text-sm md:text-base uppercase tracking-[0.2em] font-monument font-bold hover:bg-black transition-all duration-300 active:scale-95"
            >
              <span>Contacta por WhatsApp</span>
              <span>→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};