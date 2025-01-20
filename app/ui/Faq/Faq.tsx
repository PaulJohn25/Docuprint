import {
  TypographyH2,
  TypographyP,
  TypographyLarge,
} from "@/components/ui/typography";
import { AccordionData } from "@/app/types/faqAccordion";
import AccordionFaq from "./AccordionFaq";
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
      <div className="mt-[5rem] flex flex-col gap-5">
        <TypographyH2 className="lg:text-5xl">FAQs</TypographyH2>
        <TypographyP className="max-w-[60ch] sm:max-w-[40ch]">
          Find answers to your must common questions about our printing services
          and local print shops.
        </TypographyP>
        {accordionData.map((data, index) => (
          <AccordionFaq
            key={data.title}
            title={data.title}
            content={data.content}
            itemNumber={index}
          />
        ))}
        <div className="space-y-3 mt-5">
          <TypographyLarge>Still have questions?</TypographyLarge>
          <p className={`${montserrat.className} text-sm font-medium`}>
            We're here to help you!
          </p>
          <Button asChild variant="outline">
            <Link href="/">Contact</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
