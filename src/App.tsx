import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Concept } from './components/Concept';
import { Benefits } from './components/Benefits';
import { ForWho } from './components/ForWho';
import { Product } from './components/Product';
import { Process } from './components/Process';
import { FAQ } from './components/FAQ';
import { Applications } from './components/Applications';
import { Contact } from './components/Contact';
import { FinalCTA } from './components/FinalCTA';
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

        {/* SECCIÓN 4 — BENEFICIOS */}
        <Benefits />

        {/* SECCIÓN 5 — PARA QUIÉN ES */}
        <ForWho />

        {/* SECCIÓN 6 — PRODUCTO (Interactivo con Stand NFC, Valoraciones y Contacto) */}
        <Product />

        {/* SECCIÓN 7 — PROCESO */}
        <Process />

        {/* SECCIÓN 8 — FAQ */}
        <FAQ />

        {/* SECCIÓN 9 — APLICACIONES */}
        <Applications />

        {/* SECCIÓN 10 — CONTACTO */}
        <Contact />

        {/* SECCIÓN 11 — CTA FINAL */}
        <FinalCTA />
      </main>

      {/* SECCIÓN 12 — FOOTER */}
      <Footer />
    </div>
  );
}