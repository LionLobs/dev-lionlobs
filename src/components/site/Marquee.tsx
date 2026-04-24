import { Sparkles } from "lucide-react";

const items = [
  "Smallbio",
  "Landing Express",
  "E-commerce",
  "Ecossistema Digital",
  "Site Institucional",
  "Consultoria",
  "Branding",
  "Automação",
  "SEO Técnico",
  "CRM",
];

export const Marquee = () => {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-gold/15 bg-card/30 py-6 backdrop-blur-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee gap-12">
        {loop.map((it, i) => (
          <div key={i} className="flex items-center gap-3 whitespace-nowrap">
            <Sparkles className="h-4 w-4 text-gold" />
            <span className="font-serif text-3xl italic text-gradient-gold md:text-4xl">
              {it}
            </span>
            <span className="text-gold/40">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
