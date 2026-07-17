import React from 'react';
import { TrendingUp, ShieldCheck, Clock, Heart, Brain, Leaf, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Impact() {
  const { t } = useLanguage();

  const icons = [TrendingUp, ShieldCheck, Clock, Heart, Brain, Leaf];
  const colors = ["text-blue-600", "text-green-600", "text-blue-500", "text-orange-500", "text-pink-500", "text-emerald-600"];
  const bgs = ["bg-blue-100", "bg-green-100", "bg-blue-50", "bg-orange-100", "bg-pink-100", "bg-emerald-100"];

  return (
    <section id="impact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-brand-primary"></span>
              {t.impact.tag}
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 leading-tight">
              {t.impact.title}
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              {t.impact.desc}
            </p>
            
            <div className="bg-brand-light rounded-3xl p-8 border border-gray-200 relative">
              <div className="absolute -top-4 -left-4 bg-brand-primary text-white p-3 rounded-2xl shadow-lg">
                <ArrowUpRight className="w-8 h-8" />
              </div>
              <p className="text-xl text-brand-dark font-medium italic mb-4 pt-2">
                "{t.impact.quote}"
              </p>
              <p className="text-brand-primary font-bold">{t.impact.author}</p>
            </div>
          </div>
          
          {/* Visual Growth Anchor (Success Dashboard) */}
          <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80" 
              alt="Successful Restaurant" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply"></div>
            
            {/* Glassmorphism Success Card */}
            <div className="absolute inset-x-6 bottom-6 bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/50">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Monthly Profit</div>
                  <div className="text-4xl font-extrabold text-brand-dark">$12,450</div>
                </div>
                <div className="bg-green-100 text-green-600 px-3 py-1.5 rounded-lg flex items-center gap-1 font-bold shadow-sm">
                  <TrendingUp className="w-4 h-4" /> +32%
                </div>
              </div>
              
              {/* Clean Bar Chart */}
              <div className="flex items-end gap-3 h-24">
                {[30, 45, 40, 60, 75, 85, 100].map((h, i) => (
                  <div key={i} className="flex-1 relative group">
                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-brand-primary to-brand-accent rounded-t-md transition-all duration-500 group-hover:opacity-80" style={{ height: `${h}%` }}></div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Floating Goal Badge */}
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md border border-white/50 text-brand-dark px-5 py-4 rounded-2xl shadow-xl max-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="font-bold text-sm">{t.impact.goalTitle}</span>
              </div>
              <span className="text-xs font-medium text-gray-600 leading-tight block">{t.impact.goalDesc}</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.impact.cards.map((benefit, idx) => {
            const Icon = icons[idx];
            return (
              <div key={idx} className="p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all bg-white group hover:-translate-y-1">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${bgs[idx]} ${colors[idx]} group-hover:scale-110 transition-transform shadow-sm`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-extrabold text-brand-dark mb-3">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
