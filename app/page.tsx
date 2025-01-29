import Header from "@/app/ui/Header";
import HeroSection from "@/app/ui/HeroSection";
import AboutSection from "@/app/ui/AboutSection";
import FeaturesSection from "@/app/ui/FeaturesSection";
import FaqSection from "@/app/ui/FaqSection";
import CTASection from "@/app/ui/CTASection";
import Footer from "@/app/ui/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <FaqSection />
      <CTASection />
      <Footer />
    </main>
  );
}
