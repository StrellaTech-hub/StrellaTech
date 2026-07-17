import React, { useState, useEffect } from 'react';
import { Menu, X, ChefHat, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-brand-primary p-2 rounded-lg">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-bold text-xl tracking-tight text-brand-dark block leading-none">DISH</span>
              <span className="text-[10px] font-semibold text-brand-accent tracking-widest uppercase block leading-none mt-1">AI Manager</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#problem" className="text-sm font-medium text-gray-600 hover:text-brand-primary transition-colors">{t.nav.problem}</a>
            <a href="#solution" className="text-sm font-medium text-gray-600 hover:text-brand-primary transition-colors">{t.nav.platform}</a>
            <a href="#impact" className="text-sm font-medium text-gray-600 hover:text-brand-primary transition-colors">{t.nav.impact}</a>
            <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-brand-primary transition-colors">{t.nav.faq}</a>
            
            <div className="flex items-center gap-4 border-l border-gray-200 pl-6">
              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 text-sm font-bold text-brand-primary bg-brand-primary/10 px-3 py-1.5 rounded-full hover:bg-brand-primary/20 transition-colors"
              >
                <Globe className="w-4 h-4" />
                {language === 'en' ? 'ES' : 'EN'}
              </button>
              <button className="bg-brand-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-primary transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                {t.nav.bookDemo}
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-xs font-bold text-brand-primary bg-brand-primary/10 px-2 py-1 rounded-full"
            >
              <Globe className="w-3 h-3" />
              {language === 'en' ? 'ES' : 'EN'}
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-4 flex flex-col space-y-4">
          <a href="#problem" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 font-medium">{t.nav.problem}</a>
          <a href="#solution" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 font-medium">{t.nav.platform}</a>
          <a href="#impact" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 font-medium">{t.nav.impact}</a>
          <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 font-medium">{t.nav.faq}</a>
          <button className="bg-brand-dark text-white px-5 py-3 rounded-lg font-semibold w-full">
            {t.nav.bookDemo}
          </button>
        </div>
      )}
    </nav>
  );
}
