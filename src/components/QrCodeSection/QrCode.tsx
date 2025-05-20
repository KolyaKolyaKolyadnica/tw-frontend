"use client";

import React, { useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";
import { useSelector } from "react-redux";

export default function QrCode({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const count = useSelector((state) => state.propertyQr);

  const qrCode = React.useMemo(() => {
    return new QRCodeStyling({
      width: 100,
      height: 100,
      type: "svg",
      data: "",
      image: count.logo,
      dotsOptions: {
        color: "#4267b2",
        type: count.shape,
      },
      backgroundOptions: {
        color: "#e9ebee",
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 2,
      },
    });
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = "";
      qrCode.append(ref.current);
    }
  }, [qrCode]);

  useEffect(() => {
    qrCode.update({
      data: count.text,
      image: count.logo,
      dotsOptions: {
        type: count.shape,
        color: "#4267b2",
      },
    });
  }, [count.text, count.logo, count.shape, qrCode]);

  return <div ref={ref} className={className} />;
}
