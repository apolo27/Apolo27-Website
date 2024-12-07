'use client';
import { useState } from 'react';
import { PlayCircleIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTiktok,
  faYoutube,
  faInstagram,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';

export default function Marketplace() {
  const [platform, setPlatform] = useState('Youtube');

  const episodes = [
    {
      img: "/images/social-media/caribestem.webp",
      title: "Episode 1",
      description:
        "This is the first episode of the Caribe STEM podcast This is the first episode of the Caribe STEM podcast This is the first episode of the Caribe STEM podcast This is the first episode of the Caribe STEM podcast This is the first episode of the Caribe STEM podcast",
      duration: "30:00",
      date: new Date(),
    },
    {
      img: "/images/social-media/caribestem.webp",
      title: "Episode 2",
      description:
        "This is the second episode of the Caribe STEM podcast This is the second episode of the Caribe STEM podcast This is the second episode of the Caribe STEM podcast This is the second episode of the Caribe STEM podcast This is the second episode of the Caribe STEM podcast",
      duration: "30:00",
      date: new Date(),
    },
  ];

  const videos = [
    {
      img: "/images/thumbnailExample.webp",
      title: "Video 1",
      platform: "Youtube",
    },
    {
      img: "/images/thumbnailExample.webp",
      title: "Video 2",
      platform: "Youtube",
    },
    {
      img: "/images/thumbnailExample.webp",
      title: "Video 3",
      platform: "Youtube",
    },

    {
      img: "/images/thumbnailExample.webp",
      title: "Video 1",
      platform: "Instagram",
    },
    {
      img: "/images/thumbnailExample.webp",
      title: "Video 2",
      platform: "Instagram",
    },
    {
      img: "/images/thumbnailExample.webp",
      title: "Video 3",
      platform: "Instagram",
    },


    {
      img: "/images/thumbnailExample.webp",
      title: "Video 1",
      platform: "TikTok",
    },
    {
      img: "/images/thumbnailExample.webp",
      title: "Video 2",
      platform: "TikTok",
    },
    {
      img: "/images/thumbnailExample.webp",
      title: "Video 3",
      platform: "TikTok",
    },
  ];

  return (
    <div className="bg-apolo-empty-background lg:px-40 px-4 pt-28">
      <div className="mb-20 rounded-full p-4 text-center bg-gradient-to-t from-[#379AE1] to-[#69BF77]">
        <i className="text-3xl md:text-5xl font-bold text-white">
          Social Media
        </i>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/images/social-media/caribestem.webp"
            alt="Instagram"
            width="0"
            height="0"
            sizes='100vw'
            className="w-[300px] h-[300px] 2xl:w-[400px] 2xl:h-[400px] "
          />
        </div>
        <div className="w-full lg:w-1/2 text-center md:text-left flex flex-col justify-between">
          <p className="text-[#67E1A8] text-2xl md:text-4xl 2xl:text-5xl font-semibold">
            Podcast
          </p>
          <div className="text-4xl md:text-6xl font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-t from-[#379AE1] to-[#69BF77] 2xl:text-8xl">
              Caribe STEM
            </span>
          </div>
          <p className="text-white font-bold 2xl:text-2xl">
            Caribe STEM is a podcast created to share and disseminate STEM
            (science, technology, engineering and mathematics) in the Dominican
            Republic and throughout Latin America. Created by Apolo 27, the
            university team representing INTEC in the NASA HERC competition.
          </p>
        </div>
      </div>

      <hr className="my-16" />

      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="text-center md:text-left">
          <p className="text-[#DFC86A] font-medium text-2xl 2xl:text-3xl mb-3">Latest Episodes</p>
          <div className="flex flex-col gap-4 items-center">
            {episodes.map((episode, i) => (
              <div
                key={i}
                className="flex flex-col lg:flex-row items-center w-full gap-5 bg-gradient-to-r from-[#2A2A2A] to-[#161A2C] p-4 rounded-3xl"
              >
                <Image
                  src={episode.img}
                  alt="Episode"
                  width={300}
                  height={300}
                  className="w-56 h-56 object-cover"
                />
                <div className="flex flex-col gap-4 justify-around md:w-[400px] 2xl:w-[600px]">
                  <div className="bg-gradient-to-t from-[#379AE1] to-[#69BF77] bg-clip-text">
                    <p className="text-2xl md:text-4xl text-transparent font-medium">
                      {episode.title}
                    </p>
                  </div>
                  <p className="text-white font-medium text-sm md:text-base">
                    {episode.description}
                  </p>
                  <div className="flex text-white gap-5 items-center">
                    <div className="rounded-full bg-[#69BF77]">
                      <PlayCircleIcon className="h-8 w-8" />
                    </div>
                    <p>
                      <strong>Published:</strong> {episode.date.toDateString()}
                    </p>
                    <p>
                      <strong>Length:</strong> {episode.duration}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col px-10">
          <p className="text-[#DFC86A] text-2xl 2xl:text-3xl mb-3 font-medium">About our hosts</p>
          <div className="flex justify-center">
            <Image
              src="/images/blankProfile.webp"
              alt="host"
              width={300}
              height={300}
              className="object-cover"
            />
          </div>
          <div className="bg-gradient-to-l from-[#2A2A2A] to-[#161A2C] p-4 rounded-b-3xl text-white flex flex-col gap-2 font-semibold">
            <p>Nombre</p>
            <p>Descripcion</p>
          </div>
        </div>
      </div>

      <div className="mt-20 pb-10">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-5 mb-5">
          <button
            className="rounded-full w-42 p-4 text-white text-sm md:text-xl font-bold bg-black w-full max-w-xs"
            onClick={() => setPlatform('TikTok')}
          >
            TikTok
          </button>
          <button
            className="rounded-full w-42 p-4 text-white text-sm md:text-xl font-bold bg-pink-500 w-full max-w-xs"
            onClick={() => setPlatform('Instagram')}
          >
            Instagram
          </button>
          <button
            className="rounded-full w-42 p-4 text-white text-sm md:text-xl font-bold bg-red-600 w-full max-w-xs"
            onClick={() => setPlatform('Youtube')}
          >
            Youtube
          </button>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {videos
            .filter((x) => x.platform === platform)
            .map((video, i) => (
              <div key={i} className="flex relative flex-col gap-2 ">
                <div
                  className="w-[300px] h-[500px] rounded-xl overflow-hidden"
                  style={{
                    backgroundImage: `url('/images/social-media/thumbnailExample.webp')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div
                    className={`w-full h-full bg-gradient-to-t from-${video.color} to-transparent`}
                  ></div>
                </div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center text-lg md:text-xl">
                  <p className="text-white font-semibold">{video.title}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="mt-10 pb-20 flex flex-col text-center items-center gap-10">
        <div className="flex flex-col items-center gap-4">
          <div className="bg-black border-2 border-white rounded-lg p-3 w-fit">
            <Image
              src={'/images/icons/spotify.svg'}
              alt="listen on spotify"
              width={300}
              height={100}
            />
          </div>
          <span className=" text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-t from-[#379AE1] to-[#69BF77]">
            Connect with us!
          </span>
          <p className="font-semibold text-white text-lg md:text-xl w-3/4">
            FOLLOW US ON ALL OUR SOCIAL MEDIA
          </p>
        </div>

        <div className="bg-black border-white border-2 p-4 flex justify-evenly text-white w-3/4 lg:w-1/3">
          <FontAwesomeIcon
            className="hover:cursor-pointer hover:scale-110"
            icon={faTiktok}
            size="2xl"
          />
          <FontAwesomeIcon
            className="hover:cursor-pointer hover:scale-110"
            icon={faInstagram}
            size="2xl"
          />
          <FontAwesomeIcon
            className="hover:cursor-pointer hover:scale-110"
            icon={faFacebook}
            size="2xl"
          />
          <FontAwesomeIcon
            className="hover:cursor-pointer hover:scale-110"
            icon={faXTwitter}
            size="2xl"
          />
          <FontAwesomeIcon
            className="hover:cursor-pointer hover:scale-110"
            icon={faYoutube}
            size="2xl"
          />
        </div>
      </div>
    </div>
  );
}
