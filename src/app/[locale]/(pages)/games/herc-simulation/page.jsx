"use client";
import {
  ArrowDownOnSquareIcon,
  ArrowLeftIcon,
} from "@heroicons/react/20/solid";
import { Link } from "../../../../../i18n/routing";
import Image from "next/image";
import EmblaCarousel from "../../../components/Carousel/EmblaCarousel";
import { useTranslations } from "next-intl";

export default function HERCSimulation() {
  const t = useTranslations("Games");
  const OPTIONS = { dragFree: true, loop: true, containScroll: true };
  return (
    <div className="flex-col my-10">
    <p className="text-center font-bold text-red-500 text-3xl md:text-6xl mb-10">{t("HERCSimulation.title")}</p>
    <EmblaCarousel className="w-11/12 md:w-5/6 flex items-center self-center h-fit rounded-2xl"
      options={OPTIONS}
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
      <Image
        className="w-full h-full embla__slide"
        src="/images/games/simulation/moon.png"
        alt="customization"
        width={0}
        height={0}
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
    </EmblaCarousel>
    <section className=" flex flex-col gap-5 items-center mt-10">
      <p className="font-bold text-white text-md xl:text-xl w-5/6 lg:w-2/3 text-center">{t("HERCSimulation.description")}</p>
      <div className="flex gap-5">
        <Link
          href="https://ctrl-sebastian.itch.io/rover-simulation"
          className="w-full lg:w-auto bg-white px-4 py-3 text-2xl font-bold text-black rounded-xl"
        >
          {t("playButton")}
        </Link>
        <button
          disabled
          className="hidden lg:flex opacity-30 bg-white px-4 py-3 text-2xl font-bold text-black rounded-xl items-center"
        >
          <ArrowDownOnSquareIcon className="w-8 h-8" />
          {t("downloadButton")}
        </button>
      </div>
      <Link href={"/games"} className="z-50 gap-5 text-lg text-white font-semibold bg-gradient-to-br from-cyan-800 to-violet-700 flex rounded-xl items-center px-4 py-3"> 
        <ArrowLeftIcon className="w-8 h-8" />
        {t("otherGames")}{" "}
      </Link>
    </section>
  </div>
  );
}
