import { useEffect, useState } from "react";
import { ArrowRight, MousePointer2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const lines = [
  "$ Olá, seja bem-vindo à LionLobs 👋",
  "$ Inicializando estratégia de marketing...",
  "$ Construindo presença digital de impacto.",
];

export const Hero = () => {
  const [text, setText] = useState("");
  const [lineIdx, setLineIdx] = useState(0);

  useEffect(() => {
    if (lineIdx >= lines.length) return;
    const current = lines[lineIdx];
    let i = 0;
    const id = setInterval(() => {
      i++;
      setText(current.slice(0, i));
      if (i >= current.length) {
        clearInterval(id);
        setTimeout(() => {
          if (lineIdx < lines.length - 1) {
            setLineIdx((v) => v + 1);
            setText("");
          }
        }, 1200);
      }
    }, 45);
    return () => clearInterval(id);
  }, [lineIdx]);

  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden pt-32">
      {/* Background — suspense robot */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url(${heroBg})`, backgroundPosition: "center 30%" }}
        aria-hidden
      />
      {/* Vignette + dark fades for legibility */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/70 to-background/20" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/50 via-transparent to-background" aria-hidden />
      <div className="absolute inset-0 -z-10 shadow-[inset_0_0_200px_hsl(0_0%_0%/0.9)]" aria-hidden />
      <div className="absolute -top-40 -left-40 -z-10 h-[500px] w-[500px] rounded-full bg-gold/15 blur-[120px]" aria-hidden />
      <div className="absolute bottom-0 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-gold-deep/25 blur-[120px]" aria-hidden />

      <div className="container-app grid items-center gap-12 lg:grid-cols-2">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            Agência · Estratégia Digital
          </span>

          <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
            Marcas que <span className="text-gradient-gold italic">rugem</span>
            <br />
            no digital.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Somos a <span className="text-foreground font-medium">LionLobs</span> — agência estratégica de
            marketing especializada em transformar ideias em ecossistemas digitais que vendem todos os dias.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#servicos"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-[1.03]"
            >
              Ver serviços
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-gold/10 hover:border-gold"
            >
              Falar com a equipe
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: "+80", l: "Projetos entregues" },
              { v: "5★", l: "Avaliação clientes" },
              { v: "24/7", l: "Suporte ativo" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-serif text-3xl text-gradient-gold">{s.v}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal */}
        <div className="relative animate-fade-up" style={{ animationDelay: "200ms" }}>
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-gold opacity-30 blur-3xl" />
          <div className="overflow-hidden rounded-2xl border border-gold/20 bg-card/80 backdrop-blur-xl shadow-glow">
            <div className="flex items-center justify-between border-b border-gold/10 bg-background/40 px-4 py-3">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-medium tracking-wider text-muted-foreground">lionlobs ~ terminal</span>
              <span className="w-12" />
            </div>
            <div className="min-h-[280px] p-6 font-mono text-sm leading-relaxed">
              {lines.slice(0, lineIdx).map((l, i) => (
                <div key={i} className="text-gold-light">{l}</div>
              ))}
              <div className="text-gold-light">
                {text}
                <span className="ml-0.5 inline-block h-4 w-2 -mb-0.5 bg-gold animate-blink" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#servicos"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground md:flex"
      >
        Scroll
        <MousePointer2 className="h-4 w-4 animate-float text-gold" />
      </a>
    </section>
  );
};
