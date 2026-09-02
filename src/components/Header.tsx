import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { DeronSymbol } from './DeronSymbol';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = (restoreFocus = true) => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
    if (restoreFocus) {
      toggleBtnRef.current?.focus();
    }
  };

  // Keyboard handler: ESC to close menu
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeMenu(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Clean up body overflow if unmounted
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const navLinks = [
    { label: 'Concepto', href: '#concepto' },
    { label: 'El Stand', href: '#producto' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'En uso', href: '#aplicaciones' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const navigateToSection = (href: string) => {
    // 1. Close mobile menu immediately without pulling focus back to header
    closeMenu(false);

    // 2. Perform smooth scroll with header compensation
    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      const header = document.getElementById('main-header');
      const headerHeight = header ? header.getBoundingClientRect().height : 70;
      const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
      const targetScroll = Math.max(0, elementTop - headerHeight);

      // Scroll immediately
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });

      // Update URL hash without causing a page jump
      if (window.history.pushState) {
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#111111]/10 py-3 sm:py-4 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]'
            : 'bg-white border-b border-[#111111]/10 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          {/* Logo DERON */}
          <a
            id="header-logo-link"
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection('#hero');
            }}
            className="flex items-center gap-3 group min-h-[44px]"
            aria-label="DERON inicio"
          >
            <div className="w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <DeronSymbol color="#111111" size={32} />
            </div>
            <span className="font-monument text-lg tracking-[0.18em] font-bold text-[#111111] select-none">
              DERON
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            id="desktop-nav"
            className="hidden md:flex items-center gap-7 lg:gap-9"
            aria-label="Navegación principal"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  navigateToSection(link.href);
                }}
                className="text-xs uppercase tracking-[0.2em] font-medium text-[#111111]/70 hover:text-[#111111] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#111111] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Contact link button */}
          <div className="hidden md:flex items-center">
            <a
              id="header-contact-btn"
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                navigateToSection('#contacto');
              }}
              className="px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-medium border border-[#111111] bg-transparent text-[#111111] hover:bg-[#111111] hover:text-white transition-all duration-300"
            >
              Contacto
            </a>
          </div>

          {/* Mobile Hamburger Button with Animation */}
          <button
            ref={toggleBtnRef}
            id="mobile-menu-toggle"
            type="button"
            onClick={() => (isMenuOpen ? closeMenu(false) : openMenu())}
            className={`md:hidden flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] border text-[#111111] transition-all duration-300 cursor-pointer ${
              isMenuOpen
                ? 'border-[#111111] bg-[#111111]/5'
                : 'border-[#111111]/20 hover:border-[#111111]'
            }`}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu-fullscreen"
          >
            {isMenuOpen ? (
              <span className="text-2xl font-light leading-none select-none transition-transform duration-300 rotate-90" aria-hidden="true">&times;</span>
            ) : (
              <span className="text-2xl leading-none select-none transition-transform duration-300" aria-hidden="true">&#9776;</span>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Menu with Staggered Animation */}
      {isMenuOpen && typeof document !== 'undefined' && createPortal(
        <div
          ref={menuRef}
          id="mobile-menu-fullscreen"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación móvil"
          className="fixed inset-0 z-[99999] bg-white flex flex-col justify-between p-6 overflow-y-auto overscroll-contain animate-menu-slide-in"
        >
          {/* Top Bar with DERON logo and Close Button */}
          <div className="flex items-center justify-between pb-5 border-b border-[#111111]/10 animate-menu-item" style={{ animationDelay: '0.05s' }}>
            <button
              type="button"
              onClick={() => navigateToSection('#hero')}
              className="flex items-center gap-3 min-h-[44px] cursor-pointer text-left touch-manipulation"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <DeronSymbol color="#111111" size={28} />
              </div>
              <span className="font-monument text-lg tracking-[0.18em] font-bold text-[#111111]">
                DERON
              </span>
            </button>
            <button
              type="button"
              onClick={() => closeMenu(true)}
              className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center border border-[#111111]/20 text-2xl font-light text-[#111111] hover:bg-[#111111]/5 transition-colors"
              aria-label="Cerrar menú"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          {/* Centered Navigation Links with Staggered Animation */}
          <nav className="my-auto flex flex-col items-center justify-center gap-4 py-8" aria-label="Enlaces de navegación móvil">
            {navLinks.map((link, index) => (
              <button
                key={link.href}
                type="button"
                onClick={() => navigateToSection(link.href)}
                className="font-monument text-xl sm:text-2xl tracking-[0.15em] font-bold uppercase text-[#111111] hover:text-[#111111]/60 active:scale-95 transition-all py-3.5 px-6 text-center animate-menu-item"
                style={{ animationDelay: `${0.1 + index * 0.08}s` }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Bottom Actions with Animation */}
          <div className="border-t border-[#111111]/10 pt-5 flex flex-col items-center gap-3 text-center animate-menu-item" style={{ animationDelay: '0.5s' }}>
            <a
              href="mailto:deronsupply@gmail.com"
              className="text-xs uppercase tracking-[0.2em] text-[#111111]/70 font-mono py-2 min-h-[44px] flex items-center justify-center"
            >
              deronsupply@gmail.com
            </a>
            <button
              type="button"
              onClick={() => navigateToSection('#contacto')}
              className="w-full min-h-[48px] py-4 bg-[#111111] text-white font-monument text-xs uppercase tracking-[0.2em] font-bold text-center flex items-center justify-center touch-manipulation transition-all hover:scale-105 active:scale-95"
            >
              Contacto directo &rarr;
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};