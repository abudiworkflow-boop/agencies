import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SystemFlow from "@/components/SystemFlow";
import ChatSimulator from "@/components/ChatSimulator";
import LeadDashboard from "@/components/LeadDashboard";
import AdPerformance from "@/components/AdPerformance";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050510]">
      <Navbar />
      <HeroSection />
      <div className="section-divider" />
      <SystemFlow />
      <div className="section-divider" />
      <ChatSimulator />
      <div className="section-divider" />
      <LeadDashboard />
      <div className="section-divider" />
      <AdPerformance />
      <div className="section-divider" />
      <Features />
      <div className="section-divider" />
      <Footer />
    </main>
  );
}
