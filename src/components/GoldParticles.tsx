const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 18,
  duration: 14 + Math.random() * 14,
  size: 1 + Math.random() * 3,
  opacity: 0.3 + Math.random() * 0.5,
}));

export function GoldParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {PARTICLES.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-gold animate-float-up"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            boxShadow: "0 0 8px oklch(0.88 0.16 92 / 0.8)",
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
