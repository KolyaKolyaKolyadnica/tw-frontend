import React from "react";
import style from "./style.module.css";

type DeleteButtonProps = {
  setColorPalette: React.Dispatch<React.SetStateAction<string[]>>;
  index: number;
};

export function DeleteButton({ setColorPalette, index }: DeleteButtonProps) {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation(); // чтобы не срабатывало событие выбора цвета
        setColorPalette((prev) => [
          ...prev.slice(0, index),
          ...prev.slice(index + 1),
        ]);
      }}
      className="border bg-gray-200 border-black absolute top-[-4px] right-[-4px] w-4 h-4 rounded-full flex items-center justify-center"
    >
      <span className="text-red-800 relative bottom-[2.1px] left-[2.1px] rotate-45 select-none text-[24px] font-medium">
        +
      </span>
    </div>
  );
}

type AddColorButtonProps = {
  colorPalette: string[];
  setColorPalette: React.Dispatch<React.SetStateAction<string[]>>;
};

export function AddColorButton({
  colorPalette,
  setColorPalette,
}: AddColorButtonProps) {
  return (
    <div
      className={style.square}
      onClick={() => {
        if (colorPalette.length > 0) {
          setColorPalette((prev) => [
            ...prev,
            colorPalette[colorPalette.length - 1],
          ]);
        }
      }}
    >
      <span className="transform text-blue-800 select-none translate-y-[-7%] text-[58px] font-medium">
        +
      </span>
    </div>
  );
}
