"use client";
import { ArrowDownOnSquareIcon } from "@heroicons/react/20/solid";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
export default function ScienceGame() {
  const router = useRouter();

  return (
    <div className="relative text-center py-20 2xl:py-48 flex flex-col md:flex-row w-full md:px-40 md:space-x-5">
      <button
        onClick={() => router.back()}
        className="p-2 rounded-xl top-3 left-10 md:top-5 3xl:top-32 md:left-44 absolute text-black bg-white hover:bg-slate-100 hover:pointer"
      >
        <ArrowLeftIcon className=" w-8 h-8" />
      </button>
      <div className="z-10 flex justify-center items-center w-5/6 self-center text-center md:px-0 md:w-2/3 h-[200px] md:h-[500px] bg-gray-200 rounded-2xl mb-10 md:mb-0">
        <p className="text-slate-700 text-3xl lg:text-6xl font-bold">
          Coming Soon...
        </p>
      </div>{" "}
      <section className="w-full md:w-1/3 px-5 md:px-0 gap-5 md:gap-0 flex flex-col justify-around text-center md:text-left">
        <p className="font-bold text-green-500 text-6xl">Little Alchemy</p>
        <p className="font-bold text-white text-xl">
          Unleash your inner scientist! Combine elements to discover the secrets
          of nature. Become a master of the elements.
        </p>
        <div className="flex gap-5 justify-center md:justify-start">
          <button
            disabled
            className="opacity-30 bg-white px-4 py-3 text-2xl font-bold text-black rounded-xl"
          >
            Jugar
          </button>
          <button
            disabled
            className="opacity-30 bg-white px-4 py-3 text-2xl font-bold text-black rounded-xl flex items-center"
          >
            <ArrowDownOnSquareIcon className="w-8 h-8" />
            Descargar
          </button>
        </div>
      </section>
    </div>
  );
}
