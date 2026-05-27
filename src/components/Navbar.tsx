const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#story" },
  { label: "Collections", href: "#collections" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="glass border-b border-gold/15">
        <nav className="relative max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Left spacer / mobile hamburger placeholder */}
          <div className="w-20 hidden lg:block" />
          <div className="lg:hidden w-8 h-8 flex flex-col justify-center gap-1.5">
            <span className="h-px bg-gold w-6" />
            <span className="h-px bg-gold w-4" />
          </div>

          {/* Center logo */}
          <a
            href="#home"
            className="absolute left-1/2 -translate-x-1/2 font-serif text-gold animate-glow-pulse text-xl sm:text-2xl lg:text-3xl tracking-wide-luxe whitespace-nowrap"
          >
            HOUSE OF VALERION
          </a>

          {/* Right links */}
          <ul className="hidden lg:flex items-center gap-9 ml-auto">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="relative text-[11px] tracking-luxe uppercase text-ivory/80 hover:text-gold transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-500 hover:after:w-full"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
