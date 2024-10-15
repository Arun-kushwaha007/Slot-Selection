import React from 'react';

function ImageComponent() {
  return (
    <main className='w-full'>
      <section className='mt-1 '>
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/27f122dc27c89e70e74270d5668dcb7b8120d6b888ac95eedc2c92faf6b2e41e?placeholderIfAbsent=true&apiKey=3092f9c385594de3820d91d8eb73538b" 
          className=" w-full h-[600px] " 
          alt="Description of the image content"
        />
      </section>
    </main>
  );
}

export default ImageComponent;