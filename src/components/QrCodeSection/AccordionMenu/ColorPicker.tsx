import React from "react";
import { HexColorPicker } from "react-colorful";
import { useDispatch, useSelector } from "react-redux";
import { updateColorStore } from "@/redux/propertyQrSlice";

import { Input } from "@/components/ui/input";

export default function ColorPicker({ targetColor }: any) {
  const count = useSelector((state: any) => state.propertyQr); // fix type later
  const dispathc = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value.trim();
    // обновляем палитру всегда, но безопасно обрабатываем ошибку
    if (/^#([0-9a-fA-F]{0,6})$/.test(newColor)) {
      dispathc(
        updateColorStore({
          storeKey: "colorStops",
          targetColor,
          newColor: newColor,
        })
      );
    }
  };

  function selectColor() {
    return targetColor !== -1 ? count.colorStops[targetColor].color : "";
  }

  return (
    <div className={"flex gap-1" + (targetColor === -1 ? " absolute" : "")}>
      <HexColorPicker
        color={selectColor()}
        onChange={(newColor) =>
          dispathc(
            updateColorStore({
              storeKey: "colorStops",
              targetColor,
              newColor: newColor,
            })
          )
        }
      />
      <div className="flex flex-col justify-between  ">
        <label>
          Selected color (Hex):{" "}
          {
            <Input
              type="text"
              value={selectColor()}
              onChange={handleInputChange}
              className="w-20 inline bg-gray-200"
            />
          }
        </label>
        <label>
          {/* допилить подержку RGB*/}
          Selected color (RGB):{" "}
          {
            <Input
              type="text"
              value={selectColor()}
              onChange={handleInputChange}
              className="w-20 inline bg-gray-200"
            />
          }
        </label>
        <label>
          {/* допилить подержку HSL*/}
          Selected color (HSL):{" "}
          {
            <Input
              type="text"
              value={selectColor()}
              onChange={handleInputChange}
              className="w-20 inline bg-gray-200"
            />
          }
        </label>
        <div
          className={"w-full h-12 rounded-sm border border-black"}
          style={{ backgroundColor: selectColor() }}
        />
      </div>
    </div>
  );
}
