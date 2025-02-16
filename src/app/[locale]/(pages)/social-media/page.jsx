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
    <div className="bg-apolo-empty-background lg:px-40 py-10 2xl:px-[400px]">
      <p className="text-3xl md:text-5xl text-center font-bold text-white mb-3">
        {t("title")}
      </p>

      <p className="text-white font-medium text-md text-center mx-10">
        The social media team of Apolo 27 is in charge of managing our community
        and updating our country about all of our events and progress.
      </p>
      <hr className="my-8 mx-5" />

      <section id="hp" className="text-white space-y-3 my-10 ">
        <p className="text-4xl text-center font-bold bg-gradient-to-br from-red-700 to-violet-400 text-transparent bg-clip-text">
          HP division social media
        </p>

        <div className="space-y-5">
          <div className="flex items-center flex-col lg:flex-row gap-4 justify-center w-full lg:grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 h-fit">
            <div className=" h-fit space-y-2 lg:justify-self-center rounded-2xl p-5 transition-all duration-75 [background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] md:hover:[background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border-2 border-transparent animate-border">
              <p className="font-bold text-3xl">Topics</p>
              <ul className="space-y-2 text-xl lg:text-2xl font-semibold">
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
            <div className="flex overflow-x-scroll lg:grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 gap-4 h-fit">
              <Image
                alt="social media post"
                width={200}
                height={200}
                src={"/images/social-media/hp/keramsi.jpg"}
                className="slide"
              />
              <Image
                alt="social media post"
                width={200}
                height={200}
                src={"/images/social-media/hp/portamasas.jpg"}
                className="slide"
              />
              <Image
                alt="social media post"
                width={200}
                height={200}
                src={"/images/social-media/hp/stemfest.jpg"}
                className="slide"
              />
              <Image
                alt="social media post"
                width={200}
                height={200}
                src={"/images/social-media/hp/vehiclepart.jpg"}
                className="slide"
              />
            </div>
          </div>

          <p className="hidden md:block text-center font-bold text-3xl  md:mb-5 pr-5">
            {t("youtube.invite")}{" "}
            <Link
              href="https://www.youtube.com/@apolo2730"
              className="hover:underline text-red-500 hover:text-blue-300"
            >
              {t("youtube.channelName")}
            </Link>{" "}
            <LinkIcon className="h-5 w-5 inline-block" />
          </p>
          <section className="z-10 flex flex-col md:flex-row justify-center gap-5  items-center text-white my-20">
            <div className="w-full md:w-96 2xl:w-[425px] rounded-r-[175px] rounded-l-xl bg-slate-800 bg-opacity-70 h-full py-8 md:py-20 pl-20 mr-20 md:pl-5 md:mr-0">
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
              <p className="hidden md:block pr-5">
                {t("youtube.description")}
                <Link href="https://www.youtube.com/@apolo2730">
                  {t("youtube.subscribe")}
                </Link>{" "}
                {t("youtube.continue")}
              </p>
            </div>
            <div className="grid grid-cols-1  grid-rows-2 gap-5 mx-8">
              {recentVideos.slice(0, 2).map((video, i) => (
                <div
                  key={i}
                  className="relative max-w-[400px] md:flex gap-4 md:p-4  rounded-2xl hover:cursor-pointer hover:scale-105 transition-all duration-75 [background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] md:hover:[background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border-2 border-transparent animate-border"
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
                  <p className="font-semibold pb-5 pt-5 md:pt-2 px-5 bg-slate-950 rounded-b-xl md:rounded-2xl">
                    {video.title}
                  </p>
                </div>
              ))}
            </div>
          </section>

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
      </section>
      <hr className="my-8" />

      <section id="rc" className="text-white space-y-3 my-10">
        <p className="text-4xl font-bold text-center bg-gradient-to-br from-blue-600 to-cyan-400 text-transparent bg-clip-text">
          RC division social media
        </p>
        <div className="space-y-5">
          <div className="flex items-center flex-col-reverse lg:flex-row gap-4 justify-center w-full lg:grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 h-fit">
            <div className="flex overflow-x-scroll lg:grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 gap-4 h-fit">
              <Image
                alt="social media post"
                width={200}
                height={200}
                src={"/images/social-media/rc/astronight.jpg"}
                className="slide"
              />
              <Image
                alt="social media post"
                width={200}
                height={200}
                src={"/images/social-media/rc/lidar.jpg"}
                className="slide"
              />
              <Image
                alt="social media post"
                width={200}
                height={200}
                src={"/images/social-media/rc/whatif.jpg"}
                className="slide"
              />
              <Image
                alt="social media post"
                width={200}
                height={200}
                src={"/images/social-media/rc/visita.png"}
                className="slide"
              />
            </div>
            <div className="w-fit h-fit space-y-2 lg:justify-self-center rounded-2xl p-5 transition-all duration-75 [background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] md:hover:[background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border-2 border-transparent animate-border">
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
          </div>
          <hr className="my-8 mx-5" />

          <section className="space-y-5">
            <div className="flex flex-col md:flex-row gap-4 justify-center w-full">
              <div className="flex md:hidden flex-col justify-between w-full  text-center md:text-left z-10">
                <p className="text-[#67E1A8] text-2xl md:text-4xl 2xl:text-5xl font-semibold">
                  {t("podcast.title")}
                </p>
                <div className="text-4xl md:text-4xl 3xl:text-6xl font-extrabold">
                  <span className="bg-clip-text text-transparent bg-gradient-to-t from-[#379AE1] to-[#69BF77] text-3xl md:text-5xl 2xl:text-6xl ">
                    Caribe STEM
                  </span>
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
                  <span className="bg-clip-text text-transparent bg-gradient-to-t from-[#379AE1] to-[#69BF77] text-3xl md:text-5xl 2xl:text-6xl ">
                    Caribe STEM
                  </span>
                </div>
                <p className="bg-gray-800 border-cyan-600 border-2 rounded-3xl p-3 mx-5 md:bg-transparent md:border-none md:p-0 md:mx-0 text-white font-semibold 2xl:text-xl">
                  {t("podcast.description")}
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <p className="text-center font-bold text-xl rounded-full bg-white text-black mx-10 px-5">
                Enjoy some chapters
              </p>
              <div className="grid justify-items-center grid-cols-1 grid-rows-2 md:grid-cols-2 gap-4 lg:h-40">
                <iframe
                  className="rounded-xl"
                  src="https://open.spotify.com/embed/episode/5ntjIKS1FuMbEKDZ9VdxBh?utm_source=generator"
                  width="80%"
                  height="152"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
                <iframe
                  className="rounded-xl"
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
          </section>

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
      </section>
    </div>
  );
}
