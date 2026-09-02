import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Concept } from './components/Concept';
import { Product } from './components/Product';
import { Process } from './components/Process';
import { Applications } from './components/Applications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SectionNav } from './components/SectionNav';
import { useIntroScroll } from './hooks/useIntroScroll';

export default function App() {
  useIntroScroll();

  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col font-space selection:bg-[#111111] selection:text-white relative">
      {/* SECCIÓN 1 — HEADER */}
      <Header />

      {/* Floating Section Nav Dots (Only visible >900px, hidden on mobile) */}
      <SectionNav />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* SECCIÓN 2 — HERO */}
        <Hero />

        {/* SECCIÓN 3 — CONCEPTO */}
        <Concept />

        {/* SECCIÓN 4 — PRODUCTO (Interactivo con Stand NFC, Valoraciones y Contacto) */}
        <Product />

        {/* SECCIÓN 5 — PROCESO */}
        <Process />

        {/* SECCIÓN 6 — APLICACIONES */}
        <Applications />

        {/* SECCIÓN 7 — CONTACTO */}
        <Contact />
      </main>

      {/* SECCIÓN 8 — FOOTER */}
      <Footer />
    </div>
  );
}
