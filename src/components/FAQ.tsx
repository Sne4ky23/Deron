import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: '¿El cliente necesita tener NFC en su móvil?',
      answer:
        'La mayoría de móviles modernos (iPhone y Android) tienen NFC integrado. Si no, puede escanear el QR.',
    },
    {
      question: '¿Funciona con iPhone?',
      answer:
        'Sí. Los iPhone desde el modelo XS en adelante leen NFC automáticamente sin apps.',
    },
    {
      question: '¿Puedo cambiar el enlace después?',
      answer:
        'Sí. El chip NFC se puede reprogramar si cambias tu enlace de Google Maps.',
    },
    {
      question: '¿Cuánto tarda en llegar?',
      answer:
        'Preparamos y enviamos tu stand en 3-5 días laborables.',
    },
  ];

  return (
    <section
      id="faq"
      className="relative bg-white text-[#111111] py-20 md:py-28 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-20 pb-6 border-b border-[#111111]/10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-monument text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#111111]"
          >
            Preguntas frecuentes
          </motion.h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.08,
              }}
              className="border border-[#111111]/15 bg-[#F4F4F2]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 md:p-6 hover:bg-[#111111]/5 transition-colors text-left"
                aria-expanded={openIndex === index}
              >
                <h3 className="font-monument text-base md:text-lg font-bold uppercase tracking-tight text-[#111111] pr-4">
                  {faq.question}
                </h3>
                <span
                  className={`text-2xl font-light text-[#111111]/60 transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden border-t border-[#111111]/10"
                  >
                    <p className="p-5 md:p-6 text-base md:text-lg text-[#111111]/70 leading-relaxed font-space">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};