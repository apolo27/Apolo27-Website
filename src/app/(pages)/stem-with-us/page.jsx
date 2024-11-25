"use client";
import React from "react";
import CenteredContent from "../../components/Background/CenteredContent/CenteredContent";
import { Form } from "../../components/form";
import Slider from "../../components/Slider/Slider";

export default function StemWithUs() {
  return (
    <div className="relative flex flex-col items-center justify-between min-h-screen pt-16 pb-16">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url(/images/BackgroundGalaxy.png)" }}
      ></div>
      <CenteredContent />
      <Slider />

      {/* Botón para mostrar el formulario en pantallas pequeñas */}
      <div className="mt-8 mb-8 relative z-10 flex justify-center">
        <Form />
      </div>
    </div>
  );
}
