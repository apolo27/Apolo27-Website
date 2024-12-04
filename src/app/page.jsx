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

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

export default function Home() {
  const teamClassName = `opacity-80 hover:opacity-100 transition-all hover:cursor-pointer hover:scale-105`;
  const timelineItem = `max-w-[450px] bg-[#121837] border border-[#666A95] text-white text-center rounded-2xl flex flex-col items-center md:items-start`;
  const currentTimelineItem = `max-w-[450px] bg-[#121837] border border-[#666A95] text-white text-center rounded-2xl flex flex-col items-center md:items-start shadow-[0px_20px_207px_10px_rgba(165,_39,_255,_0.48)] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] `;

  const awards = [
    {
      title: "Overall Winner #1",
      description:
        "Awarded to the top overall team. Design reviews, educational STEM engagement, safety, and a successful excursion will all factor into the Overall Winner. ",
    },
    {
      title: "Overall Winner #2",
      description:
        "Awarded to the top overall team. Design reviews, educational STEM engagement, safety, and a successful excursion will all factor into the Overall Winner. ",
    },
    {
      title: "Overall Winner #3",
      description:
        "Awarded to the top overall team. Design reviews, educational STEM engagement, safety, and a successful excursion will all factor into the Overall Winner. ",
    },
    {
      title: "STEM Engagement Award",
      description:
        "Awarded to the team that is determined to have best inspired the study of STEM-related topics in their community to include collaboration with middle school students for the Task Challenge. This team not only presented a high number of activities to a large number of people, but also delivered quality activities to a wide range of audiences.",
    },
    {
      title: "Project Review",
      description:
        "Awarded to the team that is deemed to have the best combination of written reviews and formal presentations.",
    },
    {
      title: "Phoenix",
      description:
        "Awarded to the team that demonstrates the greatest improvement between Design Review and Operational Readiness Review.",
    },
    {
      title: "Social Media",
      description:
        "Awarded to the team that has the most active and creative social media presence throughout the project year.",
    },
    {
      title: "Task Challenge",
      description:
        "Awarded to the team that best demonstrates a multi-tool design for the liquid sample retrieval tasks.",
    },
    {
      title: "Featherweight",
      description:
        "Awarded to the team that best addressed the ongoing space exploration challenge of weight management, delivering an innovative approach to safe minimization of rover weight. (Only awarded to one team overall.)",
    },
    {
      title: "Ingenuity",
      description:
        "Awarded to the team that approaches any complex project or engineering problem in unique and creative ways.",
    },
    {
      title: "Pit Crew",
      description:
        "Awarded to the team as judged by the pit crew that best demonstrates resourcefulness, motivation, good sportsmanship, and team spirit in repairing or working on their rover while the teams are in the pit area.",
    },
    {
      title: "System Safety Award",
      description:
        "Awarded to the team that best demonstrates a comprehensive approach to system safety as it relates to their vehicle, personnel, and operations. ",
    },
    {
      title: "Team Spirit Award",
      description:
        "Awarded to the team that is judged by their peers that display the “Best Team Spirit” during the on-site events.",
    },
    {
      title: "Crash and Burn",
      description:
        "Awarded to the team that embraces failure as a learning lesson for future success. (Only awarded to one team overall). ",
    },
    {
      title: "Rookie of the Year",
      description:
        "Awarded to the top overall newcomer team. (Same judging criteria as overall award. If rookie team is awarded an overall award, the 2nd place standing rookie team will receive the award, and so forth. Only awarded to one team overall) ",
    },
    {
      title: "Pay It Forward Award",
      description:
        "This Artemis Student Challenge (ASC) award is given to the team that best conducts impactful educational engagement events in their community or further. Educational engagement includes instructional, hands-on activities where participants engage in learning a STEM-related concept by actively participating in an activity. Each challenge activity lead will choose the top teams from each challenge for consideration of fnal awardees. ",
    },
    {
      title: "Innovation Award",
      description:
        "This Artemis Student Challenge (ASC) award is given to teams that best create new, innovative ideas and/or solutions within the scope of their respective challenge. Ingenuity, creativity, and inventiveness in either technology or non-technology focused ideas are awarded for their original ideas, creating effciency, effective results, and/or solving a problem. Each challenge activity lead will choose the top teams from each challenge for consideration of fnal awardees. ",
    },
    {
      title: "Artemis Educator Award",
      description:
        "This Artemis Student Challenge (ASC) award is given to educators/faculty/mentors in each challenge as nominated by student team members. Student team members will recognize their faculty/mentor(s) who inspire learners and motivate them to work hard, achieving more than the team members thought possible. The award acknowledges the time and dedication educators/ faculty/mentors take to be exceptional teachers. Educators/faculty/mentors are noted for their commitment to learning and their valuable efforts for motivating and inspiring others.",
    },
    {
      title: "Other Awards",
      description:
        "Other awards will be given based on components of the competition, such as discussions within Design Review and Operational Readiness Review reports or the in-person competition.",
    },
    {
      title: "Most Improved",
      description:
        "Awarded to the team that demonstrates the greatest improvement between the two days of the competition.",
    },
  ];
  const teams = [
    {
      year: 2019,
      title: "THE ORIGIN",
      description: `Our journey began in 2019 with a groundbreaking achievement: becoming the first university division team from our country to compete in the NASA Rover Challenge.`,
      image: "/images/timeline/2019.png",
      teamAwards: [],
    },
    {
      year: 2020,
      title: "PERSEVERANCE IN ADVERSITY",
      description: `Despite the challenges of the global pandemic, our resilience shone through. Lessons learned paved the way for our historic "System Safety Award" victory.`,
      image: "/images/timeline/2019.png",
      teamAwards: [awards[11]],
    },
    {
      year: 2021,
      title: "REVAMP AND REINVENTION",
      description: `With a revamped rover, our team reached new levels of expertise and ignited a passion for STEM in our community through innovative efforts.`,
      image: "/images/timeline/2019.png",
      teamAwards: [],
    },
    {
      year: 2022,
      title: "EXPANDING OUR IMPACT",
      description: `2022 marked a turning point with the launch of our interactive "STEM Tour," culminating in winning the prestigious "Engagement Award."`,
      image: "/images/timeline/2019.png",
      teamAwards: [awards[3]],
    },
    {
      year: 2023,
      title: "A HISTORIC YEAR",
      description: `A year of Dominican dominance! Major improvements earned us the "Most Improved" and "Team Spirit" awards, cementing our place in history.`,
      image: "/images/timeline/2019.png",
      teamAwards: [awards[19], awards[12]],
    },
    {
      year: 2024,
      title: "SETTING THE STANDARD",
      description: `Rising from 2023's successes, we reached new heights in 2024. Our hard work earned us the coveted "Overall Award (2nd place)" and the "Spirit Award", showcasing excellence and unity.`,
      image: "/images/timeline/2019.png",
      teamAwards: [awards[1], awards[12]],
    },
    {
      year: 2025,
      title: "NEW FRONTIERS",
      description: `The dawn of the Apolo Division marks a new chapter in 2025. With our sights set high, we're pushing the boundaries of innovation and teamwork.`,
      image: "/images/timeline/2019.png",
      teamAwards: [],
    },
  ];

  return (
    <>
      <div className="text-center h-fit  space-y-8 2xl:space-y-5 bg-gradient-to-t from-[#101321] to-[#40D1FF] px-5 md:px-40 flex flex-col items-center pt-5">
        <Timer />
        <p className="mt-4 font-bold text-4xl 2xl:text-5xl 3xl:text-7xl w-full md:w-4/6 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
          The First Dominican Republic University Division Winners at
          NASA&apos;s Human Exploration Rover Challenge
        </p>
        <div className="flex md:hidden transition-all border border-1 border-[#424B5B] bg-black/[0.8] w-full  md:w-[520px] py-2 h-fit md:absolute md:left-1/2 md:transform md:-translate-x-1/2 rounded-full  items-center justify-evenly hover:cursor-pointer hover:scale-105 ">
          <ClipboardDocumentListIcon className="w-8 h-8 md:w-12 md:h-12 text-white" />
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
            <ArrowRightIcon className="w-5 h-5 text-white transition-transform hover:translate-x-5" />
          </div>
        </div>
      </div>

      <section className="bg-[#101321] 2xl:h-[240px] px-5 md:pt-10 flex flex-col md:flex-row justify-center items-center md:items-start space-y-5 md:space-y-0">
        {/* simulation large screen */}
        <div
          className="hidden scale-90 lg:w-[555px] lg:h-[220px] 1xl:scale-100 md:block absolute left-0 1xl:left-20 3xl:left-60 hover:cursor-pointer hover:opacity-65"
          style={{
            backgroundImage: "url('/images/landing/simulation.png')",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        {/* stem large screen*/}
        <div className="hidden md:flex transition-all border border-1 border-[#424B5B] bg-black/[0.8] w-full  lg:w-[425px] 1xl:w-[520px] py-2 h-fit md:absolute md:left-1/2 md:transform md:-translate-x-1/2 rounded-full items-center justify-evenly hover:cursor-pointer hover:scale-105 ">
          <Image
            src={"/images/icons/formIcon.png"}
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
          <div>
            <ArrowRightIcon className="w-5 h-5 text-white transition-transform hover:translate-x-5" />
          </div>
        </div>
        {/*sponsor us mobile*/}
        <div className="md:hidden relative w-5/6 h-auto">
          <Image
            src={"/images/landing/sponsorus-rectangle.png"}
            alt="Simulation"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-full relative"
          />
          <p className="absolute font-bold text-3xl text-white top-5 left-5">
            Sponsor Us!
          </p>
          <p className="absolute font-semibold text-xl text-left text-white top-16 left-5">
            The team needs your help to win!
          </p>
          <div className="absolute top-1 right-0 bg-[#3b9fc6] rounded-full w-10 h-10 flex items-center justify-center hover:cursor-pointer hover:scale-105 transition-all">
            <ArrowUpIcon className="text-white w-8 h-8  transform rotate-45" />
          </div>
        </div>

        {/* sponsor us large screen */}
        <div
          className="scale-90 lg:w-[555px] lg:h-[240px] 1xl:scale-100 hidden md:block absolute right-0 1xl:right-20 3xl:right-60 text-center"
          style={{
            backgroundImage: "url('/images/landing/sponsorus.png')",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute top-0 right-5 bg-[#3b9fc6] rounded-full w-16 h-16 flex items-center justify-center hover:cursor-pointer hover:scale-105 transition-all">
            <ArrowUpIcon className="text-white w-12 h-12  transform rotate-45" />
          </div>
          <p className="font-bold text-white text-4xl pl-16 pt-3">Sponsor Us</p>
        </div>
      </section>

      <div className="hidden md:flex bg-[#101321] text-center flex-col gap-7 items-center justify-center pt-20 md:pt-5">
        <p className="explore-more-text bg-clip-text bg-gradient-to-r from-gray-800 via-white via-50% to-gray-800 text-transparent font-bold text-3xl md:text-4xl 3xl:text-5xl w-full md:w-60 2xl:w-80">
          Explore More About Us
        </p>
        <div>
          <ArrowDownCircleIcon className="w-10 3xl:w-20 h-10 3xl:h-20 text-white transition-transform animate-bounce" />
        </div>
      </div>

      <section className=" bg-[#101321] justify-between w-full space-y-10 pt-20 px-5 lg:px-40 2xl:px-60 pb-40">
        <p className="text-center outlined-title text-[#101321] text-7xl font-extrabold w-full ">
          MISSION APOLO 27
        </p>

        <p className="text-center outlined-subtitle text-[#101321] text-5xl font-extrabold w-full ">
          Our Timeline
        </p>

        <Timeline
          position="alternate-reverse"
          className="hidden md:block w-full"
        >
          {teams.map((team, i) => (
            <TimelineItem key={i} className="z-10 ">
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="3xl:flex 3xl:justify-center">
                <div>
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
                      <button className="bg-gradient-to-br from-cyan-950 to-cyan-800 p-4 rounded-xl font-semibold hover:scale-105 transition-all">
                        Ver mas
                      </button>
                    </div>
                  </div>
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
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>

        <div className="md:hidden relative flex flex-wrap justify-around px-8 md:px-0 gap-20">
          <div className="md:hidden w-[1px] bg-white h-full absolute left-1/2 transform -translate-x-1/2 "></div>
          {teams.map((team, i) => (
            <div key={i} className="z-10">
              <div
                className={
                  i === teams.length - 1
                    ? `${currentTimelineItem}`
                    : `${timelineItem}`
                }
              >
                <div className="md:px-4 flex flex-col md:flex-row items-center w-full justify-evenly bg-gradient-to-b from-cyan-600 to-cyan-900 rounded-t-2xl py-8">
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
          ))}
        </div>
      </section>

      <div className="bg-[#101321]">
        <section className="transform space-y-20 pb-40">
          <p className="text-center text-white font-bold text-5xl 2xl:text-6xl">
            APOLO 2025 DIVISIONS
          </p>

          {/* team divisions large screen */}

          <div className="hidden md:flex w-full justify-evenly">
            <Link
              href="/human-powered-team"
              className={`${teamClassName} rounded-[50px] h-fit w-2/5 2xl:w-2/6 overflow-hidden relative `}
              style={{
                backgroundImage: "url('/images/about-us/red-galaxy.jpg')",
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
                  width={275}
                  height={300}
                />
                <Image
                  className="-ml-40"
                  src="/images/about-us/Anne1.png"
                  alt="Team Lead HP"
                  width={520}
                  height={300}
                />
              </div>
            </Link>
            <Link
              href="/remote-controlled-team"
              className={`${teamClassName} rounded-[50px] w-2/5 2xl:w-2/6 text-right pr-5 overflow-hidden relative`}
              style={{
                backgroundImage: "url('/images/about-us/blue-galaxy.jpg')",
              }}
            >
              <p className="font-bold text-6xl text-white text-right -mb-10 pt-10 w-3/4 ml-32">
                Remote Controlled Constelation
              </p>
              <div className="flex ">
                <Image
                  className="absolute bottom-0 right-0"
                  src="/images/about-us/Humberto1.png"
                  alt="Team Lead HP"
                  width={310}
                  height={300}
                />
                <Image
                  className="absolute bottom-0 scale-x-[-1]"
                  src="/images/about-us/Anne1.png"
                  alt="Team Lead HP"
                  width={520}
                  height={300}
                />
              </div>
            </Link>
          </div>

          {/* team divisions mobile */}
          <div className="flex justify-between gap-5 md:hidden">
            <Link
              href="/human-powered-team"
              className={`${teamClassName} w-1/2 rounded-br-[100px] rounded-tr-[100px] overflow-hidden relative pt-10`}
              style={{
                backgroundImage: "url('/images/about-us/red-galaxy.jpg')",
              }}
            >
              {" "}
              <p className="font-bold text-2xl text-white text-left pl-5">
                Human <br></br> Powered Constelation
              </p>
              <Image
                className=""
                src="/images/about-us/Anne1.png"
                alt="Team Lead HP"
                width={520}
                height={300}
              />
            </Link>

            <Link
              href="/remote-controlled-team"
              className={`${teamClassName} w-1/2 rounded-bl-[100px] rounded-tl-[100px] text-right overflow-hidden relative pt-10`}
              style={{
                backgroundImage: "url('/images/about-us/blue-galaxy.jpg')",
              }}
            >
              <p className="font-bold text-2xl text-white text-right pr-5">
                Remote Controlled Constelation
              </p>
              <Image
                className=" scale-x-[-1]"
                src="/images/about-us/Anne1.png"
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
