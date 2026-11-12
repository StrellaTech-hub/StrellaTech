import { ArrowDown, ArrowRight, ArrowUpRight, BarChart3, BriefcaseBusiness, Check, ClipboardCheck, Layers3, Package, Sparkles, Users, WalletCards } from 'lucide-react';

const ninaFeatures = [
  { name: 'Ventas y cobros', icon: WalletCards },
  { name: 'Inventario', icon: Package },
  { name: 'Compras y pagos', icon: BriefcaseBusiness },
  { name: 'Ingresos, gastos y rentabilidad', icon: BarChart3 },
  { name: 'Clientes y fidelización', icon: Users },
  { name: 'Operaciones y tareas', icon: ClipboardCheck },
];

export function ProductHighlights() {
  return <div className="w-full max-w-[590px]">
    <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-[#E8EAF0] bg-white/85 px-4 py-2 text-[10px] font-semibold tracking-[.12em] text-[#686B78] shadow-sm"><span className="size-2 rounded-full bg-[#FF7A45]" />PRODUCTOS STRELLATECH</div>
    <div className="grid gap-3 sm:grid-cols-2">
      <article className="relative flex min-h-[210px] flex-col justify-between overflow-hidden rounded-[1.4rem] bg-[#4931A8] p-5 text-white shadow-[0_20px_50px_rgba(73,49,168,.2)]"><div className="absolute -right-10 -top-12 size-36 rounded-full border border-white/10" aria-hidden="true" /><div className="relative flex items-center gap-2"><span className="grid size-8 place-items-center rounded-lg bg-white/15"><Layers3 size={16} /></span><p className="text-sm font-semibold">Octodesk</p></div><div className="relative"><p className="text-sm font-medium leading-5">Organización y control para equipos y negocios.</p><div className="mt-4 flex flex-wrap gap-1.5"><span className="rounded-full bg-white/10 px-2 py-1 text-[9px] text-white/80">Proyectos</span><span className="rounded-full bg-white/10 px-2 py-1 text-[9px] text-white/80">Finanzas</span><span className="rounded-full bg-[#FF7A45] px-2 py-1 text-[9px] text-white">Operaciones</span></div></div></article>
      <article className="relative flex min-h-[210px] flex-col justify-between overflow-hidden rounded-[1.4rem] border border-[#F3CFD4] bg-[#FCE8EA] p-5 text-[#6E193D] shadow-[0_20px_50px_rgba(110,25,61,.1)]"><div className="absolute -right-12 -top-12 size-36 rounded-full border border-[#E05A6F]/15" aria-hidden="true" /><div className="relative flex items-center gap-2"><img src="/nina-fox.png" alt="Zorrita de Nina Manager" className="size-9 rounded-full bg-white p-0.5 object-contain" /><div><p className="text-sm font-semibold">Nina Manager</p><p className="text-[9px] text-[#9b6677]">Producto estrella</p></div></div><div className="relative"><p className="text-sm font-medium leading-5">La gestión de tu negocio, pensada para emprender.</p><div className="mt-4 flex flex-wrap gap-1.5"><span className="rounded-full bg-white/80 px-2 py-1 text-[9px] text-[#6E193D]">Ventas</span><span className="rounded-full bg-white/80 px-2 py-1 text-[9px] text-[#6E193D]">Inventario</span><span className="rounded-full bg-[#E60076] px-2 py-1 text-[9px] text-white">Asistencia Nina</span></div></div></article>
    </div>
  </div>;
}

function NinaDashboardMockup() {
  return <div className="relative mx-auto w-full max-w-[590px] rounded-[1.6rem] border border-[#f3cfd4] bg-white p-2.5 shadow-[0_28px_70px_rgba(110,25,61,.13)] sm:p-3">
    <div className="overflow-hidden rounded-[1.2rem] border border-[#f6e6e8] bg-[#fffdfd]">
      <div className="flex items-center justify-between border-b border-[#f5e5e8] bg-white px-4 py-3.5 sm:px-5">
        <div className="flex items-center gap-2.5"><img src="/nina-fox.png" alt="" aria-hidden="true" className="size-8 object-contain" /><span className="text-xs font-semibold text-[#34232B]">Nina Manager</span></div>
        <span className="rounded-full bg-[#FCE8EA] px-2.5 py-1 text-[9px] font-medium text-[#6E193D]">Mi negocio</span>
      </div>
      <div className="grid gap-3 p-3 sm:grid-cols-[1fr_1.05fr] sm:gap-4 sm:p-4">
        <div className="rounded-xl border border-[#f3e7e9] bg-white p-3.5">
          <div className="flex items-center justify-between"><p className="text-[10px] font-semibold text-[#34232B]">Tu operación</p><span className="size-2 rounded-full bg-[#E05A6F]" /></div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {ninaFeatures.slice(0, 4).map(({ name, icon: Icon }, index) => <div key={name} className={`rounded-lg p-2.5 ${index % 2 === 0 ? 'bg-[#FCE8EA]' : 'bg-[#F4EDFD]'}`}><Icon size={14} className={index % 2 === 0 ? 'text-[#E05A6F]' : 'text-[#6E193D]'} /><p className="mt-2 text-[9px] font-medium leading-4 text-[#4B3039]">{name}</p></div>)}
          </div>
          <div className="mt-2 flex items-center gap-2 rounded-lg bg-[#fff5ef] p-2.5"><Users size={13} className="text-[#FF7A3D]" /><span className="text-[9px] font-medium text-[#6E193D]">Clientes y fidelización</span></div>
        </div>
        <div className="relative flex min-h-[205px] flex-col rounded-xl border border-[#f3d8dd] bg-[#fff8f8] p-3.5">
          <div className="flex items-center gap-2 border-b border-[#f3dfe2] pb-2.5"><span className="grid size-7 place-items-center rounded-full bg-[#E60076] text-white"><Sparkles size={13} /></span><div><p className="text-[10px] font-semibold text-[#6E193D]">Asistencia de Nina</p><p className="text-[8px] text-[#9b6677]">Tú decides, Nina te acompaña</p></div></div>
          <div className="mt-3 self-end rounded-xl rounded-br-sm bg-[#F4EDFD] px-3 py-2 text-[9px] text-[#6E193D]">¿Cómo va mi negocio?</div>
          <div className="mt-2 flex items-start gap-2 rounded-xl rounded-tl-sm bg-white p-3 shadow-sm"><img src="/nina-fox.png" alt="" aria-hidden="true" className="size-8 shrink-0 object-contain" /><p className="text-[9px] leading-[1.55] text-[#563C45]">Puedo ayudarte a revisar tus ventas, inventario y gastos para que tengas más claridad sobre tu negocio.</p></div>
          <span className="mt-auto pt-3 text-[8px] text-[#9b6677]">Asistencia para consultar y entender tu información</span>
        </div>
      </div>
    </div>
    <div className="absolute -right-3 -top-5 hidden size-[4.5rem] items-center justify-center rounded-full border border-[#f3cfd4] bg-white p-1 shadow-md sm:flex"><img src="/nina-fox.png" alt="Zorrita de Nina Manager, su asistente de negocio" className="size-full object-contain" /></div>
  </div>;
}

export function ProductEcosystemOverview() {
  return <section id="productos" className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-3xl text-center"><p className="text-xs font-bold uppercase tracking-[.18em] text-[#6C4CF1]">Nuestro ecosistema</p><h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-[-.045em] text-[#20212A] sm:text-5xl">Tecnología que se adapta a diferentes formas de trabajar.</h2><p className="mt-5 text-base leading-7 text-[#686B78] sm:text-lg sm:leading-8">StrellaTech construye soluciones digitales y productos propios. Conoce dos maneras distintas de hacer que la gestión del negocio sea más clara.</p></div>
      <div className="mx-auto mt-10 max-w-4xl">
        <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#E8EAF0] bg-[#F8F9FC] px-5 py-3"><span className="text-xs font-bold tracking-[.17em] text-[#20212A]">STRELLATECH</span><span className="hidden text-xs text-[#686B78] sm:block">Construimos tecnología.</span></div>
        <div className="flex justify-center py-2 text-[#A9A8B4]"><ArrowDown size={18} /></div>
        <div className="mb-3 text-center text-[10px] font-semibold uppercase tracking-[.16em] text-[#686B78]">Productos propios</div>
        <div className="grid gap-3 md:grid-cols-2">
          <a href="#octodesk" className="group flex items-center justify-between gap-4 rounded-2xl border border-[#DDD6FF] bg-[#F8F7FF] p-5 transition hover:border-[#6C4CF1] hover:shadow-[0_10px_30px_rgba(73,49,168,.08)]"><div><p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#6C4CF1]">Gestión empresarial</p><p className="mt-1.5 text-lg font-semibold text-[#4931A8]">Octodesk</p><p className="mt-1 text-xs text-[#686B78]">Para equipos y negocios que necesitan organización y control.</p></div><ArrowUpRight size={18} className="shrink-0 text-[#6C4CF1] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
          <a href="#nina-manager" className="group flex items-center justify-between gap-4 rounded-2xl border border-[#F3CFD4] bg-[#FFF8F8] p-5 transition hover:border-[#E05A6F] hover:shadow-[0_10px_30px_rgba(110,25,61,.08)]"><div><p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#E05A6F]">Gestión para emprendedoras</p><p className="mt-1.5 text-lg font-semibold text-[#6E193D]">Nina Manager</p><p className="mt-1 text-xs text-[#795766]">Para emprendedoras que quieren hacer crecer su negocio.</p></div><ArrowUpRight size={18} className="shrink-0 text-[#E05A6F] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
        </div>
      </div>
    </div>
  </section>;
}

export function NinaManagerShowcase() {
  return <section id="nina-manager" className="scroll-mt-24 bg-[#FCE8EA] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
    <div className="mx-auto grid max-w-7xl gap-12 min-[900px]:grid-cols-[.9fr_1.1fr] min-[900px]:items-center min-[900px]:gap-12">
      <div>
        <div className="flex items-center gap-3"><img src="/nina-fox.png" alt="" aria-hidden="true" className="size-11 object-contain" /><div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#E60076]">Producto estrella · StrellaTech</p><p className="mt-1 text-sm font-semibold tracking-tight text-[#6E193D]">Nina Manager</p></div></div>
        <h2 className="mt-7 max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-.055em] text-[#6E193D] sm:text-6xl">Tu negocio. Más claro. Más fácil. Más tuyo.</h2>
        <p className="mt-6 max-w-xl text-base leading-7 text-[#624650] sm:text-lg sm:leading-8">Una herramienta para emprendedoras que quieren tener bajo control sus ventas, inventario, compras, gastos y rentabilidad sin complicarse.</p>
        <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">{ninaFeatures.map(({ name }) => <li key={name} className="flex items-center gap-2.5 text-sm text-[#6E193D]"><span className="grid size-5 place-items-center rounded-full bg-white text-[#E05A6F]"><Check size={12} /></span>{name}</li>)}</ul>
        <div className="mt-7 flex items-center gap-2 text-sm font-medium text-[#6E193D]"><span className="grid size-7 place-items-center rounded-full bg-[#E60076] text-white"><Sparkles size={14} /></span>Asistencia de Nina, para consultar y entender tu negocio.</div>
        <div className="mt-8 flex flex-wrap items-center gap-4"><a href="/nina-manager" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E05A6F] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#c94b61] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6E193D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FCE8EA]">Conocer Nina Manager <ArrowRight size={16} /></a><span className="text-xs text-[#795766]">Software profesional, creado para emprender.</span></div>
      </div>
      <NinaDashboardMockup />
    </div>
  </section>;
}
