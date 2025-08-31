import React from "react";

const Slideshow = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <img
        src="/slidshow/slide1.jpeg"
        className="w-full h-[400px] sm:h-[400px] md:h-[500px] lg:h-[550px] object-cover"
        alt="Coffee Shop"
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/50 p-6">
        <div className="text-center max-w-2xl">
          {/* Heading */}
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-snug">
            Welcome to Our Coffee Café —  
            <span className="block">Where Memories Are Brewed</span>
          </h2>

          {/* Button */}
          <button className="px-6 py-3 bg-amber-800 text-white font-medium rounded-lg shadow-md hover:bg-amber-900 transition">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
