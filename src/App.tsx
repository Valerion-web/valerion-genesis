import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Collections } from "@/components/Collections";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

// Create QueryClient instance for React Query API fetching/caching support
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="bg-background text-foreground min-h-screen overflow-x-hidden">
        <Navbar />
        <Hero />
        <Story />
        <Collections />
        <Contact />
        <Footer />
      </main>
    </QueryClientProvider>
  );
}
