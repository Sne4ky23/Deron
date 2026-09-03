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
      question: '¿El cliente necesita instalar alguna app o tener cuenta configurada?',
      answer:
        'No, en absoluto. Funciona de manera 100% nativa. El cliente solo tiene que acercar su móvil al stand y se le abre directamente la pantalla de valoración en Google Maps en 1 segundo. Además, cuenta con código QR integrado para cualquier smartphone con cámara.',
    },
    {
      question: '¿Requiere batería, cables o toma de corriente?',
      answer:
        'No. La tecnología NFC es completamente pasiva y autónoma: aprovecha el propio campo del teléfono al aproximarlo. No necesita pilas, enchufes ni mantenimiento.',
    },
    {
      question: '¿Cómo se vincula a mi negocio?',
      answer:
        'Configuramos el chip NFC directamente con el enlace a tu ficha de reseñas de Google Maps para que quede listo para usar en tu mostrador.',
    },
    {
      question: '¿Puedo cambiar el enlace si en el futuro cambio de ubicación o perfil?',
      answer:
        'Sí. El chip NFC se puede reprogramar si en el futuro cambias de enlace, dirección o perfil en Google Maps.',
    },
    {
      question: '¿Funciona tanto con iPhone como con Android?',
      answer:
        'Sí. Es compatible con ambos sistemas. Los teléfonos leen NFC automáticamente y, si algún dispositivo no lo tiene activado, puede escanear el QR integrado.',
    },
    {
      question: '¿Cómo consigo el stand para mi negocio?',
      answer:
        'Puedes contactarnos directamente por WhatsApp o por correo electrónico para coordinar los detalles de tu stand.',
    },
  ];

  return (
    <section
      id="faq"
      className="relative bg-white text-[#111111] py-24 md:py-32 px-4 sm:px-6 md:px-12 border-t border-[#111111]/10"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 pb-6 border-b border-[#111111]/10">
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
                delay: index * 0.06,
              }}
              className="border border-[#111111]/15 bg-[#F4F4F2] transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 md:p-6 hover:bg-[#111111]/5 transition-colors text-left cursor-pointer"
                aria-expanded={openIndex === index}
              >
                <h3 className="font-monument text-sm sm:text-base md:text-lg font-bold uppercase tracking-tight text-[#111111] pr-4 leading-snug">
                  {faq.question}
                </h3>
                <span
                  className={`text-2xl font-light text-[#111111]/60 transition-transform duration-300 flex-shrink-0 ${
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
                    <p className="p-5 md:p-6 text-sm sm:text-base text-[#111111]/75 leading-relaxed font-space">
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