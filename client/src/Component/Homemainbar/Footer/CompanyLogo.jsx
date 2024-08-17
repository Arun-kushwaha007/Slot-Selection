import React from 'react';

const CompanyLogo = () => {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col justify-center items-center px-1 w-14 h-14 rounded-full bg-zinc-300">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5dec8bcad67629789f77ab6cda461d64b8a64a8f84573ced1c990a9fc79c7b74?placeholderIfAbsent=true&apiKey=3092f9c385594de3820d91d8eb73538b" alt="PPDT CLASSES logo" className="object-contain w-12 aspect-square" />
      </div>
      <div className="my-auto text-base font-bold leading-relaxed basis-auto text-neutral-800">
        PPDT CLASSES
      </div>
    </div>
  );
};

export default CompanyLogo;