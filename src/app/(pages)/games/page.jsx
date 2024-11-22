import Link from "next/link";
import Image from "next/image";
import { Sparkles } from "../../components/Sparkles";

export default function Games() {
  return (
    <div className="text-center">
        <h1 className="font-extrabold text-white shadow-white shadow-lg">STEM GAMES</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 grid-rows-4 lg:grid-rows-1">
        <Link href="/HERC-Simulation" className="">
            <Image 
                src="/images/thumbnailExample.jpg"
                alt="HERC Simulation"
                width={300}
                height={500}
            />
        </Link>
        <Link href="/Math" className="">
            <Image 
                src="/images/thumbnailExample.jpg"
                alt="Math Game"
                width={300}
                height={500}
            />
        </Link>
        <Link href="/Science" className="">
            <Image 
                src="/images/thumbnailExample.jpg"
                alt="Science Game"
                width={300}
                height={500}
            />
        </Link>
        <Link href="/Technology" className="">
            <Image 
                src="/images/thumbnailExample.jpg"
                alt="Technology Game"
                width={300}
                height={500}
            />
        </Link>
      </div>
      <Sparkles
        density={800}
        speed={1.2}
        size={1.2}
        direction="top"
        opacitySpeed={2}
        color="#32A7FF"
        className="absolute inset-x-0 bottom-0 h-full w-full "
      />
    </div>
  );
}
