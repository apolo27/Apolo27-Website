"use client";

{
  /*
import Image from "next/image";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTiktok,
  faYoutube,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslations } from "next-intl";
import { LinkIcon } from "@heroicons/react/20/solid";
import { getRecentVideos } from "../stem-with-us/services/FetchYTVideos";

import { Link } from "../../../../i18n/routing";

export default function SocialMedia() {
  const [recentVideos, setRecentVideos] = useState([]);
  useEffect(() => {
    if (sessionStorage.getItem("recentVideos") === null) {
      getRecentVideos(setRecentVideos);
    } else {
      setRecentVideos(JSON.parse(sessionStorage.getItem("recentVideos")));
    }
  }, []);
  const t = useTranslations("SocialMedia");
  const OPTIONS = { dragFree: true, loop: true, containScroll: false };

  return (
    <div className="bg-apolo-empty-background lg:px-40 py-10 2xl:px-[375px]">
      <section id="hp">
        <div className="text-white grid text-center grid-cols-1 lg:grid-cols-3 lg:grid-rows-1 items-center">
          <p className="font-black text-xl lg:text-[35px]">{t("title1")}</p>
          <p className="lg:hidden font-black text-xl lg:text-[40px]">
            {t("title2")}
          </p>
          <Image
            src={"/images/social-media/phone.png"}
            alt="phone"
            width={400}
            height={200}
            className="z-10 justify-self-center"
          />
          <div className=" ">
            <p className="hidden lg:block font-black text-[40px]">
              {t("title2")}
            </p>
            <div className="flex justify-center items-center text-center gap-5 font-black md:w-full">
              <Link
                className="hover:z-10 w-1/3 lg:w-fit max-w-[286px] px-3 py-1 border-2 border-white rounded-xl
                            hover:bg-gradient-to-br from-red-700 to-violet-400"
                href={"/human-powered-team"}
              >
                {t("hpdivision")}
              </Link>
              <Link
                className="hover:z-10 w-1/3 lg:w-fit max-w-[286px] px-3 py-1 border-2 border-white rounded-xl
                hover:bg-gradient-to-br from-blue-600 to-cyan-400"
                href={"/remote-controlled-eam"}
                >
                {t("rcdivision")}
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] relative my-10">
          <p className="text-red-500 w-full text-center font-extrabold text-4xl lg:text-[50px] absolute -top-5 left-1/2 -translate-x-1/2 division-shadow uppercase">
            {t("hpdivision")}
          </p>
          <div className="p-5 lg:p-10 lg:pb-5 border-2 border-[#F12222] rounded-t-lg rounded-b-3xl space-y-3">
            <p className="max-w-[350px] mx-auto md:max-w-full m-2 lg:m-0  text-md lg:text-xl leading-loose text-white text-center ">
              {t("hpdivisionDescription")}
            </p>
            <div className="mx-10 lg:mx-0 lg:w-full bg-black border-white border-2  grid grid-flow-col justify-items-center text-white rounded-xl">
              <a
                href="https://www.tiktok.com/@apolo27rd"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:bg-gray-800 w-full h-full py-4 flex justify-center group rounded-l-xl"
              >
                <FontAwesomeIcon
                  className="group-hover:scale-110"
                  icon={faTiktok}
                  size="xl"
                />
              </a>
              <a
                href="https://www.instagram.com/apolo27_rd"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:bg-gray-800 w-full h-full py-4 flex justify-center group"
              >
                <FontAwesomeIcon
                  className="group-hover:scale-110"
                  icon={faInstagram}
                  size="xl"
                />
              </a>
              <a
                href="https://www.facebook.com/Apolo27.rd/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:bg-gray-800 w-full h-full py-4 flex justify-center group"
              >
                <FontAwesomeIcon
                  className="group-hover:scale-110"
                  icon={faFacebook}
                  size="xl"
                />
              </a>
              <a
                href="https://x.com/apolo27_rd"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:bg-gray-800 w-full h-full py-4 flex justify-center group"
              >
                <FontAwesomeIcon
                  className="group-hover:scale-110"
                  icon={faXTwitter}
                  size="xl"
                />
              </a>
              <a
                href="https://www.youtube.com/@apolo2730"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:bg-gray-800 w-full h-full py-4 flex justify-center group rounded-r-xl"
              >
                <FontAwesomeIcon
                  className="group-hover:scale-110"
                  icon={faYoutube}
                  size="xl"
                />
              </a>
            </div>
          </div>
        </div>

        <p className="font-black text-2xl lg:text-[35px] text-center text-white mb-3">
          Tiktoks, posts, videos y más
        </p>

        <div className="flex items-center flex-col lg:flex-row-reverse gap-4 justify-center w-full lg:grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 h-fit">
          <div className="z-10 h-fit space-y-2 lg:justify-self-center rounded-2xl p-5 transition-all duration-75 [background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] md:hover:[background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border-2 border-transparent animate-border">
            <p className="font-bold text-2xl md:text-3xl text-white">Topics</p>
            <ul className="space-y-2 text-xl lg:text-2xl font-medium">
              <li>• {t("hptopics.mechanics")}</li>
              <li>• {t("hptopics.design")}</li>
              <li>• {t("hptopics.roverRequirements")}</li>
              <li>• {t("hptopics.vehicleParts")}</li>
              <li>• {t("hptopics.astronomicalEvents")}</li>
              <li>• {t("hptopics.schoolVisits")}</li>
              <li>• {t("hptopics.stemEvents")}</li>
              <li>• {t("hptopics.giveaways")}</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <Image
              alt="social media post"
              width="0"
              height="0"
              src={"/images/social-media/hp/keramsi.jpg"}
              sizes="100vw"
              className="w-full h-full z-10"
            />
            <Image
              alt="social media post"
              width="0"
              height="0"
              src={"/images/social-media/hp/portamasas.jpg"}
              sizes="100vw"
              className="w-full h-full z-10"
            />
            <Image
              alt="social media post"
              width="0"
              height="0"
              src={"/images/social-media/hp/stemfest.jpg"}
              sizes="100vw"
              className="w-full h-full z-10"
            />
            <Image
              alt="social media post"
              width="0"
              height="0"
              src={"/images/social-media/hp/vehiclepart.jpg"}
              sizes="100vw"
              className="w-full h-full z-10"
            />
          </div>
        </div>

        <p className="hidden md:block text-center font-bold text-3xl text-white md:mb-5 pr-5 z-10">
          {t("youtube.invite")}{" "}
          <Link
            href="https://www.youtube.com/@apolo2730"
            className="hover:underline text-red-500 hover:text-blue-300"
          >
            {t("youtube.channelName")}
          </Link>{" "}
          <LinkIcon className="h-5 w-5 inline-block" />
        </p>

        <div className="flex flex-col md:flex-row lg:w-full lg:grid grid-cols-2 grid-rows-1 justify-center gap-5 lg:gap-0 items-center text-white my-20">
          <div className="lg:justify-self-center z-10 w-full md:w-96 2xl:w-[425px] rounded-r-[175px] rounded-l-xl bg-slate-800/80  h-full py-8 md:py-20 pl-20 mr-20 md:pl-5 md:mr-0">
            <p className="md:hidden text-center font-bold text-3xl  md:mb-5 pr-5">
              {t("youtube.invite")}{" "}
              <Link
                href="https://www.youtube.com/@apolo2730"
                className="hover:underline text-red-500 hover:text-blue-300"
              >
                {t("youtube.channelName")}
              </Link>{" "}
              <LinkIcon className="h-5 w-5 inline-block" />
            </p>
            <p className="hidden md:block pr-5 font-medium">
              {t("youtube.description")}
              <Link href="https://www.youtube.com/@apolo2730">
                {t("youtube.subscribe")}
              </Link>{" "}
              {t("youtube.continue")}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
*/
}
import Image from "next/image";
import React, { useEffect, useRef } from "react";

export default function SocialMedia() {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleVideoError = () => {
      if (videoRef.current) {
        console.error("Error en el video de Apolo 27:", videoRef.current.error);
      }
    };

    const video = videoRef.current;
    video?.addEventListener("error", handleVideoError);

    return () => {
      video?.removeEventListener("error", handleVideoError);
    };
  }, []);

  return (
    <section className="grid grid-cols-[350px_1fr_300px] gap-10 p-4 m-8">
      <Image
        width={600}
        height={600}
        src="/images/social-media/red-star.svg"
        alt="Estrella Roja"
        className="absolute top-200 -left-40 w-[1000px] h-[1000px] -z-10"
      />

      <div>
        <Image
          src="/videos/social-media/social-video.gif"
          width={100}
          height={500}
          alt="Animación Social Media"
          className="w-full h-auto object-cover rounded z-1"
          onError={() =>
            console.error("Error al cargar el GIF de Social Media")
          }
        />
      </div>

      <div className="lg:h-[400px] z-1">
        <video
          ref={videoRef}
          controls
          autoPlay
          loop
          muted
          className="w-full rounded-xl">
          <source src="/videos/social-media/Apolo-27-3d.mp4" type="video/mp4" />
          <p>Tu navegador no soporta la reproducción de video.</p>
        </video>

        <div className="grid grid-cols-2 gap-2 pt-4">
          <div className="flex flex-row items-center justify-center text-center rounded-[10px] p-2 bg-black font-bold text-white h-20 shadow-[(-16px_14px_61.3px_#2BF2EB)]">
            <a href="#" className="text-4xl">
              450
            </a>
            <a className="p-2 text-sm" href="#">
              followers
            </a>
          </div>
          <div className="flex flex-row items-center justify-center text-center rounded-[10px] p-2 bg-black font-bold text-white h-20 shadow-[(-16px_14px_61.3px_#2BF2EB)]">
            <a href="#" className="text-4xl">
              3951
            </a>
            <a className="p-2 text-sm" href="#">
              likes
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 pt-4">
          <Image
            width={100}
            height={100}
            src="/images/social-media/TikTok_logo.svg"
            alt="Logo TikTok"
            className="w-[400px] h-[93px] -z-10"
          />
        </div>
      </div>
    </section>
  );
}
