'use client';
import React, { useState } from 'react';
import CenteredContent from './CenteredContent/CenteredContent';
import { Form } from '../form';
import Slider from '../Slider/Slider';

export default function Background() {
  // Estado para controlar la visibilidad del formulario en pantallas pequeñas
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-between min-h-screen pt-16 pb-16">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: 'url(/images/BackgroundGalaxy.png)' }}
      ></div>
      <CenteredContent />
      <Slider />

      {/* Botón para mostrar el formulario en pantallas pequeñas */}
      <div className="mt-8 mb-8 relative z-10">
        <div className="block md:hidden">
          {!isFormVisible && (
            <button
              onClick={() => setIsFormVisible(true)}
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Abrir Formulario
            </button>
          )}
        </div>

        {/* Formulario visible en pantallas medianas y grandes o cuando se abre en pantallas pequeñas */}
        <div className={`${isFormVisible ? 'block' : 'hidden'} md:block`}>
          <Form />
        </div>
      </div>
    </div>
  );
}
