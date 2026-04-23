import { Briefcase, Globe, Layers, Rocket, ShoppingBag, Sparkles } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Smallbio",
    desc: "Mini-site com sua bio, links, redes e CTAs estratégicos. Perfeito para criadores e profissionais liberais.",
    tags: ["Bio Premium", "Links rastreáveis", "Mobile-first"],
  },
  {
    icon: Rocket,
    title: "Landing Page Express",
    desc: "Páginas de captura e venda otimizadas para conversão. Entrega rápida, copy persuasiva e design premium.",
    tags: ["Alta conversão", "Pixel pronto", "Entrega 7 dias"],
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    desc: "Lojas virtuais completas com checkout integrado, pagamentos, fretes e dashboards para escalar suas vendas.",
    tags: ["Shopify", "Loja própria", "Integração total"],
  },
  {
    icon: Layers,
    title: "Ecossistema Digital",
    desc: "Estratégia 360°: site institucional, blog, automações, CRM e funis conectados em uma única operação.",
    tags: ["Estratégia 360°", "Automação", "CRM"],
  },
  {
    icon: Globe,
    title: "Site Institucional",
    desc: "Presença digital sólida para empresas que querem autoridade, branding e geração contínua de leads.",
    tags: ["SEO técnico", "Branding", "Performance"],
  },
  {
    icon: Briefcase,
    title: "Consultoria Estratégica",
    desc: "Diagnóstico, planejamento e roadmap personalizado para destravar o crescimento da sua marca.",
    tags: ["Diagnóstico", "Roadmap", "Mentoria"],
  },
];

export const Services = () => {
  return (
    <section id="servicos" className="relative py-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="container-app">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">O que fazemos</span>
          <h2 className="mt-4 font-serif text-4xl md:text-6xl">
            Soluções para <span className="text-gradient-gold italic">cada estágio</span> do seu negócio
          </h2>
          <p className="mt-5 text-muted-foreground">
            Do primeiro link na bio ao ecossistema digital completo — entregamos com estratégia, design e tecnologia.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-gold/15 bg-card/60 p-7 transition-all duration-500 hover:border-gold/50 hover:shadow-gold hover:-translate-y-1"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/10 blur-3xl transition-opacity opacity-0 group-hover:opacity-100" />

              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold text-primary-foreground shadow-gold">
                <s.icon className="h-5 w-5 transition-transform duration-500 group-hover:rotate-12" />
                <span className="absolute inset-0 rounded-xl ring-2 ring-gold/40 opacity-0 group-hover:opacity-100 group-hover:animate-pulse-ring" />
              </div>

              <h3 className="mt-6 font-serif text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-gold/20 bg-gold/5 px-3 py-1 text-[11px] font-medium tracking-wide text-gold-light"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
