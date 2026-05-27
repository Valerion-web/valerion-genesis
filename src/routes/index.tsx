import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Collections } from "@/components/Collections";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "House of Valerion — Coming Soon" },
      {
        name: "description",
        content:
          "House of Valerion — a new maison of luxury menswear. Crafted for the modern royalty. Coming soon.",
      },
      { property: "og:title", content: "House of Valerion — Coming Soon" },
      {
        property: "og:description",
        content: "A new maison of luxury menswear. Crafted for the modern royalty.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Story />
      <Collections />
      <Contact />
      <Footer />
    </main>
  );
}
