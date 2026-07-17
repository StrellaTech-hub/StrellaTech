import React from 'react';
import { HelpCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function FAQ() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-primary font-semibold tracking-wide uppercase text-sm mb-3">{t.faq.tag}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
            {t.faq.title}
          </h3>
          <p className="text-lg text-gray-600">
            {t.faq.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {t.faq.questions.map((q, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-start gap-4 hover:border-brand-primary/50 transition-colors">
              <div className="bg-brand-light p-2 rounded-lg text-brand-primary shrink-0 mt-0.5">
                <HelpCircle className="w-5 h-5" />
              </div>
              <p className="text-gray-800 font-medium text-sm leading-relaxed">{q}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">{t.faq.footerText}</p>
          <button className="bg-brand-dark text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-primary transition-all shadow-lg">
            {t.faq.btn}
          </button>
        </div>

      </div>
    </section>
  );
}