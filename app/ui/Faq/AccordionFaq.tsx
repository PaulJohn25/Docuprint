import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionData } from "@/app/types/faqAccordion";

const AccordionFaq = ({
  title,
  content,
  itemNumber,
}: AccordionData & { itemNumber: number }) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={`item-${itemNumber}`}>
        <AccordionTrigger className="text-base md:text-xl font-semibold">
          {title}
        </AccordionTrigger>
        <AccordionContent className="md:text-base max-w-[60ch] text-justify">
          {content}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionFaq;
