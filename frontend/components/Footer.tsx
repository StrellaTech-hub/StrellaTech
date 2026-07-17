import React from 'react';
import { ChefHat, Heart } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-brand-primary p-2 rounded-lg">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-xl tracking-tight text-brand-dark block leading-none">DISH</span>
                <span className="text-[10px] font-semibold text-brand-accent tracking-widest uppercase block leading-none mt-1">AI Manager</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm max-w-sm mb-6">
              {t.footer.desc}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium">
              {t.footer.devWith} <Heart className="w-4 h-4 text-red-500 fill-current" /> {t.footer.by} 
              <a href="https://strellatech.com" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline font-bold ml-1">
                StrellaTech
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-brand-dark mb-4">{t.footer.product}</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#features" className="hover:text-brand-primary">{t.footer.features}</a></li>
              <li><a href="#pricing" className="hover:text-brand-primary">{t.footer.pricing}</a></li>
              <li><a href="#demo" className="hover:text-brand-primary">{t.nav.bookDemo}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-dark mb-4">{t.footer.company}</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="https://strellatech.com/about" className="hover:text-brand-primary">{t.footer.about}</a></li>
              <li><a href="#contact" className="hover:text-brand-primary">{t.footer.contact}</a></li>
              <li><a href="#privacy" className="hover:text-brand-primary">{t.footer.privacy}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} StrellaTech. {t.footer.rights}
          </p>
          <p className="text-sm text-gray-400 font-medium">
            {t.footer.slogan}
          </p>
        </div>
      </div>
    </footer>
  );
}
