import Image from "next/image";
import { TypographyH2, TypographyP } from "@/components/ui/typography";

const AboutSection = () => {
  return (
    <section className="w-[90%] mx-auto">
      <div className="flex flex-col items-center sm:flex-row mt-[5rem] container">
        <div className="space-y-5 md:space-y-7">
          <Image
            src="/0.png"
            alt="DocuPrint Logo"
            width={56}
            height={44}
            className="object-contain max-w-full h-auto"
          />
          <TypographyH2 className="lg:text-5xl">
            Connecting You with Local Print Shops for All Your Printing Needs
          </TypographyH2>
          <TypographyP className="max-w-[60ch] sm:max-w-[40ch]">
            At DocuPrint, our mission is to simplify the printing process by
            connecting users with local print shops. We offer a seamless
            platform for both customers and shop owners to collaborate and
            fulfill printing needs efficiently.
          </TypographyP>
        </div>
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-600px]">
          <Image
            src="/Printer-rafiki.png"
            alt="Printer illustration"
            fill
            sizes="(max-width: 640px) 100vw, 
               (max-width: 768px) 75vw, 
               (max-width: 1024px) 50vw,
               33vw"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
