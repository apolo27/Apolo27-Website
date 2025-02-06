"use client";
import "./StemWithUs.css";
import "./BigCalendar.css";
import "./MobileStemWithUs.css";

import React, { useState, useEffect } from "react";
import { Form } from "../../components/form";
import { Calendar, momentLocalizer } from "react-big-calendar";

import moment from "moment";
import "moment/locale/en-gb";
import "moment/locale/es";
const localizer = momentLocalizer(moment);

import { getEvents } from "./services/FetchCalendarEvents";
import { getRecentVideos } from "./services/FetchYTVideos";
import { getBlogs } from "./services/FetchBlogs";
import Image from "next/image";
import { Link } from "../../../../i18n/routing";

import { LinkIcon } from "@heroicons/react/24/outline";

import { useTranslations } from "next-intl";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export default function StemWithUs() {
  const t = useTranslations("StemWithUs");
  const [events, setEvents] = useState([]);
  const [eventToShow, setEventToShow] = useState(undefined);
  const [recentVideos, setRecentVideos] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const handleSelectedEvent = (event) => {
    setEventToShow(event);
  };

  useEffect(() => {
    if (sessionStorage.getItem("events") === null) {
      getEvents(setEvents);
    } else {
      setEvents(JSON.parse(sessionStorage.getItem("events")));
    }

    if (sessionStorage.getItem("recentVideos") === null) {
      getRecentVideos(setRecentVideos);
    } else {
      setRecentVideos(JSON.parse(sessionStorage.getItem("recentVideos")));
    }

    if (sessionStorage.getItem("blogs") === null) {
      getBlogs(setBlogs);
    } else {
      setBlogs(JSON.parse(sessionStorage.getItem("blogs")));
    }
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-between min-h-screen pt-16 pb-16">
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12 relative z-10 text-center md:text-left mb-8 mt-10">
        <Image
          src="/images/stem-with-us/Planet.webp"
          alt="Planet"
          width="0"
          height="0"
          sizes="100vw"
          className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full shadow-lg"
        />

        <div className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins">
          <p className="font-bold text-6xl sm:text-7xl md:text-8xl lg:text-7xl">
            Stem
          </p>
          <p className="font-extralight text-5xl sm:text-6xl md:text-7xl lg:text-6xl">
            With Us
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl mt-4">
            {t("subtitle")}
          </p>
        </div>
      </div>

      <section
        id="blogs"
        className="mb-10 z-10 w-full h-fit  text-white md:bg-slate-900 md:bg-opacity-85 md:py-10 3xl:bg-transparent 3xl:py-0 3xl:mr-0 3xl:rounded-r-none"
      >
        <div className="flex gap-10">

        <div className="flex justify-center mb-5 bg-teal-50 text-slate-900   bg-opacity-85 p-4 rounded-r-[50px] w-3/5">
          <p className="font-bold text-4xl">{t("blogs.title")}</p>
        </div>
        <Link href="/blog" className="bg-teal-50 text-slate-900 bg-opacity-85 p-4 rounded-[50px] w-fit h-fit flex items-center gap-5 group">
          <p className="font-bold text-2xl">See more</p>
          <ArrowRightIcon className="h-10 w-10 inline-block group-hover:animate-bounceX" />
        </Link>
        </div>
        <div className="flex flex-col items-center md:flex-row justify-center gap-5">
          {blogs.slice(0, 3).map((blog, i) => {
            return (
              <div
                key={i}
                className="z-10 w-80 bg-slate-800 md:bg-black bg-opacity-70 p-4 pb-6 rounded-2xl active:animate-pulse"
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
                <div className="space-y-3 mb-5 md:mb-2">
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
                  <p className="hidden md:block h-52 overflow-hidden  text-ellipsis">
                    {blog.content[2].slice(0, 225)}...
                  </p>
                </div>

                <Link
                  className="text-black bg-white px-3 py-2 rounded-xl font-semibold hover:bg-slate-100 "
                  href={blog.blogURL}
                >
                  {t("blogs.readMore")}
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
        <p className="text-3xl font-bold ">{t("calendar.title")}</p>
        <div className=" relative flex justify-center flex-col lg:flex-row items-center gap-4">
          <Calendar
            className="calendario max-w-[800px] h-[500px] lg:h-[700px] w-full 3xl:max-w-full 3xl:w-[1000px]"
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
            <div className="bg-black bg-opacity-70 p-4 rounded-2xl w-5/6 lg:w-2/6 h-fit border-2 border-white">
              <div className="event space-y-2">
                <p className="font-bold text-3xl">{eventToShow.title}</p>
                <p className="font-semibold text-xl">{eventToShow.location}</p>
                <p className="text-md">
                  {t("calendar.event.start")}{" "}
                  {new Date(eventToShow.start).toLocaleString("en", {
                    year: "numeric",
                    day: "numeric",
                    month: "long",
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </p>
                <p className="text-xl">
                  {t("calendar.event.end")}{" "}
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
                    className="px-4 py-2 bg-white font-semibold text-black text-xl rounded-md hover:slate-200"
                  >
                    {t("calendar.follow")}
                  </Link>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="z-10 flex flex-col md:flex-row justify-between gap-5 md:gap-20 items-center text-white my-20">
        <div className="w-full md:w-96 2xl:w-[425px] rounded-r-[175px] rounded-l-xl bg-slate-800 bg-opacity-70 h-full py-8 md:py-20 pl-20 mr-20 md:pl-5 md:mr-0">
          <p className="align-middle font-bold text-3xl md:text-4xl md:mb-5 pr-5">
            {t("youtube.invite")}{" "}
            <Link
              href="https://www.youtube.com/@apolo2730"
              className="hover:underline hover:text-blue-300"
            >
              {t("youtube.channelName")}
            </Link>{" "}
            <LinkIcon className="h-5 w-5 inline-block" />
          </p>
          <p className="hidden md:block pr-5">
            {t("youtube.description")}
            <Link href="https://www.youtube.com/@apolo2730">
              {t("youtube.subscribe")}
            </Link>{" "}
            {t("youtube.continue")}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-5 mx-8">
          {recentVideos.map((video, i) => (
            <div
              key={i}
              className="relative w-fit md:w-64 rounded-2xl hover:cursor-pointer hover:scale-105 transition-all duration-75 [background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] md:hover:[background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border-2 border-transparent animate-border"
            >
              <p className="md:hidden absolute -top-2 -left-2 text-black bg-white font-bold rounded-full px-3 py-1 z-10 animate-pulse">{ i + 1 }</p>
              <Image
                src={video.thumbnail}
                alt={video.title}
                width="0"
                height="0"
                sizes="100vw"
                style={{ objectFit: "cover" }}
                className="w-full h-32 md:w-[250px] md:h-[75] rounded-t-2xl"
              />
              <p className="font-semibold pb-5 pt-5 md:pt-2 px-5 bg-slate-950 rounded-b-2xl">
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div
        id="form"
        className="mt-8 mb-8 relative z-10 flex flex-col text-center text-white justify-center items-center"
      >
        <p className="text-3xl xs:text-4xl lg:text-5xl font-bold">{t("form.title")}</p>
        <p className="text-2xl xs:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-violet-400 via-cyan-500 to-red-400">
          {t("form.subtitle")}
        </p>
        <Form />
      </div>
    </div>
  );
}
