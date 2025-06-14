import React from "react";
import { HexColorPicker } from "react-colorful";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { StoreKeyTypeColor } from "@/redux/types";

import { updateColorStore } from "@/redux/propertyQrSlice";

import { Input } from "@/components/ui/input";

export default function ColorPicker({
  targetColor,
  storeKey,
}: {
  targetColor: number | null;
  storeKey: StoreKeyTypeColor;
}) {
  const count = useSelector((state: RootState) => state.propertyQr);
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value.trim();

    const isValidHexColor = /^#([0-9a-fA-F]{0,6})$/.test(newColor);
    if (isValidHexColor) {
      dispatch(
        updateColorStore({
          storeKey: storeKey,
          targetColor,
          newColor: newColor,
        })
      );
    }
  };

  const getColor = () => {
    return targetColor !== null
      ? count[storeKey].gradient.colorStops[targetColor].color
      : "";
  };

  return (
    <div className={"flex gap-1" + (targetColor === null ? " hidden" : "")}>
      <HexColorPicker
        color={getColor()}
        onChange={(newColor) =>
          dispatch(
            updateColorStore({
              storeKey: storeKey,
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
              value={getColor()}
              onChange={handleInputChange}
              className="w-20 inline bg-gray-200"
            />
          }
        </label>
        <label>
          {/* {"*to_do допилить подержку RGB*"} */}
          Selected color (RGB):{" "}
          {
            <Input
              type="text"
              value={getColor()}
              onChange={handleInputChange}
              className="w-20 inline bg-gray-200"
            />
          }
        </label>
        <label>
          {/* {"*to_do допилить подержку HSL*"} */}
          Selected color (HSL):{" "}
          {
            <Input
              type="text"
              value={getColor()}
              onChange={handleInputChange}
              className="w-20 inline bg-gray-200"
            />
          }
        </label>
        <div
          className={"w-full h-12 rounded-sm border border-black"}
          style={{ backgroundColor: getColor() }}
        />
      </div>
    </div>
  );
}
