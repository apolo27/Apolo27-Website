import React from 'react';
import Slider from '../Slider/Slider';
import { Form } from '../form';
import CenteredContent from './CenteredContent/CenteredContent';

export default function Background() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: 'url(/images/BackgroundGalaxy.png)' }}
    >
      <CenteredContent />
      <div className="mt-4">
        <Form />
      </div>
    </div>
  );
}
