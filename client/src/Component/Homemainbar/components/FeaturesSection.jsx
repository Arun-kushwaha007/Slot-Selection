import React from 'react';
import FeatureCard from './FeatureCard';
import Divider from './Divider';

function FeatureSection() {
  const features = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d4a8f3c594d476110aaafe6a5d876308b9a93ad0c0ea6f805db3d7bd4d841fc3?placeholderIfAbsent=true&apiKey=3092f9c385594de3820d91d8eb73538b",
      title: "Daily Live",
      description: "Interactive classes"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d859c02401d8c9be93a8b55b9631711a7730d4d829dff169a79c0529642d8a74?placeholderIfAbsent=true&apiKey=3092f9c385594de3820d91d8eb73538b",
      title: "100+",
      description: "Tests, sample papers & notes"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/821eefebae90237182f1afb41123f1920eec7c83d8d77ec271f33d738ff0a745?placeholderIfAbsent=true&apiKey=3092f9c385594de3820d91d8eb73538b",
      title: "24 x 7",
      description: "Doubt solving sessions"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6842df068881006461e832d9bf08cb0d20e1b5acf5a8eef56a2e518730801cc2?placeholderIfAbsent=true&apiKey=3092f9c385594de3820d91d8eb73538b",
      title: "certified",
      description: "eligible faculty"
    }
  ];

  return (
    <section className="flex z-10 my-[-80px] relative justify-center max-w-[85%] mx-auto overflow-hidden overflow-x-auto gap-10 px-20 py-6 text-center bg-white rounded-md shadow-[0px_1px_8px_rgba(0,0,0,0.08)] text-neutral-800 max-md:px-5">
      {features.map((feature, index) => (
        <React.Fragment key={index}>
          <FeatureCard
            imageSrc={feature.imageSrc}
            title={feature.title}
            description={feature.description}
          />
          {index < features.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </section>
  );
}

export default FeatureSection;