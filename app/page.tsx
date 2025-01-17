import Header from "@/app/ui/Header/Header";
import HeroSection from "@/app/ui/Hero/Hero";
import AboutSection from "./ui/About/About";
import FeaturesSection from "./ui/Features/Features";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
    </main>
  );
}
