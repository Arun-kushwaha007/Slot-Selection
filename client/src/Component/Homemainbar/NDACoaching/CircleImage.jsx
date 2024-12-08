import React from "react";

function CircleImage({ image = null, className = "" }) {
  return (
    <div
      className={`flex justify-center p-2 rounded-full border border-amber-500 border-dashed ${className}`}
    >
      <div className="flex shrink-0 bg-amber-500 rounded-full h-[140px] w-[140px] overflow-hidden">
        {image && <img src={image} alt="Circle" className="w-full h-full object-cover" />}
      </div>
    </div>
  );
}

export default CircleImage;
