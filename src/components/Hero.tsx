import heroModel from "@/assets/hero-model.jpg";
import mannequin from "@/assets/mannequin-silhouette.jpg";
import { Countdown } from "./Countdown";
import { GoldParticles } from "./GoldParticles";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-navy pt-24">
      {/* Cinematic light sweep */}
      <div
        className="pointer-events-none absolute -top-1/4 left-1/2 -translate-x-1/2 w-[120%] h-[60%] animate-light-sweep"
        style={{
          background: "radial-gradient(ellipse at center, oklch(0.78 0.14 86 / 0.25), transparent 60%)",
        }}
      />
      {/* Spotlight */}
      <div className="absolute inset-0 bg-gradient-spotlight pointer-events-none" />

      {/* Left mannequin silhouette */}
      <div className="absolute left-0 top-0 h-full w-1/3 md:w-1/4 opacity-40 md:opacity-60 pointer-events-none">
        <img
          src={mannequin}
          alt=""
          className="h-full w-full object-cover object-right animate-slow-zoom"
          style={{ maskImage: "linear-gradient(to right, black 30%, transparent)", WebkitMaskImage: "linear-gradient(to right, black 30%, transparent)" }}
        />
      </div>

      {/* Right model */}
      <div className="absolute right-0 top-0 h-full w-2/3 md:w-1/2 pointer-events-none">
        <img
          src={heroModel}
          alt="House of Valerion luxury menswear model"
          className="h-full w-full object-cover object-center animate-slow-zoom"
          style={{ maskImage: "linear-gradient(to left, black 55%, transparent)", WebkitMaskImage: "linear-gradient(to left, black 55%, transparent)" }}
        />
      </div>

      {/* Smoke / fog overlay */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-screen opacity-30"
        style={{
          background:
            "radial-gradient(circle at 20% 80%, oklch(0.4 0.05 265 / 0.6), transparent 50%), radial-gradient(circle at 80% 20%, oklch(0.5 0.08 86 / 0.3), transparent 60%)",
        }}
      />

      <GoldParticles />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 min-h-[calc(100vh-6rem)] py-12">
        <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-xs sm:text-sm tracking-luxe uppercase text-gold/80 mb-6">
            ⸻ &nbsp; Maison Établie MMXXVI &nbsp; ⸻
          </p>
        </div>

        <h1
          className="font-serif text-[16vw] sm:text-[11vw] lg:text-[9rem] leading-[0.95] text-gradient-gold animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Coming Soon
        </h1>

        <p
          className="mt-6 italic font-serif text-lg sm:text-2xl text-ivory/85 animate-fade-up max-w-2xl"
          style={{ animationDelay: "0.7s" }}
        >
          “Crafted for the modern royalty.”
        </p>

        <div className="mt-12 w-full animate-fade-up" style={{ animationDelay: "0.9s" }}>
          <Countdown />
        </div>

        <div className="mt-14 animate-fade-up" style={{ animationDelay: "1.1s" }}>
          <a
            href="#story"
            className="group relative inline-flex items-center gap-3 px-10 py-4 overflow-hidden bg-gradient-gold text-onyx text-xs tracking-luxe uppercase font-medium shadow-gold transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_60px_oklch(0.88_0.16_92/0.6)]"
          >
            <span className="relative z-10">Enter the World of Valerion</span>
            <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">→</span>
            <span
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              style={{
                background: "linear-gradient(90deg, transparent, oklch(1 0 0 / 0.4), transparent)",
              }}
            />
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-onyx pointer-events-none" />
    </section>
  );
}
