import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DeronSymbol } from './DeronSymbol';

export const Product: React.FC = () => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [stars, setStars] = useState<number>(5);
  const [hoverStars, setHoverStars] = useState<number>(0);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const tags = ['Trato impecable', 'Calidad premium', 'Súper rápido', '100% Recomendado'];

  // Close modal on Escape key press
  useEffect(() => {
    if (!isSimulating) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSimulating(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSimulating]);

  const handleStarClick = (rating: number) => {
    setStars(rating);
    setFormError(null);
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (stars < 1) {
      setFormError('Por favor selecciona una valoración antes de publicar.');
      return;
    }
    setFormError(null);
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setHasSubmitted(true);
    }, 450);
  };

  const handleReset = () => {
    setHasSubmitted(false);
    setStars(5);
    setSelectedTag(null);
    setFormError(null);
  };

  return (
    <section
      id="producto"
      className="relative bg-white text-[#111111] py-20 md:py-28 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto"
    >
      {/* Header of Section */}
      <div className="mb-12 md:mb-16 pb-6 border-b border-[#111111]/10">
        <h2 className="font-monument text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#111111]">
          El stand
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Stand Representation Drawn with CSS & SVG */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center relative w-full">
          {/* Interactive instruction callout (Desktop only) */}
          <div className="mb-4 hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111111] text-white text-[10px] uppercase tracking-[0.2em] font-medium shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Toca el stand para interactuar</span>
          </div>

          <div className="relative w-full max-w-md bg-[#F4F4F2] p-2 sm:p-12 border border-[#111111]/10 flex flex-col items-center justify-center overflow-hidden">
            {/* Background geometric grid markings */}
            <div className="absolute inset-0 bg-[radial-gradient(#111111_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />

            {/* Stand 3D/Physical Mockup Component */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => {
                if (typeof window !== 'undefined' && window.innerWidth >= 640) {
                  setIsSimulating(true);
                }
              }}
              className="relative z-10 flex flex-col items-center select-none sm:cursor-pointer group sm:hover:scale-[1.02] sm:active:scale-[0.98] transition-transform duration-300 w-full max-w-[320px]"
              title="Stand DERON"
            >
              {/* Stand Vertical Plaque: responsive width up to 320px, no overflow */}
              <div className="w-[min(260px,88vw)] sm:w-[320px] h-[360px] sm:h-[410px] rounded-t-xl rounded-b-xs p-3 sm:p-5 flex flex-col justify-between items-center bg-[#111111] text-white border border-black shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] relative group-hover:border-white/40 transition-colors">
                {/* Top: DERON Symbol */}
                <div className="flex flex-col items-center">
                  <div className="w-11 h-11 flex items-center justify-center mb-1">
                    <DeronSymbol color="#FFFFFF" size={44} />
                  </div>
                  <span className="font-monument text-[10px] tracking-[0.25em] font-bold opacity-80 uppercase">
                    DERON
                  </span>
                </div>

                {/* Center: "¿Nos dejas una reseña?" */}
                <div className="text-center my-auto px-2">
                  <p className="font-monument text-sm sm:text-base font-bold uppercase tracking-wider leading-snug text-white">
                    ¿Nos dejas una reseña?
                  </p>
                  <p className="text-[11px] font-space mt-2 tracking-wide text-white/60">
                    Tu opinión nos ayuda a seguir mejorando
                  </p>
                </div>

                {/* Stars Component: 5 geometric stars (las que pasen de 4 se ocultan en móvil) */}
                <div className="flex items-center gap-1.5 my-2 text-white">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      viewBox="0 0 24 24"
                      className={`w-4 h-4 fill-white text-white group-hover:scale-110 transition-transform ${
                        star > 4 ? 'hidden sm:block' : ''
                      }`}
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Marked NFC Contact Target Zone & QR alternate block with subtle QR + NFC label */}
                <div className="w-full border border-white/20 bg-white/[0.04] p-2.5 sm:p-3 flex items-center justify-between group-hover:border-white/50 group-hover:bg-white/[0.08] transition-all relative overflow-hidden">
                  {/* Left: NFC Wave Icon & Instruction */}
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/30 text-white flex items-center justify-center relative flex-shrink-0">
                      <svg
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 8a6 6 0 0 1 12 0" />
                        <path d="M8.5 11.5a3.5 3.5 0 0 1 7 0" />
                        <circle cx="12" cy="15" r="1" fill="currentColor" />
                      </svg>
                      <div className="absolute inset-0 rounded-full border border-white/40 animate-ping opacity-30 pointer-events-none" />
                    </div>
                    <div className="text-left">
                      <span className="block text-[9px] font-bold uppercase tracking-[0.16em]">
                        NFC Contactless
                      </span>
                      <span className="text-[8px] uppercase tracking-wider block text-white/60">
                        Toca aquí para probar
                      </span>
                    </div>
                  </div>

                  {/* Right: QR Code SVG geometric representation + QR + NFC badge */}
                  <div className="flex flex-col items-center gap-0.5 flex-shrink-0">
                    <div className="w-7 h-7 p-1 border border-white/30 bg-white text-black flex items-center justify-center">
                      <svg viewBox="0 0 16 16" width="100%" height="100%" fill="currentColor">
                        <rect x="1" y="1" width="5" height="5" />
                        <rect x="2" y="2" width="3" height="3" fill="white" />
                        <rect x="10" y="1" width="5" height="5" />
                        <rect x="11" y="2" width="3" height="3" fill="white" />
                        <rect x="1" y="10" width="5" height="5" />
                        <rect x="2" y="11" width="3" height="3" fill="white" />
                        <rect x="8" y="7" width="2" height="2" />
                        <rect x="12" y="10" width="3" height="3" />
                        <rect x="7" y="12" width="2" height="3" />
                      </svg>
                    </div>
                    <span className="text-[7px] uppercase font-mono tracking-wider text-white/70">
                      QR + NFC
                    </span>
                  </div>
                </div>
              </div>

              {/* Physical Solid Base Support (Responsive width matching plaque) */}
              <div className="w-[min(275px,92vw)] sm:w-[350px] h-3.5 sm:h-4 rounded-sm border-t bg-[#1a1a1a] border-white/20 shadow-xl" />
              <div className="w-[min(285px,94vw)] sm:w-[365px] h-2 rounded-b-md bg-[#0a0a0a]" />
            </motion.div>

            {/* Interactive Simulation Overlay - Compact card inside this stand's frame */}
            <AnimatePresence>
              {isSimulating && (
                <div
                  className="absolute inset-0 z-20 flex items-center justify-center p-2 sm:p-4 bg-black/40 backdrop-blur-[2px]"
                  onClick={() => setIsSimulating(false)}
                >
                  <motion.div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="simulation-title"
                    aria-describedby="simulation-desc"
                    initial={{ opacity: 0, scale: 0.94, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.94, y: 10 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-full max-w-[340px] max-h-[96%] bg-white border border-[#111111] shadow-2xl p-4 sm:p-5 flex flex-col justify-between overflow-y-auto text-[#111111]"
                  >
                    <p id="simulation-desc" className="sr-only">
                      Simulación interactiva de valoración en Google Maps mediante NFC DERON
                    </p>

                    {/* Accessible Live status for screen readers */}
                    <div aria-live="polite" aria-atomic="true" className="sr-only">
                      {formError || (hasSubmitted ? `Valoración de ${stars} estrellas registrada con éxito` : '')}
                    </div>

                    {/* Top Bar: Google Maps simulation + Close Button */}
                    <div className="flex items-center justify-between pb-3 border-b border-[#111111]/10 flex-shrink-0">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#EA4335] flex items-center justify-center text-white text-[10px] font-bold shadow-xs">
                          <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                          </svg>
                        </div>
                        <span className="text-[9px] uppercase tracking-[0.2em] text-[#111111]/60 font-bold">
                          Google Maps &middot; Conectado por NFC
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsSimulating(false);
                        }}
                        className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-[#111111]/10 text-xl font-bold text-[#111111]/70 hover:text-[#111111] transition-colors cursor-pointer touch-manipulation"
                        aria-label="Cerrar simulación"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>

                    {/* Business Profile Info */}
                    <div className="pt-2 pb-1 text-left flex-shrink-0">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 bg-[#111111] flex items-center justify-center flex-shrink-0">
                          <DeronSymbol color="#FFFFFF" size={20} />
                        </div>
                        <div>
                          <h4 id="simulation-title" className="font-monument text-xs sm:text-sm font-bold uppercase tracking-tight text-[#111111]">
                            DERON Supply
                          </h4>
                          <span className="text-[10px] text-[#111111]/60 font-space block">
                            Hardware & Stands NFC &middot; Negocio Verificado
                          </span>
                        </div>
                      </div>
                      <div className="mt-1.5 flex items-center gap-1.5 text-xs">
                        <span className="font-bold text-[#111111] text-[11px]">5.0</span>
                        <div className="flex text-[#FBBC04] text-xs">
                          {'★★★★★'.split('').map((s, idx) => (
                            <span key={idx}>{s}</span>
                          ))}
                        </div>
                        <span className="text-[#111111]/50 text-[10px] font-space">(128 reseñas)</span>
                      </div>
                    </div>

                    {/* Interactive Review Section */}
                    {!hasSubmitted ? (
                      <form onSubmit={handleSubmitReview} className="mt-2 pt-2 border-t border-[#111111]/10 text-left flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#111111]">
                              ¿Cómo valoras tu experiencia?
                            </span>
                            <span className="text-[9px] text-[#111111]/50 font-mono">Toca para calificar</span>
                          </div>

                          {/* Star Rating Interactive Input: with 44x44px tap targets */}
                          <div className="rating-row flex items-center gap-1 py-1 justify-center bg-[#F4F4F2] px-1 border border-[#111111]/10">
                            {[1, 2, 3, 4, 5].map((starIndex) => {
                              const isFilled = (hoverStars || stars) >= starIndex;
                              return (
                                <button
                                  key={starIndex}
                                  type="button"
                                  onClick={() => handleStarClick(starIndex)}
                                  onMouseEnter={() => setHoverStars(starIndex)}
                                  onMouseLeave={() => setHoverStars(0)}
                                  className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center p-2 hover:scale-110 active:scale-95 transition-transform focus:outline-none cursor-pointer touch-manipulation"
                                  aria-label={`Calificar con ${starIndex} estrellas`}
                                >
                                  <svg
                                    viewBox="0 0 24 24"
                                    className={`w-6 h-6 sm:w-7 sm:h-7 transition-colors ${
                                      isFilled ? 'text-[#FBBC04] fill-[#FBBC04]' : 'text-[#111111]/20 fill-none stroke-current stroke-2'
                                    }`}
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                  </svg>
                                </button>
                              );
                            })}
                          </div>

                          {/* Rating text display */}
                          <div className="text-center mt-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#111111]">
                              {stars === 5 && '★★★★★ ¡Excelente (5 estrellas)!'}
                              {stars === 4 && '★★★★☆ Muy buena (4 estrellas)'}
                              {stars === 3 && '★★★☆☆ Correcta (3 estrellas)'}
                              {stars <= 2 && '☆☆☆☆☆ Aceptable'}
                            </span>
                          </div>

                          {/* Validation error display */}
                          {formError && (
                            <p className="text-[10px] text-red-600 font-bold mt-1 text-center" role="alert">
                              {formError}
                            </p>
                          )}

                          {/* Quick Complement Chips (min-h 44px for touch) */}
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {tags.map((tag) => (
                              <button
                                key={tag}
                                type="button"
                                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                                className={`chip min-h-[44px] px-3 py-2 text-[10px] uppercase tracking-wider font-medium border transition-colors cursor-pointer touch-manipulation flex items-center justify-center ${
                                  selectedTag === tag
                                    ? 'bg-[#111111] text-white border-[#111111]'
                                    : 'bg-white text-[#111111]/70 border-[#111111]/20 hover:border-[#111111]'
                                }`}
                              >
                                {tag}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Submit Button with loading spinner & 44x44px target */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full min-h-[44px] mt-3 py-3 bg-[#111111] text-white text-[10px] font-monument uppercase tracking-[0.2em] font-bold hover:bg-black disabled:opacity-60 transition-colors cursor-pointer touch-manipulation flex items-center justify-center"
                        >
                          {isSubmitting ? (
                            <span className="inline-flex items-center gap-2">
                              <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              <span>Enviando valoración...</span>
                            </span>
                          ) : (
                            'Publicar valoración'
                          )}
                        </button>
                      </form>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mt-2 pt-2 border-t border-[#111111]/10 text-left flex-1 flex flex-col justify-center"
                      >
                        <div className="p-4 bg-[#F4F4F2] border border-[#111111]/15 text-center">
                          <div className="w-8 h-8 rounded-full bg-[#111111] text-white flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                            ✓
                          </div>
                          <h5 className="font-monument text-xs uppercase font-bold text-[#111111]">
                            ¡Valoración registrada!
                          </h5>
                          <p className="text-[11px] text-[#111111]/75 font-space mt-1">
                            Tu reseña de {stars} estrellas {selectedTag ? `("${selectedTag}")` : ''} ha entrado directa a Google Maps en 2 segundos.
                          </p>
                          <button
                            type="button"
                            onClick={handleReset}
                            className="mt-3 min-h-[44px] min-w-[44px] px-4 py-2 text-[10px] font-monument uppercase tracking-wider text-[#111111] border border-[#111111]/30 hover:bg-[#111111] hover:text-white transition-colors cursor-pointer touch-manipulation inline-flex items-center justify-center"
                          >
                            Probar de nuevo
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column: Architectural Description */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <h3 className="font-monument text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#111111]">
            Diseño & Conexión
          </h3>

          <p className="text-lg text-[#111111]/80 leading-relaxed font-normal font-space">
            Soporte NFC personalizado para mostradores. Diseñado para que tus clientes accedan a Google Maps con un solo gesto.
          </p>

          <p className="text-sm text-[#111111]/60 leading-relaxed font-space">
            Fabricado con materiales resistentes y acabado mate para integrarse con elegancia en cualquier espacio: restaurantes, cafeterías, estudios y locales comerciales.
          </p>

          {/* 9. QR Mención sutil debajo del texto existente */}
          <p className="text-xs text-[#111111]/50 font-space tracking-wide">
            Doble acceso: NFC por contacto o QR por escaneo
          </p>

          <div className="pt-2">
            <button
              type="button"
              id="test-stand-btn"
              onClick={() => setIsSimulating(true)}
              className="inline-flex items-center justify-center gap-3 px-6 py-4 min-h-[44px] bg-[#111111] text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-black transition-all shadow-sm cursor-pointer touch-manipulation"
            >
              <span>Probar experiencia en el stand</span>
              <span>&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
