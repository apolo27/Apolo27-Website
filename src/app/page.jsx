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
  const teamPanelClassName = `h-[500px] w-full md:w-[350px] bg-[#121837] border border-[#666A95] text-white text-left rounded-2xl flex flex-col justify-evenly p-4 `;
  const currentTeamPanelClassName = `space-y-5 shadow-[0px_20px_207px_10px_rgba(165,_39,_255,_0.48)] w-full md:w-[350px] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-violet-700 via-blue-800 to-violet-500  text-white text-left rounded-lg flex flex-col p-4 `;

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

      <section className="bg-[#101321] justify-between w-full space-y-10 pt-20 px-5 lg:px-40 2xl:px-60 pb-40">
        <p className="outlined-title text-[#101321] text-7xl font-extrabold w-full ">
          MISSION APOLO 27
        </p>

        <p className="outlined-subtitle text-[#101321] text-5xl font-extrabold w-full ">
          Our Timeline
        </p>

        <div className=" justify-evenly flex flex-wrap gap-20">
          {teams.map((team, i) => (
            <div key={i} className="">
              <div
                className={
                  i === teams.length - 1
                    ? `${currentTeamPanelClassName}`
                    : `${teamPanelClassName}`
                }
              >
                <p className="text-3xl xl:text-5xl font-bold">{team.year}</p>
                <p className="text-2xl xl:text-3xl font-semibold">
                  {team.title}
                </p>
                <p className="text-lg font-semibold">{team.description}</p>
                <Image
                  src={team.image}
                  alt="Team Image"
                  width={300}
                  height={300}
                />
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
          <p className="text-white font-bold text-5xl 2xl:text-6xl">
            APOLO 2025 DIVISIONS
          </p>
          <div className="w-full flex justify-evenly">
            <Link
              href="/human-powered-team"
              className={`${teamClassName} rounded-[50px] h-fit w-2/5 2xl:w-2/6 overflow-hidden relative `}
              style={{
                backgroundImage: "url('/images/red-galaxy.jpg')",
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
              className={`${teamClassName} rounded-[50px] w-2/5 2xl:w-2/6 text-right overflow-hidden relative`}
              style={{
                backgroundImage: "url('/images/blue-galaxy.jpg')",
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
        </section>
      </div>
    </div>
  );
}
