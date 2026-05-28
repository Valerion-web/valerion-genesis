import { useEffect, useRef, useState } from "react";
import heroVideo from "../../public/videos/hero.mp4.asset.json";

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
          src={heroVideo.url}
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
        <h1
          className="font-serif uppercase text-[10vw] sm:text-[7.5vw] lg:text-[5.5rem] leading-[0.96] text-gradient-gold animate-fade-up tracking-wide-luxe max-w-[92vw]"
          style={{ animationDelay: "0.25s" }}
        >
          House of Valerion
        </h1>

        <p
          className="mt-6 font-serif uppercase text-[6vw] sm:text-[4.5vw] lg:text-[3.2rem] leading-[1] text-gradient-gold animate-fade-up tracking-wide-luxe"
          style={{ animationDelay: "0.45s" }}
        >
          Coming Soon
        </p>

        <p
          className="mt-5 font-serif italic text-sm sm:text-base lg:text-lg text-ivory animate-fade-up tracking-widest"
          style={{ animationDelay: "0.6s" }}
        >
          Crafted For Modern Royalty
        </p>

        <p
          className="mt-5 text-[10px] sm:text-xs text-ivory/70 uppercase tracking-luxe animate-fade-up"
          style={{ animationDelay: "0.75s" }}
        >
          Luxury Streetwear &nbsp;&bull;&nbsp; Timeless Identity &nbsp;&bull;&nbsp; Modern Power
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
