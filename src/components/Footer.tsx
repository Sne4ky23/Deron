import React from 'react';
import { DeronSymbol } from './DeronSymbol';

export const Footer: React.FC = () => {
  return (
    <footer
      id="main-footer"
      className="bg-[#111111] text-white border-t border-white/10 py-16 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Top Section: Logo, socials, and links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo DERON (símbolo + texto) + Stands NFC para negocios */}
          <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-3 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-white flex items-center justify-center p-0.5">
                <DeronSymbol color="#111111" size={22} />
              </div>
              <span className="font-monument text-lg tracking-[0.2em] font-bold text-white uppercase select-none">
                DERON
              </span>
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-space sm:border-l sm:border-white/20 sm:pl-3">
              Stands NFC para negocios
            </span>
          </div>

          {/* Social Links and Email */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center text-xs uppercase tracking-[0.2em] font-medium text-white/60">
            <a
              id="footer-instagram"
              href="https://instagram.com/deronsupply"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors min-h-[44px] inline-flex items-center px-3 touch-manipulation"
            >
              Instagram <span className="text-white/40 ml-1">@deronsupply</span>
            </a>
            <a
              id="footer-tiktok"
              href="https://tiktok.com/@deronsupply"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors min-h-[44px] inline-flex items-center px-3 touch-manipulation"
            >
              TikTok <span className="text-white/40 ml-1">@deronsupply</span>
            </a>
            <a
              id="footer-email"
              href="mailto:deronsupply@gmail.com"
              className="hover:text-white transition-colors min-h-[44px] inline-flex items-center px-3 touch-manipulation"
            >
              deronsupply@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom Section: Legal links and copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs uppercase tracking-[0.15em] text-white/40 font-mono text-center md:text-left">
            &copy; 2024 DERON SUPPLY. Todos los derechos reservados.
          </div>

          {/* Legal Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center text-xs uppercase tracking-[0.15em] font-medium text-white/50">
            <a
              href="/legal/aviso-legal"
              className="hover:text-white transition-colors min-h-[44px] inline-flex items-center"
            >
              Aviso Legal
            </a>
            <a
              href="/legal/privacidad"
              className="hover:text-white transition-colors min-h-[44px] inline-flex items-center"
            >
              Privacidad
            </a>
            <a
              href="/legal/cookies"
              className="hover:text-white transition-colors min-h-[44px] inline-flex items-center"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
