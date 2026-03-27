import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import LiveDemo from "@/components/LiveDemo";
import Dashboard from "@/components/Dashboard";
import Results from "@/components/Results";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Features />
      <LiveDemo />
      <Dashboard />
      <Results />
      <Pricing />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
