import Header from "./ui/header/Header";
import HeroSection from "./ui/hero/HeroSection";
import AboutSection from "./ui/about/AboutSection";
import FeaturesSection from "./ui/features/FeaturesSection";
import FaqSection from "./ui/faq/FaqSection";
import CTASection from "./ui/cta/CTASection";
import Footer from "./ui/footer/Footer";

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
