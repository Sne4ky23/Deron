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
        'No, en absoluto. El proceso es 100% nativo e inmediato. El cliente solo tiene que acercar su móvil al stand y se le abrirá la pantalla directa de valoración de Google Maps en 1 segundo, sin descargar nada. Además, el stand incluye un código QR grabado en alta resolución para que cualquier cliente con cámara pueda dejar su reseña sin inconvenientes.',
    },
    {
      question: '¿Requiere batería, cables o toma de corriente?',
      answer:
        'Ninguna. La tecnología NFC integrada es completamente pasiva y autónoma: aprovecha el propio campo electromagnético del teléfono al acercarse. No necesita pilas, enchufes, recargas ni mantenimiento técnico de ningún tipo.',
    },
    {
      question: '¿Viene ya configurado con mi negocio o tengo que programarlo yo?',
      answer:
        'Te lo entregamos 100% configurado y vinculado a la ficha de Google Maps de tu negocio. Cuando lo recibas, solo tienes que sacarlo de la caja, colocarlo en tu mostrador o mesas y empezar a recibir valoraciones desde el primer minuto.',
    },
    {
      question: '¿Se puede cambiar o reprogramar el enlace en el futuro?',
      answer:
        'Sí. Tanto el chip NFC como el stand son reescribibles. Si en el futuro cambias de ubicación, renuevas el perfil de tu empresa o deseas dirigir las valoraciones a otro enlace, podemos reprogramarlo fácilmente sin que pierdas tu stand.',
    },
    {
      question: '¿De qué material está fabricado y qué resistencia tiene?',
      answer:
        'Está fabricado con material técnico de alta densidad en acabado negro mate, con base sólida y equilibrada. Diseñado para soportar el ritmo continuo de locales de hostelería, clínicas y comercios: resistente a salpicaduras, roces y limpieza diaria habitual.',
    },
    {
      question: '¿Cuánto tiempo tarda en llegar mi pedido?',
      answer:
        'El plazo estándar de preparación, personalización y envío es de 3 a 5 días laborables en península.',
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
          <p className="text-base sm:text-lg text-[#111111]/60 font-space mt-3">
            Todo lo que necesitas saber antes de incorporar DERON a tu mostrador.
          </p>
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