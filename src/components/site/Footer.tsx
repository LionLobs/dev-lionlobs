import { Instagram, Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-lionlobs.png";

export const Footer = () => {
  return (
    <footer className="relative border-t border-gold/15 bg-background py-14">
      <div className="container-app grid gap-10 md:grid-cols-3">
        <div>
          <img src={logo} alt="LionLobs" className="h-10 w-auto" width={160} height={40} loading="lazy" />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Agência estratégica de marketing. Construímos ecossistemas digitais que rugem resultado.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Navegação</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#servicos" className="hover:text-gold transition-colors">Serviços</a></li>
            <li><a href="#portfolio" className="hover:text-gold transition-colors">Portfólio</a></li>
            <li><a href="#sobre" className="hover:text-gold transition-colors">Sobre</a></li>
            <li><a href="#contato" className="hover:text-gold transition-colors">Contato</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Conecte-se</h4>
          <div className="mt-4 flex gap-3">
            <a href="https://wa.me/5500000000000" target="_blank" rel="noreferrer" aria-label="WhatsApp"
               className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-gold-light transition-colors hover:bg-gold hover:text-primary-foreground">
              <MessageCircle className="h-4 w-4" />
            </a>
            <a href="https://instagram.com/lionlobs" target="_blank" rel="noreferrer" aria-label="Instagram"
               className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-gold-light transition-colors hover:bg-gold hover:text-primary-foreground">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="mailto:contato@lionlobs.com" aria-label="E-mail"
               className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-gold-light transition-colors hover:bg-gold hover:text-primary-foreground">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="container-app mt-10 flex flex-col items-center justify-between gap-3 border-t border-gold/10 pt-6 text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} LionLobs · Agência Estratégica de Marketing</p>
        <p>CEO & Fundadora · Agatha Scudero</p>
      </div>
    </footer>
  );
};
