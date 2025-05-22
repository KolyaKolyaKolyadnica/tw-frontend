import React from "react";
import { HexColorPicker } from "react-colorful";

import { Input } from "@/components/ui/input";

export default function ColorPicker({
  colorPalette,
  setColorPalette,
  targetColor,
}: any) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value.trim();
    // обновляем палитру всегда, но безопасно обрабатываем ошибку
    if (/^#([0-9a-fA-F]{0,6})$/.test(newColor)) {
      setColorPaletteIndex(newColor);
    }
  };

  function setColorPaletteIndex(newColor: string) {
    setColorPalette((prev: string[]) =>
      prev.map((el, i) => (i === targetColor ? newColor : el))
    );
  }

  return (
    <div className="flex gap-1">
      <HexColorPicker
        color={colorPalette[targetColor]}
        onChange={function setColorPaletteIndex(newColor: string) {
          setColorPalette((prev: string[]) =>
            prev.map((el, i) => (i === targetColor ? newColor : el))
          );
        }}
      />
      <div className="flex flex-col justify-between  ">
        <label>
          Selected color (Hex):{" "}
          {
            <Input
              type="text"
              value={colorPalette[targetColor] ?? ""}
              onChange={handleInputChange}
              placeholder={colorPalette[targetColor]}
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
              value={colorPalette[targetColor] ?? ""}
              onChange={handleInputChange}
              placeholder={colorPalette[targetColor]}
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
              value={colorPalette[targetColor] ?? ""}
              onChange={handleInputChange}
              placeholder={colorPalette[targetColor]}
              className="w-20 inline bg-gray-200"
            />
          }
        </label>
        <div
          className={"w-full h-12 rounded-sm border border-black"}
          style={{ backgroundColor: colorPalette[targetColor] }}
        />
      </div>
    </div>
  );
}
