import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-10 font-poppins">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
          <div className="flex flex-col items-center md:items-start flex-1">
            <div className="flex items-center mb-6">
              <img src="gray-logo.png" alt="logo" className="h-12 mr-4" />
              <h5 className="text-xl font-semibold">APOLO 27</h5>
            </div>
            <p className="text-base mb-6 text-center md:text-left w-80">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
              doloremque qui unde quam ab ex cum itaque nobis placeat distinctio
              quaerat officiis, amet iure. Sed nihil tenetur ducimus vitae
              molestias.
            </p>

            <div className="flex space-x-6">
              {['twitter', 'instagram', 'tiktok', 'youtube'].map((icon) => (
                <div
                  key={icon}
                  className="bg-blue-600 rounded-full p-2 hover:bg-transparent transition-colors duration-300"
                >
                  <img
                    src={`${icon}.svg`}
                    alt={icon}
                    className="h-6 w-6 text-white hover:text-blue-600"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start flex-1">
            <h6 className="text-xl font-semibold mb-6">Páginas</h6>
            <div className="space-y-3 text-center md:text-left">
              {[
                'Inicio',
                'Servicios',
                'Sobre Nosotros',
                'Contacto',
                'Blog',
              ].map((page) => (
                <div key={page}>
                  <a href="#" className="text-base hover:text-red-500">
                    {page}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <div className="relative w-4/5">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-transparent" />
          <p className="text-center text-base mt-2">
            @Designed by Telemetry Team
          </p>
        </div>
      </div>
    </footer>
  );
}
