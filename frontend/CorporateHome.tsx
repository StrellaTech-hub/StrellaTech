import { useEffect, useState, type FormEvent, type ReactNode } from 'react';
import NinaManagerLanding from './NinaManagerLanding';
import OctodeskLanding from './OctodeskLanding';
import MissionLanding from './MissionLanding';
import { NinaManagerShowcase, ProductEcosystemOverview, ProductHighlights } from './ProductPortfolio';
import { ArrowRight, ArrowUpRight, BarChart3, BriefcaseBusiness, CalendarDays, Check, ChevronDown, ClipboardCheck, Code2, Layers3, Lightbulb, Mail, Menu, PanelsTopLeft, ShieldCheck, Sparkles, Users, WalletCards, Workflow, X } from 'lucide-react';

const palette = {
  purple: '#6C4CF1',
  deepPurple: '#4931A8',
  orange: '#FF7A45',
  warmOrange: '#FFB067',
  cloud: '#F8F9FC',
  gray: '#E8EAF0',
  ink: '#20212A',
  slate: '#686B78',
};

const products = [
  { name: 'Traductor Profesional', category: 'Documentos · Traducción', description: 'Convierte PDFs, imágenes y documentos escaneados en documentos Word estructurados y traducidos.', problem: 'Pasar de documentos originales a archivos traducidos y editables.', href: '/traductor-profesional', icon: Layers3, label: 'Conocer Traductor Profesional', tone: 'blue' },
  { name: 'Dish Manager', category: 'Operación de restaurantes', description: 'Una plataforma para gestionar las operaciones de un restaurante desde un mismo lugar.', problem: 'Tener más claridad para operar y tomar decisiones en un restaurante.', href: '/dish-manager', icon: BarChart3, label: 'Conocer Dish Manager', tone: 'orange' },
];

const services = [
  { title: 'Soluciones digitales a medida', text: 'Diseñamos herramientas alrededor de la operación real de cada negocio: estrategia, experiencia y tecnología conectadas desde el inicio.', icon: PanelsTopLeft, index: '01' },
  { title: 'Inteligencia artificial aplicada', text: 'Integramos IA cuando aporta valor concreto: experiencias prácticas, asistencia inteligente y nuevas formas de resolver tareas.', icon: Sparkles, index: '02' },
  { title: 'Diseño y desarrollo de producto', text: 'Acompañamos el recorrido de una idea a una aplicación funcional: entender, planear, construir y validar.', icon: Code2, index: '03' },
];

const processSteps = [
  { number: '01', title: 'Entender', body: 'Comprendemos el problema real y a las personas que lo viven.', icon: Lightbulb },
  { number: '02', title: 'Diseñar', body: 'Definimos una solución clara, útil y posible de ejecutar.', icon: Layers3 },
  { number: '03', title: 'Construir', body: 'Desarrollamos de forma incremental y validamos lo que funciona.', icon: Code2 },
  { number: '04', title: 'Evolucionar', body: 'Mejoramos el producto a partir del uso y las necesidades reales.', icon: Workflow },
];

function Brand({ light = false }: { light?: boolean }) {
  return <a href="/" aria-label="StrellaTech, inicio" className={`inline-flex items-center py-2 text-[13px] font-semibold tracking-[.2em] ${light ? 'text-white' : 'text-[#20212A]'}`}>STRELLATECH</a>;
}

function Button({ href, children, variant = 'primary', className = '' }: { href: string; children: ReactNode; variant?: 'primary' | 'secondary' | 'white'; className?: string }) {
  const colors = { primary: 'bg-[#FF7A45] text-white hover:bg-[#e96834]', secondary: 'border border-[#E8EAF0] bg-white text-[#20212A] hover:border-[#6C4CF1] hover:text-[#4931A8]', white: 'bg-white text-[#4931A8] hover:bg-[#F8F9FC]' };
  return <a href={href} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C4CF1] focus-visible:ring-offset-2 ${colors[variant]} ${className}`}>{children}</a>;
}

function SectionHeader({ eyebrow, title, description, dark = false }: { eyebrow: string; title: string; description?: string; dark?: boolean }) {
  return <div className="max-w-3xl"><p className={`text-xs font-bold uppercase tracking-[.18em] ${dark ? 'text-[#FFB067]' : 'text-[#6C4CF1]'}`}>{eyebrow}</p><h2 className={`mt-4 text-3xl font-semibold leading-[1.08] tracking-[-.045em] sm:text-5xl ${dark ? 'text-white' : 'text-[#20212A]'}`}>{title}</h2>{description && <p className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 ${dark ? 'text-white/70' : 'text-[#686B78]'}`}>{description}</p>}</div>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [['Inicio', '#inicio'], ['Soluciones', '#soluciones'], ['Servicios', '#servicios'], ['Nosotros', '/mision'], ['Contacto', '#contacto']];
  return <header className="sticky top-0 z-50 border-b border-[#E8EAF0] bg-[#F8F9FC]/95 backdrop-blur-md"><div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3.5 sm:px-8 lg:px-10"><Brand /><button type="button" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} onClick={() => setOpen(!open)} className="grid size-10 place-items-center rounded-full border border-[#E8EAF0] text-[#20212A] min-[900px]:hidden">{open ? <X size={18} /> : <Menu size={18} />}</button><nav aria-label="Navegación principal" className={`${open ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-1 border-b border-[#E8EAF0] bg-[#F8F9FC] p-5 shadow-lg min-[900px]:static min-[900px]:flex min-[900px]:flex-row min-[900px]:items-center min-[900px]:gap-7 min-[900px]:border-0 min-[900px]:bg-transparent min-[900px]:p-0 min-[900px]:shadow-none`}>{links.slice(0, 2).map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className="rounded-lg px-2 py-2 text-sm text-[#686B78] transition hover:text-[#4931A8]">{label}</a>)}<details className="group relative"><summary className="flex cursor-pointer list-none items-center gap-1 rounded-lg px-2 py-2 text-sm text-[#686B78] transition hover:text-[#4931A8]">Productos <ChevronDown size={14} className="transition group-open:rotate-180" /></summary><div className="mt-1 flex flex-col gap-1 border-l border-[#E8EAF0] pl-3 min-[900px]:absolute min-[900px]:left-0 min-[900px]:top-full min-[900px]:mt-2 min-[900px]:w-56 min-[900px]:rounded-xl min-[900px]:border min-[900px]:bg-white min-[900px]:p-2 min-[900px]:shadow-lg"><a href="#octodesk" onClick={(event) => { setOpen(false); event.currentTarget.closest('details')?.removeAttribute('open'); }} className="rounded-lg px-3 py-2 text-sm text-[#4931A8] hover:bg-[#F8F7FF]">Octodesk</a><a href="#nina-manager" onClick={(event) => { setOpen(false); event.currentTarget.closest('details')?.removeAttribute('open'); }} className="rounded-lg px-3 py-2 text-sm text-[#6E193D] hover:bg-[#FFF8F8]">Nina Manager</a></div></details>{links.slice(2).map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className="rounded-lg px-2 py-2 text-sm text-[#686B78] transition hover:text-[#4931A8]">{label}</a>)}<Button href="#contacto" className="mt-2 min-[900px]:mt-0">Hablemos <ArrowUpRight size={15} /></Button></nav></div></header>;
}

function OctodeskMiniDashboard() {
  return <div className="relative mx-auto w-full max-w-[610px] rotate-[1deg] rounded-2xl border border-white/60 bg-white p-2 shadow-[0_30px_90px_rgba(73,49,168,.18)] sm:rounded-[1.6rem] sm:p-3"><div className="overflow-hidden rounded-xl border border-[#E8EAF0] bg-[#F8F9FC] sm:rounded-[1.2rem]"><div className="flex items-center justify-between border-b border-[#E8EAF0] bg-white px-4 py-3 sm:px-5"><div className="flex items-center gap-2"><span className="grid size-7 place-items-center rounded-lg bg-[#6C4CF1] text-white"><ClipboardCheck size={15} /></span><span className="text-xs font-semibold text-[#20212A]">Octodesk</span></div><span className="rounded-full bg-[#F1EEFF] px-2.5 py-1 text-[9px] font-medium text-[#4931A8]">Mi espacio</span></div><div className="grid gap-3 p-3 sm:grid-cols-[.78fr_1.22fr] sm:gap-4 sm:p-5"><div className="flex flex-col gap-3"><div className="rounded-xl border border-[#E8EAF0] bg-white p-3 sm:p-4"><div className="flex items-center justify-between"><p className="text-[10px] text-[#686B78]">Proyectos</p><Layers3 size={14} className="text-[#6C4CF1]" /></div><div className="mt-4 flex flex-col gap-2"><div className="h-2 w-4/5 rounded-full bg-[#E8EAF0]" /><div className="h-2 w-3/5 rounded-full bg-[#E8EAF0]" /><div className="h-2 w-2/3 rounded-full bg-[#E8EAF0]" /></div></div><div className="rounded-xl bg-[#4931A8] p-3 text-white sm:p-4"><p className="text-[10px] text-white/65">Siguiente paso</p><p className="mt-2 text-xs font-medium">Tareas y fechas</p><div className="mt-4 flex items-center gap-2 text-[10px] text-white/80"><CalendarDays size={13} /> Calendario</div></div></div><div className="rounded-xl border border-[#E8EAF0] bg-white p-3 sm:p-4"><div className="flex items-center justify-between"><p className="text-[10px] font-semibold text-[#20212A]">Vista de trabajo</p><span className="flex items-center gap-1 text-[9px] text-[#686B78]"><Users size={12} /> Equipo</span></div><div className="mt-4 grid grid-cols-3 gap-2"><div className="rounded-lg bg-[#F8F9FC] p-2"><p className="text-[8px] font-semibold text-[#686B78]">Por hacer</p><div className="mt-3 flex flex-col gap-2"><div className="h-9 rounded-md border border-[#E8EAF0] bg-white p-1.5"><div className="h-1.5 w-3/4 rounded-full bg-[#DCD5FF]" /><div className="mt-1.5 h-1 w-1/2 rounded-full bg-[#E8EAF0]" /></div><div className="h-8 rounded-md border border-[#E8EAF0] bg-white p-1.5"><div className="h-1.5 w-2/3 rounded-full bg-[#FFD8C8]" /><div className="mt-1.5 h-1 w-1/2 rounded-full bg-[#E8EAF0]" /></div></div></div><div className="rounded-lg bg-[#F8F9FC] p-2"><p className="text-[8px] font-semibold text-[#686B78]">En curso</p><div className="mt-3 flex flex-col gap-2"><div className="h-9 rounded-md border border-[#E8EAF0] bg-white p-1.5"><div className="h-1.5 w-3/4 rounded-full bg-[#FFD8C8]" /><div className="mt-1.5 h-1 w-1/2 rounded-full bg-[#E8EAF0]" /></div></div></div><div className="rounded-lg bg-[#F8F9FC] p-2"><p className="text-[8px] font-semibold text-[#686B78]">Listo</p><div className="mt-3 flex flex-col gap-2"><div className="h-9 rounded-md border border-[#E8EAF0] bg-white p-1.5"><div className="h-1.5 w-3/4 rounded-full bg-[#DCD5FF]" /><div className="mt-1.5 h-1 w-1/2 rounded-full bg-[#E8EAF0]" /></div></div></div></div><div className="mt-3 flex items-center justify-between rounded-lg bg-[#F8F9FC] p-2.5"><span className="text-[9px] text-[#686B78]">Finanzas y rentabilidad</span><BarChart3 size={14} className="text-[#FF7A45]" /></div></div></div></div></div>;
}

function Hero() {
  return <section id="inicio" className="relative overflow-hidden bg-[#F8F9FC]"><div className="absolute right-[-9rem] top-[-12rem] size-[34rem] rounded-full border border-[#6C4CF1]/10" aria-hidden="true" /><div className="absolute right-[-5rem] top-[-8rem] size-[26rem] rounded-full border border-[#6C4CF1]/10" aria-hidden="true" /><div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 md:grid-cols-[.95fr_1.05fr] md:items-center md:gap-12 lg:px-10 lg:py-28"><div className="relative z-10"><p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.2em] text-[#4931A8]"><span className="h-px w-8 bg-[#FF7A45]" />Tecnología con intención</p><h1 className="mt-6 max-w-2xl text-[2.75rem] font-semibold leading-[1.02] tracking-[-.055em] text-[#20212A] sm:text-6xl lg:text-[4.5rem]">Tecnología aplicada a <span className="text-[#6C4CF1]">problemas reales.</span></h1><p className="mt-6 max-w-xl text-base leading-7 text-[#686B78] sm:text-lg sm:leading-8">StrellaTech desarrolla productos y soluciones digitales para convertir necesidades reales en herramientas que funcionan.</p><div className="mt-8 flex flex-wrap gap-3"><Button href="#soluciones">Explorar soluciones <ArrowRight size={16} /></Button><Button href="#productos" variant="secondary">Ver productos</Button></div><div className="mt-9 flex items-center gap-3 text-xs text-[#686B78]"><span className="grid size-7 place-items-center rounded-full bg-[#EFECFF] text-[#6C4CF1]"><Check size={14} /></span>Productos propios y soluciones para negocios</div></div><div className="relative flex min-h-[300px] items-center justify-center sm:min-h-[430px]"><div className="absolute right-8 top-6 hidden rounded-xl border border-[#E8EAF0] bg-white px-4 py-3 text-xs text-[#686B78] shadow-sm sm:block"><span className="mb-1 block text-[9px] font-bold uppercase tracking-[.14em] text-[#6C4CF1]">Estrategia</span>Una idea, con dirección</div><div className="absolute bottom-6 left-0 z-10 hidden rounded-xl border border-[#E8EAF0] bg-white px-4 py-3 text-xs text-[#686B78] shadow-sm sm:block"><span className="mb-1 block text-[9px] font-bold uppercase tracking-[.14em] text-[#FF7A45]">Ejecución</span>Del plan al producto</div><ProductHighlights /></div></div></section>;
}

function Ecosystem() {
  const items = ['Estrategia', 'Tecnología', 'Producto', 'Ejecución', 'Resultado'];
  return <section id="soluciones" className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-10"><div className="mx-auto max-w-7xl"><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><SectionHeader eyebrow="Una idea que avanza" title="De entender el reto a poner la solución en marcha." /><p className="max-w-xl text-base leading-7 text-[#686B78]">No somos solo desarrollo. Conectamos visión de negocio, diseño y tecnología para crear productos y experiencias que se usan de verdad.</p></div><div className="mt-12 grid gap-2 sm:grid-cols-5 sm:gap-0">{items.map((item, index) => <div key={item} className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-4"><div className="flex items-center gap-3 sm:w-full"><span className={`grid size-11 shrink-0 place-items-center rounded-full text-sm font-semibold ${index === items.length - 1 ? 'bg-[#FF7A45] text-white' : 'bg-[#EFECFF] text-[#4931A8]'}`}>{index === items.length - 1 ? <Check size={18} /> : `0${index + 1}`}</span>{index < items.length - 1 && <span className="h-px flex-1 bg-[#E8EAF0] sm:hidden" />}{index < items.length - 1 && <span className="hidden h-px flex-1 bg-[#E8EAF0] sm:block" />}</div><p className={`text-sm font-semibold ${index === items.length - 1 ? 'text-[#FF7A45]' : 'text-[#20212A]'}`}>{item}</p></div>)}</div></div></section>;
}

function OctodeskShowcase() {
  const tools = [{ name: 'Proyectos', icon: BriefcaseBusiness }, { name: 'Tareas', icon: ClipboardCheck }, { name: 'Clientes', icon: Users }, { name: 'Finanzas', icon: WalletCards }, { name: 'Calendario', icon: CalendarDays }, { name: 'Seguridad', icon: ShieldCheck }];
  return <section id="octodesk" className="scroll-mt-24 overflow-hidden bg-[#4931A8] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.78fr_1.22fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#FFB067]">Producto propio · Octodesk</p><h2 className="mt-5 text-5xl font-semibold leading-[.98] tracking-[-.055em] sm:text-7xl">Menos caos.<br />Más control.</h2><p className="mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">Gestión de proyectos, tareas, clientes, finanzas y equipo desde un solo lugar.</p><div className="mt-8 flex flex-wrap items-baseline gap-x-3 gap-y-1"><span className="text-3xl font-semibold tracking-tight">$199</span><span className="text-sm text-white/70">MXN / año</span><span className="ml-1 rounded-full bg-white/10 px-3 py-1 text-xs text-white">Hasta 5 usuarios</span></div><Button href="/octodesk" className="mt-7">Conocer Octodesk <ArrowRight size={16} /></Button><div className="mt-9 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3">{tools.map(({ name, icon: Icon }) => <span key={name} className="flex items-center gap-2 text-xs text-white/80"><Icon size={14} className="text-[#FFB067]" />{name}</span>)}</div></div><div className="relative"><div className="absolute -right-10 -top-10 size-48 rounded-full border border-white/10" aria-hidden="true" /><OctodeskMiniDashboard /></div></div></section>;
}

function ProductCard({ product, index }: { product: typeof products[number]; index: number }) {
  const Icon = product.icon;
  const tones: Record<string, { panel: string; icon: string; label: string }> = {
    rose: { panel: 'bg-[#FFF1EE]', icon: 'bg-[#FCE3DF] text-[#B95455]', label: 'text-[#B95455]' },
    blue: { panel: 'bg-[#EDF3FF]', icon: 'bg-[#DCE8FF] text-[#3F5D9D]', label: 'text-[#3F5D9D]' },
    orange: { panel: 'bg-[#FFF3E8]', icon: 'bg-[#FFE1CB] text-[#B85E2F]', label: 'text-[#B85E2F]' },
  };
  const tone = tones[product.tone];
  return <article className={`group ${index === 1 ? 'lg:mt-16' : ''}`}><div className={`relative flex min-h-56 flex-col justify-between overflow-hidden rounded-2xl p-6 transition duration-300 group-hover:-translate-y-1 ${tone.panel}`}><div className="absolute -right-10 -top-10 size-40 rounded-full border border-black/5" aria-hidden="true" /><div className="relative flex items-center justify-between"><span className={`text-[10px] font-bold uppercase tracking-[.16em] ${tone.label}`}>{product.category}</span><span className={`grid size-10 place-items-center rounded-xl ${tone.icon}`}><Icon size={19} /></span></div><div className="relative mt-12 flex items-end justify-between"><p className="text-sm font-medium text-[#686B78]">{product.problem}</p><ArrowUpRight size={17} className="shrink-0 text-[#686B78] transition group-hover:-translate-y-1 group-hover:translate-x-1" /></div></div><div className="pt-5"><h3 className="text-xl font-semibold tracking-tight text-[#20212A]">{product.name}</h3><p className="mt-2 min-h-14 text-sm leading-6 text-[#686B78]">{product.description}</p><a href={product.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#4931A8] hover:text-[#6C4CF1]">{product.label}<ArrowRight size={15} /></a></div></article>;
}

function Products() {
  return <section className="bg-[#F8F9FC] px-5 py-20 sm:px-8 sm:py-28 lg:px-10"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><SectionHeader eyebrow="Más productos" title="Otras soluciones del ecosistema." description="Además de Octodesk y Nina Manager, seguimos creando herramientas para resolver necesidades específicas de operación." /><a href="#contacto" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#4931A8]">¿Tienes un reto distinto? Hablemos <ArrowRight size={15} /></a></div><div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{products.map((product, index) => <ProductCard key={product.name} product={product} index={index} />)}</div></div></section>;
}

function Services() {
  return <section id="servicios" className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-10"><div className="mx-auto max-w-7xl"><div className="grid gap-8 lg:grid-cols-[.82fr_1.18fr]"><SectionHeader eyebrow="Capacidades" title="Tecnología enfocada en lo que necesitas resolver." description="Unimos estrategia, diseño, desarrollo y herramientas inteligentes para llevar una necesidad de negocio a una solución en funcionamiento." /><div className="flex items-start gap-3 rounded-2xl border border-[#E8EAF0] bg-[#F8F9FC] p-5 text-sm leading-6 text-[#686B78]"><Sparkles size={17} className="mt-0.5 shrink-0 text-[#6C4CF1]" />La inteligencia artificial forma parte del trabajo cuando simplifica una tarea o mejora la experiencia; no es un fin por sí sola.</div></div><div className="mt-12 border-t border-[#E8EAF0]">{services.map(({ title, text, icon: Icon, index }) => <article key={title} className="grid gap-4 border-b border-[#E8EAF0] py-7 sm:grid-cols-[.18fr_.42fr_1fr] sm:items-start sm:gap-6"><span className="text-xs font-semibold text-[#FF7A45]">{index}</span><div className="flex items-center gap-3"><Icon size={18} className="text-[#6C4CF1]" /><h3 className="text-lg font-semibold text-[#20212A]">{title}</h3></div><p className="max-w-2xl text-sm leading-6 text-[#686B78] sm:pl-3">{text}</p></article>)}</div></div></section>;
}

function Learning() {
  return <section id="aprendizaje" className="bg-[#EFECFF] px-5 py-16 sm:px-8 sm:py-20 lg:px-10"><div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-center"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#4931A8]">Aprendizaje práctico</p><h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-.04em] text-[#20212A] sm:text-4xl">De una idea a una aplicación empresarial.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-[#686B78]">Un bootcamp en vivo de 4 sesiones para transformar una necesidad real de negocio en una aplicación funcional, aprendiendo a analizar, planear, construir y validar con herramientas de inteligencia artificial.</p><p className="mt-4 text-xs font-semibold text-[#4931A8]">4 sesiones · En vivo · Acompañamiento paso a paso</p></div><Button href="/bootcamp" variant="secondary">Conocer el Bootcamp <ArrowUpRight size={15} /></Button></div></section>;
}

function Methodology() {
  return <section id="nosotros" className="bg-[#F8F9FC] px-5 py-20 sm:px-8 sm:py-28 lg:px-10"><div className="mx-auto max-w-7xl"><div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end"><SectionHeader eyebrow="Cómo trabajamos" title="No empezamos por la tecnología. Empezamos por el problema." /><p className="max-w-xl text-base leading-7 text-[#686B78]">Un proceso claro para pasar de una necesidad a una solución que se puede usar, aprender y mejorar.</p></div><div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">{processSteps.map(({ number, title, body, icon: Icon }, index) => <article key={number} className="relative border-t border-[#D8D9E2] pt-5"><div className="flex items-center justify-between"><span className={`text-sm font-semibold ${index === processSteps.length - 1 ? 'text-[#FF7A45]' : 'text-[#6C4CF1]'}`}>{number}</span><Icon size={18} className={index === processSteps.length - 1 ? 'text-[#FF7A45]' : 'text-[#6C4CF1]'} /></div><h3 className="mt-8 text-xl font-semibold text-[#20212A]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#686B78]">{body}</p></article>)}</div></div></section>;
}

function WhyStrellaTech() {
  const items = ['Experiencia aplicada a productos y operaciones reales', 'Soluciones propias junto con desarrollo a la medida', 'Construcción incremental, con claridad en cada etapa', 'Acompañamiento cercano desde la idea hasta su uso'];
  return <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><SectionHeader eyebrow="Por qué StrellaTech" title="La tecnología tiene que ganarse su lugar." description="Elegimos herramientas por lo que ayudan a conseguir. La prioridad siempre es entender el contexto, construir con intención y entregar algo que tenga sentido en la práctica." /></div><ul className="divide-y divide-[#E8EAF0] border-y border-[#E8EAF0]">{items.map((item) => <li key={item} className="flex gap-4 py-5 text-sm leading-6 text-[#20212A]"><span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[#EFECFF] text-[#6C4CF1]"><Check size={13} /></span>{item}</li>)}</ul></div></section>;
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Hablemos de: ${formData.get('topic')}`);
    const body = encodeURIComponent(`Hola StrellaTech,\n\nSoy ${formData.get('name')} (${formData.get('email')}).\n\n${formData.get('message')}`);
    setSubmitted(true);
    window.location.href = `mailto:contacto@strellatech.com?subject=${subject}&body=${body}`;
  }
  return <section id="contacto" className="bg-[#4931A8] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-start"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#FFB067]">Hablemos</p><h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.04] tracking-[-.05em] sm:text-6xl">¿Tienes una idea, un problema o un proyecto que quieras convertir en realidad?</h2><p className="mt-6 max-w-lg text-base leading-7 text-white/75">Cuéntanos qué quieres resolver. Empezamos por entenderlo.</p><a href="mailto:contacto@strellatech.com" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#FFB067]">contacto@strellatech.com <ArrowUpRight size={15} /></a></div><form onSubmit={handleSubmit} className="rounded-2xl bg-white p-5 text-[#20212A] sm:p-7"><div className="grid gap-4 sm:grid-cols-2"><label className="grid gap-2 text-xs font-medium text-[#686B78]">Nombre<input required name="name" autoComplete="name" className="min-h-11 rounded-lg border border-[#E8EAF0] bg-[#F8F9FC] px-3 text-sm text-[#20212A] outline-none transition focus:border-[#6C4CF1] focus:ring-2 focus:ring-[#6C4CF1]/15" /></label><label className="grid gap-2 text-xs font-medium text-[#686B78]">Correo electrónico<input required type="email" name="email" autoComplete="email" className="min-h-11 rounded-lg border border-[#E8EAF0] bg-[#F8F9FC] px-3 text-sm text-[#20212A] outline-none transition focus:border-[#6C4CF1] focus:ring-2 focus:ring-[#6C4CF1]/15" /></label></div><label className="mt-4 grid gap-2 text-xs font-medium text-[#686B78]">¿En qué podemos ayudarte?<select name="topic" defaultValue="Proyecto digital" className="min-h-11 rounded-lg border border-[#E8EAF0] bg-[#F8F9FC] px-3 text-sm text-[#20212A] outline-none focus:border-[#6C4CF1] focus:ring-2 focus:ring-[#6C4CF1]/15"><option>Proyecto digital</option><option>Producto o solución propia</option><option>Bootcamp</option><option>Otro</option></select></label><label className="mt-4 grid gap-2 text-xs font-medium text-[#686B78]">Cuéntanos un poco más<textarea required name="message" rows={3} className="resize-y rounded-lg border border-[#E8EAF0] bg-[#F8F9FC] px-3 py-2.5 text-sm text-[#20212A] outline-none focus:border-[#6C4CF1] focus:ring-2 focus:ring-[#6C4CF1]/15" /></label><button type="submit" className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#FF7A45] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#e96834] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C4CF1] focus-visible:ring-offset-2">{submitted ? 'Abriendo tu correo' : 'Contactar a StrellaTech'} <ArrowRight size={16} /></button><p className="mt-3 text-[11px] leading-5 text-[#686B78]">Se abrirá tu aplicación de correo con el mensaje listo para enviar.</p></form></div></section>;
}

function Footer() {
  return <footer className="bg-[#20212A] px-5 py-10 text-white sm:px-8 lg:px-10"><div className="mx-auto max-w-7xl"><div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]"><div><Brand light /><p className="mt-4 max-w-xs text-sm leading-6 text-white/60">Tecnología útil, productos reales y ejecución.</p></div><div><h3 className="text-xs font-semibold uppercase tracking-[.14em] text-[#FFB067]">Productos</h3><div className="mt-4 flex flex-col gap-3 text-sm text-white/70"><a href="/octodesk" className="hover:text-white">Octodesk</a><a href="/nina-manager" className="hover:text-white">Nina Manager</a><a href="/traductor-profesional" className="hover:text-white">Traductor Profesional</a><a href="/dish-manager" className="hover:text-white">Dish Manager</a></div></div><div><h3 className="text-xs font-semibold uppercase tracking-[.14em] text-[#FFB067]">Explora</h3><div className="mt-4 flex flex-col gap-3 text-sm text-white/70"><a href="#servicios" className="hover:text-white">Servicios</a><a href="/mision" className="hover:text-white">Nosotros</a><a href="/bootcamp" className="hover:text-white">Bootcamp</a></div></div><div><h3 className="text-xs font-semibold uppercase tracking-[.14em] text-[#FFB067]">Contacto</h3><a href="mailto:contacto@strellatech.com" className="mt-4 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"><Mail size={15} />contacto@strellatech.com</a></div></div><div className="mt-10 flex flex-col gap-3 border-t border-white/15 pt-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} StrellaTech</span><span>Tecnología aplicada a problemas reales.</span></div></div></footer>;
}

function CorporateHome() {
  useEffect(() => {
    document.title = 'StrellaTech | Tecnología útil, productos reales y ejecución';
    const description = 'StrellaTech construye productos y soluciones digitales para resolver problemas reales. Conoce Octodesk, Nina Manager, Dish Manager y nuestras experiencias de aprendizaje.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, []);

  return <div className="min-h-screen bg-[#F8F9FC] font-sans text-[#20212A] selection:bg-[#DCD5FF] selection:text-[#4931A8]"><Navbar /><main><Hero /><ProductEcosystemOverview /><OctodeskShowcase /><NinaManagerShowcase /><Ecosystem /><Products /><Services /><Learning /><Methodology /><WhyStrellaTech /><Contact /></main><Footer /></div>;
}

export default CorporateHome;

export function FuturePage({ title }: { title: string }) { return <div className="grid min-h-screen place-items-center bg-[#F8F9FC] px-6 text-center text-[#20212A]"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6C4CF1]">StrellaTech</p><h1 className="mt-5 text-5xl font-semibold tracking-[-0.05em]">{title}</h1><p className="mt-4 text-[#686B78]">Próximamente.</p><a href="/" className="mt-8 inline-flex rounded-full bg-[#FF7A45] px-6 py-3 text-sm font-bold text-white">Volver a StrellaTech</a></div></div>; }

export function AppRouter({ DishManagerApp }: { DishManagerApp: React.ComponentType }) {
  const path = window.location.pathname;
  if (path === '/dish-manager') return <DishManagerApp />;
  if (path === '/nina-manager') return <NinaManagerLanding />;
  if (path === '/octodesk') return <OctodeskLanding />;
  if (path === '/mision') return <MissionLanding />;
  if (path === '/traductor-profesional') return <FuturePage title="Traductor Profesional" />;
  if (path === '/bootcamp') return <FuturePage title="Tu primera aplicación empresarial con IA" />;
  if (path === '/nosotros') return <FuturePage title="Nosotros" />;
  return <CorporateHome />;
}

export { products as solutions, palette };
