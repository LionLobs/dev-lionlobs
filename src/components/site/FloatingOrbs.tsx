/**
 * Animated decorative background — floating gold orbs, conic rings,
 * dotted grid and a slow rotating gradient. Pointer-events disabled.
 */
export const FloatingOrbs = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Dotted grid */}
      <div className="absolute inset-0 bg-dots opacity-40" />

      {/* Soft radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--gold)/0.08),transparent_60%)]" />

      {/* Drifting orbs */}
      <div className="absolute top-[10%] left-[8%] h-[420px] w-[420px] rounded-full bg-gold/15 blur-[120px] animate-drift" />
      <div className="absolute top-[55%] right-[5%] h-[520px] w-[520px] rounded-full bg-gold-deep/25 blur-[140px] animate-drift-alt" />
      <div
        className="absolute bottom-[-10%] left-[35%] h-[380px] w-[380px] rounded-full bg-gold-light/10 blur-[120px] animate-drift"
        style={{ animationDelay: "-6s" }}
      />

      {/* Slow rotating conic ring */}
      <div className="absolute -right-40 top-[20%] h-[600px] w-[600px] opacity-[0.07] animate-spin-slow">
        <div className="ring-conic h-full w-full rounded-full" />
      </div>
      <div className="absolute -left-52 bottom-[5%] h-[700px] w-[700px] opacity-[0.05] animate-spin-reverse">
        <div className="ring-conic h-full w-full rounded-full" />
      </div>
    </div>
  );
};
