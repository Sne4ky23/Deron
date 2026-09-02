import React from 'react';
import { motion } from 'motion/react';
import { DeronSymbol } from './DeronSymbol';

export const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Diseño',
      description: 'Creamos tu stand personalizado con tu logo e identidad de marca.',
    },
    {
      number: '02',
      title: 'Programación',
      description: 'Configuramos el chip NFC con el enlace directo a tu ficha de reseñas de Google Maps. Incluye NFC y QR.',
    },
    {
      number: '03',
      title: 'Entrega',
      description: 'Recibes el stand listo para colocar directamente en tu mostrador.',
    },
    {
      number: '04',
      title: 'Conexión',
      description: 'Tus clientes acercan su teléfono y dejan su valoración con un solo gesto.',
    },
  ];

  return (
    <section
      id="proceso"
      className="relative bg-[#F4F4F2] text-[#111111] py-24 md:py-36 px-4 sm:px-6 md:px-12 border-t border-b border-[#111111]/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 md:mb-20 pb-6 border-b border-[#111111]/15">
          <h2 className="font-monument text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#111111]">
            Cómo trabajamos
          </h2>
        </div>

        {/* 4 Steps Grid with large editorial numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 w-full">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              id={`process-step-${step.number}`}
              initial={{ opacity: 0, y: 32, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              className="w-full bg-white p-5 sm:p-8 lg:p-6 xl:p-8 border border-[#111111]/10 flex flex-col justify-between relative group hover:border-[#111111] hover:shadow-xl hover:-translate-y-1 transition-all duration-500 min-h-[280px] sm:min-h-[300px]"
            >
              {/* Top: Large editorial number */}
              <div className="flex items-start justify-between">
                <span className="font-monument text-3xl sm:text-4xl xl:text-5xl font-bold text-[#111111]/25 group-hover:text-[#111111] transition-colors duration-300">
                  {step.number}
                </span>
                <div className="w-5 h-5 opacity-30 group-hover:opacity-100 transition-opacity">
                  <DeronSymbol color="#111111" size={20} />
                </div>
              </div>

              {/* Step Info */}
              <div className="mt-8 space-y-3">
                <h3 className="font-monument text-base sm:text-lg md:text-xl lg:text-base xl:text-xl font-bold uppercase tracking-tight text-[#111111] leading-tight break-words">
                  {step.title}
                </h3>
                <p className="text-sm text-[#111111]/75 leading-relaxed font-space">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
