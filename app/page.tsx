import Header from "./ui/header/Header";
import HeroSection from "./ui/hero/Hero";
import AboutSection from "./ui/about/About";
import FeaturesSection from "./ui/features/Features";
import FaqSection from "./ui/faq/Faq";
import CTASection from "./ui/cta/CTA";
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
