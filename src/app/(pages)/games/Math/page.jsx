import {ArrowDownOnSquareIcon} from "@heroicons/react/20/solid";

export default function MathGame() {
    return (
      <div className="text-center py-20 flex w-full px-40 space-x-5">
      <div className="w-2/3 h-[500px] bg-gray-200 rounded-2xl"></div>
      <section className="w-1/3 flex flex-col justify-around text-left">
        <p className="font-bold text-white text-6xl">Little Alchemy</p>
        <p className="font-bold text-white text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur esse maiores id ullam repudiandae at itaque, saepe in modi dolorem culpa suscipit aut laborum. Quos cum ex in asperiores corrupti.</p>
        <div className="flex gap-5">

        <button className="bg-white px-4 py-3 text-2xl font-bold text-black rounded-xl">Jugar</button>
        <button className="bg-white px-4 py-3 text-2xl font-bold text-black rounded-xl flex items-center">
          <ArrowDownOnSquareIcon className="w-8 h-8"/>
          Descargar
        </button>
        </div>
      </section>
    </div>
    );
  }
  