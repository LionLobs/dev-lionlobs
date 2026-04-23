import { ArrowUpRight } from "lucide-react";
import robotBg2 from "@/assets/robot-bg-2.jpg";

const projects = [
  {
    title: "Boutique Aurora",
    category: "E-commerce de moda",
    desc: "Loja virtual completa com catálogo dinâmico, checkout integrado e identidade visual premium.",
    tags: ["E-commerce", "Branding", "UI/UX"],
    accent: "from-amber-500/30 to-yellow-700/20",
  },
  {
    title: "Dra. Marina Rocha",
    category: "Smallbio + Landing",
    desc: "Bio premium e landing de captação para profissional da saúde com integração WhatsApp e agendamento.",
    tags: ["Smallbio", "Landing", "WhatsApp"],
    accent: "from-yellow-600/30 to-orange-800/20",
  },
  {
    title: "Studio Felina",
    category: "Ecossistema Digital",
    desc: "Site institucional, blog, automações e CRM unificados — tudo conectado em uma operação 360°.",
    tags: ["Ecossistema", "Automação", "CRM"],
    accent: "from-amber-700/30 to-amber-900/20",
  },
  {
    title: "Lançamento Vênus",
    category: "Landing Page Express",
    desc: "Página de lançamento com copy persuasiva, gatilhos visuais e foco em alta conversão.",
    tags: ["Landing", "Copy", "Conversão"],
    accent: "from-yellow-500/30 to-amber-800/20",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="relative overflow-hidden py-28">
      {/* Robotic hand background — left side, heavily shaded */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 -z-10 hidden w-[60%] bg-cover bg-center opacity-[0.15] md:block"
        style={{ backgroundImage: `url(${robotBg2})` }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-l from-background via-background/95 to-background/30" aria-hidden />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_25%,hsl(var(--background))_85%)]" aria-hidden />

      <div className="container-app">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Portfólio</span>
            <h2 className="mt-4 font-serif text-4xl md:text-6xl">
              Projetos que <span className="text-gradient-gold italic">rugem</span> resultados
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Uma seleção de cases entregues pela LionLobs — cada projeto é construído com estratégia, propósito e atenção a cada detalhe.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-gold/15 bg-card/60 transition-all duration-500 hover:border-gold/50 hover:-translate-y-1"
            >
              <div className={`img-shaded relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${p.accent}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--gold)/0.25),transparent_60%)]" />
                {/* Rotating decorative ring */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 opacity-20 animate-spin-slow">
                  <div className="ring-conic h-full w-full rounded-full" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-7xl text-gradient-gold opacity-80 transition-transform duration-700 group-hover:scale-110">
                    {p.title.charAt(0)}
                  </span>
                </div>
                {/* Shine sweep on hover */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100">
                  <div className="absolute inset-y-0 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-gold/30 to-transparent animate-shine" />
                </div>
              </div>

              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-gold">{p.category}</span>
                    <h3 className="mt-2 font-serif text-3xl">{p.title}</h3>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold transition-all group-hover:bg-gold group-hover:text-primary-foreground group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-gold/20 bg-gold/5 px-3 py-1 text-[11px] font-medium text-gold-light">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
