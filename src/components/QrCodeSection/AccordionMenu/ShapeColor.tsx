import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShape } from "@/components/redux/propertyQrSlice";

import style from "./style.module.css";

export default function ShapeColor() {
  const count = useSelector((state) => state.propertyQr);
  const dispatch = useDispatch();

  const options = [
    "classy",
    "rounded",
    "dots",
    "classy-rounded",
    "square",
    "extra-rounded",
  ];

  return (
    <div className={style.container}>
      {options.map((el, index) => (
        <div
          key={index}
          onClick={() => {
            dispatch(setShape(el));
          }}
          className={`${style.square} ${
            el === count.shape ? style.square_target : ""
          }`}
        >
          {el}
        </div>
      ))}
    </div>
  );
}
