import storyImg from "@/assets/story.jpg";

export function Story() {
  return (
    <section id="story" className="relative py-32 px-6 overflow-hidden bg-gradient-navy">
      <div className="absolute inset-0 bg-gradient-spotlight opacity-60 pointer-events-none" />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-700" />
          <div className="relative overflow-hidden gold-border shadow-deep">
            <img
              src={storyImg}
              alt="House of Valerion — crafted in gold and navy"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover transition-transform duration-[2000ms] hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold/40 -z-10" />
        </div>

        <div>
          <p className="text-xs tracking-luxe uppercase text-gold mb-6">— Our Story</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gradient-gold leading-[1.08]">
            Built for Those Who<br />Refuse to Be Ordinary.
          </h2>
          <div className="h-px w-24 bg-gradient-gold my-10 shadow-gold" />

          <p className="text-ivory/90 text-lg leading-relaxed font-light">
            In a world filled with trends that fade overnight,
            <span className="text-gold"> HOUSE OF VALERION</span> was born to create
            something timeless.
          </p>

          <div className="mt-6 space-y-1 font-serif italic text-ivory text-xl">
            <p>Not just fashion.</p>
            <p>Not just luxury.</p>
            <p className="text-gold">But an identity.</p>
          </div>

          <p className="mt-8 text-ivory/80 leading-relaxed font-light">
            HOUSE OF VALERION began with a vision — to build a brand for people who carry
            ambition in their eyes, confidence in their presence, and greatness in their mindset.
          </p>

          <div className="h-px w-16 bg-gradient-gold my-8 opacity-70" />

          <p className="text-ivory/80 leading-relaxed font-light">
            The name <span className="text-gold font-serif">“VALERION”</span> represents
            strength, legacy, elegance, and power. It symbolizes individuals who walk with
            purpose and never settle for average.
          </p>
        </div>
      </div>
    </section>
  );
}
