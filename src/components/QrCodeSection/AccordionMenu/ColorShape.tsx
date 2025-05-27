import React, { useState } from "react";
import { useSelector } from "react-redux";

import PushColorButton from "./PushColorButton";
import DeleteButton from "./DeleteButton";
import ColorPicker from "./ColorPicker";

import style from "./style.module.css";
type ColorStop = {
  offset: number;
  color: string;
};

type PropertyQrState = {
  colorStops: ColorStop[];
};
export default function ColorShape() {
  const count = useSelector(
    (state: { propertyQr: PropertyQrState }) => state.propertyQr
  );

  const [targetColor, setTargetColor] = useState(0);
  const [angle, setAngle] = useState(90); // угол по умолчанию

  return (
    <div className="overflow-hidden transition-all duration-300 ">
      <div className={style.container}>
        {count.colorStops.map((el, index) => (
          <div
            key={index}
            onClick={() => {
              targetColor == index ? setTargetColor(-1) : setTargetColor(index);
            }}
            className={`${style.square} ${
              index == targetColor ? style.square_target : -1
            }`}
          >
            <div
              className=" w-[80%] h-[80%] rounded-sm relative"
              style={{ backgroundColor: el.color }}
            >
              {index > 0 ? (
                <DeleteButton storeKey={"colorStops"} index={index} />
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
        <PushColorButton storeKey={"colorStops"} />
      </div>
      <ColorPicker targetColor={targetColor} />
    </div>
  );
}
