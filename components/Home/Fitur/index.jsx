import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { FitureContent } from "@constants";
import { Balancer } from "react-wrap-balancer";

export default function Fiture() {
  return (
    <div className="flex flex-col items-center justify-center pt-20 pb-32 bg-gradient-to-b from-secondary to-background from-10%">
      <div className="container mx-auto mb-4">
        <p className="text-center mb-2 text-accent">-Lorem ipsum dolor sit.-</p>
        <h1 className="text-2xl lg:text-4xl font-medium text-primary">
          <Balancer>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            voluptatem!
          </Balancer>
        </h1>
      </div>
      <div className="container mx-auto text-text font-satoshi">
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-2"
        >
          {FitureContent.map((l) => {
            return (
              <AccordionItem key={l} value={l.value} className="border-b py-1">
                <AccordionTrigger className="text-xl text-start">
                  {l.title}
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  {l.description}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}
