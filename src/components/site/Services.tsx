import { useRef } from "react";
import {
  ArrowRight,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Globe,
  Layers,
  Rocket,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import robotBg1 from "@/assets/robot-bg-1.jpg";
import imgSmallbio from "@/assets/robot-svc-smallbio.jpg";
import imgLanding from "@/assets/robot-svc-landing.jpg";
import imgEcommerce from "@/assets/robot-svc-ecommerce.jpg";
import imgEcosystem from "@/assets/robot-svc-ecosystem.jpg";
import imgInstitutional from "@/assets/robot-svc-institutional.jpg";
import imgConsulting from "@/assets/robot-svc-consulting.jpg";

const services = [
  {
    icon: Sparkles,
    title: "Smallbio",
    desc: "Mini-site com sua bio, links, redes e CTAs estratégicos. Perfeito para criadores e profissionais liberais que querem centralizar sua presença em um só lugar.",
    tags: ["Bio Premium", "Links rastreáveis", "Mobile-first"],
    img: imgSmallbio,
  },
  {
    icon: Rocket,
    title: "Landing Page Express",
    desc: "Páginas de captura e venda otimizadas para conversão. Estrutura estratégica, copy persuasiva e design premium — entrega rápida para validar e vender o quanto antes.",
    tags: ["Alta conversão", "Estrutura estratégica", "Entrega rápida"],
    img: imgLanding,
  },
  {
    icon: Globe,
    title: "Site Institucional",
    desc: "Presença digital sólida para empresas que querem autoridade, branding e geração contínua de leads. Estrutura completa com cara de marca grande, pronta para escalar.",
    tags: ["Autoridade", "Branding", "Estrutura completa"],
    img: imgInstitutional,
  },
  {
    icon: ShoppingBag,
    title: "E-commerce · Plano Essencial",
    desc: "Loja online pra quem quer começar rápido, com estratégia e sem complicação. Landing de alta conversão, destaque dos produtos e checkout via Shopify configurado.",
    tags: ["Shopify", "Checkout integrado", "Pronta pra vender"],
    img: imgEcommerce,
  },
  {
    icon: Layers,
    title: "E-commerce · Plano Profissional",
    desc: "Loja completa para marcas que querem presença forte: Home, catálogo, página de produto, categorias, Sobre a Marca, FAQ e políticas — tudo integrado ao Shopify.",
    tags: ["Catálogo completo", "Marca com cara de grande", "Pronta pra escalar"],
    img: imgEcosystem,
  },
  {
    icon: Briefcase,
    title: "Suporte & Gestão",
    desc: "Depois que sua loja está no ar, cuidamos de tudo: alterações, ajustes, cadastro e atualização de produtos, organização e melhorias contínuas de performance.",
    tags: ["Plano Suporte", "Plano Gestão", "Sob medida"],
    img: imgConsulting,
  },
];

export const Services = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : 360;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
    <section id="servicos" className="relative overflow-hidden py-28">
      {/* Robotic background */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-[55%] bg-cover bg-center opacity-[0.18] md:block"
        style={{ backgroundImage: `url(${robotBg1})` }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/95 to-background/40" aria-hidden />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(var(--background))_85%)]" aria-hidden />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container-app">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">O que fazemos</span>
            <h2 className="mt-4 font-serif text-4xl md:text-6xl">
              Soluções para <span className="text-gradient-gold italic">cada estágio</span> do seu negócio
            </h2>
            <p className="mt-5 text-muted-foreground">
              Arraste para o lado e descubra todos os formatos que criamos — do primeiro link na bio ao ecossistema digital completo.
            </p>
          </div>

          {/* Arrow controls */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Anterior"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-card/60 text-gold backdrop-blur transition-all hover:bg-gold hover:text-primary-foreground hover:shadow-gold"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Próximo"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-card/60 text-gold backdrop-blur transition-all hover:bg-gold hover:text-primary-foreground hover:shadow-gold"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scroller */}
      <div className="relative mt-14">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent md:w-24" />

        <div
          ref={scrollerRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 pb-6 lg:px-10"
        >
          {services.map((s, i) => (
            <article
              key={s.title}
              data-card
              className="group relative shrink-0 snap-start overflow-hidden rounded-2xl border border-gold/20 transition-all duration-500 hover:border-gold/60 hover:shadow-gold hover:-translate-y-1 w-[85vw] sm:w-[420px] h-[520px]"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Robotic background image */}
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                width={1024}
                height={768}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />

              {/* Creative shading: radial spotlight + bottom gradient + vignette + gold tint */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--gold)/0.25),transparent_55%)]" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/85 via-40% to-background/10" />
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_140px_hsl(0_0%_0%/0.85)]" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gold/10 mix-blend-overlay" />

              {/* Shine sweep on hover */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-y-0 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-gold/25 to-transparent animate-shine" />
              </div>

              {/* Icon badge */}
              <div className="absolute left-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-gold text-primary-foreground shadow-gold">
                <s.icon className="h-5 w-5" />
              </div>

              {/* Content anchored to bottom */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-7">
                <div className="absolute inset-x-7 -top-px h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <h3 className="font-serif text-3xl text-foreground drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">{s.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-gold/30 bg-background/60 px-3 py-1 text-[11px] font-medium tracking-wide text-gold-light backdrop-blur"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#contato"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-light"
                >
                  Solicitar orçamento
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}

          {/* Trailing spacer so last card snaps nicely */}
          <div className="shrink-0 w-2" aria-hidden />
        </div>

        {/* Hint */}
        <div className="container-app mt-4 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground md:justify-end">
          <span className="h-px w-8 bg-gold/40" />
          Arraste para o lado
          <ArrowRight className="h-3 w-3 text-gold" />
        </div>
      </div>
    </section>
  );
};
