"use client";

import React, { useState } from "react";
import Header from "./Header/Header";
import QRCodeComponent from "../../components/QRCodeComponent/QRCodeComponent";
import { Input } from "@/components/ui/input";

export default function QrCodeGenerator() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="bg-gray-200">
      <Header />
      <div className="h-[150px]">Content 111</div>
      <Input
        placeholder="Введите текст"
        className="border-2 border-blue-500"
        value={text}
        onChange={handleChange}
      />
      <QRCodeComponent text={text} />
    </div>
  );
}
