import React, { useState } from "react";
import { useSelector } from "react-redux";

import GetColorButton from "./GetColorButton";
import DeleteButton from "./DeleteButton";
import ColorPicker from "./ColorPicker";

import style from "./style.module.css";

export default function ColorShape({
  storeKey,
}: {
  storeKey: "dotsOptions" | "cornersSquareOptions" | "backgroundOptions";
}) {
  const count = useSelector(
    (state: { propertyQr: PropertyQrState }) => state.propertyQr
  );

  const [targetColor, setTargetColor] = useState<number | null>(0);

  return (
    <div className="overflow-hidden transition-all duration-300 ">
      <div className={style.container}>
        {count[storeKey].gradient.colorStops.map((el, index) => (
          <div
            key={index}
            onClick={() => {
              targetColor === index
                ? setTargetColor(null)
                : setTargetColor(index);
            }}
            className={`${style.square} ${
              index === targetColor ? style.square_target : ""
            }`}
          >
            <div
              className=" w-[80%] h-[80%] rounded-sm relative"
              style={{ backgroundColor: el.color }}
            >
              {index > 0 ? (
                <DeleteButton storeKey={storeKey} index={index} />
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
        <GetColorButton storeKey={storeKey} />
      </div>
      <ColorPicker targetColor={targetColor} storeKey={storeKey} />
    </div>
  );
}
