import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const LEFT_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#story" },
];

const RIGHT_LINKS = [
  { label: "Collections", href: "#collections" },
  { label: "Contact", href: "#contact" },
];

const MENU_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#story" },
  { label: "Collections", href: "#collections" },
  { label: "Contact", href: "#contact" },
];

const linkClass =
  "relative text-[11px] tracking-luxe uppercase text-ivory/90 hover:text-gold transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-500 hover:after:w-full";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="navbar-glass border-b border-gold/25">
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-24 grid grid-cols-[1fr_auto_1fr] items-center gap-8">
          {/* Left links */}
          <ul className="hidden lg:flex items-center gap-9 justify-self-start">
            {LEFT_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} className={linkClass}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="relative flex h-12 w-12 items-center justify-center rounded-full border border-gold/20 bg-navy-deep/95 text-gold shadow-gold/10 transition-all duration-300 hover:border-gold/40 hover:bg-navy/95 focus:outline-none"
            >
              <span
                className={`absolute block h-px w-6 bg-gold transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute block h-px w-6 bg-gold transition-all duration-300 ${
                  menuOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
                }`}
              />
            </button>
          </div>

          {/* Center: logo */}
          <a href="#home" className="flex items-center justify-self-center animate-fade-in">
            <span className="relative flex items-center justify-center">
              <span
                aria-hidden
                className="absolute -inset-2 lg:-inset-3 rounded-full blur-3xl -z-10"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0.06) 30%, transparent 60%)",
                }}
              />
              <img
                src={logo}
                alt="House of Valerion"
                className="h-14 sm:h-16 lg:h-20 w-auto object-contain"
                style={{
                  filter:
                    "brightness(1.12) contrast(1.08) saturate(1.12) drop-shadow(0 8px 18px rgba(17,24,39,0.45)) drop-shadow(0 0 12px rgba(212,175,55,0.42))",
                  imageRendering: "auto",
                }}
              />
            </span>
          </a>

          {/* Right links */}
          <ul className="hidden lg:flex items-center gap-9 justify-self-end">
            {RIGHT_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} className={linkClass}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="lg:hidden" />
        </nav>
      </div>

      {/* Mobile full-screen menu overlay */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      >
        <div className="absolute inset-0 bg-[rgba(7,20,38,0.92)] backdrop-blur-xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.14),transparent_32%),linear-gradient(180deg,rgba(15,27,52,0.92),rgba(4,9,19,0.98))]" />

        <div className="relative z-10 min-h-screen px-8 py-8 flex items-center justify-center">
          <div
            className="w-full max-w-2xl rounded-3xl border border-gold/15 bg-navy-deep/95 p-8 shadow-[0_0_80px_rgba(0,0,0,0.48)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/25 bg-navy-deep/80 text-gold transition hover:bg-navy/95 focus:outline-none"
            >
              <span className="sr-only">Close menu</span>
              <span className="absolute block h-px w-5 rotate-45 bg-gold" />
              <span className="absolute block h-px w-5 -rotate-45 bg-gold" />
            </button>

            <div className="flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center text-center gap-8">
              {MENU_LINKS.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="inline-block text-4xl sm:text-5xl uppercase tracking-[0.45em] text-ivory transition-transform duration-500 hover:text-gold hover:-translate-y-1"
                  style={{ animation: `fade-up 0.6s ease forwards`, animationDelay: `${index * 0.08 + 0.12}s`, opacity: 0 }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
