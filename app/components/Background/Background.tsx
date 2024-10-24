import React from 'react';

export default function Background() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: 'url(BackgroundGalaxy.png)' }}
    >
      <div className="absolute bottom-0 left-0 bg-white rounded-tr-full w-64 h-64 z-0 shadow-lg"></div>

      <img
        src="Planet.png"
        alt="Planet"
        className="absolute w-96 h-96 md:w-[32rem] md:h-[32rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg"
      />

      <div className="absolute left-1/3 top-1/4 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins">
        <p className="font-bold">Explorando el universo</p>
        <p className="text-lg sm:text-xl md:text-2xl mt-2">
          Un viaje hacia lo desconocido.
        </p>
      </div>
    </div>
  );
}
