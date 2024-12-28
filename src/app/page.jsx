"use client";
import { useState } from "react";
import Image from "next/image";
import { Timer } from "./components/Timer";
import ArrowUpIcon from "@heroicons/react/solid";
import ArrowDownCircleIcon from "@heroicons/react/solid";
import ArrowRightIcon from "@heroicons/react/solid";
import Link from "next/link";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineModal from "./components/TimelineModal/TimelineModal";
import teams from "./data/teams"; // Importar datos de equipos
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [team, setTeam] = useState(undefined);
  const teamClassName = `opacity-80 hover:opacity-100 transition-all hover:cursor-pointer hover:scale-105`;
  const timelineItem = `max-w-[450px] bg-[#121837] border border-[#666A95] text-white text-center rounded-2xl flex flex-col items-center md:items-start`;
  const currentTimelineItem = `max-w-[450px] bg-[#121837] border border-[#666A95] text-white text-center rounded-2xl flex flex-col items-center md:items-start shadow-[0px_20px_207px_10px_rgba(165,_39,_255,_0.48)] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] `;

  const awards = [
    // ...array de premios...
  ];

  const flipCard = (i) => {
    if (typeof window !== "undefined") {
      document.body.querySelectorAll(".thecard")[i].classList.toggle("flipped");
    }
  };

  const showTeam = (team) => {
    setTeam(team);
    setIsOpen(true);
  };

  const scrollToTeamDivisions = () => {
    const element = document.getElementById("team-divisions");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="text-center h-fit  space-y-8 lg:space-y-20 2xl:space-y-10 bg-gradient-to-t from-[#101321] to-[#40D1FF] px-5 md:px-40 flex flex-col items-center pt-5">
        <Timer />
        <p className="mt-4 font-bold text-4xl lg:text-5xl 3xl:text-6xl w-full lg:w-5/6 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
          The First Dominican Republic University Division Winners at
          NASA&apos;s Human Exploration Rover Challenge
        </p>
        <Link
          href="/stem-with-us"
          className="flex lg:hidden transition-all border border-1 border-[#424B5B] bg-black/[0.8] w-5/6  md:w-[520px] py-2 h-fit  rounded-full  items-center justify-evenly hover:cursor-pointer hover:scale-105 "
        >
          <Image
            src={"/images/icons/formIcon.webp"}
            alt="form icon"
            width={36}
            height={36}
          />
          <div className="text-left">
            <p className="font-semibold text-white md:text-lg">
              Programa nuestra visita <span className="text-green-300">S</span>
              <span className="text-blue-300">T</span>
              <span className="text-red-300">E</span>
              <span className="text-purple-300">M</span>
              <span className="text-white">!</span>
            </p>
            <p className="text-gray-100 text-xs md:text-normal">
              Completa el formulario para tu Centro Educativo
            </p>
          </div>
          <div>
            <ArrowRightIcon className="hidden sm:block w-8 h-8 text-white transition-transform hover:translate-x-5" />
          </div>
        </Link>
      </div>

      <section className="bg-[#101321] 2xl:h-[240px] px-5 md:pt-10 3xl:py-20 flex flex-col md:flex-row justify-center items-center md:items-start space-y-5 md:space-y-0 md:pb-56 3xl:pb-72">
        {/* simulation large screen */}
        <Link
          href="/games/Herc-Simulation"
          className="hidden scale-90 lg:w-[555px] lg:h-[220px] 1xl:scale-100 3xl:scale-110 lg:block absolute left-0 1xl:left-20 3xl:left-60 hover:cursor-pointer hover:opacity-65"
          style={{
            backgroundImage: "url('/images/landing/simulation.webp')",
            backgroundRepeat: "no-repeat",
          }}
        ></Link>

        {/* stem large screen*/}
        <Link
          href="/stem-with-us#form"
          className="hidden lg:flex transition-all border border-1 border-[#424B5B] bg-black/[0.8] w-full  lg:w-[425px] 1xl:w-[520px] 3xl:scale-105 py-2 h-fit md:absolute md:left-1/2 md:transform md:-translate-x-1/2 rounded-full items-center justify-evenly hover:cursor-pointer hover:scale-105 "
        >
          <Image
            src={"/images/icons/formIcon.webp"}
            alt="form icon"
            width={44}
            height={44}
          />
          <div className="text-left">
            <p className="font-semibold text-white md:text-lg">
              Programa nuestra visita <span className="text-green-300">S</span>
              <span className="text-blue-300">T</span>
              <span className="text-red-300">E</span>
              <span className="text-purple-300">M</span>
              <span className="text-white">!</span>
            </p>
            <p className="text-gray-100 text-xs md:text-normal">
              Completa el formulario para tu Centro Educativo
            </p>
          </div>
          <div></div>
        </Link>

        {/*sponsor us mobile*/}
        <Link
          href="/sponsors"
          className="lg:hidden relative w-5/6 md:w-4/6 h-auto"
        >
          <Image
            src={"/images/landing/sponsorus-rectangle.webp"}
            alt="Simulation"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-full relative"
          />
          <p className="absolute font-bold text-3xl md:text-4xl text-white top-5 left-5">
            Sponsor Us!
          </p>
          <p className="absolute font-semibold text-xl md:text-2xl text-left text-white top-16 left-5">
            The team needs your help to win!
          </p>
          <div className="absolute top-1 right-0 bg-[#3b9fc6] rounded-full w-10 h-10 md:w-16 md:h-16  flex items-center justify-center hover:cursor-pointer hover:scale-105 transition-all">
            <ArrowUpIcon className="text-white w-8 h-8 md:w-16 md:h-16  transform rotate-45" />
          </div>
        </Link>

        {/* sponsor us large screen */}
        <Link
          href="/sponsors"
          className="scale-90 lg:w-[555px] lg:h-[240px] 1xl:scale-100 3xl:scale-110 hidden lg:block absolute right-0 1xl:right-20 3xl:right-60 text-center"
          style={{
            backgroundImage: "url('/images/landing/sponsorus.webp')",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute top-0 right-5 bg-[#3b9fc6] rounded-full w-16 h-16 flex items-center justify-center hover:cursor-pointer hover:scale-105 transition-all">
            <ArrowUpIcon className="text-white w-12 h-12  transform rotate-45" />
          </div>
          <p className="font-bold text-white text-4xl pl-16 pt-3">Sponsor Us</p>
        </Link>
      </section>

      <div className="hidden md:flex bg-[#101321] text-center flex-col gap-7 items-center justify-center pt-20 md:pt-5">
        <p className="explore-more-text bg-clip-text bg-gradient-to-r from-gray-800 via-white via-50% to-gray-800 text-transparent font-bold text-3xl md:text-4xl 3xl:text-5xl w-full md:w-60 2xl:w-80">
          Explore More About Us
        </p>
        <div onClick={scrollToTeamDivisions}>
          <ArrowDownCircleIcon className="w-10 3xl:w-20 h-10 3xl:h-20 text-white transition-transform animate-bounce cursor-pointer" />
        </div>
      </div>

      <section
        id="timeline"
        className=" bg-[#101321] justify-between w-full space-y-10 pt-20 px-5 lg:px-40 2xl:px-60 pb-40"
      >
        <p className="text-center outlined-title text-[#101321] text-7xl font-extrabold w-full ">
          MISSION APOLO 27
        </p>

        <p className="text-center outlined-subtitle text-[#101321] text-5xl font-extrabold w-full ">
          Our Timeline
        </p>

        <Timeline
          position="alternate-reverse"
          className="hidden lg:block w-full"
        >
          {teams.map((team, i) => (
            <TimelineItem key={i} className="z-10 ">
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="3xl:flex 3xl:justify-center">
                <div
                  className={
                    i === teams.length - 1
                      ? `${currentTimelineItem}`
                      : `${timelineItem}`
                  }
                >
                  <div className="px-4 flex flex-col md:flex-row items-center w-full justify-evenly bg-gradient-to-b from-cyan-600 to-cyan-900 rounded-t-2xl py-8">
                    <p className="text-5xl lg:text-6xl font-boldrounded-xl bg-cyan-950/[0.7] rounded-lg p-1">
                      {team.year}
                    </p>
                    <p className="text-2xl text-center md:text-left w-1/2">
                      {team.title}
                    </p>
                  </div>
                  <div className="p-4 space-y-5">
                    <p className="text-md md:text-lg text-center md:text-left font-semibold px-8 md:px-4">
                      {team.description}
                    </p>
                    <Image
                      src={team.image}
                      alt="Team Image"
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="px-8 md:px-4 w-full h-30"
                    />
                    <button
                      onClick={() => showTeam(team)}
                      className="bg-gradient-to-br from-cyan-950 to-cyan-800 p-4 rounded-xl font-semibold hover:scale-105 transition-all"
                    >
                      Ver mas
                    </button>
                  </div>
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>

        <TimelineModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          team={team}
        />

        <div className="lg:hidden relative flex flex-wrap justify-around px-8 md:px-0 gap-20">
          <div className="w-[1px] bg-white h-full absolute left-1/2 transform -translate-x-1/2 "></div>
          {teams.map((team, i) => (
            <div key={i} className="z-10 thecard" onClick={() => flipCard(i)}>
              <div
                className={
                  i === teams.length - 1
                    ? `${currentTimelineItem} thefront`
                    : `${timelineItem} thefront`
                }
              >
                <div className="md:px-4 flex flex-col md:flex-row items-center w-full justify-evenly bg-gradient-to-b from-cyan-600 to-cyan-900 rounded-t-2xl py-4 md:py-8">
                  <p className="text-5xl lg:text-6xl font-boldrounded-xl bg-cyan-950/[0.7] rounded-lg p-1">
                    {team.year}
                  </p>
                  <p className="text-2xl lg:text-3xl text-center md:text-left w-1/2">
                    {team.title}
                  </p>
                </div>
                <div className="p-4 space-y-5">
                  <p className="text-md md:text-lg text-center md:text-left font-semibold px-8 md:px-4">
                    {team.description}
                  </p>
                  <Image
                    src={team.image}
                    alt="Team Image"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="px-8 pb-8 md:px-4 w-full h-30"
                  />
                </div>
              </div>
              <div
                className={
                  i === teams.length - 1
                    ? `${currentTimelineItem} theback`
                    : `${timelineItem} theback`
                }
              >
                <div className="p-4 space-y-5">
                  <div className="flex justify-evenly">
                    {team.teamAwards?.map((award, j) => (
                      <div key={j} className={""}>
                        <Image
                          src={"/images/timeline/glass-award.webp"}
                          alt={award.title}
                          width={75}
                          height={50}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div id="team-divisions" className="bg-[#101321]">
        <section className="transform space-y-20 pb-20 xl:pb-40">
          <p className="text-center text-white font-bold text-5xl 2xl:text-6xl">
            APOLO 2025 DIVISIONS
          </p>

          {/* team divisions large screen */}

          <div className="hidden lg:flex w-full justify-evenly">
            <Link
              href="/human-powered-team"
              className={`${teamClassName} drop-shadow-sm rounded-[50px] h-[600px] w-2/5 2xl:w-2/6 overflow-hidden relative `}
              style={{
                backgroundImage: "url('/images/about-us/red-galaxy.webp')",
              }}
            >
              <p className="font-bold text-5xl w-1/3 text-white text-left -mb-10 pl-5 pt-10">
                Human Powered Constelation
              </p>

              <div className="flex">
                <Image
                  className="mt-20"
                  src="/images/about-us/Marko1.webp"
                  alt="Team Lead HP"
                  width={200}
                  height={300}
                />
                <Image
                  className="-ml-40"
                  src="/images/about-us/Anne1.webp"
                  alt="Team Lead HP"
                  width={400}
                  height={300}
                />
              </div>
            </Link>
            <Link
              href="/remote-controlled-team"
              className={`${teamClassName} drop-shadow-sm h-[600px] rounded-[50px] w-2/5 2xl:w-2/6 text-right pr-5 overflow-hidden relative`}
              style={{
                backgroundImage: "url('/images/about-us/blue-galaxy.webp')",
              }}
            >
              <p className="font-bold text-5xl text-white text-right -mb-10 pt-10 w-3/4 ml-32">
                Remote Controlled Constelation
              </p>
              <div className="flex ">
                <Image
                  className="absolute -bottom-40 right-0"
                  src="/images/about-us/Humberto1.webp"
                  alt="Team Lead RC"
                  width={200}
                  height={300}
                />
                <Image
                  className="absolute scale-x-[-1]"
                  src="/images/about-us/Anne1.webp"
                  alt="Team Lead HP"
                  width={400}
                  height={300}
                />
              </div>
            </Link>
            <Link
              href="/remote-controlled-team"
              className={`${teamClassName} drop-shadow-sm h-[600px] rounded-[50px] w-2/5 2xl:w-2/6 text-right pr-5 overflow-hidden relative`}
              style={{
                backgroundImage: "url('/images/about-us/blue-galaxy.webp')",
              }}
            >
              <p className="font-bold text-5xl text-white text-right -mb-10 pt-10 w-3/4 ml-32">
                Remote Controlled Constelation
              </p>
              <div className="flex ">
                <Image
                  className="absolute -bottom-40 right-0"
                  src="/images/about-us/Humberto1.webp"
                  alt="Team Lead HP"
                  width={200}
                  height={300}
                />
                <Image
                  className="absolute scale-x-[-1]"
                  src="/images/about-us/Anne1.webp"
                  alt="Team Lead HP"
                  width={400}
                  height={300}
                />
              </div>
            </Link>
          </div>

          {/* team divisions mobile */}
          <div className="flex lg:hidden justify-between gap-5 ">
            <Link
              href="/human-powered-team"
              className={`${teamClassName} w-1/2 rounded-br-[100px] rounded-tr-[100px] overflow-hidden relative pt-10`}
              style={{
                backgroundImage: "url('/images/about-us/red-galaxy.webp')",
              }}
            >
              {" "}
              <p className="font-bold text-3xl sm:text-4xl text-white text-left pl-5">
                Human <br></br> Powered Constelation
              </p>
              <Image
                className=""
                src="/images/about-us/Anne1.webp"
                alt="Team Lead HP"
                width={520}
                height={300}
              />
            </Link>

            <Link
              href="/remote-controlled-team"
              className={`${teamClassName} w-1/2 rounded-bl-[100px] rounded-tl-[100px] text-right overflow-hidden relative pt-10`}
              style={{
                backgroundImage: "url('/images/about-us/blue-galaxy.webp')",
              }}
            >
              <p className="font-bold text-3xl sm:text-4xl text-white text-right pr-5">
                Remote Controlled Constelation
              </p>
              <Image
                className=" scale-x-[-1]"
                src="/images/about-us/Anne1.webp"
                alt="Team Lead HP"
                width={520}
                height={300}
              />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
