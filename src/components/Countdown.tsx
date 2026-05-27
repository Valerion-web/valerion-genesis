import { useEffect, useState } from "react";

const TARGET = new Date("2026-12-31T00:00:00Z").getTime();

function getTime() {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown() {
  const [t, setT] = useState(getTime);
  useEffect(() => {
    const id = setInterval(() => setT(getTime()), 1000);
    return () => clearInterval(id);
  }, []);

  const items: [string, number][] = [
    ["Days", t.days],
    ["Hours", t.hours],
    ["Minutes", t.minutes],
    ["Seconds", t.seconds],
  ];

  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-2xl mx-auto">
      {items.map(([label, value]) => (
        <div
          key={label}
          className="glass rounded-sm px-2 py-4 sm:px-6 sm:py-7 text-center shadow-card relative overflow-hidden group"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-gold opacity-60" />
          <div className="font-serif text-3xl sm:text-5xl text-gradient-gold tabular-nums">
            {String(value).padStart(2, "0")}
          </div>
          <div className="mt-2 text-[10px] sm:text-xs tracking-luxe uppercase text-muted-foreground">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
