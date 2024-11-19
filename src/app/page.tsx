"use client";
import Image from "next/image";
import { Timer } from "./components/Timer";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import {
  ArrowDownCircleIcon,
  ArrowRightIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  const teamClassName = `opacity-80 hover:opacity-100 transition-all hover:cursor-pointer hover:scale-105`;

  const teamPanelClassName = `w-[400px] h-[500px] bg-[#121837] border border-[#666A95] text-white text-left rounded-lg flex flex-col p-5 m-5`;
  const teams = [
    {
      year: 2019,
      title: "THE ORIGIN",
      description: `Formed in 2019, our small team made history: 1st university division team from our country at the NASA Rover Challenge!`,
      image: "/images/",
    },
    {
      year: 2020,
      title: "THE ORIGIN",
      description: `2020's pandemic brought challenges, but our team persevered. Learned lessons fueled historic "System Safety Award" win!`,
      image: "/images/",
    },
    {
      year: 2021,
      title: "THE ORIGIN",
      description: `Rover revamp boosted strength! Team knowledge soared, igniting national STEM passion through our previous experience.`,
      image: "/images/",
    },
    {
      year: 2022,
      title: "THE ORIGIN",
      description: `STEM focus expanded in 2022! Launched "STEM Tour" (interactive projects!), crowned "Engagement Award" winners!`,
      image: "/images/",
    },
    {
      year: 2023,
      title: "THE ORIGIN",
      description: `Dominican DOMINANCE! Major improvements across the board earned "Most Improved" & "Team Spirit" awards - a historic first!`,
      image: "/images/",
    },

    {
      year: 2024,
      title: "THE ORIGIN",
      description: `Fueled by 2023's challenges, we've leveled up all areas of our team. Ready to crush ambitious goals & achieve excellence in 2024!`,
      image: "/images/",
    },
    {
      year: 2025,
      title: "THE ORIGIN",
      description: `The first year of the Apolo Division`,
      image: "/images/",
    },
  ];

  return (
    <div className="text-center ">
      <div className="h-fit space-y-10 bg-gradient-to-t from-[#101321] to-[#40D1FF] px-40 flex flex-col items-center py-10 ">
        <Timer />
        <p className="mt-4 font-bold text-5xl 2xl:text-6xl w-4/6 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
          The First Dominican Republic University Division Winners at
          NASA&apos;s Human Exploration Rover Challenge
        </p>
      </div>

      <section className="bg-[#101321] h-[220px] 2xl:h-[240px] pt-5">
        <div
          className="w-[555px] h-[220px] absolute left-20 2xl:left-60 hover:cursor-pointer hover:opacity-65"
          style={{
            backgroundImage: "url('/images/simulation.png')",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="transition-all border border-1 border-[#424B5B] bg-black/[0.8] w-[520px] py-2 h-fit absolute left-1/2 transform -translate-x-1/2 rounded-full flex items-center justify-evenly hover:cursor-pointer hover:scale-105 ">
          <ClipboardDocumentListIcon className="w-12 h-12 text-white" />
          <div className="text-left">
            <p className="font-semibold text-white text-lg">
              Programa nuestra visita <span className="text-green-300">S</span>
              <span className="text-blue-300">T</span>
              <span className="text-red-300">E</span>
              <span className="text-purple-300">M</span>
              <span className="text-white">!</span>
            </p>
            <p className="text-gray-100 ">
              Completa el formulario para tu Centro Educativo
            </p>
          </div>
          <div>
            <ArrowRightIcon className="w-5 h-5 text-white transition-transform hover:translate-x-5" />
          </div>
        </div>

        <div
          className="w-[555px] h-[240px] absolute right-20 2xl:right-60 text-center"
          style={{
            backgroundImage: "url('/images/sponsorus.png')",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute top-0 right-5 bg-[#3b9fc6] rounded-full w-16 h-16 flex items-center justify-center hover:cursor-pointer hover:scale-105 transition-all">
            <ArrowUpIcon className="text-white w-12 h-12  transform rotate-45" />
          </div>
          <p className="font-bold text-white text-4xl pl-16 pt-3">Sponsor Us</p>
        </div>
      </section>

      <div className=" bg-[#101321] text-center flex flex-col gap-7 items-center justify-center">
        <p className="explore-more-text bg-clip-text bg-gradient-to-r from-gray-800 via-white via-50% to-gray-800 text-transparent font-bold text-4xl 2xl:text-5xl w-60 2xl:w-80">
          Explore More About Us
        </p>
        <div>
          <ArrowDownCircleIcon className="w-20 h-20 text-white transition-transform animate-bounce" />
        </div>
      </div>

      <div className="bg-[#101321]">
        <section className="transform -translate-y-64  pt-96 ">
          <p className="text-white font-bold text-5xl">APOLO DIVISIONS</p>
          <div className="w-full flex justify-between">
            <Link
              href="/human-powered-team"
              className={`${teamClassName} rounded-r-[250px] h-fit w-2/5`}
              style={{
                backgroundImage: "url('/images/red-galaxy.jpg')",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p className="font-bold text-6xl w-1/3 text-white text-left -mb-10 pl-5 pt-10">
                Human Powered Constelation
              </p>

              <div className="flex">
                <Image
                  className="mt-20"
                  src="/images/about-us/Marko1.png"
                  alt="Team Lead HP"
                  width={250}
                  height={300}
                />
                <Image
                  className="absolute bottom-0 left-20"
                  src="/images/about-us/Anne1.png"
                  alt="Team Lead HP"
                  width={500}
                  height={300}
                />
              </div>
            </Link>
            <Link
              href="/remote-controlled-team"
              className={`${teamClassName} rounded-l-[250px] w-2/5 text-right`}
              style={{
                backgroundImage: "url('/images/blue-galaxy.jpg')",
                objectFit: "cover",

                backgroundRepeat: "no-repeat",
              }}
            >
              <p className="font-bold text-6xl text-white text-right -mb-10 pt-10 w-3/4 ml-32">
                Remote Controlled Constelation
              </p>
              <div className="absolute right-0">
                <Image
                  className="transform absolute bottom-0 right-24 scale-x-[-1]"
                  src="/images/about-us/Anne1.png"
                  alt="Team Lead RC"
                  width={520}
                  height={300}
                />
                <Image
                  className="ml-80 mt-20"
                  src="/images/about-us/Humberto1.png"
                  alt="Team Lead RC"
                  width={300}
                  height={300}
                />
              </div>
            </Link>
          </div>
        </section>

        <section className="flex justify-between w-full relative px-5 lg:px-40 2xl:px-60 pb-40">
          <div className="w-1/2 text-left space-y-12">
            <p className="outlined-text text-[#101321] text-7xl font-extrabold w-2/3 ">
              MISSION APOLO 27
            </p>
            <div>
              <p className="text-white font-semibold text-xl">2019-2020</p>
              <p className="text-white font-semibold text-xl">2021-2022</p>
              <p className="text-white font-semibold text-xl">2023-2024</p>
            </div>
            <p className="text-white font-semibold text-xl">Members</p>
            <p className="text-white font-semibold text-xl">Awards</p>
          </div>

          <div className="w-3/5 overflow-y-hidden overflow-x-scroll flex ">
            {teams.map((team, index) => (
              <div key={index} className={`${teamPanelClassName}`}>
                <p className="text-3xl font-bold">{team.year}</p>
                <p className="text-2xl font-semibold">{team.title}</p>
                <p className="text-lg">{team.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
