import React from 'react';

export default function Background() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: 'url(BackgroundGalaxy.png)' }}
    >
      {/* Div para la abertura en la parte inferior izquierda */}
      <div className="absolute bottom-0 left-0 bg-white rounded-tr-full w-64 h-64 z-0 shadow-lg"></div>

      <img
        src="Planet.png"
        alt="Planet"
        className="absolute w-96 h-96 md:w-[32rem] md:h-[32rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg" // Aumenta el tamaño del planeta y aplica border-radius
      />
    </div>
  );
}
