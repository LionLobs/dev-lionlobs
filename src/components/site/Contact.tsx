import { useState } from "react";
import { Github, Instagram, Mail, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

const PHONE_AGATHA = "5548984380321";
const PHONE_EMANUELLE = "5541988204539";

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const message = String(data.get("message") || "");
    const service = String(data.get("service") || "");
    const text = encodeURIComponent(
      `Olá LionLobs! Sou ${name}.\nServiço de interesse: ${service}\n\n${message}`,
    );
    setTimeout(() => {
      window.open(`https://wa.me/${PHONE_AGATHA}?text=${text}`, "_blank");
      toast.success("Abrindo WhatsApp para finalizar o contato.");
      setLoading(false);
      (e.target as HTMLFormElement).reset();
    }, 400);
  };

  return (
    <section id="contato" className="relative py-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="container-app grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Contato</span>
          <h2 className="mt-4 font-serif text-4xl md:text-6xl leading-[1.05]">
            Vamos construir <span className="text-gradient-gold italic">algo memorável</span>?
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
            Conte sobre o seu projeto. Em até 24h nossa equipe entra em contato com um diagnóstico inicial e os próximos passos.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href={`https://wa.me/${PHONE_AGATHA}`}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-gold/20 bg-card/60 p-5 transition-all hover:border-gold/50 hover:bg-gold/5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-gold text-primary-foreground">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">WhatsApp · Agatha</div>
                <div className="font-medium">(48) 98438-0321</div>
              </div>
            </a>
            <a
              href={`https://wa.me/${PHONE_EMANUELLE}`}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-gold/20 bg-card/60 p-5 transition-all hover:border-gold/50 hover:bg-gold/5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-gold text-primary-foreground">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">WhatsApp · Emanuelle</div>
                <div className="font-medium">(41) 98820-4539</div>
              </div>
            </a>
            <a
              href="mailto:contato@lionlobs.com"
              className="group flex items-center gap-4 rounded-xl border border-gold/20 bg-card/60 p-5 transition-all hover:border-gold/50 hover:bg-gold/5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-gold text-primary-foreground">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">E-mail</div>
                <div className="font-medium">contato@lionlobs.com</div>
              </div>
            </a>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="https://instagram.com/lionlobs"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-gold/20 bg-card/60 p-5 transition-all hover:border-gold/50 hover:bg-gold/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-gold text-primary-foreground">
                  <Instagram className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Instagram</div>
                  <div className="font-medium">@lionlobs</div>
                </div>
              </a>
              <a
                href="https://github.com/lionlobs"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-gold/20 bg-card/60 p-5 transition-all hover:border-gold/50 hover:bg-gold/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-gold text-primary-foreground">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">GitHub</div>
                  <div className="font-medium">@lionlobs</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="relative overflow-hidden rounded-2xl border border-gold/20 bg-card/70 p-8 backdrop-blur-xl shadow-glow"
        >
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

          <div className="grid gap-5">
            <div>
              <label htmlFor="name" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Nome</label>
              <input
                id="name"
                name="name"
                required
                placeholder="Seu nome completo"
                className="mt-2 w-full rounded-lg border border-gold/15 bg-background/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold/60"
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="voce@email.com"
                  className="mt-2 w-full rounded-lg border border-gold/15 bg-background/40 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-gold/60"
                />
              </div>
              <div>
                <label htmlFor="service" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Serviço</label>
                <select
                  id="service"
                  name="service"
                  className="mt-2 w-full rounded-lg border border-gold/15 bg-background/40 px-4 py-3 text-sm outline-none focus:border-gold/60"
                  defaultValue=""
                >
                  <option value="" disabled>Selecione</option>
                  <option>Smallbio</option>
                  <option>Landing Page Express</option>
                  <option>E-commerce</option>
                  <option>Site Institucional</option>
                  <option>Ecossistema Digital</option>
                  <option>Consultoria</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Conte sobre o projeto</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Objetivos, prazos, referências..."
                className="mt-2 w-full resize-none rounded-lg border border-gold/15 bg-background/40 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-gold/60"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-[1.02] disabled:opacity-60"
            >
              {loading ? "Enviando..." : "Enviar mensagem"}
              <Send className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
