import Header from "@/app/ui/header/Header";
import HeroSection from "@/app/ui/hero/HeroSection";
import AboutSection from "@/app/ui/about/AboutSection";
import FeaturesSection from "@/app/ui/features/FeaturesSection";
import FaqSection from "@/app/ui/faq/FaqSection";
import CTASection from "@/app/ui/cta/CTASection";
import Footer from "@/app/ui/footer/Footer";

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
