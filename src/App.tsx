import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Concept } from './components/Concept';
import { Benefits } from './components/Benefits';
import { Product } from './components/Product';
import { Process } from './components/Process';
import { Applications } from './components/Applications';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SectionNav } from './components/SectionNav';

export default function App() {
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

        {/* SECCIÓN 5 — PRODUCTO (Interactivo con Stand NFC, Valoraciones y Contacto) */}
        <Product />

        {/* SECCIÓN 6 — PROCESO */}
        <Process />

        {/* SECCIÓN 7 — APLICACIONES */}
        <Applications />

        {/* SECCIÓN 8 — FAQ (Anteúltimo antes de Contacto) */}
        <FAQ />

        {/* SECCIÓN 9 — CONTACTO */}
        <Contact />
      </main>

      {/* SECCIÓN 10 — FOOTER */}
      <Footer />
    </div>
  );
}