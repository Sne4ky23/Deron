import React, { useState } from 'react';
import { motion } from 'motion/react';
import { DeronSymbol } from './DeronSymbol';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('deronsupply@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contacto"
      className="relative bg-[#111111] text-white py-24 sm:py-28 md:py-44 px-4 sm:px-6 md:px-12 border-t border-white/10 overflow-hidden"
    >
      {/* Background large decorative symbol (hidden on mobile via watermark class) */}
      <div className="watermark absolute left-1/2 -translate-x-1/2 bottom-0 w-96 md:w-[600px] h-96 md:h-[600px] opacity-[0.02] pointer-events-none select-none">
        <DeronSymbol color="#FFFFFF" size="100%" className="w-full h-full" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Title: Lleva DERON a tu negocio */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-monument text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white mb-6 leading-tight"
        >
          Lleva DERON a tu negocio
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-white/70 font-normal max-w-xl mx-auto mb-10 font-space"
        >
          Diseñamos y configuramos tu stand. Listo para usar.
        </motion.p>

        {/* Prominent WhatsApp Option (min-h 48px, touch-manipulation) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <a
            id="whatsapp-contact-btn"
            href="https://wa.me/34614217730?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20los%20stands%20DERON"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 min-h-[48px] bg-white text-[#111111] font-monument text-xs sm:text-sm uppercase tracking-[0.2em] font-bold hover:bg-[#25D366] hover:text-white transition-all duration-300 shadow-xl touch-manipulation"
          >
            <span>Contactar por WhatsApp</span>
            <span className="text-base">&rarr;</span>
          </a>
        </motion.div>

        {/* Direct Channels: Email & Social Networks */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="pt-8 border-t border-white/10 flex flex-col items-center justify-center gap-6"
        >
          {/* Email */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              id="main-contact-email"
              href="mailto:deronsupply@gmail.com"
              className="font-space text-lg sm:text-xl text-white/90 hover:text-white transition-colors underline underline-offset-4 min-h-[44px] inline-flex items-center touch-manipulation"
            >
              deronsupply@gmail.com
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="text-xs uppercase tracking-[0.2em] text-white/70 hover:text-white px-4 py-2.5 min-h-[44px] min-w-[44px] border border-white/20 hover:border-white transition-colors cursor-pointer touch-manipulation inline-flex items-center justify-center"
            >
              {copied ? 'Copiado ✓' : 'Copiar email'}
            </button>
          </div>

          {/* Instagram & TikTok */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2">
            <a
              id="contact-instagram"
              href="https://instagram.com/deronsupply"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] border border-white/20 hover:border-white text-xs uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors touch-manipulation"
            >
              <span className="text-white/40">IG</span>
              <span>@deronsupply</span>
            </a>
            <a
              id="contact-tiktok"
              href="https://tiktok.com/@deronsupply"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] border border-white/20 hover:border-white text-xs uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors touch-manipulation"
            >
              <span className="text-white/40">TK</span>
              <span>@deronsupply</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
