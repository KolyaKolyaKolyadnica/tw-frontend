import React from "react";
import dynamic from "next/dynamic";

const QrCode = dynamic(() => import("./QrCode"), { ssr: false });
import { Input } from "@/components/ui/input";
import { useDispatch } from "react-redux";
import { setText } from "@/redux/propertyQrSlice";

import AccordionMenu from "./AccordionMenu/AccordionMenu";

export default function QrCodeSection() {
  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setText(e.target.value));
  };

  return (
    <>
      <div
        className="bg-gray-200 flex items-center
 justify-center p-2 rounded-md gap-2"
      >
        <Input
          placeholder="Введите текст"
          className="border-2 border-blue-500"
          onChange={handleChange}
        />
        <QrCode
          className="flex items-center
        justify-center
        w-40 aspect-square border-2 border-blue-500 rounded-md "
        />
      </div>
      <AccordionMenu />
    </>
  );
}
