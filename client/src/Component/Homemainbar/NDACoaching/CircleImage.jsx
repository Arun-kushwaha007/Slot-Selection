import React from "react";

function CircleImage({ className = "" }) {
  return (
    <div className={`flex flex-col justify-center p-2.5 rounded-full border border-amber-500 border-dashed ${className}`}>
      <div className="flex shrink-0 bg-amber-500 rounded-full h-[140px] w-[140px]" />
    </div>
  );
}

export default CircleImage;