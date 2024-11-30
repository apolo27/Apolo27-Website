import Link from "next/link";
import Image from "next/image";

export default function Games() {
  return (
    <div className="text-center space-y-10 pt-10 pb-40">
      <h1 className="font-extrabold text-white text-6xl stem-games-title">
        <Link href="/stem-with-us">
          <span className="text-green-500">S</span>
          <span className="text-blue-500">T</span>
          <span className="text-red-500">E</span>
          <span className="text-purple-500">M</span>
        </Link>
         &nbsp;GAMES
      </h1>
      <div className="w-full grid justify-items-center gap-10 grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1">
        <Link
          href="/games/science"
          className="w-fit rounded-2xl overflow-clip border border-opacity-50 border-[#28A53C] shadow-[#28A53C] shadow-xl hover:shadow-[#28A53C] hover:shadow-2xl hover:scale-105 hover:cursor-pointer transition-all duration-200 ease-in-out"
        >
          <Image
            src="/images/thumbnailExample.jpg"
            alt="Science Game"
            width="0"
            height="0"
            sizes="100vw"
            className="w-[300px] h-[500px]"
          />
        </Link>
        <Link
          href="/games/technology"
          className="w-fit rounded-2xl overflow-clip border border-opacity-50 border-[#067DD3] shadow-[#067DD3] shadow-xl hover:shadow-[#067DD3] hover:shadow-2xl hover:scale-105 hover:cursor-pointer transition-all duration-200 ease-in-out"
        >
          <Image
            src="/images/thumbnailExample.jpg"
            alt="Technology Game"
            width="0"
            height="0"
            sizes="100vw"
            className="w-[300px] h-[500px]"
          />
        </Link>
        <Link
          href="/games/herc-simulation"
          className="w-fit rounded-2xl overflow-clip border border-opacity-50 border-[#710609] shadow-[#710609] shadow-xl hover:shadow-[#710609] hover:shadow-2xl hover:scale-105 hover:cursor-pointer transition-all duration-200 ease-in-out "
        >
          <Image
            src="/images/thumbnailExample.jpg"
            alt="HERC Simulation"
            width="0"
            height="0"
            sizes="100vw"
            className="w-[300px] h-[500px]"
          />
        </Link>
        <Link
          href="/games/math"
          className="w-fit rounded-2xl overflow-clip border border-opacity-50 border-[#A010C5] shadow-[#A010C5] shadow-xl hover:shadow-[#A010C5] hover:shadow-2xl hover:scale-105 hover:cursor-pointer transition-all duration-200 ease-in-out"
        >
          <Image
            src="/images/thumbnailExample.jpg"
            alt="Math Game"
            width="0"
            height="0"
            sizes="100vw"
            className="w-[300px] h-[500px]"
          />
        </Link>
      </div>
    </div>
  );
}
