import { useEffect, useState } from "react";
import { ArrowUpRight, ExternalLink, Github, Star } from "lucide-react";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  topics?: string[];
  updated_at: string;
};

const GH_USER = "LionLobs";

// Repos to hide from the portfolio
const EXCLUDED = ["vanessa-clasen-archives", "vanessa-archives-collection", "cart-template-hub"];

// Pretty title from slug
const prettify = (slug: string) =>
  slug
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

// Live screenshot via microlink (free, no key needed for low volume)
const previewUrl = (url: string) =>
  `https://api.microlink.io/?url=${encodeURIComponent(
    url
  )}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800&waitFor=1500`;

export const Portfolio = () => {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(
      `https://api.github.com/users/${GH_USER}/repos?sort=updated&per_page=30`
    )
      .then((r) => {
        if (!r.ok) throw new Error("GitHub API");
        return r.json() as Promise<Repo[]>;
      })
      .then((raw) => {
        if (cancelled) return;
        const data = raw.filter((r) => !EXCLUDED.includes(r.name.toLowerCase()));
        // Prioritize repos with a homepage (live demo), then by stars/updated
        const sorted = [...data].sort((a, b) => {
          const ah = a.homepage ? 1 : 0;
          const bh = b.homepage ? 1 : 0;
          if (ah !== bh) return bh - ah;
          if (b.stargazers_count !== a.stargazers_count)
            return b.stargazers_count - a.stargazers_count;
          return (
            new Date(b.updated_at).getTime() -
            new Date(a.updated_at).getTime()
          );
        });
        setRepos(sorted.slice(0, 9));
      })
      .catch((e) => !cancelled && setError(e.message));
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="portfolio" className="relative overflow-hidden py-28">
      <div className="container-app">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-gold">
              <Github className="h-3.5 w-3.5" /> Portfólio · GitHub @{GH_USER}
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-6xl">
              Projetos que <span className="text-gradient-gold italic">rugem</span> resultados
            </h2>
          </div>
          <a
            href={`https://github.com/${GH_USER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-gold/10 hover:border-gold"
          >
            <Github className="h-4 w-4" /> Ver todos no GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {error && (
          <p className="mt-10 text-sm text-muted-foreground">
            Não foi possível carregar os repositórios agora. Acesse direto em{" "}
            <a className="text-gold underline" href={`https://github.com/${GH_USER}`}>
              github.com/{GH_USER}
            </a>
          </p>
        )}

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {(repos ?? Array.from({ length: 6 })).map((r, i) => {
            const repo = r as Repo | undefined;
            return (
              <article
                key={repo?.id ?? i}
                className="group relative overflow-hidden rounded-2xl border border-gold/15 bg-card/60 backdrop-blur transition-all duration-500 hover:border-gold/50 hover:-translate-y-1 hover:shadow-gold"
              >
                {/* Preview / Skeleton */}
                <div className="img-shaded relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-amber-900/20 to-black">
                  {repo?.homepage ? (
                    <img
                      src={previewUrl(repo.homepage)}
                      alt={`Preview de ${repo.name}`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="font-serif text-6xl text-gradient-gold opacity-70">
                        {repo?.name?.charAt(0).toUpperCase() ?? "•"}
                      </span>
                    </div>
                  )}
                  {/* Language badge */}
                  {repo?.language && (
                    <span className="absolute left-4 top-4 z-10 rounded-full border border-gold/30 bg-background/70 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-gold-light backdrop-blur">
                      {repo.language}
                    </span>
                  )}
                  {repo && repo.stargazers_count > 0 && (
                    <span className="absolute right-4 top-4 z-10 inline-flex items-center gap-1 rounded-full border border-gold/30 bg-background/70 px-3 py-1 text-[10px] font-medium text-gold-light backdrop-blur">
                      <Star className="h-3 w-3" /> {repo.stargazers_count}
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <span className="text-[11px] uppercase tracking-[0.2em] text-gold">
                        {repo?.homepage ? "Site no ar" : "Repositório"}
                      </span>
                      <h3 className="mt-1.5 truncate font-serif text-2xl">
                        {repo ? prettify(repo.name) : "Carregando…"}
                      </h3>
                    </div>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold transition-all group-hover:bg-gold group-hover:text-primary-foreground group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  {repo?.description && (
                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                      {repo.description}
                    </p>
                  )}

                  {repo && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-gold/20 bg-gold/5 px-3 py-1.5 text-[11px] font-medium text-gold-light transition-colors hover:border-gold/60"
                      >
                        <Github className="h-3 w-3" /> Código
                      </a>
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full bg-gradient-gold px-3 py-1.5 text-[11px] font-semibold text-primary-foreground shadow-gold"
                        >
                          <ExternalLink className="h-3 w-3" /> Visitar site
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
