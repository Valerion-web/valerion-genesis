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

        {/* Rich deep-navy cinematic overlay (no grey wash) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgb(7 20 38 / 0.88) 0%, rgb(7 20 38 / 0.72) 45%, rgb(7 20 38 / 0.92) 100%)",
          }}
        />

        {/* Gold lighting gradient blend */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 35%, rgb(212 175 55 / 0.22), transparent 65%), radial-gradient(ellipse 50% 40% at 80% 80%, rgb(212 175 55 / 0.12), transparent 70%)",
          }}
        />

        {/* Cinematic light sweep */}
        <div
          className="pointer-events-none absolute -top-1/4 left-1/2 -translate-x-1/2 w-[140%] h-[80%] animate-light-sweep"
          style={{
            background:
              "radial-gradient(ellipse at center, rgb(240 206 90 / 0.30), transparent 60%)",
          }}
        />

        {/* Vignette into navy */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 95% 85% at 50% 45%, transparent 45%, #071426 100%)",
          }}
        />
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 min-h-[calc(100vh-6rem)] py-16">
        <h1
          className="font-serif uppercase text-[18vw] sm:text-[12vw] lg:text-[10rem] leading-[0.95] text-gradient-gold animate-fade-up tracking-wide-luxe"
          style={{ animationDelay: "0.2s" }}
        >
          Coming Soon
        </h1>

        <div
          className="h-px w-32 bg-gradient-gold mt-10 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        />

        <p
          className="mt-10 italic font-serif text-lg sm:text-2xl text-ivory animate-fade-up max-w-2xl"
          style={{ animationDelay: "0.6s" }}
        >
          "Crafted for the modern royalty."
        </p>

        <div
          className="mt-14 flex flex-col sm:flex-row gap-5 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="#story"
            className="group relative inline-flex items-center justify-center gap-3 px-12 py-4 overflow-hidden bg-gradient-gold text-navy-deep text-xs tracking-luxe uppercase font-semibold shadow-gold transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_60px_rgb(240_206_90/0.6)]"
          >
            <span className="relative z-10">Enter the World of Valerion</span>
            <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
            <span
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgb(255 255 255 / 0.5), transparent)",
              }}
            />
          </a>
          <a
            href="#collections"
            className="group relative inline-flex items-center justify-center gap-3 px-12 py-4 border border-gold text-ivory text-xs tracking-luxe uppercase font-medium bg-transparent transition-all duration-500 hover:text-gold hover:shadow-[0_0_30px_rgb(212_175_55/0.4)]"
          >
            <span>Discover Collections</span>
          </a>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </section>
  );
}
