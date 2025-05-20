import React, { useState } from "react";
import QrCode from "./QrCode";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { setText } from "@/components/redux/propertyQrSlice";

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
