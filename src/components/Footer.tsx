import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const SOCIAL = [Instagram, Facebook, Twitter, Youtube];

export function Footer() {
  return (
    <footer className="relative pt-24 pb-10 px-6 border-t border-gold/15 overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, oklch(0.78 0.14 86 / 0.8), transparent)" }}
      />
      <div className="max-w-7xl mx-auto text-center">
        <a
          href="#home"
          className="font-serif text-3xl sm:text-4xl text-gold animate-glow-pulse tracking-wide-luxe inline-block"
        >
          HOUSE OF VALERION
        </a>
        <p className="mt-4 italic font-serif text-ivory/60">Crafted for the modern royalty.</p>

        <div className="mt-12">
          <p className="text-xs tracking-luxe uppercase text-gold mb-6">— Follow Our Journey</p>
          <div className="flex items-center justify-center gap-5">
            {SOCIAL.map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="group w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center transition-all duration-500 hover:bg-gradient-gold hover:border-transparent hover:shadow-gold hover:-translate-y-1"
              >
                <Icon className="w-4 h-4 text-gold group-hover:text-onyx transition-colors duration-500" />
              </a>
            ))}
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent my-12" />

        <p className="text-[10px] tracking-luxe uppercase text-muted-foreground">
          © 2026 House of Valerion. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
