import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { optionsType } from "@/redux/propertyQrSlice";
import style from "./style.module.css";
import { RootState } from "@/redux/store";
import { StoreKeyTypePoint } from "@/redux/types";
import { CornerDotType, CornerSquareType, DotType } from "qr-code-styling";

export default function OptionsType({
  storeKey,
}: {
  storeKey: StoreKeyTypePoint;
}) {
  const QrOptions = useSelector((state: RootState) => state.propertyQr);
  const dispatch = useDispatch();

  const dotType = [
    "classy",
    "rounded",
    "dots",
    "classy-rounded",
    "square",
    "extra-rounded",
  ];

  const qrStyle = {
    dotsOptions: [...dotType] as DotType[],

    cornersSquareOptions: [...dotType, "dot"] as CornerSquareType[],

    cornersDotOptions: [...dotType, "dot"] as CornerDotType[],
  };

  return (
    <div>
      <div className={style.container}>
        {qrStyle[storeKey].map((el, index) => (
          <div
            key={index}
            onClick={() => {
              dispatch(optionsType({ storeKey, newType: el }));
            }}
            className={`${style.square} ${
              el === QrOptions.shape ? style.square_target : ""
            }`}
          >
            {el}
          </div>
        ))}
      </div>
    </div>
  );
}
