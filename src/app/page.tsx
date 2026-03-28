import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import LiveDemo from "@/components/LiveDemo";
import Dashboard from "@/components/Dashboard";
import Results from "@/components/Results";
import ROICalculator from "@/components/ROICalculator";
import Pricing from "@/components/Pricing";
import SetupTimeline from "@/components/SetupTimeline";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Integrations />
      <HowItWorks />
      <Features />
      <LiveDemo />
      <Dashboard />
      <Results />
      <ROICalculator />
      <Pricing />
      <SetupTimeline />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
