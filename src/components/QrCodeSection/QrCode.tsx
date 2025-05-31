"use client";

import React, { useEffect, useRef, useState } from "react";
import QRCodeStyling, { Options } from "qr-code-styling";

import { useSelector } from "react-redux";

export default function ClientQR() {
  const reduxOptions = useSelector((state: any) => state.propertyQr); // fix type later

  // const [options, setOptions] = useState<Options>({});

  const [qrCode, setQrCode] = useState<QRCodeStyling>();
  const ref = useRef<HTMLDivElement>(null);

  // const INITIAL_OPTIONS: Options = {
  //   width: 100,
  //   height: 100,
  //   type: "svg",
  //   data: count.data,
  //   image: count.image,
  //   dotsOptions: {
  //     gradient: {
  //       type: "linear",
  //       rotation: 45 * (Math.PI / 180),
  //       colorStops: count.dotsOptions.gradient.colorStops,
  //     },
  //     type: count.dotsOptions.shape,
  //   },
  //   cornersSquareOptions: {
  //     gradient: {
  //       type: "linear",
  //       rotation: 90 * (Math.PI / 180),
  //       colorStops: count.cornersSquareOptions.gradient.colorStops,
  //     },
  //     type: "square",
  //   },
  //   backgroundOptions: {
  //     gradient: {
  //       type: "linear",
  //       rotation: 90 * (Math.PI / 180),
  //       colorStops: count.backgroundOptions.gradient.colorStops,
  //     },
  //   },
  //   imageOptions: {
  //     crossOrigin: "anonymous",
  //     margin: 2,
  //   },
  // };

  useEffect(() => {
    setQrCode(new QRCodeStyling(reduxOptions));
  }, []);

  useEffect(() => {
    if (ref.current) {
      qrCode?.append(ref.current);
    }
  }, [qrCode, ref]);

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
