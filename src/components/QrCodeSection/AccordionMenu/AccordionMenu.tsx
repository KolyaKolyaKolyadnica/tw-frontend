import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Shape from "./Shape";
import UploadLogo from "./UploadLogo";
import ColorShape from "./ColorShape";

export default function AccordionMenu() {
  return (
    <div
      className="bg-gray-300 flex items-center
 justify-center p-2 rounded-md gap-2 w-full"
    >
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Frame</AccordionTrigger>
          <AccordionContent>ups</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Shape</AccordionTrigger>
          <AccordionContent>
            <Shape />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Color shape</AccordionTrigger>
          <AccordionContent>
            <ColorShape />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Logo</AccordionTrigger>
          <AccordionContent>
            <UploadLogo />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
