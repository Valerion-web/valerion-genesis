import storyImg from "@/assets/story.jpg";

export function Story() {
  return (
    <section id="story" className="relative py-24 lg:py-28 px-6 overflow-hidden bg-gradient-navy">
      <div className="absolute inset-0 bg-gradient-spotlight opacity-50 pointer-events-none" />
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative">
        <div className="relative group">
          <div className="absolute -inset-3 bg-gradient-gold opacity-15 blur-3xl group-hover:opacity-30 transition-opacity duration-700" />
          <div className="relative overflow-hidden gold-border shadow-deep">
            <img
              src={storyImg}
              alt="House of Valerion — crafted in gold and navy"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover transition-transform duration-[2000ms] hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-4 -right-4 w-20 h-20 border border-gold/30 -z-10" />
        </div>

        <div className="max-w-xl">
          <p className="text-[10px] tracking-luxe uppercase text-gold mb-5">— Our Story</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-gradient-gold leading-[1.15]">
            Built for Those Who Refuse to Be Ordinary.
          </h2>
          <div className="h-px w-20 bg-gradient-gold my-8 shadow-gold" />

          <p className="text-ivory/80 text-base leading-relaxed font-light">
            In a world filled with trends that fade overnight,
            <span className="text-gold"> HOUSE OF VALERION</span> was born to create something
            timeless.
          </p>

          <div className="mt-5 space-y-0.5 font-serif italic text-ivory/90 text-lg">
            <p>Not just fashion.</p>
            <p>Not just luxury.</p>
            <p className="text-gold">But an identity.</p>
          </div>

          <p className="mt-6 text-ivory/70 leading-relaxed font-light text-sm">
            HOUSE OF VALERION began with a vision — to build a brand for people who carry ambition
            in their eyes, confidence in their presence, and greatness in their mindset.
          </p>

          <div className="h-px w-12 bg-gradient-gold my-6 opacity-60" />

          <p className="text-ivory/70 leading-relaxed font-light text-sm">
            The name <span className="text-gold font-serif">VALERION</span> represents strength,
            legacy, elegance, and power.
          </p>
        </div>
      </div>
    </section>
  );
}
