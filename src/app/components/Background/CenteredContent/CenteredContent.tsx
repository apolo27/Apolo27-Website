import React from 'react';

export default function CenteredContent() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12 space-y-8 md:space-y-0 relative z-10 text-center md:text-left mb-8">
      <img
        src="/images/stem-with-us/Planet.png"
        alt="Planet"
        className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full shadow-lg"
      />

      <div className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins">
        <p className="font-bold text-6xl sm:text-7xl md:text-8xl lg:text-7xl">
          Mars
        </p>
        <p className="font-extralight text-5xl sm:text-6xl md:text-7xl lg:text-6xl">
          Planet
        </p>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl mt-4">
          Un viaje hacia lo desconocido.
        </p>

        <div className="flex items-center justify-center md:justify-start space-x-2 mt-6 text-lg sm:text-xl md:text-2xl lg:text-2xl">
          <span className="relative group cursor-pointer flex items-center">
            <span className="border-b-2 border-transparent group-hover:border-white transition duration-300">
              Press to Start
            </span>
            <img
              src="/images/icons/right-button.png"
              alt="Right Button"
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
