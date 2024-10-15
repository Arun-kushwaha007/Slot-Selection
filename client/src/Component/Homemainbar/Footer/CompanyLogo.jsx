import React from 'react';

const CompanyLogo = () => {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col justify-center items-center px-1 w-14 h-14 rounded-full bg-zinc-300">
        <img loading="lazy" src=" " alt="PPDT CLASSES logo" className="object-contain w-12 aspect-square" />
      </div>
      <div className="my-auto text-base font-bold leading-relaxed basis-auto text-neutral-800">
        PPDT CLASSES
      </div>
    </div>
  );
};

export default CompanyLogo;