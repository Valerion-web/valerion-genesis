const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#story" },
  { label: "Collections", href: "#collections" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="glass border-b border-gold/20">
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 grid grid-cols-[1fr_auto_1fr] items-center gap-6">
          {/* Left: mobile hamburger placeholder, hidden on desktop */}
          <div className="flex items-center lg:invisible">
            <div className="w-8 h-8 flex flex-col justify-center gap-1.5">
              <span className="h-px bg-gold w-6" />
              <span className="h-px bg-gold w-4" />
            </div>
          </div>

          {/* Center: brand */}
          <a
            href="#home"
            className="font-serif text-gold animate-glow-pulse text-lg sm:text-2xl lg:text-[1.75rem] tracking-wide-luxe whitespace-nowrap justify-self-center"
          >
            HOUSE OF VALERION
          </a>

          {/* Right: links */}
          <ul className="hidden lg:flex items-center gap-8 justify-self-end">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="relative text-[11px] tracking-luxe uppercase text-navy-deep/80 hover:text-gold transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-500 hover:after:w-full"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Right spacer for mobile to balance grid */}
          <div className="lg:hidden" />
        </nav>
      </div>
    </header>
  );
}
