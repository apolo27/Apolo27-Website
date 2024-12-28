import React from 'react';
import Image from 'next/image';

export default function StemPlanet() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12 space-y-8 md:space-y-0 relative z-10 text-center md:text-left mb-8 mt-10">
      <Image
        src="/images/stem-with-us/Planet.webp"
        alt="Planet"
        width="0"
        height="0"
        sizes='100vw'
        className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full shadow-lg"
      />

      <div className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins">
        <p className="font-bold text-6xl sm:text-7xl md:text-8xl lg:text-7xl">
          Stem
        </p>
        <p className="font-extralight text-5xl sm:text-6xl md:text-7xl lg:text-6xl">
          With Us
        </p>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl mt-4">
          Un viaje hacia lo desconocido.
        </p>
      </div>
    </div>
  );
}
