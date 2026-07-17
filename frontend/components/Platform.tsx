import React from 'react';
import { 
  LayoutDashboard, LineChart, AlertTriangle, Package, 
  CheckSquare, Users, FileText, Settings, BrainCircuit,
  TrendingUp, Target, TrendingDown, DollarSign, ShoppingBag, Sparkles
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Platform() {
  const { t } = useLanguage();

  return (
    <section id="solution" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-brand-primary"></span>
            {t.platform.tag}
            <span className="w-8 h-px bg-brand-primary"></span>
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 leading-tight">
            {t.platform.title}
          </h3>
          <p className="text-lg text-gray-600">
            {t.platform.desc}
          </p>
        </div>

        {/* The "Connected Ecosystem" Visualization */}
        <div className="relative max-w-6xl mx-auto mt-10 mb-32">
          
          {/* Central Dashboard */}
          <div className="relative z-20 bg-brand-dark rounded-3xl shadow-[0_20px_50px_rgba(30,16,60,0.3)] overflow-hidden flex flex-col md:flex-row border border-gray-800 max-w-4xl mx-auto">
            
            {/* Sidebar */}
            <div className="w-full md:w-64 bg-[#15092A] p-6 flex flex-col gap-2 border-r border-gray-800">
              <div className="flex items-center gap-3 mb-8 px-2">
                <div className="bg-brand-primary p-2 rounded-xl shadow-inner">
                  <BrainCircuit className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-bold tracking-wide text-lg">DISH AI</span>
              </div>
              
              {[
                { icon: LayoutDashboard, label: t.platform.menuOverview, active: true },
                { icon: LineChart, label: t.platform.menuSales },
                { icon: Package, label: t.platform.menuInventory },
                { icon: CheckSquare, label: t.platform.menuTasks },
                { icon: Users, label: t.platform.menuCustomers },
                { icon: FileText, label: t.platform.menuReports },
                { icon: Settings, label: t.platform.menuSettings },
              ].map((item, idx) => (
                <div key={idx} className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all ${item.active ? 'bg-brand-primary/20 text-brand-accent border border-brand-primary/30' : 'text-gray-400 hover:bg-white/5 hover:text-gray-200 border border-transparent'}`}>
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium text-sm">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-gray-50 p-6 md:p-8">
              <div className="flex justify-between items-center mb-8">
                <h4 className="text-xl font-bold text-brand-dark">{t.platform.uiOverview}</h4>
                <select className="bg-white border border-gray-200 text-sm font-medium rounded-lg px-4 py-2 text-gray-600 outline-none shadow-sm">
                  <option>{t.platform.uiWeek}</option>
                  <option>{t.platform.uiMonth}</option>
                </select>
              </div>

              {/* Top Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { label: t.platform.stat1, val: '$24,580', trend: '+12%', up: true },
                  { label: t.platform.stat2, val: '356', trend: '+8%', up: true },
                  { label: t.platform.stat3, val: '$7,640', trend: '+15%', up: true },
                  { label: t.platform.stat4, val: '128', trend: '+10%', up: true },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">{stat.label}</div>
                    <div className="text-2xl font-extrabold text-brand-dark mb-2">{stat.val}</div>
                    <div className={`text-xs font-bold flex items-center ${stat.up ? 'text-green-500' : 'text-red-500'}`}>
                      {stat.up ? <TrendingUp className="w-3 h-3 mr-1"/> : <TrendingDown className="w-3 h-3 mr-1"/>}
                      {stat.trend} <span className="text-gray-400 font-normal ml-1">{t.platform.vsLastWeek}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Chart Placeholder */}
                <div className="md:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h5 className="text-sm font-bold text-gray-700 mb-6 uppercase tracking-wider">{t.platform.chartTitle}</h5>
                  <div className="h-40 flex items-end gap-2 relative">
                     {/* Grid lines */}
                     <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                       {[1,2,3,4].map(i => <div key={i} className="w-full h-px bg-gray-100"></div>)}
                     </div>
                     {/* Fake line chart using SVG */}
                     <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible relative z-10" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path d="M0,30 L15,25 L30,35 L45,15 L60,20 L75,5 L90,10 L100,0 L100,40 L0,40 Z" fill="url(#gradient)" />
                        <path d="M0,30 L15,25 L30,35 L45,15 L60,20 L75,5 L90,10 L100,0" fill="none" stroke="#8B5CF6" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
                        {[
                          {x:0, y:30}, {x:15, y:25}, {x:30, y:35}, {x:45, y:15}, 
                          {x:60, y:20}, {x:75, y:5}, {x:90, y:10}, {x:100, y:0}
                        ].map((pt, i) => (
                          <circle key={i} cx={pt.x} cy={pt.y} r="2" fill="#fff" stroke="#5B21B6" strokeWidth="1.5" />
                        ))}
                     </svg>
                  </div>
                  <div className="flex justify-between text-[10px] font-bold text-gray-400 mt-4 px-1 uppercase">
                    {t.platform.days.map((day, i) => <span key={i}>{day}</span>)}
                  </div>
                </div>

                {/* Alerts & AI */}
                <div className="flex flex-col gap-4">
                  <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex-1">
                    <h5 className="text-sm font-bold text-gray-700 mb-4 uppercase tracking-wider">{t.platform.alertsTitle}</h5>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-3 bg-red-50 rounded-xl border border-red-100">
                        <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-red-900">{t.platform.alert1}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-xl border border-orange-100">
                        <AlertTriangle className="w-5 h-5 text-orange-500 shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-orange-900">{t.platform.alert2}</div>
                          <div className="text-[10px] font-medium text-orange-700 mt-0.5">{t.platform.alert2Sub}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl p-5 text-white shadow-lg relative overflow-hidden">
                    <div className="absolute -right-4 -top-4 opacity-20">
                      <BrainCircuit className="w-24 h-24" />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="w-4 h-4 text-yellow-300" />
                        <span className="text-xs font-bold uppercase tracking-wider">{t.platform.aiRec}</span>
                      </div>
                      <p className="text-sm font-medium leading-relaxed mb-4">
                        {t.platform.aiRecText}
                      </p>
                      <button className="text-xs bg-white text-brand-dark hover:bg-gray-100 transition-colors px-4 py-2 rounded-lg w-full font-bold shadow-sm">
                        {t.platform.aiBtn}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Ecosystem Nodes (Desktop Only for cleaner layout) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-10">
            {/* SVG Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
              <path d="M 150 150 Q 300 150 400 250" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
              <path d="M 1000 150 Q 850 150 750 250" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
              <path d="M 150 450 Q 300 450 400 350" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
              <path d="M 1000 450 Q 850 450 750 350" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
            </svg>

            {/* Nodes */}
            <div className="absolute top-20 left-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 pointer-events-auto transform hover:scale-105 transition-transform">
              <div className="bg-blue-100 p-3 rounded-xl text-blue-600"><Package className="w-6 h-6"/></div>
              <div><div className="font-bold text-sm text-brand-dark">Inventory</div><div className="text-xs text-gray-500">Real-time tracking</div></div>
            </div>

            <div className="absolute top-20 right-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 pointer-events-auto transform hover:scale-105 transition-transform">
              <div className="bg-green-100 p-3 rounded-xl text-green-600"><ShoppingBag className="w-6 h-6"/></div>
              <div><div className="font-bold text-sm text-brand-dark">Orders</div><div className="text-xs text-gray-500">Sales integration</div></div>
            </div>

            <div className="absolute bottom-20 left-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 pointer-events-auto transform hover:scale-105 transition-transform">
              <div className="bg-red-100 p-3 rounded-xl text-red-600"><DollarSign className="w-6 h-6"/></div>
              <div><div className="font-bold text-sm text-brand-dark">Costs</div><div className="text-xs text-gray-500">Waste detection</div></div>
            </div>

            <div className="absolute bottom-20 right-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 pointer-events-auto transform hover:scale-105 transition-transform">
              <div className="bg-orange-100 p-3 rounded-xl text-orange-600"><Users className="w-6 h-6"/></div>
              <div><div className="font-bold text-sm text-brand-dark">Team</div><div className="text-xs text-gray-500">Task management</div></div>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 relative z-20">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-xl transition-shadow group">
            <div className="w-20 h-20 mx-auto bg-brand-light rounded-2xl flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
              <FileText className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-extrabold text-brand-dark mb-3">{t.platform.feat1Title}</h4>
            <p className="text-gray-600 leading-relaxed">{t.platform.feat1Desc}</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-xl transition-shadow group">
            <div className="w-20 h-20 mx-auto bg-brand-light rounded-2xl flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
              <Target className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-extrabold text-brand-dark mb-3">{t.platform.feat2Title}</h4>
            <p className="text-gray-600 leading-relaxed">{t.platform.feat2Desc}</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-xl transition-shadow group">
            <div className="w-20 h-20 mx-auto bg-brand-light rounded-2xl flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
              <TrendingUp className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-extrabold text-brand-dark mb-3">{t.platform.feat3Title}</h4>
            <p className="text-gray-600 leading-relaxed">{t.platform.feat3Desc}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
