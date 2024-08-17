import React from 'react';

function ImageComponent() {
  return (
    <main>
      <section>
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/27f122dc27c89e70e74270d5668dcb7b8120d6b888ac95eedc2c92faf6b2e41e?placeholderIfAbsent=true&apiKey=3092f9c385594de3820d91d8eb73538b" 
          className="object-contain w-full aspect-[2.06]" 
          alt="Description of the image content"
        />
      </section>
    </main>
  );
}

export default ImageComponent;