import royale from "@/assets/col-royale.jpg";
import black from "@/assets/col-black.jpg";
import linen from "@/assets/col-linen.jpg";
import imperial from "@/assets/col-imperial.jpg";
import elite from "@/assets/col-elite.jpg";

const COLLECTIONS = [
  { title: "Valerion Royale", subtitle: "Velvet & Ceremony", img: royale, featured: true },
  { title: "Black Collection", subtitle: "Monochrome Mastery", img: black },
  { title: "Linen Legacy", subtitle: "Summer Sovereign", img: linen },
  { title: "Imperial Formals", subtitle: "Black Tie Affair", img: imperial },
  { title: "Elite Casuals", subtitle: "Effortless Authority", img: elite },
];

export function Collections() {
  return (
    <section id="collections" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs tracking-luxe uppercase text-gold mb-4">— The Maison</p>
          <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-gradient-gold">Collections</h2>
          <div className="h-px w-24 bg-gradient-gold mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-[420px]">
          {COLLECTIONS.map((c, i) => (
            <article
              key={c.title}
              className={`group relative overflow-hidden gold-border glass shadow-card cursor-pointer ${
                c.featured ? "lg:col-span-3 lg:row-span-2 lg:h-auto" : "lg:col-span-3"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <img
                src={c.img}
                alt={c.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: "radial-gradient(ellipse at center, oklch(0.78 0.14 86 / 0.2), transparent 70%)" }}
              />

              <div className="relative h-full flex flex-col justify-end p-8">
                <p className="text-[10px] tracking-luxe uppercase text-gold/70">{c.subtitle}</p>
                <h3 className="mt-2 font-serif text-3xl lg:text-4xl text-ivory">{c.title}</h3>
                <div className="h-px w-12 bg-gradient-gold my-5 transition-all duration-500 group-hover:w-24" />
                <button className="self-start group/btn relative px-7 py-3 border border-gold/60 text-[10px] tracking-luxe uppercase text-gold hover:text-onyx transition-colors duration-500 overflow-hidden">
                  <span className="relative z-10">Discover</span>
                  <span className="absolute inset-0 bg-gradient-gold translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                </button>
              </div>

              {/* corner accents */}
              <span className="absolute top-3 left-3 w-4 h-4 border-t border-l border-gold/60" />
              <span className="absolute top-3 right-3 w-4 h-4 border-t border-r border-gold/60" />
              <span className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-gold/60" />
              <span className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-gold/60" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
