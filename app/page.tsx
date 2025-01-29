import Header from "@/app/ui/Header/Header";
import HeroSection from "@/app/ui/Hero/HeroSection";
import AboutSection from "@/app/ui/About/AboutSection";
import FeaturesSection from "@/app/ui/Features/FeaturesSection";
import FaqSection from "@/app/ui/FAQ/FaqSection";
import CTASection from "@/app/ui/CTA/CTASection";
import Footer from "@/app/ui/Footer/Footer";

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
