import Header from "@/app/ui/Header/Header";
import HeroSection from "@/app/ui/Hero/Hero";
import AboutSection from "@/app/ui/About/About";
import FeaturesSection from "@/app/ui/Features/Features";
import FaqSection from "@/app/ui/Faq/Faq";
import CTASection from "@/app/ui/CTA/CTA";
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
