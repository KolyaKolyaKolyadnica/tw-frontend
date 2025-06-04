import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { optionsType } from "@/redux/propertyQrSlice";
import style from "./style.module.css";
import { RootState } from "@/redux/store";

export default function OptionsType({
  storeKey,
}: {
  storeKey: "dotsOptions" | "cornersSquareOptions" | "cornersDotOptions";
}) {
  const reduxOptions = useSelector((state: RootState) => state.propertyQr);
  const dispatch = useDispatch();

  const qrStyle = [
    "classy",
    "rounded",
    "dots",
    "classy-rounded",
    "square",
    "extra-rounded",
  ] as const;

  type qrStylenType = (typeof qrStyle)[number];

  return (
    <div>
      <div className={style.container}>
        {qrStyle.map((el: qrStylenType, index) => (
          <div
            key={index}
            onClick={() => {
              dispatch(optionsType({ storeKey, newType: el }));
            }}
            className={`${style.square} ${
              el === reduxOptions.shape ? style.square_target : ""
            }`}
          >
            {el}
          </div>
        ))}
      </div>
    </div>
  );
}
