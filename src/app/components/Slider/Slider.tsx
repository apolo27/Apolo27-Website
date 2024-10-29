'use client';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const slidesData = [
  {
    id: 1,
    title: 'Slide 1',
    content: 'Contenido del Slide 1',
  },
  {
    id: 2,
    title: 'Slide 2',
    content: 'Contenido del Slide 2',
  },
  {
    id: 3,
    title: 'Slide 3',
    content: 'Contenido del Slide 3',
  },
  {
    id: 4,
    title: 'Slide 4',
    content: 'Contenido del Slide 4',
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative w-full max-w-2xl mx-auto p-4 mt-8">
      {/* Título centrado con gradiente, borde redondeado y sombra dinámica */}
      <div className="text-center text-1xl font-bold mb-4 font-poppins bg-gradient-to-b from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-full w-80 mx-auto shadow-lg shadow-indigo-500/50 transform transition-all duration-500 hover:scale-105">
        TUTORIALES Y DIY
      </div>

      {/* Contenido del Carousel */}
      <div className="overflow-hidden relative h-80 rounded-lg shadow-2xl bg-gradient-to-r from-blue-400 to-purple-500">
        {slidesData.map((slide, index) => (
          <Transition
            key={slide.id}
            as="div"
            show={index === currentIndex}
            enter="transition-opacity duration-700 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition-opacity duration-700 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            className="absolute inset-0 flex flex-col items-center justify-center text-white p-6"
          >
            <h2 className="text-3xl font-bold">{slide.title}</h2>
            <p className="text-lg">{slide.content}</p>
          </Transition>
        ))}
      </div>

      {/* Puntos de navegación rectangulares con animación de expansión */}
      <div className="absolute bottom-10 inset-x-0 flex justify-center space-x-3">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 transition-all duration-300 ${
              index === currentIndex
                ? 'w-6 bg-red-500 scale-125'
                : 'w-3 bg-gray-300'
            } rounded-full`}
          ></button>
        ))}
      </div>
    </div>
  );
}
