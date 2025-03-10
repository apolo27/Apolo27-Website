"use client";
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
          <div className="lg:justify-self-center grid grid-cols-1  grid-rows-2 gap-5 mx-8">
            {recentVideos.slice(0, 2).map((video, i) => (
              <div
                className="relative max-w-[344px] md:max-w-full  md:flex items-center gap-4 md:p-4  rounded-2xl hover:cursor-pointer hover:scale-105 transition-all duration-75 [background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] md:hover:[background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border-2 border-transparent animate-border"
                key={i}
              >
                <p className="md:hidden absolute -top-2 -left-2 text-black bg-white font-bold rounded-full px-3 py-1 z-10 animate-pulse">
                  {i + 1}
                </p>
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                  className="w-full h-32 md:w-[250px] md:h-[75] rounded-t-2xl"
                />
                <div className="bg-slate-950 rounded-b-xl md:rounded-2xl  flex items-center">
                  <p className="font-semibold pb-5 pt-5 md:pt-0 md:pb-0 px-5">
                    {video.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="my-10 mx-5" />

      <section id="rc" className="text-white space-y-3 my-10">
        <div className="max-w-[1200px] relative my-10">
          <p className="text-cyan-500 w-full text-center font-extrabold text-4xl lg:text-[50px] absolute -top-5  left-1/2 -translate-x-1/2 division-shadow uppercase">
            {t("rcdivision")}
          </p>
          <div className="m-2 lg:m-0 p-5 lg:p-10 lg:pb-5 border-2 border-cyan-600 rounded-t-lg rounded-b-3xl space-y-3">
            <p className="max-w-[350px] mx-auto md:max-w-full  text-md lg:text-xl leading-loose text-white text-center ">
              {t("rcdivisionDescription")}
            </p>
            <div className="mx-10 lg:mx-0 lg:w-full bg-black border-white border-2  grid grid-flow-col justify-items-center text-white rounded-xl">
              <a
                href="https://www.tiktok.com/@apolo27_rc"
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
                href="https://www.instagram.com/apolo27_rc/"
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
                href="https://www.facebook.com/profile.php?id=61566864257448"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:bg-gray-800 w-full h-full py-4 flex justify-center group rounded-r-xl"
              >
                <FontAwesomeIcon
                  className="group-hover:scale-110"
                  icon={faFacebook}
                  size="xl"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex items-center flex-col-reverse lg:flex-row gap-4 justify-center w-full lg:grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 h-fit">
            <div className="z-10 w-fit h-fit space-y-2 lg:justify-self-center rounded-2xl p-5 transition-all duration-75 max-w-[350px] [background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] md:hover:[background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border-2 border-transparent animate-border">
              <p className="font-bold text-3xl">Topics</p>
              <ul className="space-y-2 text-xl lg:text-2xl font-medium">
                <li>• {t("rctopics.electronics")}</li>
                <li>• {t("rctopics.taskToolsComponents")}</li>
                <li>• {t("rctopics.roverRequirements")}</li>
                <li>• {t("rctopics.vehicleParts")}</li>
                <li>• {t("rctopics.astronomicalEvents")}</li>
                <li>• {t("rctopics.schoolVisits")}</li>
                <li>• {t("rctopics.stemEvents")}</li>
              </ul>
            </div>
            <div className="flex overflow-x-scroll lg:grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 gap-4 h-fit">
              <Image
                alt="social media post"
                width={200}
                height={200}
                src={"/images/social-media/rc/astronight.jpg"}
                className="slide z-10"
              />
              <Image
                alt="social media post"
                width={200}
                height={200}
                src={"/images/social-media/rc/lidar.jpg"}
                className="slide z-10"
              />
              <Image
                alt="social media post"
                width={200}
                height={200}
                src={"/images/social-media/rc/whatif.jpg"}
                className="slide z-10"
              />
              <Image
                alt="social media post"
                width={200}
                height={200}
                src={"/images/social-media/rc/visita.png"}
                className="slide z-10"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center w-full">
            <div className="flex md:hidden flex-col justify-between w-full  text-center md:text-left z-10">
              <p className="text-[#67E1A8] text-2xl md:text-4xl 2xl:text-5xl font-semibold">
                {t("podcast.title")}
              </p>
              <div className="text-4xl md:text-4xl 3xl:text-6xl font-extrabold">
                <Link
                  href="https://open.spotify.com/show/2bH4oR7PzY41YXcMOFCl2j?si=f8f8b7f8c9aa410b"
                  className="hover:cursor-pointer bg-clip-text text-transparent bg-gradient-to-t from-[#379AE1] to-[#69BF77] text-3xl md:text-5xl 2xl:text-6xl "
                >
                  Caribe STEM
                </Link>
              </div>
            </div>
            <div className="w-full  flex justify-center z-10">
              <Image
                src="/images/social-media/caribestem.webp"
                alt="Instagram"
                width="0"
                height="0"
                sizes="100vw"
                className="w-[300px] h-[300px] 2xl:w-[400px] 2xl:h-[400px] "
              />
            </div>
            <div className="flex flex-col justify-between w-full  text-center md:text-left z-10">
              <p className="hidden md:block text-[#67E1A8] text-2xl md:text-4xl 2xl:text-5xl font-semibold">
                {t("podcast.title")}
              </p>
              <div className="hidden md:block text-4xl md:text-4xl 3xl:text-6xl font-extrabold">
                <Link
                  href={
                    "https://open.spotify.com/show/2bH4oR7PzY41YXcMOFCl2j?si=f8f8b7f8c9aa410b"
                  }
                  className="group bg-clip-text text-transparent bg-gradient-to-t from-[#379AE1] to-[#69BF77] text-3xl md:text-5xl 2xl:text-6xl transition-all"
                >
                  Caribe STEM{" "}
                  <LinkIcon className="group-hover:h-8 group-hover:w-8 h-5 w-5 inline-block text-white transition-all" />
                </Link>
              </div>
              <p className="bg-gray-800 border-cyan-600 border-2 rounded-3xl p-3 mx-5 md:bg-transparent md:border-none md:p-0 md:mx-0 text-white font-semibold 2xl:text-xl">
                {t("podcast.description")}
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <p className="text-center font-bold text-xl rounded-full bg-white text-black mx-10 px-5">
              {t("podcast.enjoy")}
            </p>
            <div className="grid justify-items-center grid-cols-1 grid-rows-2 md:grid-cols-2 gap-4 lg:h-40">
              <iframe
                className="rounded-xl z-10"
                src="https://open.spotify.com/embed/episode/5ntjIKS1FuMbEKDZ9VdxBh?utm_source=generator"
                width="80%"
                height="152"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
              <iframe
                className="rounded-xl z-10"
                src="https://open.spotify.com/embed/episode/3ZLKpuAP8JUbZfPQxH9uaZ?utm_source=generator"
                width="80%"
                height="152"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
