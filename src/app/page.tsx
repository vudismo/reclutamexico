import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Philosophy from "@/components/Philosophy";
import Protocol from "@/components/Protocol";
import Pricing from "@/components/Pricing";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Protocol />
      <Pricing />
      <SocialProof />
      <Footer />
    </main>
  );
}
