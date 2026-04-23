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

          <div className="grid grid-cols-2 gap-4">
            {founders.map((f, i) => (
              <div
                key={f.name}
                className={`img-shaded group relative overflow-hidden rounded-2xl border border-gold/20 shadow-gold ${
                  i === 1 ? "mt-12" : ""
                }`}
              >
                <img
                  src={f.img}
                  alt={`${f.name}, ${f.role} da LionLobs`}
                  loading="lazy"
                  className="aspect-[3/4] h-full w-full object-cover animate-ken-burns transition-transform duration-700 group-hover:scale-110"
                  style={i === 1 ? { animationDelay: "-8s" } : undefined}
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent p-4">
                  <div className="font-serif text-lg leading-tight text-foreground">{f.name}</div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-gold-light">{f.role}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-gold/30 bg-card/90 p-5 backdrop-blur-xl shadow-glow md:block">
            <div className="font-serif text-2xl text-gradient-gold">Agatha & Emanuelle</div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Sócias-fundadoras</div>
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
