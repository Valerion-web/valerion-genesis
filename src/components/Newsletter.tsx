import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{ background: "radial-gradient(ellipse at center, oklch(0.78 0.14 86 / 0.18), transparent 60%)" }}
      />
      <div className="relative max-w-3xl mx-auto text-center">
        <p className="text-xs tracking-luxe uppercase text-gold mb-4">— Private Circle</p>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gradient-gold">
          Be the First to Know
        </h2>
        <p className="mt-6 text-ivory/70 font-light max-w-xl mx-auto">
          Receive the first whisper of our debut campaign, atelier openings, and invitations reserved for the
          Valerion circle.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (email) setDone(true);
          }}
          className="mt-12 flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
        >
          <div className="relative flex-1 group">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@address.com"
              className="w-full bg-navy/40 border border-gold/40 px-6 py-4 text-ivory placeholder:text-ivory/40 focus:outline-none focus:border-gold transition-all duration-500 focus:shadow-[0_0_30px_rgb(212_175_55/0.35)]"
            />
          </div>
          <button
            type="submit"
            className="group relative px-10 py-4 bg-gradient-gold text-navy-deep text-xs tracking-luxe uppercase font-medium overflow-hidden transition-transform duration-500 hover:scale-[1.03]"
          >
            <span className="relative z-10">{done ? "✓ Subscribed" : "Subscribe"}</span>
            <span
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              style={{ background: "linear-gradient(90deg, transparent, oklch(1 0 0 / 0.4), transparent)" }}
            />
          </button>
        </form>
      </div>
    </section>
  );
}
