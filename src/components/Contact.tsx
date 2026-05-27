import { MapPin, Phone, Mail, Globe, Instagram } from "lucide-react";

const ITEMS = [
  { icon: MapPin, label: "Atelier", value: "14 Rue Royale, Paris" },
  { icon: Phone, label: "Telephone", value: "+33 1 47 03 22 86" },
  { icon: Mail, label: "Correspondence", value: "maison@valerion.com" },
  { icon: Globe, label: "Website", value: "valerion.com" },
  { icon: Instagram, label: "Instagram", value: "@houseofvalerion" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs tracking-luxe uppercase text-gold mb-4">— Maison</p>
          <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-gradient-gold">Contact</h2>
          <div className="h-px w-24 bg-gradient-gold mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {ITEMS.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="group relative glass gold-border p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-gold"
            >
              <div className="mx-auto w-14 h-14 rounded-full border border-gold/50 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-gradient-gold group-hover:border-transparent">
                <Icon className="w-5 h-5 text-gold group-hover:text-navy-deep transition-colors duration-500" />
              </div>
              <p className="text-[10px] tracking-luxe uppercase text-gold/70 mb-2">{label}</p>
              <p className="font-serif text-ivory text-sm">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
