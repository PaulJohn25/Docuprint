import { TypographyH2, TypographyP } from "@/components/ui/typography";
import CTAForm from "./CTAForm";
import Image from "next/image";
import AnimateSection from "./AnimateSection";

const CTASection = () => {
  return (
    <AnimateSection>
      <section className="w-[90%] mx-auto">
        <div className="flex flex-col gap-10 md:items-center lg:flex-row mt-[5rem]">
          <div className="space-y-5">
            <TypographyH2>Join Our Printing Community Today</TypographyH2>
            <TypographyP>
              Create an account to access exclusive printing services and
              connect with local print shops.
            </TypographyP>
            <CTAForm />
          </div>
          <div className="w-full h-full">
            <Image
              src="/cta_image.jpg"
              alt="Printer illustration showcasing local print shop services"
              width={1000}
              height={717}
              priority
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>
    </AnimateSection>
  );
};

export default CTASection;
