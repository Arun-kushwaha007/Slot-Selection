import React from "react";

function ExploreButton() {
  return (
    <button className="flex gap-3.5 mt-6 text-base leading-relaxed text-neutral-800">
      <span className="grow my-auto">Explore Category</span>
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/928ac6c493253c3558b8dea723fc5729fdb4d01526738a2a8ee8bce064d19af8?placeholderIfAbsent=true&apiKey=3092f9c385594de3820d91d8eb73538b" 
        alt=""
        className="object-contain shrink-0 w-12 aspect-[1.5] rounded-[100px]" 
      />
    </button>
  );
}

export default ExploreButton;