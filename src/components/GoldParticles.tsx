// Deterministic pseudo-random so SSR and client output match (no hydration mismatch).
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = mulberry32(20260527);
const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: rand() * 100,
  delay: rand() * 18,
  duration: 14 + rand() * 14,
  size: 1 + rand() * 3,
  opacity: 0.3 + rand() * 0.5,
}));

export function GoldParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {PARTICLES.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-gold animate-float-up"
          style={{
            left: `${p.left.toFixed(4)}%`,
            width: `${p.size.toFixed(4)}px`,
            height: `${p.size.toFixed(4)}px`,
            opacity: Number(p.opacity.toFixed(4)),
            boxShadow: "0 0 8px oklch(0.88 0.16 92 / 0.8)",
            animationDelay: `${p.delay.toFixed(4)}s`,
            animationDuration: `${p.duration.toFixed(4)}s`,
          }}
        />
      ))}
    </div>
  );
}
