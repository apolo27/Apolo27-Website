import Image from "next/image";
import { Timer } from "./components/Timer";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/solid";
export default function Home() {
  return (
    <div className="text-center">
      <div className="h-fit bg-gradient-to-t from-[#101321] to-[#40D1FF] px-40 flex flex-col items-center py-20 ">
        <Timer />
        <p className="font-bold text-5xl w-3/4 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-200">
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
      <div className="relative z-10 w-full rounded-b-full h-60 border-b-4 border-white bg-[#101321] drop-shadow-2xl shadow-white">
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 rounded-full border-4 border-white bg-white/[0.2]  drop-shadow-2xl shadow-white flex items-center justify-center w-fit p-3">
          <ArrowDownIcon className="w-12  h-12 text-white " />
        </div>
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 rounded-full bg-transparent  drop-shadow-2xl shadow-white flex items-center justify-center w-20 h-20 filter blur-xl  p-3"></div>
      </div>

      <section className="bg-[#101321] transform -translate-y-64 min-h-screen pt-96 ">
        <p className="text-white font-bold text-5xl">About Us</p>
        <div className="flex justify-between">

        <div className="bg-red-500 rounded-r-md h-fit w-1/3">
          <p>Human Powered</p>
          <div className="flex">

          <Image src="/images/about-us/Marko1.png" alt="Team Lead HP" width={300} height={300} />
          <Image src="/images/about-us/Anne1.png" alt="Team Lead HP" width={300} height={300} />
          </div>
        </div>
        <div className="bg-blue-500 rounded-r-md h-fit">
          <p>Remote Controlled</p>
        </div>
        </div>
      </section>
    </div>
  );
}
