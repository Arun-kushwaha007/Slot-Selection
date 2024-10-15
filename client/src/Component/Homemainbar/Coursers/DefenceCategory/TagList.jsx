import React from "react";

function TagList({ tags }) {
  return (
    <>
      {tags.map((row, rowIndex) => (
        <div key={rowIndex} className={`flex gap-2 self-start ${rowIndex === 0 ? 'mt-7' : 'mt-2.5'} text-center whitespace-nowrap`}>
          {row.map((tag, tagIndex) => (
            <span key={tagIndex} className="px-6 py-4 text-sm leading-none rounded-3xl border border-gray-300 border-solid">
              {tag}
            </span>
          ))}
        </div>
      ))}
    </>
  );
}

export default TagList;