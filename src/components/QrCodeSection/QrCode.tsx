"use client";

import React, { useEffect, useRef, useState } from "react";
import QRCodeStyling, { Options } from "qr-code-styling";

import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";

export default function ClientQR() {
  const QrOptions = useSelector((state: RootState) => state.propertyQr);

  const [qrCode, setQrCode] = useState<QRCodeStyling>();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setQrCode(new QRCodeStyling(QrOptions));
  }, []);

  useEffect(() => {
    if (ref.current) {
      qrCode?.append(ref.current);
    }
  }, [qrCode, ref]);

  useEffect(() => {
    if (!qrCode) return;
    qrCode?.update(QrOptions);
  }, [qrCode, QrOptions]);

  return (
    <div
      ref={ref}
      className="flex items-center justify-center w-40 aspect-square border-2 border-blue-500 rounded-md "
    />
  );
}
