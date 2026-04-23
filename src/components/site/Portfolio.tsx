import { ArrowUpRight } from "lucide-react";

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
    <section id="portfolio" className="relative py-28">
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
              <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${p.accent}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--gold)/0.25),transparent_60%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-6xl text-gradient-gold opacity-80">{p.title.charAt(0)}</span>
                </div>
                <div className="absolute inset-0 bg-background/0 transition-colors group-hover:bg-background/20" />
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
