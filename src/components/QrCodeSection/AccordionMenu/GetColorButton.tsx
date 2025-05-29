import React from "react";
import { useDispatch } from "react-redux";
import { pushColorStore } from "@/redux/propertyQrSlice";
import style from "./style.module.css";

export default function GetColorButton({
  storeKey,
}: {
  storeKey: "dotsOptions" | "cornersSquareOptions" | "backgroundOptions";
}) {
  const dispatch = useDispatch();

  return (
    <button
      className={style.square}
      onClick={() => {
        dispatch(pushColorStore({ storeKey: storeKey }));
      }}
    >
      <span className="transform text-blue-800 select-none translate-y-[-7%] text-[58px] font-medium">
        +
      </span>
    </button>
  );
}
