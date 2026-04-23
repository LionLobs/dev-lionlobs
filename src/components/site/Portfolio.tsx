import { ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import suplementosPreview from "@/assets/portfolio-suplementos.png";
import monaPreview from "@/assets/portfolio-mona.png";

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
    previewOverride: suplementosPreview,
    description:
      "Modelo de loja virtual para suplementos — catálogo, destaques de produtos e checkout integrado.",
    tags: ["E-commerce", "Catálogo", "Loja"],
  },
  {
    name: "Mona Floripa Fashion",
    category: "Evento · Moda & Lifestyle",
    url: "https://monafloripafashion.com/",
    previewOverride: monaPreview,
    description:
      "Site oficial do evento Mona Floripa Fashion — moda, estratégia e posicionamento no Mona Beach Club.",
    tags: ["Evento", "Moda", "Branding"],
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
  const perPage = 2;
  const totalPages = Math.ceil(projects.length / perPage);
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setPage((p) => (p + 1) % totalPages), 4500);
    return () => clearInterval(id);
  }, [paused, totalPages]);

  const start = page * perPage;
  const visible = projects.slice(start, start + perPage);
  // Pad if last page has fewer items
  while (visible.length < perPage) visible.push(projects[visible.length % projects.length]);

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

        <div
          className="relative mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="grid gap-6 md:grid-cols-2">
            {visible.map((p, i) => (
              <a
                key={`${page}-${p.name}-${i}`}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-2xl border border-gold/15 bg-card/60 backdrop-blur transition-all duration-500 hover:border-gold/50 hover:-translate-y-1 hover:shadow-gold ${
                  i === 0 ? "animate-slide-in-left" : "animate-slide-in-right"
                }`}
              >
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

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Anterior"
              onClick={() => setPage((p) => (p - 1 + totalPages) % totalPages)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold transition-all hover:bg-gold hover:text-primary-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Ir para página ${i + 1}`}
                  onClick={() => setPage(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === page ? "w-8 bg-gold" : "w-2 bg-gold/30 hover:bg-gold/60"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Próximo"
              onClick={() => setPage((p) => (p + 1) % totalPages)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold transition-all hover:bg-gold hover:text-primary-foreground"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
