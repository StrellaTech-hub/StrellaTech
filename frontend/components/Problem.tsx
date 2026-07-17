import React from 'react';
import { Clock, EyeOff, HelpCircle, TrendingDown, AlertTriangle, Calendar, Store, Users, Target, Frown, Star, AlertCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Problem() {
  const { t } = useLanguage();

  return (
    <section id="problem" className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Carlos Persona Introduction */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden text-gray-900">
            <div className="grid md:grid-cols-5">
              
              {/* Profile Image & Name */}
              <div className="md:col-span-2 bg-brand-light p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-32 bg-brand-primary/10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=400&q=80" 
                  alt="Carlos Hernández"
                  className="w-32 h-32 rounded-full object-cover object-top border-4 border-white shadow-lg mb-4 relative z-10" 
                />
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold mb-3 relative z-10 uppercase tracking-wider border border-orange-200 shadow-sm">
                  <Clock className="w-3.5 h-3.5" />
                  {t.problem.beforeDish}
                </div>
                <h3 className="text-2xl font-extrabold text-brand-dark mb-2 relative z-10">{t.problem.meetCarlos}</h3>
                <p className="text-gray-600 text-sm relative z-10 font-medium">{t.problem.carlosDesc}</p>
              </div>
              
              {/* Profile Details */}
              <div className="md:col-span-3 p-8">
                
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-gray-100">
                  <div className="text-center">
                    <Calendar className="w-6 h-6 text-brand-primary mx-auto mb-2" />
                    <div className="font-bold text-brand-dark">{t.problem.carlosAge}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">{t.problem.carlosAgeLabel}</div>
                  </div>
                  <div className="text-center border-l border-r border-gray-100">
                    <Store className="w-6 h-6 text-brand-primary mx-auto mb-2" />
                    <div className="font-bold text-brand-dark">{t.problem.carlosBiz}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">{t.problem.carlosBizLabel}</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-6 h-6 text-brand-primary mx-auto mb-2" />
                    <div className="font-bold text-brand-dark">{t.problem.carlosTeam}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">{t.problem.carlosTeamLabel}</div>
                  </div>
                </div>

                {/* Needs, Worries, Dreams */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <div className="flex items-center gap-2 mb-2 text-blue-700">
                      <Target className="w-5 h-5" />
                      <span className="font-bold text-sm">{t.problem.carlosNeed}</span>
                    </div>
                    <p className="text-sm text-gray-700">{t.problem.carlosNeedDesc}</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                    <div className="flex items-center gap-2 mb-2 text-red-700">
                      <Frown className="w-5 h-5" />
                      <span className="font-bold text-sm">{t.problem.carlosWorry}</span>
                    </div>
                    <ul className="text-sm text-gray-700 list-disc pl-4 space-y-1">
                      <li>{t.problem.carlosWorry1}</li>
                      <li>{t.problem.carlosWorry2}</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                    <div className="flex items-center gap-2 mb-2 text-brand-primary">
                      <Star className="w-5 h-5" />
                      <span className="font-bold text-sm">{t.problem.carlosDream}</span>
                    </div>
                    <p className="text-sm text-gray-700">{t.problem.carlosDreamDesc}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* The Problem Transition */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Visual Representation of the Problem (Chaos Dashboard) */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gray-700 bg-[#110820] aspect-square lg:aspect-auto lg:h-[550px] p-6 md:p-8 flex flex-col gap-6">
              
              {/* Dashboard Header */}
              <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                <div className="text-gray-400 font-bold tracking-wider uppercase text-sm">System Status</div>
                <div className="flex items-center gap-2 bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs font-bold border border-red-500/30">
                  <AlertCircle className="w-4 h-4 animate-pulse" />
                  CRITICAL
                </div>
              </div>

              {/* Red Chart */}
              <div className="bg-gray-900/50 rounded-2xl border border-red-500/20 p-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent"></div>
                <div className="relative z-10">
                  <div className="text-red-400 font-bold mb-1 uppercase tracking-wider text-xs">Profit Margin</div>
                  <div className="text-4xl text-white font-extrabold mb-6">-24.5%</div>
                  
                  {/* Downward SVG Chart */}
                  <div className="h-24 w-full relative">
                    <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                      <path d="M0,5 L20,10 L40,8 L60,25 L80,20 L100,38" fill="none" stroke="#ef4444" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                      <circle cx="100" cy="38" r="3" fill="#ef4444" className="animate-ping" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Alerts List */}
              <div className="space-y-3">
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-start gap-4">
                  <div className="bg-red-500/20 p-2 rounded-lg shrink-0">
                    <TrendingDown className="text-red-400 w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-red-400 font-bold text-sm">Unexplained Losses</div>
                    <div className="text-gray-400 text-xs mt-1">$1,240 missing from inventory this week.</div>
                  </div>
                </div>
                
                <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4 flex items-start gap-4">
                  <div className="bg-orange-500/20 p-2 rounded-lg shrink-0">
                    <Clock className="text-orange-400 w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-orange-400 font-bold text-sm">Overtime Alert</div>
                    <div className="text-gray-400 text-xs mt-1">Staff working 15% more hours with no sales increase.</div>
                  </div>
                </div>
              </div>

              {/* Overlay Quote */}
              <div className="absolute bottom-6 right-6 left-6 bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl text-center shadow-2xl transform rotate-1">
                <h4 className="text-xl font-bold text-white mb-1">
                  {t.problem.quote}
                </h4>
              </div>

            </div>
          </div>

          {/* Right: Text and Pain Points */}
          <div className="order-1 lg:order-2">
            <div className="mb-12">
              <h2 className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-brand-accent"></span>
                {t.problem.tag}
              </h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                {t.problem.title}
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                {t.problem.desc}
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-5 hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 bg-red-500/20 text-red-400 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{t.problem.card1Title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{t.problem.card1Desc}</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-5 hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 bg-orange-500/20 text-orange-400 rounded-xl flex items-center justify-center shrink-0">
                  <EyeOff className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{t.problem.card2Title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{t.problem.card2Desc}</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-5 hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 bg-brand-accent/20 text-brand-accent rounded-xl flex items-center justify-center shrink-0">
                  <HelpCircle className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{t.problem.card3Title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{t.problem.card3Desc}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-brand-primary/20 border-l-4 border-brand-accent rounded-r-xl">
              <p className="text-gray-300 italic font-medium">
                {t.problem.quoteSub}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
