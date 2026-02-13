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
      <HeroSection />
      <SystemFlow />
      <ChatSimulator />
      <LeadDashboard />
      <AdPerformance />
      <Features />
      <Footer />
    </main>
  );
}
