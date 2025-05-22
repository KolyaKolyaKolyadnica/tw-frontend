import React, { useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";
import { useSelector } from "react-redux";

export default function QrCode({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const count = useSelector((state: any) => state.propertyQr); // fix type later

  const qrCode = React.useMemo(() => {
    return new QRCodeStyling({
      width: 100,
      height: 100,
      type: "svg",
      data: count.text,
      image: count.logo,
      dotsOptions: {
        gradient: {
          type: "linear",
          rotation: 45 * (Math.PI / 180),
          colorStops: count.colorStops,
        },
        type: count.shape,
      },
      cornersSquareOptions: {
        gradient: {
          type: "linear",
          rotation: 90 * (Math.PI / 180),
          colorStops: [
            { offset: 0, color: "#ff0000" },
            { offset: 1, color: "#0000ff" },
          ],
        },
        type: "square",
      },
      backgroundOptions: {
        color: "#e9ebee",
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 2,
      },
    });
  }, [count.text, count.logo, count.shape, count.colorStops]);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = "";
      qrCode.append(ref.current);
    }
  }, [qrCode]);
  return <div ref={ref} className={className} />;
}
