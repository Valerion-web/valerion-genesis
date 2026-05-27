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
    <section id="collections" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-spotlight opacity-30 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12">
          <p className="text-[10px] tracking-luxe uppercase text-gold mb-3">— The Maison</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-gradient-gold">Collections</h2>
          <div className="h-px w-20 bg-gradient-gold mx-auto mt-6" />
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {COLLECTIONS.map((c) => (
            <article
              key={c.title}
              className="group relative w-[210px] sm:w-[200px] lg:w-[185px] xl:w-[195px] aspect-[3/4] overflow-hidden gold-border glass cursor-pointer transition-all duration-700 hover:-translate-y-1.5"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/55 to-transparent" />

              <div className="relative h-full flex flex-col justify-end p-4 pb-5">
                <p className="text-[9px] tracking-luxe uppercase text-gold/90">{c.subtitle}</p>
                <h3 className="mt-1 font-serif text-lg text-ivory leading-tight">{c.title}</h3>
                <div className="h-px w-6 bg-gradient-gold mt-2.5 transition-all duration-500 group-hover:w-12" />
              </div>

              {/* corner accents */}
              <span className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-gold/50" />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-gold/50" />
              <span className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-gold/50" />
              <span className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-gold/50" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
