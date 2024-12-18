
import React from "react";
import { Form } from "../../components/form";
import Slider from "../../components/Slider/Slider";
import StemPlanet from "../../components/Stem-Planet/StemPlanet";

export default async function StemWithUs() {
  // CALENDAR
  const GOOGLE_CALENDAR_URL = `https://www.googleapis.com/calendar/v3/calendars/${process.env.REACT_APP_CALENDAR_ID}/events?key=${process.env.REACT_APP_API_KEY}`
  const eventsResponse = await fetch(GOOGLE_CALENDAR_URL).then((res) => res.json())
  const events = eventsResponse.items


  // BLOGGER
  const BLOGGER_URL = "https://www.googleapis.com/blogger/v3/blogs/4816302503592460113/posts?key=AIzaSyARD4hXPEU2klOLmJPjPDHP_tE6x7fzNOA"
  const bloggerResponse = await fetch(BLOGGER_URL).then((res) => res.json())
  const posts = bloggerResponse.items


  // YOUTUBE

  // const keywords = ['tutorial', 'diy', 'DIY'];
  // const keywordQuery = keywords.join('|');
  // const tutorialsResponse = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCuIUoZCBUGVAfDdqUMyENwfCJ9AytDMDg&channelId=UCUb8Jn33w9TgVRim_wwWoGA&q=${keywordQuery}&part=snippet,id&order=date&maxResults=4&type=video`).then((res) => res.json());
  // const tutorials =  tutorialsResponse.items
  // console.log("tutoriales: ", tutorials)

  const recentVidsResponse = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCuIUoZCBUGVAfDdqUMyENwfCJ9AytDMDg&channelId=UCUb8Jn33w9TgVRim_wwWoGA&q&part=snippet,id&order=date&maxResults=3&type=video`).then((res) => res.json());
  const recentVids = recentVidsResponse.items

  const lastVidResponse = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCuIUoZCBUGVAfDdqUMyENwfCJ9AytDMDg&channelId=UCUb8Jn33w9TgVRim_wwWoGA&q&part=snippet,id&order=date&maxResults=1&type=video`).then((res) => res.json());
  const lastVid = lastVidResponse.items

  return (
    <div className="relative flex flex-col items-center justify-between min-h-screen pt-16 pb-16">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url(/images/BackgroundGalaxy.webp)" }}
      ></div>


      <StemPlanet />





      {/* Sección de eventos */}
      <Slider slides={recentVids}/>

      {/* Botón para mostrar el formulario en pantallas pequeñas */}
      <div id="form" className="mt-8 mb-8 relative z-10 flex justify-center">
        <Form />
      </div>
    </div>
  );
}
