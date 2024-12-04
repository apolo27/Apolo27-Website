import { ArrowDownOnSquareIcon } from "@heroicons/react/20/solid";

export default function TechnologyGame() {
  return (
    <div className="text-center py-20 flex flex-col md:flex-row w-full md:px-40 md:space-x-5">
      <div className="w-5/6 flex self-center md:px-0 md:w-2/3 h-[200px] md:h-[500px] bg-gray-200 rounded-2xl mb-10 md:mb-0"></div>
      <section className="w-full md:w-1/3 px-5 md:px-0 gap-5 md:gap-0 flex flex-col justify-around text-center md:text-left">
        <p className="font-bold text-white text-6xl">Little Alchemy</p>
        <p className="font-bold text-white text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          esse maiores id ullam repudiandae at itaque, saepe in modi dolorem
          culpa suscipit aut laborum. Quos cum ex in asperiores corrupti.
        </p>
        <div className="flex gap-5 justify-center md:justify-start">
          <button className="bg-white px-4 py-3 text-2xl font-bold text-black rounded-xl">
            Jugar
          </button>
          <button className="bg-white px-4 py-3 text-2xl font-bold text-black rounded-xl flex items-center">
            <ArrowDownOnSquareIcon className="w-8 h-8" />
            Descargar
          </button>
        </div>
      </section>
    </div>
  );
}
