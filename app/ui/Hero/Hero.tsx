import { TypographyH1, TypographyP } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-[90%] mx-auto">
      <div className="flex flex-col gap-10 md:items-center lg:flex-row mt-[5rem] sm:mt-[7rem]">
        <div className="space-y-5">
          <TypographyH1 className="sm:max-w-[15ch] sm:text-5xl md:max-w-[60ch]">
            Connect with Local Print Shops Effortlessly
          </TypographyH1>
          <TypographyP className="max-w-[60ch] sm:max-w-[40ch]">
            Discover the convenience of printing your documents with local print
            shops right at your fingertips. Our platform bridges the gap between
            you and trusted local printers, ensuring quality service and quick
            turnaround.
          </TypographyP>
          <div className="flex items-center gap-3">
            <Button asChild size="lg">
              <Link href="/" className="md:text-base">
                Get Started
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/" className="md:text-base">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
        <div className="w-full h-auto">
          <Image
            src="/12978229_5115105.jpg"
            alt="Printer illustration showcasing local print shop services"
            width={1400}
            height={1000}
            priority
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
