import React from 'react';

function FeatureCard({ imageSrc, title, description }) {
  return (
    <div className="flex flex-col items-center">
      <img loading="lazy" src={imageSrc} alt={title} className="object-contain w-12 aspect-square" />
      <h3 className="mt-3.5 text-lg font-semibold leading-loose">{title}</h3>
      <p className="self-stretch text-sm font-medium leading-loose">{description}</p>
    </div>
  );
}

export default FeatureCard;