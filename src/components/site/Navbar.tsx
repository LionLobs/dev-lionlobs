import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo-lionlobs.png";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-gold/10"
          : "bg-transparent",
      )}
    >
      <nav className="container-app flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3" aria-label="LionLobs — início">
          <img src={logo} alt="LionLobs" className="h-10 w-auto" width={160} height={40} />
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium tracking-wide text-foreground/80 transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="hidden items-center justify-center rounded-full bg-gradient-gold px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-105 md:inline-flex"
        >
          Quero meu site
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-foreground"
          aria-label="Abrir menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-gold/10 bg-background/95 backdrop-blur-xl">
          <ul className="container-app flex flex-col gap-4 py-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-foreground/90 hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-gradient-gold px-6 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                Quero meu site
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
