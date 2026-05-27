import heroModel from "@/assets/hero-model.jpg";
import mannequin from "@/assets/mannequin-silhouette.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden pt-24 bg-gradient-navy"
    >
      {/* Cinematic video-style background: layered ken-burns imagery + animated sheen */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary fabric / studio background (slow zoom) */}
        <img
          src={heroModel}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-center animate-slow-zoom opacity-90"
        />
        {/* Secondary silhouette layer drifting */}
        <img
          src={mannequin}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-left opacity-30 mix-blend-luminosity animate-slow-zoom"
          style={{ animationDelay: "-8s" }}
        />

        {/* Soft navy/white wash so text is readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.45 0.08 250 / 0.55) 0%, oklch(0.50 0.07 250 / 0.35) 40%, oklch(0.55 0.06 250 / 0.55) 100%)",
          }}
        />

        {/* Cinematic light sweep (animated) */}
        <div
          className="pointer-events-none absolute -top-1/4 left-1/2 -translate-x-1/2 w-[140%] h-[80%] animate-light-sweep"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.92 0.14 90 / 0.35), transparent 60%)",
          }}
        />

        {/* Fabric shimmer band slowly sweeping across */}
        <div
          className="pointer-events-none absolute inset-y-0 -left-1/3 w-2/3 animate-shimmer-sweep"
          style={{
            background:
              "linear-gradient(115deg, transparent 35%, oklch(1 0 0 / 0.18) 50%, transparent 65%)",
            mixBlendMode: "screen",
          }}
        />

        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 80% at 50% 45%, transparent 40%, oklch(0.30 0.08 255 / 0.55) 100%)",
          }}
        />
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 min-h-[calc(100vh-6rem)] py-16">
        <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-[11px] sm:text-xs tracking-luxe uppercase text-gold mb-8">
            ⸻ &nbsp; Maison Établie MMXXVI &nbsp; ⸻
          </p>
        </div>

        <h1
          className="font-serif uppercase text-[18vw] sm:text-[12vw] lg:text-[10rem] leading-[0.95] text-gradient-gold animate-fade-up tracking-wide-luxe"
          style={{ animationDelay: "0.4s" }}
        >
          Coming Soon
        </h1>

        <div
          className="h-px w-32 bg-gradient-gold mt-10 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        />

        <p
          className="mt-10 italic font-serif text-lg sm:text-2xl text-white/90 animate-fade-up max-w-2xl"
          style={{ animationDelay: "0.8s" }}
        >
          “Crafted for the modern royalty.”
        </p>

        <div className="mt-14 animate-fade-up" style={{ animationDelay: "1s" }}>
          <a
            href="#story"
            className="group relative inline-flex items-center gap-3 px-12 py-4 overflow-hidden bg-gradient-gold text-navy-deep text-xs tracking-luxe uppercase font-medium shadow-gold transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_60px_oklch(0.88_0.16_92/0.6)]"
          >
            <span className="relative z-10">Enter the World of Valerion</span>
            <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">→</span>
            <span
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              style={{
                background: "linear-gradient(90deg, transparent, oklch(1 0 0 / 0.5), transparent)",
              }}
            />
          </a>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </section>
  );
}
