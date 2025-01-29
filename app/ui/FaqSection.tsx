import {
  TypographyH2,
  TypographyP,
  TypographyLarge,
} from "@/components/ui/typography";
import { AccordionData } from "@/app/types/faqAccordion";
import AccordionFaq from "@/app/ui/AccordionFaq";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { montserrat } from "@/app/ui/fonts";

const accordionData: AccordionData[] = [
  {
    title: "What services do you offer?",
    content:
      "DocuPrint connects you with local print shops for all of your printing needs. We offer a wide ranges of services, including document printing, custom designs, and more. Our platform is designed to make printing easy and accesible.",
  },
  {
    title: "How do I order?",
    content:
      "Ordering is simple! Just select your desired print service, upload your files, and choose a local print shop. You can complete your order in just a few clicks.",
  },
  {
    title: "Can I track my order?",
    content:
      "Yes, you can track your order through your dashboard. You'll receive updates on the status of your print job. This ensures you stay informed every step of the way.",
  },
  {
    title: "What payment methods are accepted?",
    content:
      "We offer flexible payment options for your convenience. You can pay using cashless methods like GCash and PayMaya, or choose to pay in person directly at the local print shop when you collect your prints.",
  },
  {
    title: "How can I contact support?",
    content:
      "You can reach our support team through the contact form on our website. We’re here to help with any questions or concerns. Your satisfaction is our priority.",
  },
];

const FaqSection = () => {
  return (
    <section className="w-[90%] mx-auto">
      <div className="container mt-[5rem] flex flex-col md:grid md:grid-cols-2 gap-5">
        <div className="w-full">
          <div>
            <TypographyH2 className="lg:text-5xl mb-3">FAQs</TypographyH2>
            <TypographyP className="max-w-[60ch] sm:max-w-[40ch]">
              Find answers to your must common questions about our printing
              services and local print shops.
            </TypographyP>
          </div>
          <div className="space-y-2 mt-5">
            <TypographyLarge>Have another questions?</TypographyLarge>
            <p
              className={`${montserrat.className} text-sm md:text-base font-medium`}
            >
              We&apos;re here to help you!
            </p>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
        <div className="w-full">
          {accordionData.map((data, index) => (
            <AccordionFaq
              key={data.title}
              title={data.title}
              content={data.content}
              itemNumber={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
