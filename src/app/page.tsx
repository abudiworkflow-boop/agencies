import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import LiveDemo from "@/components/LiveDemo";
import DashboardPreview from "@/components/DashboardPreview";
import ROISection from "@/components/ROISection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <BentoGrid />
      <LiveDemo />
      <DashboardPreview />
      <ROISection />
      <Footer />
    </main>
  );
}
