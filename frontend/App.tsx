import React from 'react';
import { LanguageProvider } from './LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Platform from './components/Platform';
import Impact from './components/Impact';
import Journey from './components/Journey';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Problem />
          <Platform />
          <Impact />
          <Journey />
          <FAQ />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}