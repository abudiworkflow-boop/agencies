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
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div className="divider max-w-6xl mx-auto" />
      <SystemFlow />
      <div className="divider max-w-6xl mx-auto" />
      <ChatSimulator />
      <div className="divider max-w-6xl mx-auto" />
      <LeadDashboard />
      <div className="divider max-w-6xl mx-auto" />
      <AdPerformance />
      <div className="divider max-w-6xl mx-auto" />
      <Features />
      <div className="divider max-w-6xl mx-auto" />
      <Footer />
    </main>
  );
}
