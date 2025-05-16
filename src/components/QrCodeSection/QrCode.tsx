"use client";

import React, { useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";

export default function QrCode({
  text,
  className,
}: {
  text?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const qrCode = React.useMemo(() => {
    return new QRCodeStyling({
      width: 100,
      height: 100,
      type: "svg",
      data: "",
      image: "",
      dotsOptions: {
        color: "#4267b2",
        type: "rounded",
      },
      backgroundOptions: {
        color: "#e9ebee",
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 20,
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
    qrCode.update({ data: text });
  }, [text, qrCode]);

  return <div ref={ref} className={className} />;
}
