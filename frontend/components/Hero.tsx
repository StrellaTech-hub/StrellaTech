import React from 'react';
import { ArrowRight, TrendingUp, Bot, Sparkles, Store } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-white to-brand-light/50">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-brand-accent/10 blur-[100px]"></div>
        <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-400/10 blur-[100px]"></div>
        <div className="absolute bottom-0 right-[20%] w-[30%] h-[30%] rounded-full bg-brand-primary/5 blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-brand-primary/10 text-brand-primary text-sm font-bold mb-8">
              <Sparkles className="w-4 h-4 text-brand-accent" />
              {t.hero.developedBy}
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-brand-dark leading-[1.1] mb-6 tracking-tight">
              {t.hero.title1} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-accent to-blue-500">
                {t.hero.title2}
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
              {t.hero.desc}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-dark transition-all shadow-[0_8px_25px_rgba(91,33,182,0.3)] hover:shadow-[0_12px_35px_rgba(91,33,182,0.4)] flex items-center justify-center gap-2 group transform hover:-translate-y-1">
                {t.hero.cta1}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-brand-dark border-2 border-gray-100 px-8 py-4 rounded-full font-bold text-lg hover:border-brand-primary/30 hover:bg-gray-50 transition-all flex items-center justify-center">
                {t.hero.cta2}
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-3 text-sm text-gray-500 font-medium bg-white/60 backdrop-blur-sm w-fit px-5 py-2.5 rounded-full border border-gray-200 shadow-sm">
              <div className="bg-brand-primary/10 p-1.5 rounded-full text-brand-primary">
                <Store className="w-4 h-4" />
              </div>
              <p className="text-gray-700 font-semibold">{t.hero.trusted}</p>
            </div>
          </div>

          {/* Visual Composition */}
          <div className="relative lg:ml-10 h-[500px] lg:h-[600px] flex items-center justify-center">
            
            {/* Main Persona Image (Carlos) */}
            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white z-10 bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80" 
                alt="Carlos Hernández - Restaurant Owner" 
                className="w-full h-full object-cover object-center"
              />
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent"></div>
              
              {/* Name Tag */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.8)]"></div>
                  <span className="text-sm font-bold tracking-wider uppercase">Carlos Hernández</span>
                </div>
                <p className="text-white/90 text-sm font-medium">"Dish AI Manager me dio el control que necesitaba."</p>
              </div>
            </div>

            {/* Floating AI Mascot Representation */}
            <div className="absolute -right-8 top-12 z-20 animate-bounce" style={{ animationDuration: '4s' }}>
              <div className="relative">
                {/* Glow */}
                <div className="absolute inset-0 bg-brand-accent blur-xl opacity-60 rounded-full"></div>
                {/* Mascot Body */}
                <div className="relative bg-white/90 backdrop-blur-md p-4 rounded-3xl shadow-2xl border border-white flex flex-col items-center gap-2">
                  <div className="bg-gradient-to-br from-brand-primary to-brand-accent p-4 rounded-2xl shadow-inner">
                    <Bot className="w-10 h-10 text-white" />
                  </div>
                  <div className="bg-brand-dark text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider">
                    DISH AI
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Dashboard Element 1 */}
            <div className="absolute -left-12 bottom-24 z-20 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white/95 backdrop-blur-xl p-5 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.15)] border border-white w-64">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t.hero.uiProfit}</div>
                  <div className="bg-green-100 text-green-600 p-1.5 rounded-lg">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-3xl font-extrabold text-brand-dark mb-1">$7,640</div>
                <div className="text-sm font-bold text-green-500">+15% <span className="text-gray-400 font-medium">{t.platform.vsLastWeek}</span></div>
              </div>
            </div>

            {/* Floating Dashboard Element 2 (AI Recommendation) */}
            <div className="absolute right-4 -bottom-8 z-20 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="bg-gradient-to-r from-brand-primary to-brand-accent p-5 rounded-2xl shadow-[0_15px_40px_rgba(91,33,182,0.4)] border border-white/20 w-72 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                  <span className="text-xs font-bold uppercase tracking-wider">{t.hero.uiAiRec}</span>
                </div>
                <p className="text-sm font-medium leading-snug">
                  {t.hero.uiAiText}
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
