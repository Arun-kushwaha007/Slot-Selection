import React from 'react';

const ResourcesPanel = () => {
  return (
    <div>
      <section className="flex flex-col justify-center items-center mt-[-80px]">
        <h1 className="font-semibold text-3xl text-gray-800">Study Resources</h1>
        <p className="mb-5 text-gray-600 text-center">
          A diverse array of learning materials to enhance your educational journey.
        </p>
        <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
          {/** Card: PIQ Form */}
          <article className="flex flex-col items-start px-6 py-7 bg-sky-50 rounded-lg shadow-lg max-w-[360px]">
            <h2 className="text-2xl font-semibold text-neutral-800">PIQ FORM</h2>
            <p className="mt-4 text-sm text-neutral-500">
              Use Physics Wallah's detailed study materials that simplify complex ideas into 
              easily understandable language.
            </p>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/acc4249c6c37236227e11e9613c3338ee8e21fe8ea92a3cb429333468b999386?placeholderIfAbsent=true&apiKey=3092f9c385594de3820d91d8eb73538b"
              alt="Physics Wallah study materials illustration"
              className="object-contain self-stretch mt-4 w-full rounded-md"
              loading="lazy"
            />
          </article>

          {/** Card: Reference Books */}
          <article className="flex flex-col px-6 py-7 bg-orange-50 rounded-lg shadow-lg max-w-[360px]">
            <h2 className="text-2xl font-semibold text-neutral-800">Reference Books</h2>
            <p className="mt-4 text-sm text-neutral-500">
              Our experts have created thorough study materials that break down 
              complicated concepts into easily understandable content.
            </p>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/787ce111fe2f3080906fe63ff4fe2839c301affca9a26725b21e78ec7eec047f?placeholderIfAbsent=true&apiKey=3092f9c385594de3820d91d8eb73538b"
              alt="Reference books illustration"
              className="object-contain mt-4 w-full rounded-md"
            />
          </article>

          {/** Card: Important Documents */}
          <article className="flex flex-col px-6 py-7 bg-emerald-50 rounded-lg shadow-lg max-w-[360px]">
            <h2 className="text-2xl font-semibold text-neutral-800">Important Documents</h2>
            <p className="mt-4 text-sm text-neutral-500">
              Unlock academic excellence with Physics Wallah's NCERT Solutions which provides 
              step-by-step solutions.
            </p>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa526c296c3d077e9ce6a9a899f0a0fadff18ac764b48c2614b47e47519f6270?placeholderIfAbsent=true&apiKey=3092f9c385594de3820d91d8eb73538b"
              alt="Physics Wallah NCERT Solutions"
              className="object-contain self-stretch mt-4 w-full rounded-md"
              loading="lazy"
            />
          </article>

          {/** Card: Previous PPDT Question */}
          <article className="flex flex-col px-6 py-7 bg-violet-50 rounded-lg shadow-lg max-w-[360px]">
            <h2 className="text-2xl font-semibold text-neutral-800">Previous PPDT Question</h2>
            <p className="mt-4 text-sm text-neutral-500">
              Our experts have created thorough study materials that break down complicated 
              concepts into easily understandable content.
            </p>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/787ce111fe2f3080906fe63ff4fe2839c301affca9a26725b21e78ec7eec047f?placeholderIfAbsent=true&apiKey=3092f9c385594de3820d91d8eb73538b"
              alt="Study materials visualization"
              className="object-contain mt-4 w-full rounded-md"
            />
          </article>

          {/** Card: Preparation Tips */}
          <article className="flex flex-col px-6 py-7 bg-slate-50 rounded-lg shadow-lg max-w-[360px]">
            <h2 className="text-2xl font-semibold text-neutral-800">Preparation Tips</h2>
            <p className="mt-4 text-sm text-neutral-500">
              Unlock academic excellence with Physics Wallah's NCERT Solutions which provides 
              step-by-step solutions.
            </p>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa526c296c3d077e9ce6a9a899f0a0fadff18ac764b48c2614b47e47519f6270?placeholderIfAbsent=true&apiKey=3092f9c385594de3820d91d8eb73538b"
              alt="Illustration of Physics Wallah's NCERT Solutions"
              className="object-contain self-stretch mt-4 w-full rounded-md"
            />
          </article>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPanel;
