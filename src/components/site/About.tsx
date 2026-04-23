import { Award, Target, Users } from "lucide-react";
import agathaPortrait from "@/assets/agatha-new.jpg";
import emanuellePortrait from "@/assets/emanuelle.jpg";
import foundersBg from "@/assets/founders-bg.jpg";
import robotBg3 from "@/assets/robot-bg-3.jpg";

const pillars = [
  { icon: Target, title: "Estratégia primeiro", desc: "Cada projeto nasce de um diagnóstico real do seu negócio e do seu público." },
  { icon: Award, title: "Design premium", desc: "Identidade visual sofisticada, alinhada ao posicionamento da sua marca." },
  { icon: Users, title: "Parceria de longo prazo", desc: "Suporte contínuo, otimizações e evolução do seu ecossistema digital." },
];

const founders = [
  {
    name: "Agatha Scudero",
    role: "Co-fundadora & CEO",
    img: agathaPortrait,
  },
  {
    name: "Emanuelle",
    role: "Co-fundadora & Sócia",
    img: emanuellePortrait,
  },
];

export const About = () => {
  return (
    <section id="sobre" className="relative overflow-hidden py-28">
      {/* Founders composition — background, low opacity, heavy shading */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center opacity-[0.18]"
        style={{ backgroundImage: `url(${foundersBg})`, backgroundPosition: "center 25%" }}
        aria-hidden
      />
      {/* Mechanical background blended below */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[60%] bg-cover bg-center opacity-[0.08]"
        style={{ backgroundImage: `url(${robotBg3})` }}
        aria-hidden
      />
      {/* Vignette + dark fades */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/85 to-background" aria-hidden />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/40 to-background" aria-hidden />
      <div className="pointer-events-none absolute inset-0 -z-10 shadow-[inset_0_0_220px_hsl(0_0%_0%/0.95)]" aria-hidden />

      <div className="container-app grid gap-16 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-gold opacity-20 blur-3xl" />

          {/* Decorative rotating rings */}
          <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 opacity-30 animate-spin-slow">
            <div className="ring-conic h-full w-full rounded-full" />
            <div className="absolute inset-2 rounded-full bg-background" />
          </div>
          <div className="pointer-events-none absolute -bottom-12 right-10 h-24 w-24 opacity-40 animate-spin-reverse">
            <div className="ring-conic h-full w-full rounded-full" />
            <div className="absolute inset-1.5 rounded-full bg-background" />
          </div>

          {/* Artistic merged composition — both founders together, low opacity */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-gold/25 shadow-gold">
            {/* Base portrait — full color but muted */}
            <img
              src={foundersBg}
              alt="Agatha Scudero e Emanuelle, sócias-fundadoras da LionLobs"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-70 animate-ken-burns"
              style={{ filter: "contrast(1.05) saturate(0.85) brightness(0.85)" }}
            />
            {/* Gold duotone wash */}
            <div
              className="pointer-events-none absolute inset-0 mix-blend-soft-light"
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--gold) / 0.55), hsl(var(--gold-deep) / 0.35))",
              }}
              aria-hidden
            />
            {/* Atmospheric vignette */}
            <div
              className="pointer-events-none absolute inset-0 shadow-[inset_0_0_180px_hsl(0_0%_0%/0.95)]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/15 to-background/55"
              aria-hidden
            />
            {/* Bottom radial fade so names breathe */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent"
              aria-hidden
            />

            {/* Names — typographic stack */}
            <div className="absolute inset-x-0 bottom-0 p-7">
              <div className="text-[10px] uppercase tracking-[0.4em] text-gold">Sócias-fundadoras</div>
              <div className="mt-2 flex items-baseline gap-3 font-serif text-3xl leading-none md:text-4xl">
                <span className="text-foreground">Agatha</span>
                <span className="text-gold-light/70 italic">&amp;</span>
                <span className="text-foreground">Emanuelle</span>
              </div>
              <div className="mt-3 h-px w-24 bg-gradient-to-r from-gold to-transparent" />
            </div>

            {/* Top corner mark */}
            <div className="absolute left-6 top-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-gold-light/80">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              LionLobs · est. duo
            </div>
          </div>
        </div>

        <div>
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Sobre a LionLobs</span>
          <h2 className="mt-4 font-serif text-4xl md:text-6xl leading-[1.05]">
            Estratégia com a <span className="text-gradient-gold italic">força</span> de um leão.
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            A LionLobs nasceu da parceria entre <span className="text-foreground font-medium">Agatha Scudero</span> e
            {" "}<span className="text-foreground font-medium">Emanuelle</span> — duas sócias unidas pela mesma visão:
            entregar marketing digital com profundidade, sem fórmulas prontas e sem promessas vazias.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Juntas, lideramos uma equipe que combina estratégia, design e tecnologia para construir presenças digitais
            que conquistam, vendem e perduram. Atendemos desde criadores e profissionais liberais até empresas que
            precisam de um ecossistema digital completo — porque cada marca é única.
          </p>

          <div className="mt-10 space-y-5">
            {pillars.map((p) => (
              <div key={p.title} className="flex gap-4">
                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/5 text-gold">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
