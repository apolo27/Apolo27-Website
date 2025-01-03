"use client";
import {
  ArrowDownOnSquareIcon,
  ArrowLeftIcon,
} from "@heroicons/react/20/solid";
import { Link } from "../../../../../i18n/routing";
import { useRouter } from "../../../../../i18n/routing";
import Image from "next/image";
import EmblaCarousel from "../../../components/Carousel/EmblaCarousel";
import { useTranslations } from "next-intl";

export default function HERCSimulation() {
  const t = useTranslations("Games.HERCSimulation");
  const OPTIONS = { dragFree: true, loop: true, containScroll: false };
  const router = useRouter();
  return (
    <div className="text-center py-20 2xl:py-48 flex flex-col md:flex-row w-full md:px-28 md:space-x-5 relative">
      <button
        onClick={() => router.back()}
        className="p-2 rounded-xl top-20 left-36 absolute text-black bg-white hover:bg-slate-100 hover:pointer"
      >
        <ArrowLeftIcon className=" w-8 h-8" />
      </button>
      <EmblaCarousel
        options={OPTIONS}
        className="w-5/6 flex items-center self-center md:px-0 md:w-2/3 h-[200px] md:h-[500px] rounded-2xl mb-10 md:mb-0"
      >
        <Image
          className="w-full h-full embla__slide"
          src="/images/games/simulation/customization.png"
          alt="customization"
          width={0}
          height={0}
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <Image
          className="w-full h-full embla__slide"
          src="/images/games/simulation/moon.png"
          alt="customization"
          width={0}
          height={0}
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <Image
          className="w-full h-full embla__slide"
          src="/images/games/simulation/obstacle.png"
          alt="customization"
          width={0}
          height={0}
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <Image
          className="w-full h-full embla__slide"
          src="/images/games/simulation/task4.png"
          alt="customization"
          width={0}
          height={0}
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </EmblaCarousel>
      <section className="w-full md:w-1/3 px-5 md:px-0 gap-5 md:gap-0 flex flex-col justify-around text-center md:text-left">
        <p className="font-bold text-white lg:text-4xl 2xl:text-6xl">
          {t("title")}
        </p>
        <p className="font-bold text-white lg:text-lg 2xl:text-xl">
          {t("description")}
        </p>
        <div className="flex gap-5 justify-center md:justify-start">
          <Link
            href="https://ctrl-sebastian.itch.io/rover-simulation"
            className="bg-white px-4 py-3 text-2xl font-bold text-black rounded-xl"
          >
            {t("playButton")}
          </Link>
          <button
            disabled
            className="opacity-30 bg-white px-4 py-3 text-2xl font-bold text-black rounded-xl flex items-center"
          >
            <ArrowDownOnSquareIcon className="w-8 h-8" />
            {t("downloadButton")}
          </button>
        </div>
      </section>
    </div>
  );
}
