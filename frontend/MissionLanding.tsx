import { useEffect } from 'react';
import { ArrowRight, Check, Compass, Lightbulb, Sparkles } from 'lucide-react';

const values = [
  ['01', 'Creemos en las ideas', 'Toda gran historia comienza con una idea. Respetamos la creatividad, la iniciativa y el valor de quienes deciden construir algo propio.'],
  ['02', 'Hacemos posible lo extraordinario', 'Nos mueve encontrar caminos donde otros ven obstáculos. Utilizamos la tecnología y la innovación para convertir desafíos en oportunidades.'],
  ['03', 'La tecnología debe acercarnos', 'Creemos que la innovación debe ser accesible, útil y comprensible. Queremos que más personas puedan aprovecharla, independientemente de dónde comiencen.'],
  ['04', 'Creamos con propósito', 'No desarrollamos tecnología por el simple hecho de hacerlo. Cada producto, servicio y solución debe tener una razón: mejorar algo, facilitar algo o abrir una nueva posibilidad.'],
  ['05', 'Crecemos juntos', 'El éxito no es un camino individual. Escuchamos, colaboramos y construimos relaciones donde todos podamos aprender, evolucionar y avanzar.'],
  ['06', 'Nos atrevemos a evolucionar', 'El futuro no se espera, se construye. Experimentamos, aprendemos y nos reinventamos para seguir creando mejores posibilidades.'],
  ['07', 'Hacemos las cosas con integridad', 'La confianza se construye con hechos. Actuamos con responsabilidad, transparencia y respeto por las personas que ponen sus proyectos en nuestras manos.'],
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E8EAF0] bg-[#F8F9FC]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-4 sm:px-8 lg:px-10">
        <a href="/" aria-label="StrellaTech, inicio" className="inline-flex shrink-0 items-center gap-3 py-2 text-xs font-semibold tracking-[.18em] text-[#20212A] sm:text-sm">
          <span aria-hidden="true" className="size-2 rounded-full bg-[#FF7A45]" />
          STRELLATECH
        </a>
        <nav aria-label="Navegación principal" className="flex min-w-0 items-center gap-3 text-xs sm:gap-6 sm:text-sm">
          <a href="/#soluciones" className="hidden text-[#686B78] transition-colors hover:text-[#6C4CF1] sm:inline">Soluciones</a>
          <a href="/#aprendizaje" className="hidden text-[#686B78] transition-colors hover:text-[#6C4CF1] sm:inline">Aprendizaje</a>
          <a href="/mision" aria-current="page" className="leading-tight text-[#4931A8]">Nuestra esencia</a>
          <a href="/#contacto" className="rounded-full bg-[#FF7A45] px-3 py-2 text-center leading-tight text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#e96834] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C4CF1] focus-visible:ring-offset-2 sm:px-4">Construyamos algo</a>
        </nav>
      </div>
    </header>
  );
}

function SectionLabel({ children, inverse = false }: { children: string; inverse?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.2em] ${inverse ? 'text-[#FFB067]' : 'text-[#6C4CF1]'}`}>
      <span aria-hidden="true" className={`h-px w-7 ${inverse ? 'bg-[#FF7A45]' : 'bg-[#FF7A45]'}`} />
      {children}
    </p>
  );
}

function PurposeMark() {
  return (
    <div aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-[390px] motion-safe:animate-fade-in-up motion-reduce:animate-none">
      <div className="absolute inset-[8%] rounded-full border border-[#6C4CF1]/20" />
      <div className="absolute inset-[19%] rounded-full border border-[#6C4CF1]/25" />
      <div className="absolute inset-[31%] rounded-full border border-[#E8EAF0]" />
      <div className="absolute left-[19%] top-[22%] h-px w-[63%] rotate-[32deg] bg-[#6C4CF1]/45" />
      <div className="absolute left-[16%] top-[55%] h-px w-[65%] -rotate-[26deg] bg-[#6C4CF1]/30" />
      <span className="absolute left-[18%] top-[19%] size-3 rounded-full bg-[#6C4CF1] ring-4 ring-[#6C4CF1]/10" />
      <span className="absolute right-[16%] top-[40%] size-2.5 rounded-full bg-[#FF7A45] ring-4 ring-[#FF7A45]/10" />
      <span className="absolute bottom-[21%] left-[42%] size-2 rounded-full bg-[#4931A8] ring-4 ring-[#4931A8]/10" />
      <div className="absolute inset-0 m-auto grid size-[5.5rem] place-items-center rounded-full border border-[#E8EAF0] bg-white text-[#6C4CF1] shadow-[0_10px_35px_rgba(73,49,168,.08)] sm:size-24">
        <Compass className="size-9 sm:size-10" strokeWidth={1.3} />
      </div>
      <div className="absolute bottom-[11%] right-[8%] h-10 w-10 rounded-br-[1.4rem] border-b border-r border-[#FF7A45]/60" />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F8F9FC]">
      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[690px] lg:grid-cols-[1.15fr_.85fr] lg:gap-12 lg:px-10 lg:py-24">
        <div className="relative z-10 motion-safe:animate-fade-in-up motion-reduce:animate-none">
          <SectionLabel>Nuestra esencia</SectionLabel>
          <h1 className="mt-7 max-w-4xl text-[clamp(3.25rem,8vw,6.8rem)] font-semibold leading-[.96] tracking-[-.065em] text-[#20212A]">
            Creemos en todo lo que <span className="text-[#6C4CF1]">todavía puedes crear.</span>
          </h1>
          <p className="mt-8 max-w-xl text-xl font-medium leading-tight tracking-[-.025em] text-[#20212A] sm:text-2xl">Cada gran posibilidad comienza con una idea.</p>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#686B78]">
            Creemos en quienes comienzan desde cero. En quienes tienen una idea y no saben todavía hasta dónde puede llegar. En quienes trabajan cada día para construir algo propio.
          </p>
          <p className="mt-4 max-w-xl text-base leading-8 text-[#4931A8]">Creemos que la tecnología no debería poner límites, sino abrir puertas.</p>
        </div>
        <div className="relative mx-auto w-full max-w-[430px] lg:pl-4">
          <PurposeMark />
          <span aria-hidden="true" className="absolute right-[8%] top-[13%] size-2 rounded-full bg-[#FF7A45]" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#6C4CF1]/20 to-transparent" />
    </section>
  );
}

function MissionSection() {
  return (
    <section className="relative overflow-hidden bg-[#4931A8] px-5 py-20 text-[#F8F9FC] sm:px-8 sm:py-28 lg:px-10 lg:py-32">
      <div aria-hidden="true" className="absolute -right-24 -top-32 size-[28rem] rounded-full border border-white/10" />
      <div aria-hidden="true" className="absolute -right-8 -top-16 size-[20rem] rounded-full border border-white/10" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-start lg:gap-16">
        <div>
          <SectionLabel inverse>01 / Propósito</SectionLabel>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-.055em] sm:text-6xl lg:text-7xl">Nuestra misión</h2>
        </div>
        <div className="relative border-l border-white/20 pl-6 sm:pl-8">
          <Lightbulb aria-hidden="true" className="mb-8 size-9 text-[#FFB067]" strokeWidth={1.5} />
          <p className="max-w-3xl text-2xl font-medium leading-[1.25] tracking-[-.035em] sm:text-3xl lg:text-[2.5rem]">
            Desarrollar productos digitales y ofrecer soluciones tecnológicas y de consultoría para emprendedores, profesionales y organizaciones, combinando innovación, conocimiento y acompañamiento cercano para resolver necesidades reales, simplificar su trabajo y fortalecer sus proyectos.
          </p>
        </div>
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section className="overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_.8fr] lg:gap-16">
        <div>
          <SectionLabel>02 / Futuro</SectionLabel>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-.055em] text-[#20212A] sm:text-6xl lg:text-7xl">Nuestra visión</h2>
          <p className="mt-8 max-w-3xl text-2xl font-medium leading-[1.28] tracking-[-.035em] text-[#20212A] sm:mt-10 sm:text-3xl lg:text-[2.5rem]">
            Consolidarnos como una empresa tecnológica reconocida por crear soluciones digitales útiles, accesibles y confiables, que permitan a negocios y organizaciones de distintos tamaños aprovechar la tecnología para trabajar mejor, crecer y desarrollar todo su potencial.
          </p>
        </div>
        <div aria-hidden="true" className="relative mx-auto grid aspect-square w-full max-w-[370px] place-items-center">
          <div className="absolute inset-[6%] rounded-full border border-[#E8EAF0]" />
          <div className="absolute inset-[19%] rounded-full border border-[#6C4CF1]/20" />
          <div className="absolute inset-[31%] rounded-full border border-dashed border-[#6C4CF1]/30" />
          <div className="absolute left-[15%] top-[27%] h-px w-[70%] rotate-[42deg] bg-[#6C4CF1]/30" />
          <span className="absolute right-[15%] top-[25%] size-3 rounded-full bg-[#FF7A45] ring-4 ring-[#FF7A45]/10" />
          <span className="absolute bottom-[17%] left-[26%] size-2.5 rounded-full bg-[#6C4CF1] ring-4 ring-[#6C4CF1]/10" />
          <Compass className="relative size-14 text-[#6C4CF1] sm:size-16" strokeWidth={1.1} />
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="border-y border-[#E8EAF0] bg-[#F8F9FC] px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>03 / Lo que nos mueve</SectionLabel>
        <div className="mt-6 grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-12">
          <h2 className="text-4xl font-semibold tracking-[-.055em] text-[#20212A] sm:text-6xl lg:text-7xl">Nuestros valores</h2>
          <p className="max-w-xl text-lg leading-8 text-[#686B78]">Son las ideas que nos inspiran, las convicciones que guían nuestro trabajo y los principios que acompañan cada cosa que construimos.</p>
        </div>
        <div className="mt-12 grid gap-x-10 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-12">
          {values.map(([number, title, text], index) => (
            <article key={number} className={`group border-t border-[#D8DAE3] py-7 sm:py-8 ${index === 0 ? 'lg:col-span-2' : ''}`}>
              <div className="flex items-center gap-4">
                <span className="text-4xl font-semibold tracking-[-.07em] text-[#6C4CF1]/65 transition-colors group-hover:text-[#4931A8] sm:text-5xl">{number}</span>
                <span aria-hidden="true" className="h-px w-10 bg-[#E8EAF0] transition-colors group-hover:bg-[#FF7A45]" />
                <Check aria-hidden="true" className="size-4 text-[#6C4CF1]/60" strokeWidth={1.6} />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-[-.025em] text-[#20212A] sm:text-2xl">{title}</h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-[#686B78] sm:text-base">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingSection() {
  return (
    <section className="relative overflow-hidden bg-[#4931A8] px-5 py-20 text-center text-[#F8F9FC] sm:px-8 sm:py-28 lg:px-10 lg:py-32">
      <div aria-hidden="true" className="absolute -left-44 -top-56 size-[34rem] rounded-full border border-white/10" />
      <div aria-hidden="true" className="absolute -bottom-64 -right-44 size-[38rem] rounded-full border border-white/10" />
      <div className="relative mx-auto max-w-5xl">
        <Sparkles aria-hidden="true" className="mx-auto mb-7 size-7 text-[#FFB067]" strokeWidth={1.5} />
        <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-.055em] sm:text-6xl lg:text-7xl">Creemos que la tecnología no debería poner límites, sino abrir puertas.</h2>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:mt-8 sm:text-xl">En Strellatech, no solo creamos tecnología. Ayudamos a hacer posibles nuevas historias.</p>
        <p className="mt-12 text-xs font-semibold tracking-[0.3em] text-white sm:mt-14">STRELLATECH</p>
        <p className="mt-3 text-xs tracking-[0.12em] text-white/70 sm:text-sm">Tecnología para imaginar, crear y llegar más lejos.</p>
        <a href="/#soluciones" className="mt-9 inline-flex min-h-12 items-center justify-center rounded-full bg-[#FF7A45] px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#e96834] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4931A8]">
          Conocer nuestras soluciones <ArrowRight aria-hidden="true" className="ml-2 size-4" />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#20212A] px-5 py-8 text-[#F8F9FC] sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold tracking-[0.2em]">STRELLATECH</p>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-[#F8F9FC]/65">
          <a href="/" className="transition-colors hover:text-white">Inicio</a>
          <a href="/#soluciones" className="transition-colors hover:text-white">Soluciones</a>
          <a href="mailto:contacto@strellatech.com" className="transition-colors hover:text-white">Contacto</a>
        </div>
      </div>
    </footer>
  );
}

export default function MissionLanding() {
  useEffect(() => {
    document.title = 'Strellatech | Nuestra misión, visión y valores';
    const description = 'Conoce la misión, visión y valores de Strellatech: productos digitales, soluciones tecnológicas y consultoría para emprendedores, profesionales y organizaciones.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FC] text-[#20212A] selection:bg-[#DCD5FF] selection:text-[#4931A8]">
      <Header />
      <main>
        <Hero />
        <MissionSection />
        <VisionSection />
        <ValuesSection />
        <ClosingSection />
      </main>
      <Footer />
    </div>
  );
}
