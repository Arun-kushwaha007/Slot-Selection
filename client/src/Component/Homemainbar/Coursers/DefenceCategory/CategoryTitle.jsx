import React from "react";

function CategoryTitle({ title }) {
  return (
    <h2 className="self-start text-2xl font-bold leading-none text-zinc-950">
      {title}
    </h2>
  );
}

export default CategoryTitle;