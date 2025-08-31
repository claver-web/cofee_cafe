const Slideshow = () => {
  return (
    <div className="relative w-full max-w mx-auto">
      <div>
        <img src="/slidshow/slide1.jpeg" className="w-full h-[400px] sm:h-[400px] md:h-[500px] lg:h-[550px] object-cover shadow-md" alt="Slide 1" />

        <div 
        className="absolute inset-0 flex items-center justify-center bg-black/30 lg:bg-black/59 p-3 lg:p-0 gap-10">

          <div>
            <h2 className="text-white-700 text-2xl lg:text-2xl font-bold">
              Welcome to Our Coffee Cafe Store Where You Make Your Memories
            </h2>
          

            <button
            className="bg-amber-800">
              Explore
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Slideshow;
