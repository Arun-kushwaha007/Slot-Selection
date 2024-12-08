import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="flex flex-col md:flex-row m-2 my-10 md:my-40 py-3 w-full md:w-4/5 mx-auto h-[60vh] bg-gray-50 p-5 rounded-md shadow-md">
      <div className="player h-full w-full md:w-2/3 flex justify-center items-center m-3">
        <iframe
          className="w-full h-full rounded-md"
          src="https://www.youtube.com/embed/8JfDAm9y_7g"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="leftside w-full md:w-1/3 flex flex-col justify-center items-start px-5 md:px-10 space-y-5">
        <h1 className="text-xl font-bold text-gray-800">Why choose us?</h1>
        <p className="text-gray-600 leading-relaxed">
          Our platform is designed to help you grow and learn. We provide you
          with the best learning experience possible.
        </p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition duration-300">
          Explore
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
