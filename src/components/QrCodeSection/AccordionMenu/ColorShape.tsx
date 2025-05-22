import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setColorStops } from "@/components/redux/propertyQrSlice";

import { DeleteButton, AddColorButton } from "./Delete&AddColor_Bottun";
import ColorPicker from "./ColorPicker";

import style from "./style.module.css";
type ColorStop = {
  offset: number;
  color: string;
};

type PropertyQrState = {
  colorStops: ColorStop[];
  // остальные поля: text, shape, logo ...
};
export default function ColorShape() {
  const count = useSelector(
    (state: { propertyQr: PropertyQrState }) => state.propertyQr
  ); // fix type later
  const [colorPalette, setColorPalette] = useState<string[]>([]);
  const [targetColor, setTargetColor] = useState(0);
  const [angle, setAngle] = useState(90); // угол по умолчанию

  const dispatch = useDispatch();
  useEffect(() => {
    const colors = count.colorStops.map((item) => item.color);
    setColorPalette(colors);
  }, []);

  useEffect(() => {
    let colorStops = [];
    if (colorPalette.length >= 2) {
      const step = 1 / (colorPalette.length - 1);
      colorStops = colorPalette.map((color, index) => ({
        offset: step * index,
        color,
      }));
    } else {
      colorStops = [
        {
          offset: 1,
          color: colorPalette,
        },
      ];
    }
    dispatch(setColorStops(colorStops));
  }, [colorPalette]);

  return (
    <div>
      <div className={style.container}>
        {colorPalette.map((el, index) => (
          <div
            key={index}
            onClick={() => {
              setTargetColor(index);
            }}
            className={`${style.square} ${
              index === targetColor ? style.square_target : ""
            }`}
          >
            <div
              className=" w-[80%] h-[80%] rounded-sm relative"
              style={{ backgroundColor: el }}
            >
              {index > 0 ? (
                <DeleteButton setColorPalette={setColorPalette} index={index} />
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
        <AddColorButton
          colorPalette={colorPalette}
          setColorPalette={setColorPalette}
        />
      </div>
      <ColorPicker
        colorPalette={colorPalette}
        setColorPalette={setColorPalette}
        targetColor={targetColor}
      />
    </div>
  );
}
