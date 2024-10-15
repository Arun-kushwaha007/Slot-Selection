import React from "react";
import CategoryTitle from "./CategoryTitle";
import TagList from "./TagList";
import ExploreButton from "./ExploreButton";
import CategoryIcon from "./CategoryIcon";

function DefenceCategory() {
  const tags = [
    ["NDA", "CDS"],
    ["AFCAT", "Agniveer"]
  ];

  return (
    <section className="flex overflow-hidden gap-10 pl-6 rounded-md border border-solid bg-white bg-opacity-0 border-zinc-200 max-w-[373px] shadow-[0px_1px_8px_rgba(0,0,0,0.08)]">
      <div className="flex flex-col my-auto text-neutral-700">
        <CategoryTitle title="Defence" />
        <TagList tags={tags} />
        <ExploreButton />
      </div>
      <CategoryIcon />
    </section>
  );
}

export default DefenceCategory;