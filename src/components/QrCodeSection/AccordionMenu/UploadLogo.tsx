import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLogo } from "@/components/redux/propertyQrSlice";

import style from "./style.module.css";

export default function UploadLogo() {
  const dispatch = useDispatch();

  const [target, setTarget] = useState("none");

  const options = ["none", "logo", "logoAndFrame"];

  const handleClick = (el: string) => {
    setTarget(el);

    switch (el) {
      case "none":
        dispatch(setLogo(""));
        break;
      case "logo":
        dispatch(setLogo("/logo.png"));
        break;
      case "logoAndFrame":
        dispatch(setLogo("/logo.png"));
        break;
      default:
        console.warn("Ошибка");
    }
  };
  return (
    <div className={style.container}>
      {options.map((el, index) => (
        <div
          key={index}
          className={`${style.square} ${
            el === target ? style.square_target : ""
          }`}
          onClick={() => handleClick(el)}
        >
          {el}
        </div>
      ))}
    </div>
  );
}
