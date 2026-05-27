import storyImg from "@/assets/story.jpg";

export function Story() {
  return (
    <section id="story" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-spotlight opacity-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-700" />
          <div className="relative overflow-hidden gold-border shadow-deep">
            <img
              src={storyImg}
              alt="Master tailor crafting a Valerion suit"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover transition-transform duration-[2000ms] hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold/40 -z-10" />
        </div>

        <div>
          <p className="text-xs tracking-luxe uppercase text-gold mb-6">— Heritage</p>
          <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-gradient-gold leading-[1.05]">
            The Valerion<br />Legacy
          </h2>
          <div className="h-px w-24 bg-gradient-gold my-10" />
          <p className="text-ivory/80 text-lg leading-relaxed font-light">
            Born of midnight ateliers and the hush of cathedral light, House of Valerion is a meditation on
            timeless elegance. Each silhouette is hand-cut by master artisans, each seam a quiet vow to
            precision tailoring and modern sophistication.
          </p>
          <p className="mt-6 text-ivory/70 leading-relaxed font-light">
            From Italian wool whispered through gold thread to the architecture of the perfect lapel, Valerion
            is the language of royal craftsmanship — worn by those who know that true luxury is never spoken,
            only felt.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-6">
            {[
              ["MMXXVI", "Established"],
              ["07", "Ateliers"],
              ["∞", "Devotion"],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="font-serif text-3xl text-gradient-gold">{v}</div>
                <div className="mt-1 text-[10px] tracking-luxe uppercase text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
