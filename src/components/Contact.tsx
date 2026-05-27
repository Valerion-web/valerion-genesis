import { MapPin, Phone, Mail, Globe, Instagram } from "lucide-react";

const ITEMS = [
  { icon: MapPin, label: "Atelier", value: "Whitefield, Bengaluru", href: undefined },
  { icon: Phone, label: "Telephone", value: "9071680999", href: "tel:9071680999" },
  {
    icon: Mail,
    label: "Email",
    value: "Contact@houseofvalerion.com",
    href: "mailto:Contact@houseofvalerion.com",
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.houseofvalerion.com",
    href: "https://www.houseofvalerion.com",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@house_of_valerion",
    href: "https://www.instagram.com/house_of_valerion",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 bg-gradient-navy">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs tracking-luxe uppercase text-gold mb-4">— Maison</p>
          <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-gradient-gold">
            Contact
          </h2>
          <div className="h-px w-24 bg-gradient-gold mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {ITEMS.map(({ icon: Icon, label, value, href }) => {
            const Tag = href ? "a" : "div";
            const linkProps = href
              ? {
                  href,
                  target: href.startsWith("http") ? "_blank" : undefined,
                  rel: "noopener noreferrer",
                }
              : {};
            return (
              <Tag
                key={label}
                {...linkProps}
                className="group relative glass gold-border p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-gold block"
              >
                <div className="mx-auto w-14 h-14 rounded-full border border-gold/50 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-gradient-gold group-hover:border-transparent">
                  <Icon className="w-5 h-5 text-gold group-hover:text-navy-deep transition-colors duration-500" />
                </div>
                <p className="text-[10px] tracking-luxe uppercase text-gold mb-2">{label}</p>
                <p className="font-serif text-ivory text-sm break-words">{value}</p>
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
