import React from 'react';

const SocialIcons = () => {
  const icons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/558d79bbe99fdb8ae59b8e6c1445eadc736470b7fc02c9359350fa07fd5cf21d?placeholderIfAbsent=true&apiKey=3092f9c385594de3820d91d8eb73538b", alt: "Social icon 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ecb8a44460062965db1c2fec06ebe05cb0ae5d3e4fc8b5c0766ca67fa5d50737?placeholderIfAbsent=true&apiKey=3092f9c385594de3820d91d8eb73538b", alt: "Social icon 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1898cb29d59d9e9544185996d7b36131640594af30fece5a3004291ad214e726?placeholderIfAbsent=true&apiKey=3092f9c385594de3820d91d8eb73538b", alt: "Social icon 3" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5bb583554374c304ce6a4d7590f9af7962e184bdf017421f9809d8b4c1a2cd66?placeholderIfAbsent=true&apiKey=3092f9c385594de3820d91d8eb73538b", alt: "Social icon 4" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/65f8ceac4f36938d70511ed1c072d1e6b235216e8bf4e69d43be8b7e3444e4c3?placeholderIfAbsent=true&apiKey=3092f9c385594de3820d91d8eb73538b", alt: "Social icon 5" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d4dab3576b8def0b609b222f0021edab15a72d4bf67bcad814a6fd53e4e6f530?placeholderIfAbsent=true&apiKey=3092f9c385594de3820d91d8eb73538b", alt: "Social icon 6" }
  ];

  return (
    <div className="flex gap-3 mt-3.5">
      {icons.map((icon, index) => (
        <img
          key={index}
          loading="lazy"
          src={icon.src}
          alt={icon.alt}
          className="object-contain shrink-0 w-6 aspect-square"
        />
      ))}
    </div>
  );
};

export default SocialIcons;