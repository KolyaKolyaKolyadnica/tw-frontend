import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import OptionsType from "./OptionsType";
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
          <AccordionTrigger>dotsOptions type</AccordionTrigger>
          <AccordionContent>
            <OptionsType storeKey={"dotsOptions"} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>dotsOptions</AccordionTrigger>
          <AccordionContent>
            <ColorShape storeKey={"dotsOptions"} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>cornersSquareOptions type</AccordionTrigger>
          <AccordionContent>
            <OptionsType storeKey={"cornersSquareOptions"} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>cornersSquareOptions</AccordionTrigger>
          <AccordionContent>
            <ColorShape storeKey={"cornersSquareOptions"} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>cornersDotOptions type</AccordionTrigger>
          <AccordionContent>
            <OptionsType storeKey={"cornersDotOptions"} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>cornersDotOptions</AccordionTrigger>
          <AccordionContent>
            <ColorShape storeKey={"cornersDotOptions"} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8">
          <AccordionTrigger>backgroundOptions</AccordionTrigger>
          <AccordionContent>
            <ColorShape storeKey={"backgroundOptions"} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-9">
          <AccordionTrigger>Logo</AccordionTrigger>
          <AccordionContent>
            <UploadLogo />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
