import React from 'react';
import Navbar from '../Nav/Navbar';

export default function Header() {
  return (
    <header className="w-full bg-gray-900 text-white shadow-lg ">
      <div className="container mx-auto p-4">
        <Navbar />
      </div>
    </header>
  );
}
