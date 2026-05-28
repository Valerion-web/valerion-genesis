import { useEffect, useRef, useState } from "react";
import logo from "@/assets/logo.png";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.play().catch(() => {});
    }
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden pt-24 bg-navy-deep"
    >
      {/* Cinematic background video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => setLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1800ms] ease-out ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transform: `scale(${1.05 + Math.min(scrollY, 600) / 6000}) translateY(${scrollY * 0.25}px)`,
            willChange: "transform",
          }}
        />

        {/* Dark luxury overlay for readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgb(7 20 38 / 0.78) 0%, rgb(7 20 38 / 0.55) 45%, rgb(7 20 38 / 0.92) 100%)",
          }}
        />

        {/* Gold cinematic lighting */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 35%, rgb(212 175 55 / 0.18), transparent 65%), radial-gradient(ellipse 50% 40% at 80% 80%, rgb(212 175 55 / 0.10), transparent 70%)",
          }}
        />

        {/* Light sweep */}
        <div
          className="pointer-events-none absolute -top-1/4 left-1/2 -translate-x-1/2 w-[140%] h-[80%] animate-light-sweep"
          style={{
            background:
              "radial-gradient(ellipse at center, rgb(240 206 90 / 0.22), transparent 60%)",
          }}
        />

        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 95% 85% at 50% 45%, transparent 50%, #071426 100%)",
          }}
        />
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 min-h-[calc(100vh-6rem)] py-16">
        <div
          className="flex flex-col items-center gap-4 mb-6 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="relative flex items-center justify-center">
            <span
              aria-hidden
              className="absolute -inset-3 rounded-full blur-3xl -z-10 lg:-inset-4"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0.06) 30%, transparent 60%)",
              }}
            />
            <img
              src={logo}
              alt="House of Valerion"
              className="h-16 sm:h-20 lg:h-24 w-auto object-contain"
              style={{
                filter:
                  "brightness(1.14) contrast(1.06) saturate(1.08) drop-shadow(0 14px 28px rgba(7,20,38,0.5)) drop-shadow(0 0 18px rgba(212,175,55,0.36))",
              }}
            />
          </div>
        </div>

        <h1
          className="font-serif uppercase text-[11vw] sm:text-[8.5vw] lg:text-[6.5rem] leading-[0.96] text-gradient-gold animate-fade-up tracking-wide-luxe max-w-[92vw]"
          style={{ animationDelay: "0.25s" }}
        >
          House of Valerion
        </h1>

        <div
          className="h-px w-32 bg-gradient-gold mt-8 animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        />

        <p
          className="mt-8 font-serif italic text-lg sm:text-2xl lg:text-3xl text-ivory animate-fade-up max-w-3xl"
          style={{ animationDelay: "0.6s" }}
        >
          Built For Those Who Refuse To Be Ordinary
        </p>

        <p
          className="mt-5 text-[10px] sm:text-xs text-ivory/70 uppercase tracking-luxe animate-fade-up"
          style={{ animationDelay: "0.75s" }}
        >
          Luxury Streetwear &nbsp;•&nbsp; Timeless Identity &nbsp;•&nbsp; Modern Power
        </p>

        <div
          className="mt-12 flex flex-col sm:flex-row gap-5 animate-fade-up"
          style={{ animationDelay: "0.9s" }}
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
