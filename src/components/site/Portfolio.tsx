import { ArrowUpRight, ExternalLink } from "lucide-react";

type Project = {
  name: string;
  category: string;
  url: string;
  description: string;
  tags: string[];
  previewOverride?: string;
};

const projects: Project[] = [
  {
    name: "LionLobs",
    category: "Site Institucional · Agência",
    url: "https://www.lionlobs.com.br/",
    description:
      "Site oficial da agência LionLobs — presença digital premium, branding e captação de clientes.",
    tags: ["Institucional", "Branding", "Performance"],
  },
  {
    name: "Valdirení Alves",
    category: "Site Profissional",
    url: "https://valdirenialves.com.br",
    description:
      "Site profissional com identidade própria, agendamento e canais diretos de contato.",
    tags: ["Profissional", "Agendamento", "Mobile-first"],
  },
  {
    name: "Ma Correa Psicologia",
    category: "Site para Psicóloga",
    url: "https://www.macorreapsi.com.br/",
    description:
      "Presença digital sofisticada para psicóloga, com posicionamento de autoridade e CTA para consultas.",
    tags: ["Saúde", "Autoridade", "Conversão"],
  },
  {
    name: "Modelo Suplementos",
    category: "E-commerce · Modelo",
    url: "https://lionlobs.github.io/modelosite-suplementos/",
    previewOverride:
      "https://api.microlink.io/?url=https%3A%2F%2Flionlobs.github.io%2Fmodelosite-suplementos%2F&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800&waitFor=4000&force=true&v=2",
    description:
      "Modelo de loja virtual para suplementos — catálogo, destaques de produtos e checkout integrado.",
    tags: ["E-commerce", "Catálogo", "Loja"],
  },
  {
    name: "Camila Cavinatti",
    category: "Smallbio Premium",
    url: "https://joy-forge-tools.vercel.app",
    description:
      "Smallbio premium com design exclusivo, links rastreáveis e identidade visual sofisticada.",
    tags: ["Smallbio", "Personal Brand", "Premium"],
  },
];

// Live screenshot via microlink (no API key needed for low volume)
const previewUrl = (url: string) =>
  `https://api.microlink.io/?url=${encodeURIComponent(
    url
  )}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800&waitFor=2000`;

export const Portfolio = () => {
  return (
    <section id="portfolio" className="relative overflow-hidden py-28">
      <div className="container-app">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
              Portfólio
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-6xl">
              Projetos que <span className="text-gradient-gold italic">rugem</span> resultados
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Uma seleção de cases entregues pela LionLobs — cada projeto construído com estratégia, design premium e tecnologia.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-gold/15 bg-card/60 backdrop-blur transition-all duration-500 hover:border-gold/50 hover:-translate-y-1 hover:shadow-gold"
            >
              {/* Live website preview */}
              <div className="img-shaded relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-amber-900/20 to-black">
                <img
                  src={p.previewOverride ?? previewUrl(p.url)}
                  alt={`Preview do site ${p.name}`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const t = e.currentTarget as HTMLImageElement;
                    t.style.display = "none";
                  }}
                />
                <span className="absolute left-4 top-4 z-10 rounded-full border border-gold/30 bg-background/70 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-gold-light backdrop-blur">
                  Site no ar
                </span>
                {/* Shine on hover */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-y-0 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-gold/25 to-transparent animate-shine" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-gold">
                      {p.category}
                    </span>
                    <h3 className="mt-1.5 font-serif text-2xl">{p.name}</h3>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold transition-all group-hover:bg-gold group-hover:text-primary-foreground group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-gold/20 bg-gold/5 px-3 py-1 text-[11px] font-medium text-gold-light"
                    >
                      {t}
                    </span>
                  ))}
                  <span className="ml-auto inline-flex items-center gap-1 text-[11px] font-medium text-gold transition-colors group-hover:text-gold-light">
                    <ExternalLink className="h-3 w-3" /> Visitar
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
