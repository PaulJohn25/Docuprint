import Header from "@/app/ui/header/Header";
import HeroSection from "@/app/ui/hero/Hero";
import AboutSection from "@/app/ui/about/About";
import FeaturesSection from "@/app/ui/features/Features";
import FaqSection from "@/app/ui/faq/Faq";
import CTASection from "@/app/ui/cta/CTA";
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
