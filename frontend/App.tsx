import React, { useState, useEffect, createContext, useContext, useRef } from 'react';
import { 
  ChefHat, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronDown, 
  Menu, 
  X, 
  ShoppingCart, 
  Calculator, 
  PackageX, 
  Smartphone, 
  Users, 
  PieChart,
  Sparkles,
  ArrowUpRight,
  ArrowRight,
  BarChart3,
  Leaf,
  Receipt,
  Globe,
  DollarSign
} from 'lucide-react';

// --- Translation Dictionary ---

type Language = 'es' | 'en' | 'sr';

const translations: Record<Language, Record<string, string>> = {
  es: {
    'nav.philosophy': 'Filosofía',
    'nav.benefits': 'Beneficios',
    'nav.intelligence': 'Inteligencia',
    'nav.pricing': 'Planes',
    'nav.earlyAccess': 'Acceso anticipado',
    'hero.badge.new': 'Nuevo',
    'hero.badge.text1': 'Dish Manager no es un software más.',
    'hero.badge.text2': 'Es tu herramienta de análisis inteligente.',
    'hero.title1': 'Claridad para tu restaurante.',
    'hero.p': 'Trabajas todo el día. Compras insumos, atiendes clientes, resuelves problemas y supervisas a tu equipo. Y aun así, al cerrar la caja, muchas veces te preguntas si realmente ganaste dinero hoy.',
    'hero.btn1': 'Comenzar gratis',
    'hero.btn2': 'Ver cómo te ayudamos',
    'dyn.1': 'Tranquilidad para ti.',
    'dyn.2': 'Más ganancias para ti.',
    'dyn.3': 'Menos desperdicio.',
    'dyn.4': 'Mejores decisiones.',
    'dyn.5': 'Más tiempo para vivir.',
    'dyn.6': 'Crecimiento con confianza.',
    'insight.1.title': 'Ventas +12%',
    'insight.1.desc': 'Comparado con la semana pasada.',
    'insight.2.title': 'Merma detectada',
    'insight.2.desc': 'Tomates a punto de expirar.',
    'insight.3.title': 'Platillo más rentable',
    'insight.3.desc': 'Enchiladas Suizas (72% margen).',
    'insight.4.title': 'Ahorro estimado',
    'insight.4.desc': '$3,200 MXN este mes.',
    'insight.5.title': 'Inventario saludable',
    'insight.5.desc': 'Niveles óptimos para el fin de semana.',
    'insight.6.title': 'Revisar costo',
    'insight.6.desc': 'El aguacate subió 15%.',
    'diag.title1': 'Tu restaurante no está roto.',
    'diag.title2': 'Solo necesita dirección.',
    'diag.p': 'Sabemos exactamente cómo se ven tus días. El problema no es tu capacidad, es la falta de tiempo para analizar.',
    'diag.c1.t': 'Vendes bien, pero el margen se diluye',
    'diag.c1.d': 'El restaurante se llena y la caja gira, pero al final del mes te queda la duda de si ganaste lo que realmente merecías por tanto esfuerzo.',
    'diag.c2.t': "Decisiones tomadas 'al ojo'",
    'diag.c2.d': 'Sueles ajustar un precio o cambiar de proveedor en 15 segundos entre la cocina y la caja, porque sencillamente no tienes dos horas libres para hacer cálculos.',
    'diag.c3.t': 'Software que da más trabajo del que quita',
    'diag.c3.d': 'La mayoría de los sistemas te piden semanas cargando datos para entregarte gráficas difíciles de entender. Tú no necesitas más gráficas, necesitas respuestas.',
    'shift.title1': 'Registrar información es el primer paso.',
    'shift.title2': 'Entenderla es lo que cambia tu restaurante.',
    'shift.l.badge': '100% GRATIS',
    'shift.l.title': 'Guardar información',
    'shift.l.sub': 'Hazlo con nosotros sin costo alguno.',
    'shift.l.i1': 'Registrar órdenes.',
    'shift.l.i2': 'Registrar compras.',
    'shift.l.i3': 'Registrar inventario.',
    'shift.l.i4': 'Guardar recetas.',
    'shift.l.i6': 'Llevar un historial de clientes.',
    'shift.l.foot': '"Registrar tu operación no debería costarte."',
    'shift.r.badge': 'SUSCRIPCIÓN',
    'shift.r.title': 'Tomar mejores decisiones',
    'shift.r.sub': 'Por esto vale la pena pagar.',
    'shift.r.i1': 'Descubrir por qué tus ganancias bajaron aunque vendiste más.',
    'shift.r.i2': 'Detectar desperdicios antes de que afecten tu utilidad.',
    'shift.r.i3': 'Saber qué platillo conviene impulsar esta semana.',
    'shift.r.i4': 'Anticiparte a problemas antes de que ocurran.',
    'shift.r.i5': 'Recibir recomendaciones basadas en los datos de tu propio restaurante.',
    'shift.r.i6': 'Hacer registros dictando por voz o subiendo imágenes de tus compras o menú.',
    'shift.r.foot': '"Aquí es donde tu inversión se paga sola."',
    'feat.title': 'Módulos que trabajan juntos para ayudarte a administrar mejor tu restaurante.',
    'feat.c1.t': 'Compras y Proveedores',
    'feat.c1.d': 'Registra facturas en segundos y descubre el rendimiento real de cada insumo.',
    'feat.c2.t': 'Costeo de Recetas',
    'feat.c2.d': 'Conoce el margen real por plato y ajusta precios sin adivinar.',
    'feat.c3.t': 'Inventario y Mermas',
    'feat.c3.d': 'Alertas inteligentes antes de que los ingredientes venzan y se vuelvan pérdida.',
    'feat.c4.t': 'Carta Gourmet Digital',
    'feat.c4.d': 'Menú interactivo diseñado para impulsar los platillos más rentables.',
    'feat.c5.t': 'Fidelización de Clientes',
    'feat.c5.d': 'Envía promociones en 1 clic a clientes que tienen tiempo sin volver.',
    'feat.c6.t': 'Gerencia & Finanzas',
    'feat.c6.d': 'Flujo de efectivo preventivo y cuentas por pagar sin pantallas complicadas.',
    'feat.more': 'Conocer más',
    'price.title': 'Asegura tu lugar en la Primera Generación.',
    'price.badge': 'SÓLO 20 LUGARES DISPONIBLES',
    'price.currency': 'MXN / mes',
    'price.sub': '(Precio especial congelado durante 12 meses. Precio regular futuro: $699 MXN/mes)',
    'price.i1': 'Registros ilimitados de compras, recetas, mermas e inventario.',
    'price.i2': 'Asistente de IA (Analista Financiero) activo 24/7.',
    'price.i3': 'Módulo de Fidelización con envíos de campañas automáticas.',
    'price.i4': 'Carta Gourmet Digital configurada para tu negocio.',
    'price.i5': 'Acompañamiento directo con el equipo fundador.',
    'price.btn': 'Reservar uno de los 20 lugares',
    'price.foot': 'Empieza a registrar gratis hoy. Sin tarjeta.',
    'faq.title': 'Preguntas Frecuentes',
    'faq.q1': '¿Es difícil pasarme a Dish Manager si hoy uso Excel o libreta?',
    'faq.a1': 'Para nada. Puedes empezar en 5 minutos guardando solo tus 3 platillos más vendidos y tu última compra. No necesitas digitalizar todo tu restaurante para ver valor inmediato.',
    'faq.q2': '¿Tengo que dejar mi punto de venta (POS) actual?',
    'faq.a2': 'No. Dish Manager no pretende reemplazar tu cobro en caja. Se enfoca en tus costos, compras y margen real para ayudarte a decidir mejor.',
    'faq.q3': '¿Realmente la función de registrar es gratis?',
    'faq.a3': 'Sí, 100% gratis. Registra todo lo que quieras. Solo pagas los $499 MXN si decides activar el Asistente de IA para que analice tus datos y te busque oportunidades de ahorro.',
    'foot.title1': 'Pasa menos tiempo resolviendo urgencias.',
    'foot.title2': 'Empieza a decidir con certeza.',
    'foot.btn': 'Crear mi cuenta gratis',
    'foot.terms': 'Términos',
    'foot.privacy': 'Privacidad',
    'foot.contact': 'Contacto',
  },
  en: {
    'nav.philosophy': 'Philosophy',
    'nav.benefits': 'Benefits',
    'nav.intelligence': 'Intelligence',
    'nav.pricing': 'Pricing',
    'nav.earlyAccess': 'Early access',
    'hero.badge.new': 'New',
    'hero.badge.text1': "Dish Manager isn't just another software.",
    'hero.badge.text2': "It's your intelligent analysis tool.",
    'hero.title1': 'Clarity for your restaurant.',
    'hero.p': "You work all day. You buy supplies, serve customers, solve problems, and supervise your team. And yet, when you close the register, you often wonder if you actually made money today.",
    'hero.btn1': 'Start for free',
    'hero.btn2': 'See how we help',
    'dyn.1': 'Peace of mind for you.',
    'dyn.2': 'More profits for you.',
    'dyn.3': 'Less waste.',
    'dyn.4': 'Better decisions.',
    'dyn.5': 'More time to live.',
    'dyn.6': 'Growth with confidence.',
    'insight.1.title': 'Sales +12%',
    'insight.1.desc': 'Compared to last week.',
    'insight.2.title': 'Waste detected',
    'insight.2.desc': 'Tomatoes about to expire.',
    'insight.3.title': 'Most profitable dish',
    'insight.3.desc': 'Swiss Enchiladas (72% margin).',
    'insight.4.title': 'Estimated savings',
    'insight.4.desc': '$3,200 MXN this month.',
    'insight.5.title': 'Healthy inventory',
    'insight.5.desc': 'Optimal levels for the weekend.',
    'insight.6.title': 'Review cost',
    'insight.6.desc': 'Avocado went up 15%.',
    'diag.title1': "Your restaurant isn't broken.",
    'diag.title2': 'It just needs direction.',
    'diag.p': "We know exactly what your days look like. The problem isn't your ability, it's the lack of time to analyze.",
    'diag.c1.t': 'You sell well, but the margin fades',
    'diag.c1.d': "The restaurant gets full and the register rings, but at the end of the month you're left wondering if you made what you truly deserved for so much effort.",
    'diag.c2.t': "Decisions made by 'gut feeling'",
    'diag.c2.d': "You often adjust a price or change a supplier in 15 seconds between the kitchen and the register, simply because you don't have two free hours to do the math.",
    'diag.c3.t': 'Software that creates more work than it saves',
    'diag.c3.d': "Most systems ask for weeks of data entry just to give you hard-to-read charts. You don't need more charts, you need answers.",
    'shift.title1': 'Saving data is the first step.',
    'shift.title2': 'Understanding it is what changes your restaurant.',
    'shift.l.badge': '100% FREE',
    'shift.l.title': 'Saving data',
    'shift.l.sub': 'Do it with us at no cost.',
    'shift.l.i1': 'Log orders.',
    'shift.l.i2': 'Log purchases.',
    'shift.l.i3': 'Log inventory.',
    'shift.l.i4': 'Save recipes.',
    'shift.l.i6': 'Keep a customer history.',
    'shift.l.foot': '"Logging your operation shouldn\'t cost you."',
    'shift.r.badge': 'SUBSCRIPTION',
    'shift.r.title': 'Making better decisions',
    'shift.r.sub': "This is why it is worth paying.",
    'shift.r.i1': 'Discover why your profits dropped even though you sold more.',
    'shift.r.i2': 'Detect waste before it affects your bottom line.',
    'shift.r.i3': 'Know which dish you should push this week.',
    'shift.r.i4': 'Anticipate problems before they happen.',
    'shift.r.i5': "Get recommendations based on your own restaurant's data.",
    'shift.r.i6': 'Log data by voice dictation or uploading images of your purchases or menu.',
    'shift.r.foot': '"This is where your investment pays for itself."',
    'feat.title': 'Modules that work together to help you better manage your restaurant.',
    'feat.c1.t': 'Purchases & Suppliers',
    'feat.c1.d': 'Log invoices in seconds and discover the true yield of every ingredient.',
    'feat.c2.t': 'Recipe Costing',
    'feat.c2.d': 'Know the real margin per dish and adjust prices without guessing.',
    'feat.c3.t': 'Inventory & Waste',
    'feat.c3.d': 'Smart alerts before ingredients expire and become a loss.',
    'feat.c4.t': 'Digital Gourmet Menu',
    'feat.c4.d': 'Interactive menu designed to push your most profitable dishes.',
    'feat.c5.t': 'Customer Loyalty',
    'feat.c5.d': "Send 1-click promotions to customers who haven't visited in a while.",
    'feat.c6.t': 'Management & Finance',
    'feat.c6.d': 'Preventive cash flow and accounts payable without complicated screens.',
    'feat.more': 'Learn more',
    'price.title': 'Secure your spot in the First Generation.',
    'price.badge': 'ONLY 20 SPOTS AVAILABLE',
    'price.currency': 'MXN / month',
    'price.sub': '(Special price frozen for 12 months. Future regular price: $699 MXN/month)',
    'price.i1': 'Unlimited logging of purchases, recipes, waste, and inventory.',
    'price.i2': 'AI Assistant (Financial Analyst) active 24/7.',
    'price.i3': 'Loyalty Module with automated campaign sending.',
    'price.i4': 'Digital Gourmet Menu configured for your business.',
    'price.i5': 'Direct support from the founding team.',
    'price.btn': 'Reserve one of the 20 spots',
    'price.foot': 'Start logging for free today. No card required.',
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'Is it hard to switch to Dish Manager if I currently use Excel or a notebook?',
    'faq.a1': "Not at all. You can start in 5 minutes by saving just your 3 best-selling dishes and your last purchase. You don't need to digitize your entire restaurant to see immediate value.",
    'faq.q2': 'Do I have to leave my current Point of Sale (POS)?',
    'faq.a2': "No. Dish Manager isn't trying to replace your checkout register. It focuses on your costs, purchases, and real margin to help you make better decisions.",
    'faq.q3': 'Is the logging feature really free?',
    'faq.a3': 'Yes, 100% free. Log as much as you want. You only pay the $499 MXN if you decide to activate the AI Assistant to analyze your data and find savings opportunities.',
    'foot.title1': 'Spend less time putting out fires.',
    'foot.title2': 'Start deciding with certainty.',
    'foot.btn': 'Create my free account',
    'foot.terms': 'Terms',
    'foot.privacy': 'Privacy',
    'foot.contact': 'Contact',
  },
  sr: {
    'nav.philosophy': 'Filozofija',
    'nav.benefits': 'Prednosti',
    'nav.intelligence': 'Inteligencija',
    'nav.pricing': 'Cene',
    'nav.earlyAccess': 'Rani pristup',
    'hero.badge.new': 'Novo',
    'hero.badge.text1': 'Dish Manager nije samo još jedan softver.',
    'hero.badge.text2': 'To je vaš pametni alat za analizu.',
    'hero.title1': 'Jasnoća za vaš restoran.',
    'hero.p': 'Radite po ceo dan. Nabavljate namirnice, uslužujete goste, rešavate probleme i nadgledate svoj tim. I pored toga, kada zatvorite kasu, često se pitate da li ste danas zaista zaradili novac.',
    'hero.btn1': 'Započnite besplatno',
    'hero.btn2': 'Pogledajte kako pomažemo',
    'dyn.1': 'Mir za vas.',
    'dyn.2': 'Veći profit za vas.',
    'dyn.3': 'Manje otpada.',
    'dyn.4': 'Bolje odluke.',
    'dyn.5': 'Više vremena za život.',
    'dyn.6': 'Rast sa sigurnošću.',
    'insight.1.title': 'Prodaja +12%',
    'insight.1.desc': 'U poređenju sa prošlom nedeljom.',
    'insight.2.title': 'Otkriven otpad',
    'insight.2.desc': 'Paradajz pred istekom roka.',
    'insight.3.title': 'Najprofitabilnije jelo',
    'insight.3.desc': 'Švajcarske Enčilade (72% marže).',
    'insight.4.title': 'Procenjena ušteda',
    'insight.4.desc': '$3,200 MXN ovog meseca.',
    'insight.5.title': 'Zdrave zalihe',
    'insight.5.desc': 'Optimalni nivoi za vikend.',
    'insight.6.title': 'Proverite cenu',
    'insight.6.desc': 'Avokado je poskupeo 15%.',
    'diag.title1': 'Vaš restoran nije pokvaren.',
    'diag.title2': 'Samo mu treba usmerenje.',
    'diag.p': 'Znamo tačno kako izgledaju vaši dani. Problem nije u vašoj sposobnosti, već u nedostatku vremena za analizu.',
    'diag.c1.t': 'Prodajete dobro, ali se marža topi',
    'diag.c1.d': 'Restoran se puni i kasa radi, ali na kraju meseca ostaje vam sumnja da li ste zaradili ono što ste zaista zaslužili za toliki trud.',
    'diag.c2.t': "Odluke donete 'odokativno'",
    'diag.c2.d': 'Često prilagođavate cenu ili menjate dobavljača za 15 sekundi između kuhinje i kase, jednostavno zato što nemate dva slobodna sata za računicu.',
    'diag.c3.t': 'Softver koji stvara više posla nego što ga rešava',
    'diag.c3.d': 'Većina sistema traži nedelje unosa podataka samo da bi vam dali teško razumljive grafikone. Vama ne trebaju grafikoni, trebaju vam odgovori.',
    'shift.title1': 'Beleženje informacija je prvi korak.',
    'shift.title2': 'Razumevanje je ono što menja vaš restoran.',
    'shift.l.badge': '100% BESPLATNO',
    'shift.l.title': 'Čuvanje informacija',
    'shift.l.sub': 'Radite to sa nama potpuno besplatno.',
    'shift.l.i1': 'Beleženje porudžbina.',
    'shift.l.i2': 'Beleženje nabavki.',
    'shift.l.i3': 'Beleženje zaliha.',
    'shift.l.i4': 'Čuvanje recepata.',
    'shift.l.i6': 'Vođenje istorije kupaca.',
    'shift.l.foot': '"Beleženje vaših operacija ne bi trebalo da vas košta."',
    'shift.r.badge': 'PRETPLATA',
    'shift.r.title': 'Donošenje boljih odluka',
    'shift.r.sub': 'Zbog ovoga vredi platiti.',
    'shift.r.i1': 'Otkrijte zašto vam je profit pao iako ste prodali više.',
    'shift.r.i2': 'Otkrijte otpad pre nego što utiče na vašu zaradu.',
    'shift.r.i3': 'Saznajte koje jelo treba da promovišete ove nedelje.',
    'shift.r.i4': 'Predvidite probleme pre nego što se dogode.',
    'shift.r.i5': 'Dobijte preporuke na osnovu podataka vašeg sopstvenog restorana.',
    'shift.r.i6': 'Beležite podatke glasovnim diktiranjem ili otpremanjem slika vaših nabavki ili menija.',
    'shift.r.foot': '"Ovde se vaša investicija sama isplaćuje."',
    'feat.title': 'Moduli koji rade zajedno kako bi vam pomogli da bolje upravljate svojim restoranom.',
    'feat.c1.t': 'Nabavke i Dobavljači',
    'feat.c1.d': 'Zabeležite fakture u sekundi i otkrijte stvarni prinos svakog sastojka.',
    'feat.c2.t': 'Cena Recepata',
    'feat.c2.d': 'Saznajte pravu maržu po jelu i prilagodite cene bez nagađanja.',
    'feat.c3.t': 'Zalihe i Otpad',
    'feat.c3.d': 'Pametna upozorenja pre nego što sastojcima istekne rok i postanu gubitak.',
    'feat.c4.t': 'Digitalni Gurmanski Meni',
    'feat.c4.d': 'Interaktivni meni dizajniran da podstakne vaša najprofitabilnija jela.',
    'feat.c5.t': 'Lojalnost Kupaca',
    'feat.c5.d': 'Šaljite promocije jednim klikom kupcima koji dugo nisu dolazili.',
    'feat.c6.t': 'Menadžment i Finansije',
    'feat.c6.d': 'Preventivni novčani tok i obaveze prema dobavljačima bez komplikovanih ekrana.',
    'feat.more': 'Saznaj više',
    'price.title': 'Osigurajte svoje mesto u Prvoj Generaciji.',
    'price.badge': 'SAMO 20 MESTA DOSTUPNO',
    'price.currency': 'MXN / mesečno',
    'price.sub': '(Specijalna cena zamrznuta na 12 meseci. Buduća redovna cena: $699 MXN/mesečno)',
    'price.i1': 'Neograničeno beleženje nabavki, recepata, otpada i zaliha.',
    'price.i2': 'AI Asistent (Finansijski Analitičar) aktivan 24/7.',
    'price.i3': 'Modul Lojalnosti sa automatskim slanjem kampanja.',
    'price.i4': 'Digitalni Gurmanski Meni konfigurisan za vaš posao.',
    'price.i5': 'Direktna podrška osnivačkog tima.',
    'price.btn': 'Rezervišite jedno od 20 mesta',
    'price.foot': 'Počnite da beležite besplatno danas. Bez kartice.',
    'faq.title': 'Često Postavljana Pitanja',
    'faq.q1': 'Da li je teško preći na Dish Manager ako danas koristim Excel ili svesku?',
    'faq.a1': 'Nikako. Možete početi za 5 minuta tako što ćete sačuvati samo vaša 3 najprodavanija jela i vašu poslednju nabavku. Ne morate da digitalizujete ceo restoran da biste odmah videli vrednost.',
    'faq.q2': 'Da li moram da napustim svoj trenutni sistem naplate (POS)?',
    'faq.a2': 'Ne. Dish Manager ne pokušava da zameni vašu kasu. Fokusira se na vaše troškove, nabavke i stvarnu maržu kako bi vam pomogao da donosite bolje odluke.',
    'faq.q3': 'Da li je funkcija beleženja zaista besplatna?',
    'faq.a3': 'Da, 100% besplatno. Beležite koliko god želite. Plaćate samo $499 MXN ako odlučite da aktivirate AI Asistenta da analizira vaše podatke i pronađe prilike za uštedu.',
    'foot.title1': 'Provodite manje vremena rešavajući hitne slučajeve.',
    'foot.title2': 'Počnite da odlučujete sa sigurnošću.',
    'foot.btn': 'Kreiraj moj besplatni nalog',
    'foot.terms': 'Uslovi',
    'foot.privacy': 'Privatnost',
    'foot.contact': 'Kontakt',
  }
};

// --- Language Context ---

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};

const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// --- Helper Components ---

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon,
  ...props 
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline' | 'white'; 
  className?: string;
  icon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const baseStyle = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background";
  
  const variants = {
    primary: "bg-brand hover:bg-brandAccent text-white shadow-[0_4px_14px_0_rgba(109,40,217,0.2)] hover:shadow-[0_6px_20px_rgba(109,40,217,0.3)] focus:ring-brandAccent",
    secondary: "bg-surface text-primaryText hover:bg-surfaceHover border border-purple-100 shadow-sm focus:ring-purple-200",
    outline: "bg-transparent hover:bg-surfaceHover text-primaryText border border-purple-200 focus:ring-purple-200",
    white: "bg-white hover:bg-surfaceHover text-primaryText shadow-soft border border-purple-50 focus:ring-purple-200"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </button>
  );
};

const AccordionItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border-b border-purple-100/50 last:border-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className="text-lg font-medium text-primaryText group-hover:text-brand transition-colors">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-secondaryText transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand' : ''}`} 
          strokeWidth={1.5}
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-secondaryText leading-relaxed font-light">{answer}</p>
      </div>
    </div>
  );
};

// --- Language Dropdown Component ---

const LanguageDropdown = () => {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; label: string }[] = [
    { code: 'es', label: 'Español' },
    { code: 'en', label: 'English' },
    { code: 'sr', label: 'Srpski' }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-secondaryText hover:text-brand transition-colors focus:outline-none"
        aria-label="Select Language"
      >
        <Globe className="w-4 h-4" />
        <span className="text-xs font-bold uppercase">{lang}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-lg border border-purple-50 py-1 z-50 animate-fade-in-up" style={{ animationDuration: '0.2s' }}>
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                lang === l.code 
                  ? 'bg-purple-50 text-brand font-medium' 
                  : 'text-secondaryText hover:bg-slate-50 hover:text-primaryText'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// --- Dynamic Insights Graphic (Hero Right Column) ---

const DynamicInsightsGraphic = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const insights = [
    {
      icon: <TrendingUp className="w-5 h-5 text-success" strokeWidth={2} />,
      title: t('insight.1.title'),
      desc: t('insight.1.desc'),
      color: 'success'
    },
    {
      icon: <Leaf className="w-5 h-5 text-accentOrange" strokeWidth={2} />,
      title: t('insight.2.title'),
      desc: t('insight.2.desc'),
      color: 'accentOrange'
    },
    {
      icon: <ChefHat className="w-5 h-5 text-brandAccent" strokeWidth={2} />,
      title: t('insight.3.title'),
      desc: t('insight.3.desc'),
      color: 'brandAccent'
    },
    {
      icon: <DollarSign className="w-5 h-5 text-success" strokeWidth={2} />,
      title: t('insight.4.title'),
      desc: t('insight.4.desc'),
      color: 'success'
    },
    {
      icon: <PackageX className="w-5 h-5 text-brandAccent" strokeWidth={2} />,
      title: t('insight.5.title'),
      desc: t('insight.5.desc'),
      color: 'brandAccent'
    },
    {
      icon: <AlertTriangle className="w-5 h-5 text-warning" strokeWidth={2} />,
      title: t('insight.6.title'),
      desc: t('insight.6.desc'),
      color: 'warning'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % insights.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [insights.length]);

  return (
    <div className="relative w-full max-w-lg aspect-square mx-auto flex items-center justify-center">
      {/* Background Image with Depth of Field */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
          alt="Restaurant interior" 
          className="w-full h-full object-cover blur-[2px] scale-105 opacity-90"
        />
        {/* Gradient overlay to blend with the left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent"></div>
        <div className="absolute inset-0 bg-brand/5 mix-blend-overlay"></div>
      </div>

      {/* Subtle AI Glow */}
      <div className="absolute w-64 h-64 bg-brandAccent/20 rounded-full blur-3xl animate-pulse-slow"></div>

      {/* Dynamic Insight Card */}
      <div className="relative z-10 w-full max-w-sm">
        {insights.map((insight, idx) => {
          const isActive = idx === currentIndex;
          
          return (
            <div 
              key={idx}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-soft-lg border border-purple-50 transition-all duration-700 ease-in-out flex items-center gap-4
                ${isActive ? 'opacity-100 translate-y-[-50%] scale-100' : 'opacity-0 translate-y-[-40%] scale-95 pointer-events-none'}
              `}
            >
              <div className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center bg-${insight.color}/10`}>
                {insight.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold text-primaryText">{insight.title}</h3>
                <p className="text-sm text-secondaryText font-light mt-0.5">{insight.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// --- Dynamic Title Component ---

const TITLE_COLORS = [
  "text-brandAccent",  // Soft Purple
  "text-accentOrange", // Warm Orange
  "text-brand",        // Deep Purple
  "text-orange-400"    // Soft Orange
];

const DynamicTitle = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const phrases = [
    t('dyn.1'),
    t('dyn.2'),
    t('dyn.3'),
    t('dyn.4'),
    t('dyn.5'),
    t('dyn.6')
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [phrases.length]);

  const currentColor = TITLE_COLORS[currentIndex % TITLE_COLORS.length];

  return (
    <span className="relative inline-block">
      {/* Invisible placeholder to maintain width and height, preventing CLS */}
      <span className="invisible pointer-events-none">
        {t('dyn.6')}
      </span>
      {/* Instant change, no transitions */}
      <span className={`absolute left-0 top-0 w-full ${currentColor}`}>
        {phrases[currentIndex]}
      </span>
    </span>
  );
};

// --- Main Sections ---

const Navbar = () => {
  const { t, lang, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-purple-50 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-brand flex items-center justify-center shadow-sm">
            <ChefHat className="w-5 h-5 text-white" strokeWidth={1.5} />
          </div>
          <span className="text-xl font-bold tracking-tight text-primaryText">Dish Manager</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#filosofia" className="text-sm font-medium text-secondaryText hover:text-brand transition-colors">{t('nav.philosophy')}</a>
          <a href="#beneficios" className="text-sm font-medium text-secondaryText hover:text-brand transition-colors">{t('nav.benefits')}</a>
          <a href="#inteligencia" className="text-sm font-medium text-secondaryText hover:text-brand transition-colors">{t('nav.intelligence')}</a>
          <a href="#pricing" className="text-sm font-medium text-secondaryText hover:text-brand transition-colors">{t('nav.pricing')}</a>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <LanguageDropdown />
          <Button variant="secondary" className="text-sm py-2 px-5">
            {t('nav.earlyAccess')}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageDropdown />
          <button 
            className="text-secondaryText hover:text-primaryText p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-purple-50 p-6 flex flex-col gap-4 shadow-lg">
          <a href="#filosofia" onClick={() => setMobileMenuOpen(false)} className="text-primaryText font-medium py-2">{t('nav.philosophy')}</a>
          <a href="#beneficios" onClick={() => setMobileMenuOpen(false)} className="text-primaryText font-medium py-2">{t('nav.benefits')}</a>
          <a href="#inteligencia" onClick={() => setMobileMenuOpen(false)} className="text-primaryText font-medium py-2">{t('nav.intelligence')}</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-primaryText font-medium py-2">{t('nav.pricing')}</a>
          <Button variant="primary" className="w-full mt-4">{t('nav.earlyAccess')}</Button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-background">
      {/* Soft Violet and Orange Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.05),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(249,115,22,0.03),transparent_50%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Content - Trustworthy, Clear, Optimistic */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left w-full max-w-2xl mx-auto lg:mx-0 animate-fade-in-up">
            
            {/* High-Impact Badge with Soft Orange */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-1.5 sm:pr-5 rounded-2xl sm:rounded-full bg-white border border-purple-50 mb-8 shadow-sm">
              <div className="bg-accentOrangeLight text-accentOrange text-xs font-bold px-3 py-1.5 rounded-xl sm:rounded-full uppercase tracking-widest border border-accentOrange/10">
                {t('hero.badge.new')}
              </div>
              <span className="text-sm font-medium text-primaryText tracking-wide text-center sm:text-left">
                {t('hero.badge.text1')} <span className="text-secondaryText font-normal">{t('hero.badge.text2')}</span>
              </span>
            </div>
            
            {/* Emotional, Human Title with Dynamic Second Line */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-primaryText leading-[1.1] mb-6">
              {t('hero.title1')}<br />
              <DynamicTitle />
            </h1>
            
            {/* Empathetic Paragraph */}
            <p className="text-lg sm:text-xl text-secondaryText font-light leading-relaxed mb-8 max-w-lg">
              {t('hero.p')}
            </p>
            
            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button variant="primary" className="w-full sm:w-auto text-base px-8 py-4">
                {t('hero.btn1')}
              </Button>
              <Button variant="white" className="w-full sm:w-auto text-base px-8 py-4">
                {t('hero.btn2')}
              </Button>
            </div>
          </div>

          {/* Right Content - Clean, Intelligent Graphic */}
          <div className="w-full relative flex justify-center lg:justify-end">
            <DynamicInsightsGraphic />
          </div>

        </div>
      </div>
    </section>
  );
};

const Diagnostic = () => {
  const { t } = useLanguage();

  const cards = [
    {
      title: t('diag.c1.t'),
      description: t('diag.c1.d'),
      icon: <TrendingUp className="w-6 h-6 text-accentOrange" strokeWidth={1.5} />
    },
    {
      title: t('diag.c2.t'),
      description: t('diag.c2.d'),
      icon: <PieChart className="w-6 h-6 text-accentOrange" strokeWidth={1.5} />
    },
    {
      title: t('diag.c3.t'),
      description: t('diag.c3.d'),
      icon: <AlertTriangle className="w-6 h-6 text-accentOrange" strokeWidth={1.5} />
    }
  ];

  return (
    <section id="filosofia" className="py-32 relative bg-gradient-to-b from-background to-[#FDFBFF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primaryText mb-6">{t('diag.title1')}<br/><span className="text-brand">{t('diag.title2')}</span></h2>
          <p className="text-lg text-secondaryText font-light">
            {t('diag.p')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg border border-purple-50 shadow-sm group">
              <div className="w-12 h-12 rounded-2xl bg-accentOrangeLight/50 border border-accentOrange/10 flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-primaryText mb-4">{card.title}</h3>
              <p className="text-secondaryText leading-relaxed font-light">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ParadigmShift = () => {
  const { t } = useLanguage();

  return (
    <section id="inteligencia" className="py-32 relative overflow-hidden bg-[#FDFBFF]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primaryText mb-6">
            {t('shift.title1')} <br className="hidden md:block" />
            <span className="text-brand">{t('shift.title2')}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left Column - The Standard */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col h-full border border-purple-50 shadow-sm">
            <div className="mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-xs font-semibold tracking-wider text-secondaryText uppercase mb-6">
                {t('shift.l.badge')}
              </span>
              <h3 className="text-2xl font-bold text-primaryText">{t('shift.l.title')}</h3>
              <p className="text-secondaryText font-medium mt-2">{t('shift.l.sub')}</p>
            </div>
            
            <ul className="space-y-6 mb-12 flex-1">
              {[
                t('shift.l.i1'),
                t('shift.l.i2'),
                t('shift.l.i3'),
                t('shift.l.i4'),
                t('shift.l.i6')
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-secondaryText font-light">
                  <CheckCircle2 className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-8 border-t border-slate-100 mt-auto">
              <p className="text-sm text-secondaryText/80 italic">{t('shift.l.foot')}</p>
            </div>
          </div>

          {/* Right Column - The Future (AI Focus) */}
          <div className="relative group h-full">
            <div className="absolute -inset-0.5 bg-ai-gradient rounded-[2rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-white rounded-[2rem] p-10 flex flex-col h-full border border-brandAccent/20 shadow-ai-glow">
              <div className="mb-10">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brandAccent/10 text-xs font-bold tracking-wider text-brandAccent uppercase mb-6">
                  <Sparkles className="w-3 h-3" strokeWidth={1.5} /> {t('shift.r.badge')}
                </span>
                <h3 className="text-2xl font-bold text-primaryText">{t('shift.r.title')}</h3>
                <p className="text-brandAccent font-medium mt-2">{t('shift.r.sub')}</p>
              </div>
              
              <ul className="space-y-6 mb-12 flex-1">
                {[
                  t('shift.r.i1'),
                  t('shift.r.i2'),
                  t('shift.r.i3'),
                  t('shift.r.i4'),
                  t('shift.r.i5'),
                  t('shift.r.i6')
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-primaryText font-light">
                    <ArrowUpRight className="w-5 h-5 text-brandAccent shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-8 border-t border-purple-50 mt-auto">
                <p className="text-sm font-semibold text-brandAccent">{t('shift.r.foot')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturesGrid = () => {
  const { t } = useLanguage();
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const handleTouch = () => setIsTouch(true);
    window.addEventListener('touchstart', handleTouch, { once: true });
    return () => window.removeEventListener('touchstart', handleTouch);
  }, []);

  const features = [
    {
      title: t('feat.c1.t'),
      description: t('feat.c1.d'),
      icon: <ShoppingCart className="w-6 h-6 text-accentOrange" strokeWidth={1.5} />,
      colSpan: "md:col-span-2 lg:col-span-1"
    },
    {
      title: t('feat.c2.t'),
      description: t('feat.c2.d'),
      icon: <Calculator className="w-6 h-6 text-accentOrange" strokeWidth={1.5} />,
      colSpan: "md:col-span-1 lg:col-span-1"
    },
    {
      title: t('feat.c3.t'),
      description: t('feat.c3.d'),
      icon: <PackageX className="w-6 h-6 text-accentOrange" strokeWidth={1.5} />,
      colSpan: "md:col-span-1 lg:col-span-1"
    },
    {
      title: t('feat.c4.t'),
      description: t('feat.c4.d'),
      icon: <Smartphone className="w-6 h-6 text-accentOrange" strokeWidth={1.5} />,
      colSpan: "md:col-span-1 lg:col-span-1"
    },
    {
      title: t('feat.c5.t'),
      description: t('feat.c5.d'),
      icon: <Users className="w-6 h-6 text-accentOrange" strokeWidth={1.5} />,
      colSpan: "md:col-span-2 lg:col-span-1"
    },
    {
      title: t('feat.c6.t'),
      description: t('feat.c6.d'),
      icon: <BarChart3 className="w-6 h-6 text-accentOrange" strokeWidth={1.5} />,
      colSpan: "md:col-span-3 lg:col-span-1"
    }
  ];

  return (
    <section id="beneficios" className="py-32 relative bg-gradient-to-b from-[#FDFBFF] to-[#F5F3FF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primaryText mb-6">
            {t('feat.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {features.map((feature, idx) => {
            const isActive = activeCard === idx;
            const hasActive = activeCard !== null;
            const isDimmed = hasActive && !isActive;

            return (
              <div 
                key={idx} 
                className={`relative bg-white rounded-[1.5rem] p-5 sm:p-6 transition-all duration-300 border h-[130px] flex flex-col justify-center overflow-hidden cursor-pointer group
                  ${isActive ? '-translate-y-1 shadow-soft-lg border-brandAccent/50' : 'border-purple-50 hover:-translate-y-1 hover:shadow-soft-lg hover:border-brandAccent/30'}
                  ${isDimmed ? 'opacity-60 saturate-[0.8] scale-[0.98]' : 'opacity-100 scale-100'}
                `}
                onMouseEnter={() => !isTouch && setActiveCard(idx)}
                onMouseLeave={() => !isTouch && setActiveCard(null)}
                onClick={() => isTouch && setActiveCard(isActive ? null : idx)}
              >
                <div className={`flex items-center gap-4 sm:gap-5 transition-transform duration-300 ${isActive ? '-translate-y-5' : 'translate-y-0'}`}>
                  <div className={`w-12 h-12 shrink-0 rounded-2xl bg-accentOrangeLight/50 border border-accentOrange/10 flex items-center justify-center transition-transform duration-300 ${isActive ? 'scale-110' : 'scale-100'}`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-primaryText truncate">{feature.title}</h3>
                  </div>
                  <div className="shrink-0 pl-2">
                    <ArrowRight className={`w-5 h-5 transition-all duration-300 ${isActive ? 'text-brandAccent translate-x-1' : 'text-slate-300'}`} strokeWidth={1.5} />
                  </div>
                </div>

                <div className={`absolute bottom-4 left-5 right-5 sm:left-6 sm:right-6 transition-all duration-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                  <div className="bg-brandAccent text-white text-sm font-light px-4 py-2.5 rounded-xl shadow-md line-clamp-2">
                    {feature.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-32 relative bg-[#F5F3FF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primaryText mb-6">{t('price.title')}</h2>
        </div>

        <div className="max-w-lg mx-auto relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-brandAccent/20 via-accentOrange/10 to-brandAccent/20 rounded-[3rem] blur-2xl opacity-50 animate-pulse-slow"></div>
          <div className="relative bg-white rounded-[2.5rem] p-10 md:p-14 shadow-soft-lg border border-purple-100">
            <div className="flex justify-center mb-10">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accentOrangeLight text-sm font-bold text-accentOrange border border-accentOrange/10">
                <Sparkles className="w-4 h-4" strokeWidth={1.5} /> {t('price.badge')}
              </span>
            </div>
            
            <div className="text-center mb-12">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-7xl font-bold text-primaryText tabular-nums tracking-tighter">$499</span>
                <span className="text-xl text-secondaryText font-medium">{t('price.currency')}</span>
              </div>
              <p className="text-sm text-secondaryText/80 mt-4 font-light">
                {t('price.sub')}
              </p>
            </div>

            <div className="space-y-6 mb-12">
              {[
                t('price.i1'),
                t('price.i2'),
                t('price.i3'),
                t('price.i4'),
                t('price.i5')
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-brandAccent shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-primaryText text-sm leading-relaxed font-light">{benefit}</span>
                </div>
              ))}
            </div>

            <Button variant="primary" className="w-full py-5 text-lg font-semibold mb-6">
              {t('price.btn')}
            </Button>
            
            <p className="text-center text-sm text-secondaryText flex items-center justify-center gap-2 font-light">
              <span className="text-base">🔒</span> {t('price.foot')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { question: t('faq.q1'), answer: t('faq.a1') },
    { question: t('faq.q2'), answer: t('faq.a2') },
    { question: t('faq.q3'), answer: t('faq.a3') }
  ];

  return (
    <section className="py-32 relative bg-gradient-to-b from-[#F5F3FF] to-[#EDE9FE]">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-primaryText mb-16 text-center tracking-tight">{t('faq.title')}</h2>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative pt-32 pb-12 overflow-hidden bg-footerStart">
      {/* Spectacular Deep Purple Gradient */}
      <div className="absolute inset-0 bg-footer-gradient"></div>
      
      {/* Ambient Lights: Purple and Soft Orange Flashes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brandAccent/30 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accentOrange/10 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center mb-24 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 tracking-tight leading-[1.1]">
          {t('foot.title1')} <br className="hidden md:block"/>
          <span className="text-brandAccent">{t('foot.title2')}</span>
        </h2>
        <button className="bg-white text-brand hover:bg-surfaceHover px-10 py-5 text-lg rounded-full font-semibold transition-all duration-300 shadow-footer-btn hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:-translate-y-1">
          {t('foot.btn')}
        </button>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm text-purple-200 relative z-10">
        <div className="flex items-center gap-3 mb-6 md:mb-0">
          <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
            <ChefHat className="w-4 h-4 text-white" strokeWidth={1.5} />
          </div>
          <span className="font-semibold text-white">Dish Manager</span>
          <span className="ml-2">© {new Date().getFullYear()}</span>
        </div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">{t('foot.terms')}</a>
          <a href="#" className="hover:text-white transition-colors">{t('foot.privacy')}</a>
          <a href="#" className="hover:text-white transition-colors">{t('foot.contact')}</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background selection:bg-brandAccent/20 selection:text-brandAccent">
        <Navbar />
        <main>
          <Hero />
          <Diagnostic />
          <ParadigmShift />
          <FeaturesGrid />
          <Pricing />
          <FAQ />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
