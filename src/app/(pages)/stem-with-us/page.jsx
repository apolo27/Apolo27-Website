
import React from "react";
import { Form } from "../../components/form";
import Slider from "../../components/Slider/Slider";
import StemPlanet from "../../components/Stem-Planet/StemPlanet";

export default async function StemWithUs() {
  let GOOGLE_CALENDAR_URL = `https://www.googleapis.com/calendar/v3/calendars/${process.env.REACT_APP_CALENDAR_ID}/events?key=${process.env.REACT_APP_API_KEY}`

  let events = await fetch('https://api.vercel.app/blog')
  let posts = await events.json()

  console.log(posts)
  return (
    <div className="relative flex flex-col items-center justify-between min-h-screen pt-16 pb-16">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url(/images/BackgroundGalaxy.webp)" }}
      ></div>
      <StemPlanet />
      <Slider />

      {/* Botón para mostrar el formulario en pantallas pequeñas */}
      <div className="mt-8 mb-8 relative z-10 flex justify-center">
        <Form />
      </div>
    </div>
  );
}
