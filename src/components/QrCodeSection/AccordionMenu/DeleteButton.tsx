import React from "react";
import { useDispatch } from "react-redux";
import { deleteColorStore } from "@/redux/propertyQrSlice";
import { StoreKeyTypeColor } from "@/redux/types";

export default function DeleteButton({
  storeKey,
  index,
}: {
  storeKey: StoreKeyTypeColor;
  index: number;
}) {
  const dispatch = useDispatch();

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        dispatch(deleteColorStore({ storeKey: storeKey, index }));
      }}
      className="border bg-gray-200 border-black absolute top-[-4px] right-[-4px] w-4 h-4 rounded-full flex items-center justify-center"
    >
      <span className="text-red-800 relative bottom-[2.1px] left-[2.1px] rotate-45 select-none text-[24px] font-medium">
        +
      </span>
    </button>
  );
}
