import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Journey() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-brand-dark text-white overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#8B5CF6 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-accent font-semibold tracking-wide uppercase text-sm mb-3">{t.journey.tag}</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            {t.journey.title}
          </h3>
          <p className="text-lg text-gray-300">
            {t.journey.desc}
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-brand-primary/30 -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-5 gap-8 relative z-10">
            {t.journey.steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center relative">
                <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center font-bold text-lg mb-6 shadow-[0_0_15px_rgba(91,33,182,0.5)] border-4 border-brand-dark">
                  0{idx + 1}
                </div>
                <h4 className="text-lg font-bold mb-3 text-white">{step.title}</h4>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">{step.desc}</p>
                
                <div className="mt-auto pt-4 border-t border-gray-700/50 w-full">
                  <span className="text-xs font-semibold text-brand-accent uppercase tracking-wider">
                    {t.journey.result} {step.state}
                  </span>
                </div>

                {/* Mobile connector */}
                {idx < t.journey.steps.length - 1 && (
                  <div className="md:hidden my-4 text-brand-primary">
                    <ArrowRight className="w-6 h-6 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-xl font-medium text-brand-light">
            {t.journey.footerQuote}
          </p>
        </div>
      </div>
    </section>
  );
}
