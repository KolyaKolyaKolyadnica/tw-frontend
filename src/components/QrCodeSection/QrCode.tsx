"use client";

import React, { useEffect, useRef, useState } from "react";
import QRCodeStyling, { Options } from "qr-code-styling";

import { useSelector } from "react-redux";

export default function ClientQR() {
  const count = useSelector((state: any) => state.propertyQr); // fix type later

  // const [options, setOptions] = useState<Options>({});

  const [qrCode, setQrCode] = useState<QRCodeStyling>();
  const ref = useRef<HTMLDivElement>(null);
  const INITIAL_OPTIONS: Options = {
    width: 100,
    height: 100,
    type: "svg",
    data: count.text,
    image: count.logo,
    dotsOptions: {
      gradient: {
        type: "linear",
        rotation: 45 * (Math.PI / 180),
        colorStops: count.dotsOptions.gradient,
      },
      type: count.dotsOptions.shape,
    },
    cornersSquareOptions: {
      gradient: {
        type: "linear",
        rotation: 90 * (Math.PI / 180),
        colorStops: count.cornersSquareOptions.gradient,
      },
      type: "square",
    },
    backgroundOptions: {
      gradient: {
        type: "linear",
        rotation: 90 * (Math.PI / 180),
        colorStops: count.backgroundOptions.gradient,
      },
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 2,
    },
  };
  useEffect(() => {
    setQrCode(new QRCodeStyling(INITIAL_OPTIONS));
  }, []);

  useEffect(() => {
    if (ref.current) {
      qrCode?.append(ref.current);
    }
  }, [qrCode, ref]);

  useEffect(() => {
    if (!qrCode) return;
    qrCode?.update(INITIAL_OPTIONS);
  }, [qrCode, INITIAL_OPTIONS]);

  return (
    <div
      ref={ref}
      className="flex items-center justify-center w-40 aspect-square border-2 border-blue-500 rounded-md "
    />
  );
}

// import React, { useEffect, useRef } from "react";
// import QRCodeStyling from "qr-code-styling";
// import { useSelector } from "react-redux";

// export default function QrCode({ className }: { className?: string }) {
//   const ref = useRef<HTMLDivElement>(null);
//   const count = useSelector((state: any) => state.propertyQr); // fix type later

//   const qrCode = React.useMemo(() => {
//     return new QRCodeStyling({
//       width: 100,
//       height: 100,
//       type: "svg",
//       data: count.text,
//       image: count.logo,
//       dotsOptions: {
//         gradient: {
//           type: "linear",
//           rotation: 45 * (Math.PI / 180),
//           colorStops: count.colorStops,
//         },
//         type: count.shape,
//       },
//       cornersSquareOptions: {
//         gradient: {
//           type: "linear",
//           rotation: 90 * (Math.PI / 180),
//           colorStops: [
//             { offset: 0, color: "#ff0000" },
//             { offset: 1, color: "#0000ff" },
//           ],
//         },
//         type: "square",
//       },
//       backgroundOptions: {
//         color: "#e9ebee",
//       },
//       imageOptions: {
//         crossOrigin: "anonymous",
//         margin: 2,
//       },
//     });
//   }, [count.text, count.logo, count.shape, count.colorStops]);

//   useEffect(() => {
//     if (ref.current) {
//       ref.current.innerHTML = "";
//       qrCode.append(ref.current);
//     }
//   }, [qrCode]);
//   return (
//     <div
//       ref={ref}
//       className="flex items-center
//         justify-center
//         w-40 aspect-square border-2 border-blue-500 rounded-md "
//     />
//   );
// }
