import React from "react";

export default function Content({ children }) {
  return (
    <div className="flex items-start justify-center bg-gray-200 min-h-100 p-2">
      <div className=" bg-gray-400 p-2 pl-8 pr-8 rounded-full">{children}</div>
    </div>
  );
}
