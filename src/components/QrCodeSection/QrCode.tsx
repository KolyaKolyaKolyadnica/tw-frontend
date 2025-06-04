"use client";

import React, { useEffect, useRef, useState } from "react";
import QRCodeStyling, { Options } from "qr-code-styling";

import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";

export default function ClientQR() {
  const reduxOptions = useSelector((state: RootState) => state.propertyQr);

  const [qrCode, setQrCode] = useState<QRCodeStyling>();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setQrCode(new QRCodeStyling(reduxOptions));
  }, []);

  // Что Коля об этом думае?
  // useEffect(() => {
  //   if (ref.current) {
  //     qrCode?.append(ref.current);
  //   }
  // }, [qrCode, ref]);

  // Небольшой совет по защите от двойного добавления
  useEffect(() => {
    if (ref.current && qrCode) {
      ref.current.innerHTML = ""; // очистить контейнер перед вставкой
      qrCode.append(ref.current);
    }
  }, [qrCode]);

  useEffect(() => {
    if (!qrCode) return;
    qrCode?.update(reduxOptions);
  }, [qrCode, reduxOptions]);

  return (
    <div
      ref={ref}
      className="flex items-center justify-center w-40 aspect-square border-2 border-blue-500 rounded-md "
    />
  );
}
