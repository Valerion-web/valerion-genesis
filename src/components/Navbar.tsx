import logo from "@/assets/logo.png";

const LEFT_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#story" },
];

const RIGHT_LINKS = [
  { label: "Collections", href: "#collections" },
  { label: "Contact", href: "#contact" },
];

const linkClass =
  "relative text-[11px] tracking-luxe uppercase text-ivory/90 hover:text-gold transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-500 hover:after:w-full";

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="navbar-glass border-b border-gold/25">
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-24 grid grid-cols-[1fr_auto_1fr] items-center gap-8">
          {/* Left links */}
          <ul className="hidden lg:flex items-center gap-9 justify-self-start">
            {LEFT_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} className={linkClass}>{l.label}</a>
              </li>
            ))}
          </ul>
          {/* Mobile hamburger */}
          <div className="flex items-center lg:hidden">
            <div className="w-8 h-8 flex flex-col justify-center gap-1.5">
              <span className="h-px bg-gold w-6" />
              <span className="h-px bg-gold w-4" />
            </div>
          </div>

          {/* Center: logo + brand */}
          <a
            href="#home"
            className="flex flex-col items-center gap-1.5 justify-self-center animate-fade-in"
          >
            <img
              src={logo}
              alt="House of Valerion"
              className="h-7 w-auto"
              style={{ filter: "drop-shadow(0 0 6px rgb(212 175 55 / 0.5))" }}
            />
            <span className="font-serif text-gold animate-glow-pulse text-base sm:text-xl lg:text-[1.65rem] tracking-wide-luxe whitespace-nowrap">
              HOUSE OF VALERION
            </span>
          </a>

          {/* Right links */}
          <ul className="hidden lg:flex items-center gap-9 justify-self-end">
            {RIGHT_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} className={linkClass}>{l.label}</a>
              </li>
            ))}
          </ul>
          <div className="lg:hidden" />
        </nav>
      </div>
    </header>
  );
}
