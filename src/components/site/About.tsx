import { Award, Target, Users } from "lucide-react";
import agatha1 from "@/assets/agatha-1.jpg";
import agatha2 from "@/assets/agatha-2.jpg";

const pillars = [
  { icon: Target, title: "Estratégia primeiro", desc: "Cada site nasce de um diagnóstico real do seu negócio e do seu público." },
  { icon: Award, title: "Design premium", desc: "Identidade visual sofisticada, alinhada ao posicionamento da sua marca." },
  { icon: Users, title: "Parceria de longo prazo", desc: "Suporte contínuo, otimizações e evolução do seu ecossistema digital." },
];

export const About = () => {
  return (
    <section id="sobre" className="relative py-28">
      <div className="container-app grid gap-16 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-gold opacity-20 blur-3xl" />

          {/* Decorative rotating ring behind images */}
          <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 opacity-30 animate-spin-slow">
            <div className="ring-conic h-full w-full rounded-full" />
            <div className="absolute inset-2 rounded-full bg-background" />
          </div>
          <div className="pointer-events-none absolute -bottom-12 right-10 h-24 w-24 opacity-40 animate-spin-reverse">
            <div className="ring-conic h-full w-full rounded-full" />
            <div className="absolute inset-1.5 rounded-full bg-background" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="img-shaded group overflow-hidden rounded-2xl border border-gold/20 shadow-gold">
              <img
                src={agatha1}
                alt="Agatha Scudero, CEO da LionLobs"
                className="h-full w-full object-cover animate-ken-burns transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="img-shaded group mt-12 overflow-hidden rounded-2xl border border-gold/20 shadow-gold">
              <img
                src={agatha2}
                alt="Agatha Scudero em sessão estratégica"
                className="h-full w-full object-cover animate-ken-burns transition-transform duration-700 group-hover:scale-110"
                style={{ animationDelay: "-8s" }}
                loading="lazy"
              />
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-gold/30 bg-card/90 p-5 backdrop-blur-xl shadow-glow md:block">
            <div className="font-serif text-3xl text-gradient-gold">Agatha Scudero</div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">CEO & Fundadora</div>
          </div>
        </div>

        <div>
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Sobre a LionLobs</span>
          <h2 className="mt-4 font-serif text-4xl md:text-6xl leading-[1.05]">
            Estratégia com a <span className="text-gradient-gold italic">força</span> de um leão.
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            A LionLobs nasceu para entregar marketing digital com profundidade — sem fórmulas prontas, sem promessas vazias.
            Sob a liderança de <span className="text-foreground font-medium">Agatha Scudero</span>, nossa equipe combina
            estratégia, design e tecnologia para construir presenças digitais que conquistam, vendem e perduram.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Atendemos desde criadores e profissionais liberais até empresas que precisam de um ecossistema digital
            completo. Cada projeto é único — porque cada marca também é.
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
