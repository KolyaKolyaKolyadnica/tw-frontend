import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { rotationGradient } from "@/redux/propertyQrSlice";
import style from "./style.module.css";
import { RootState } from "@/redux/store";

export default function RotateButton({
  storeKey,
}: {
  storeKey:
    | "dotsOptions"
    | "cornersSquareOptions"
    | "cornersDotOptions"
    | "backgroundOptions";
}) {
  const reduxOptions = useSelector((state: RootState) => state.propertyQr);

  const dispatch = useDispatch();

  function getRotationAngle(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = event.clientX - centerX;
    const deltaY = event.clientY - centerY;

    // Угол в радианах → градусов
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

    return Math.round(angle);
  }
  return (
    <button
      className={style.square}
      onMouseMove={(event) => {
        dispatch(
          rotationGradient({
            storeKey: storeKey,
            rotationAngle: getRotationAngle(event),
          })
        );
      }}
    >
      <div className="grid w-12 h-12">
        <div
          className="
      row-start-1 col-start-1 
      flex items-center justify-end 
      rounded-full border-blue-800 border-[3px] 
      origin-center 
      w-12 h-12
    "
          style={{
            transform: `rotate(${reduxOptions[storeKey].gradient.rotation}deg)`,
          }}
        >
          <div className="rounded-full border-blue-800 border-[3px] w-4 h-4"></div>
        </div>

        <div className="row-start-1 col-start-1 self-center justify-self-center">
          {reduxOptions[storeKey].gradient.rotation}
        </div>
      </div>
    </button>
  );
}
