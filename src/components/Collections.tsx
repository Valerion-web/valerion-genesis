import royale from "@/assets/col-royale.jpg";
import black from "@/assets/col-black.jpg";
import linen from "@/assets/col-linen.jpg";
import imperial from "@/assets/col-imperial.jpg";
import elite from "@/assets/col-elite.jpg";

const COLLECTIONS = [
  { title: "Valerion Royale", subtitle: "Velvet & Ceremony", img: royale },
  { title: "Black Collection", subtitle: "Monochrome Mastery", img: black },
  { title: "Linen Legacy", subtitle: "Summer Sovereign", img: linen },
  { title: "Imperial Formals", subtitle: "Black Tie Affair", img: imperial },
  { title: "Elite Casuals", subtitle: "Effortless Authority", img: elite },
];

export function Collections() {
  return (
    <section id="collections" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-spotlight opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-xs tracking-luxe uppercase text-gold mb-4">— The Maison</p>
          <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-gradient-gold">Collections</h2>
          <div className="h-px w-24 bg-gradient-gold mx-auto mt-8" />
        </div>

        {/* Horizontal scroll on mobile/tablet, single row on desktop */}
        <div className="-mx-6 px-6 overflow-x-auto lg:overflow-visible scrollbar-hide">
          <div className="flex lg:grid lg:grid-cols-5 gap-5 lg:gap-4 min-w-max lg:min-w-0">
            {COLLECTIONS.map((c) => (
              <article
                key={c.title}
                className="group relative w-[240px] sm:w-[260px] lg:w-auto shrink-0 lg:shrink aspect-[3/4] overflow-hidden gold-border glass shadow-card cursor-pointer transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_oklch(0.80_0.145_86/0.4)]"
              >
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/50 to-transparent" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: "radial-gradient(ellipse at center, oklch(0.80 0.145 86 / 0.25), transparent 70%)" }}
                />

                <div className="relative h-full flex flex-col justify-end p-5">
                  <p className="text-[9px] tracking-luxe uppercase text-gold">{c.subtitle}</p>
                  <h3 className="mt-1.5 font-serif text-xl lg:text-2xl text-white leading-tight">{c.title}</h3>
                  <div className="h-px w-8 bg-gradient-gold my-3 transition-all duration-500 group-hover:w-16" />
                  <button className="self-start group/btn relative px-4 py-2 border border-gold/70 text-[9px] tracking-luxe uppercase text-gold hover:text-navy-deep transition-colors duration-500 overflow-hidden">
                    <span className="relative z-10">Discover</span>
                    <span className="absolute inset-0 bg-gradient-gold translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                  </button>
                </div>

                {/* corner accents */}
                <span className="absolute top-2 left-2 w-3 h-3 border-t border-l border-gold/60" />
                <span className="absolute top-2 right-2 w-3 h-3 border-t border-r border-gold/60" />
                <span className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-gold/60" />
                <span className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-gold/60" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
