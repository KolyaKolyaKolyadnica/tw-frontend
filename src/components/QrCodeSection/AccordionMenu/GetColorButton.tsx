import React from "react";
import { useDispatch } from "react-redux";
import { getColorStore } from "@/redux/propertyQrSlice";
import style from "./style.module.css";
import { StoreKeyTypeColor } from "@/redux/types";

export default function GetColorButton({
  storeKey,
}: {
  storeKey: StoreKeyTypeColor;
}) {
  const dispatch = useDispatch();

  return (
    <button
      className={style.square}
      onClick={() => {
        dispatch(getColorStore({ storeKey: storeKey }));
      }}
    >
      <span className="transform text-blue-800 select-none translate-y-[-7%] text-[58px] font-medium">
        +
      </span>
    </button>
  );
}
