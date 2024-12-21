"use client";
import "./StemWithUs.css";
import "./BigCalendar.css";
import "./MobileStemWithUs.css";

import React, { useState, useEffect } from "react";
import { Form } from "../../components/form";
import Slider from "../../components/Slider/Slider";
import StemPlanet from "../../components/Stem-Planet/StemPlanet";
import { Calendar, momentLocalizer } from "react-big-calendar";

import moment from "moment";
import "moment/locale/en-gb";
import "moment/locale/es";
const localizer = momentLocalizer(moment);

import { getEvents } from "./services/FetchCalendarEvents";
import { getTutorials } from "./services/FetchYTVideos";
import { getRecentVideos } from "./services/FetchYTVideos";
import { getLastVideo } from "./services/FetchYTVideos";
import { getBlogs } from "./services/FetchBlogs";
import Image from "next/image";
import Link from "next/link";

export default function StemWithUs() {
  const [events, setEvents] = useState([]);
  const [eventToShow, setEventToShow] = useState(undefined);
  const [tutorials, setTutorials] = useState([]);
  const [recentVideos, setRecentVideos] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const handleSelectedEvent = (event) => {
    setEventToShow(event);
  };

  useEffect(() => {
    if (sessionStorage.getItem("events") === null) {
      getEvents(setEvents);
      // console.log("api call events");
    } else {
      setEvents(JSON.parse(sessionStorage.getItem("events")));
    }

    if (sessionStorage.getItem("tutorials") === null) {
      getTutorials(setTutorials);
      // console.log("api call tutorials");
    } else {
      setTutorials(JSON.parse(sessionStorage.getItem("tutorials")));
    }

    if (sessionStorage.getItem("recentVideos") === null) {
      getRecentVideos(setRecentVideos);
      // console.log("api call recent videos");
    } else {
      setRecentVideos(JSON.parse(sessionStorage.getItem("recentVideos")));
    }

    if (sessionStorage.getItem("blogs") === null) {
      getBlogs(setBlogs);
      // console.log("api call blogs");
    } else {
      setBlogs(JSON.parse(sessionStorage.getItem("blogs")));
    }
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-between min-h-screen pt-16 pb-16">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"></div>

      <StemPlanet />

      <section
        id="blogs"
        className="mb-10 z-10 w-full h-fit  text-white xl:bg-slate-900 xl:bg-opacity-85 xl:py-10  xl:rounded-r-[35px] xl:overflow-clip 3xl:bg-transparent 3xl:py-0 3xl:mr-0 3xl:rounded-r-none"
      >
        <div className="flex justify-center mb-5 bg-teal-50 text-slate-900   bg-opacity-85 p-4 rounded-r-[50px] w-3/5">
          <p className="font-bold text-4xl">Our Recent Blogs</p>
        </div>
        <div className="flex justify-center gap-5">
          {blogs.slice(0, 3).map((blog, i) => {
            return (
              <div
                key={i}
                className="z-10 w-80 bg-black bg-opacity-70 p-4 pb-6 rounded-2xl active:animate-pulse"
              >
                <Image
                  src={blog.imgURL}
                  alt={blog.title}
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                  className="w-full h-48 z-10 rounded-2xl"
                />
                <div className="space-y-3 mb-2">
                  <p className="font-semibold">
                    {new Date(blog.date).toLocaleString("es", {
                      year: "numeric",
                      day: "numeric",
                      month: "long",
                      hour: "numeric",
                      minute: "numeric",
                    })}
                  </p>
                  <p className="font-semibold text-2xl">{blog.title}</p>
                  <p className=" h-52 overflow-hidden  text-ellipsis">
                    {blog.content[2].slice(0, 225)}...
                  </p>
                </div>

                <Link
                  className="text-black bg-white px-3 py-2 rounded-xl font-semibold hover:bg-slate-100 "
                  href={blog.blogURL}
                >
                  Leer más
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <section
        id="calendar"
        className="relative z-10 mt-20 w-full text-white text-center"
      >
        <p className="text-3xl font-bold ">Apolo 27&apos;s Events</p>
        <div className="calendar_container items-center gap-4">
          <Calendar
            className="calendario max-w-[800px] h-[700px] w-full 3xl:max-w-full 3xl:w-[1000px]"
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            toolbar={true}
            views={["month", "agenda"]}
            onSelectSlot={(e) => handleSelectedEvent(e)}
            onSelectEvent={(e) => handleSelectedEvent(e)}
          />
          {eventToShow !== undefined && (
            <div className="bg-black bg-opacity-70 p-4 rounded-2xl w-2/6 h-fit border-2 border-white">
              <div className="event space-y-2">
                <p className="font-bold text-3xl">{eventToShow.title}</p>
                <p className="font-semibold text-xl">{eventToShow.location}</p>
                <p className="text-lg">
                  Starts:{" "}
                  {new Date(eventToShow.start).toLocaleString("en", {
                    year: "numeric",
                    day: "numeric",
                    month: "long",
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </p>
                <p className="text-xl">
                  Ends:{" "}
                  {new Date(eventToShow.end).toLocaleString("en", {
                    year: "numeric",
                    day: "numeric",
                    month: "long",
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </p>
                <button>
                  <Link
                    href={eventToShow.htmlLink}
                    className="px-4 py-2 bg-white font-semibold text-black text-xl rounded-lg hover:slate-200"
                  >
                    Follow
                  </Link>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Sección de eventos */}
      <Slider />

      {/* Botón para mostrar el formulario en pantallas pequeñas */}
      <div id="form" className="mt-8 mb-8 relative z-10 flex justify-center">
        <Form />
      </div>
    </div>
  );
}
