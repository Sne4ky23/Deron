import React from 'react';
import { motion } from 'motion/react';
import { DeronSymbol } from './DeronSymbol';

export const ForWho: React.FC = () => {
  const industries = [
    'Bares y restaurantes',
    'Barberías y salones',
    'Clínicas',
    'Tiendas y comercios',
    'Gimnasios',
  ];

  return (
    <section
      id="para-quien"
      className="relative bg-[#111111] text-white py-20 md:py-28 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-20 pb-6 border-b border-white/10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-monument text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white"
          >
            Para quién es
          </motion.h2>
        </div>

        {/* Horizontal scrollable grid on mobile, flex row on desktop */}
        <div className="overflow-x-auto md:overflow-visible pb-4 md:pb-0">
          <div className="flex gap-4 md:gap-6 md:flex-wrap md:justify-start min-w-max md:min-w-0">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.08,
                }}
                className="flex-shrink-0 md:flex-shrink md:flex-1 flex flex-col items-center justify-center p-6 border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all duration-300 w-[200px] md:w-full"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center mb-3 opacity-60">
                  <DeronSymbol color="#FFFFFF" size={48} />
                </div>
                <p className="font-monument text-sm md:text-base font-bold uppercase tracking-tight text-center text-white">
                  {industry}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};