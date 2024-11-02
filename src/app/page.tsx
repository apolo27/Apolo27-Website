"use client"
import Image from "next/image";
import { Timer } from "./components/Timer";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Home() {
  const teamClassName = `opacity-80 hover:opacity-100 transition-all hover:cursor-pointer hover:scale-105`;

  return (
    <div className="text-center ">
      <div className="h-fit bg-gradient-to-t from-[#101321] to-[#40D1FF] px-40 flex flex-col items-center py-10 ">
        <Timer />
        <p className="mt-4 font-bold text-5xl w-4/6 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
          The First Dominican Republic University Division Winners at
          NASA&apos;s Human Exploration Rover Challenge
        </p>
      </div>
      <section className="bg-[#101321] h-[220px] relative flex">
        <div
          className="w-[555px] h-[210px] absolute left-20 hover:cursor-pointer hover:opacity-65"
          style={{
            backgroundImage: "url('/images/simulation.png')",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="border border-1 border-[#424B5B] bg-black/[0.8] w-[520px] py-2 h-fit absolute left-1/2 transform -translate-x-1/2 rounded-full flex items-center justify-evenly hover:cursor-pointer hover:scale-105 transition-all">
          <ClipboardDocumentListIcon className="w-12 h-12 text-white" />
          <div className="text-left">
            <p className="font-semibold text-white">
              Programa nuestra visita STEM!
            </p>
            <p className="text-gray-100">
              Completa el formulario para tu Centro Educativo
            </p>
          </div>
        </div>
        <div
          className="w-[555px] h-[210px] absolute right-20 text-center"
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
      <div className="relative z-10 bg-[#101321] text-center flex items-center justify-center">
        <p className="explore-more-text bg-clip-text bg-gradient-to-r from-black via-white via-50% to-black text-transparent font-bold text-4xl w-60">
          Explore More About Us
        </p>
      </div>
      <div className="bg-[#101321]">
        <div className="relative z-10 w-full rounded-b-full h-60 border-b-4 border-white drop-shadow-2xl shadow-white">
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 rounded-full border-4 border-white bg-white/[0.2]  drop-shadow-2xl shadow-white flex items-center justify-center w-fit p-3">
            <ArrowDownIcon className="w-12  h-12 text-white " />
          </div>
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 rounded-full bg-transparent  drop-shadow-2xl shadow-white flex items-center justify-center w-20 h-20 filter blur-xl  p-3"></div>
        </div>

        <section className="transform -translate-y-64  pt-96 ">
          <p className="text-white font-bold text-5xl">About Us</p>
          <div className="flex justify-between">
            <Link
              href="/human-powered-team"
              className={`${teamClassName} rounded-r-[250px] h-fit w-2/5`}
              style={{backgroundImage: "url('/images/red-galaxy.jpg')", backgroundRepeat: 'no-repeat'}}
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
              style={{backgroundImage: "url('/images/blue-galaxy.jpg')"}}
            >
              <p className="font-bold text-6xl text-white text-right -mb-10 pt-10 w-3/4 ml-32">
                Remote Controlled Constelation
              </p>
              <div className="flex">
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

        <section className="flex justify-between w-full relative px-60">
          <div className="w-1/2 text-left">
            <p className="outlined-text text-[#101321] text-7xl font-extrabold ">
              MISSION APOLO 27
            </p>
            <p className="text-white font-semibold text-xl">2019-2020</p>
            <p className="text-white font-semibold text-xl">2021-2022</p>
            <p className="text-white font-semibold text-xl">2023-2024</p>
            <p className="text-white font-semibold text-xl">Members</p>
            <p className="text-white font-semibold text-xl">Awards</p>
          </div>

          <div className="">
            <div className="p-4 bg-[#242E5C] text-white font-semibold rounded-xl w-96">
              2019
            </div>
            <div className="p-4 bg-[#242E5C] text-white font-semibold rounded-xl w-96">
              2020
            </div>
            <div className="p-4 bg-[#242E5C] text-white font-semibold rounded-xl w-96">
              2021
            </div>
            <div className="p-4 bg-[#242E5C] text-white font-semibold rounded-xl w-96">
              2022
            </div>
            <div className="p-4 bg-[#242E5C] text-white font-semibold rounded-xl w-96">
              2023
            </div>
            <div className="p-4 bg-[#242E5C] text-white font-semibold rounded-xl w-96">
              2024
            </div>
            <div className="p-4 bg-[#242E5C] text-white font-semibold rounded-xl w-96">
              2025
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
