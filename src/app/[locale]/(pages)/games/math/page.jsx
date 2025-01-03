import { ArrowDownOnSquareIcon } from "@heroicons/react/20/solid";

export default function MathGame() {
  return (
    <div className="text-center py-20 flex flex-col md:flex-row w-full md:px-40 md:space-x-5">
      
      <div className="z-10 flex justify-center items-center w-5/6 self-center text-center md:px-0 md:w-2/3 h-[200px] md:h-[500px] bg-gray-200 rounded-2xl mb-10 md:mb-0">
        <p className="text-slate-700 text-3xl lg:text-7xl font-bold">Coming Soon...</p>
      </div>
      <section className="w-full md:w-1/3 px-5 md:px-0 gap-5 md:gap-0 flex flex-col justify-around text-center md:text-left">
        <p className="z-10 font-bold text-violet-400 text-6xl">Math Temple</p>
        <p className="font-bold text-white text-xl">
        Run, jump, and solve! Conquer the Math Temple with your arithmetic prowess. Math challenges await! Can you escape the temple with your math skills?
        </p>
        <div className="flex gap-5 justify-center md:justify-start">
          <button disabled className=" z-10 opacity-30 bg-white px-4 py-3 text-2xl font-bold text-black rounded-xl">
            Jugar
          </button>
          <button disabled className=" z-10 opacity-30 bg-white px-4 py-3 text-2xl font-bold text-black rounded-xl flex items-center">
            <ArrowDownOnSquareIcon className="w-8 h-8" />
            Descargar
          </button>
        </div>
      </section>
    </div>
  );
}
