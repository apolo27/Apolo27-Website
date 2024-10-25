import React from 'react';

export default function CenteredContent() {
  return (
    <div className="relative bottom-0 left-0 bg-white rounded-tr-full w-full h-full z-0 shadow-lg">
      <img
        src="/images/Planet.png"
        alt="Planet"
        className="absolute w-96 h-96 md:w-[32rem] md:h-[32rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg"
      />

      <div className="absolute left-[69%] top-[35%] text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-poppins hidden sm:block">
        <p className="font-bold text-3xl sm:text-4xl lg:text-5xl">Mars</p>
        <p className="font-extralight text-2xl sm:text-3xl lg:text-4xl">
          Planet
        </p>
        <p className="text-sm sm:text-md md:text-lg mt-2">
          Un viaje hacia lo desconocido.
        </p>

        <div className="flex items-center justify-start space-x-2 mt-4 text-sm sm:text-base md:text-lg lg:text-xl">
          <span className="">Press to Start</span>
          <img
            src="/images/icons/right-button.png"
            alt="Right Button"
            className="w-2 h-2 sm:w-4 sm:h-4 md:w-6 md:h-6"
          />
        </div>
      </div>
    </div>
  );
}
