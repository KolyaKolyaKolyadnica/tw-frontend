"use client";

import React, { useState } from "react";
import QrCode from "./QrCode";
import { Input } from "@/components/ui/input";

export default function QrCodeSection() {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div
      className="bg-gray-200 flex items-center
 justify-center p-2 rounded-md gap-2"
    >
      <Input
        placeholder="Введите текст"
        className="border-2 border-blue-500"
        value={text}
        onChange={handleChange}
      />

      <QrCode
        text={text}
        className="flex items-center
        justify-center
        w-40 aspect-square border-2 border-blue-500 rounded-md "
      />
    </div>
  );
}
