import React, { useEffect, useState } from 'react';

export const SectionNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', label: 'Inicio' },
    { id: 'concepto', label: 'Concepto' },
    { id: 'producto', label: 'El Stand' },
    { id: 'proceso', label: 'Proceso' },
    { id: 'aplicaciones', label: 'En uso' },
    { id: 'contacto', label: 'Contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const header = document.getElementById('main-header');
    const headerHeight = header ? header.getBoundingClientRect().height : 70;
    const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: Math.max(0, elementTop - headerHeight),
      behavior: 'smooth',
    });
  };

  return (
    <nav
      id="section-nav"
      className="section-nav fixed right-5 xl:right-7 top-1/2 -translate-y-1/2 z-40 hidden min-[901px]:flex flex-col items-end gap-3.5 select-none"
      aria-label="Navegación de secciones"
    >
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <button
            key={section.id}
            type="button"
            onClick={() => scrollToSection(section.id)}
            className="group flex items-center gap-2.5 focus:outline-none cursor-pointer p-1"
            aria-label={`Ir a ${section.label}`}
          >
            {/* Hover tooltip */}
            <span
              className={`text-[9px] uppercase tracking-[0.2em] font-monument px-2 py-0.5 rounded-xs transition-all duration-200 pointer-events-none ${
                isActive
                  ? 'opacity-100 bg-[#111111] text-white shadow-xs'
                  : 'opacity-0 group-hover:opacity-100 bg-white/90 text-[#111111] border border-[#111111]/20 -translate-x-1 group-hover:translate-x-0'
              }`}
            >
              {section.label}
            </span>

            {/* Indicator Dot / Line */}
            <span
              className={`block transition-all duration-300 rounded-full ${
                isActive
                  ? 'w-6 h-1.5 bg-[#111111]'
                  : 'w-2 h-2 bg-[#111111]/25 group-hover:bg-[#111111] group-hover:scale-125'
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
};
