'use client';
import { useRouter } from '../../../../i18n/routing';
import {Link} from '../../../../i18n/routing';
import Image from "next/image";

import { useTranslations } from "next-intl";

export default function Games() {
  const t = useTranslations("Games");
  const router = useRouter()
  const games = [
    {
      title: t("HERCSimulation.title"),
      caption: t("HERCSimulation.caption"),
      image: "/images/games/simulation.jpg",
      link: "/games/herc-simulation",
      color: "#710609",
      isPublished: true,
    },
    {
      title: t("ScienceGame.title"),
      caption: t("ScienceGame.caption"),
      image: "/images/games/bigalchemy.png",
      link: "/games/science",
      color: "#28A53C",
      isPublished: false,
    },
    {
      title: t("TechnologyGame.title"),
      caption: t("TechnologyGame.caption"),
      image: "/images/games/typinghero.png",
      link: "/games/technology",
      color: "#067DD3",
      isPublished: false,
    },
    {
      title: t("MathGame.title"),
      caption: t("MathGame.caption"),
      image: "/images/games/mathtemple.png",
      link: "/games/math",
      color: "#A010C5",
      isPublished: false,
    },
  ];
  return (
    <div className="text-center space-y-10 pt-10 pb-20">
      <h1 className="font-extrabold text-white text-6xl stem-games-title">
        <Link href="/stem-with-us" className="relative group">
          <span className="text-green-500">S</span>
          <span className="text-blue-500">T</span>
          <span className="text-red-500">E</span>
          <span className="text-purple-500">M</span>

          <p className="hidden group-hover:block animate-bounce  text-xs font-thin absolute bottom-0 left-1/2 -translate-x-1/2">with us</p>
        </Link>
        &nbsp;GAMES
      </h1>
      <p className="font-semibold text-white text-2xl stem-games-title">
        {t("Subtitle")}
      </p>
      <div className="text-white w-full text-center flex flex-col justify-center items-center space-y-10 xl:space-y-20">
        {games.map((game, index) => (
          <div
            key={index}
            className={`w-3/4 flex flex-col-reverse gap-10 md:gap-0 md:flex-row ${
              index % 2 === 0 ? "  md:flex-row-reverse" : ""
            } justify-between items-center z-10 `}
          >
            <div className="w-10/12 md:w-1/2 space-y-5">
              <p className="text-3xl 2xl:text-5xl font-semibold">
                {game.title}
              </p>
              <p className="2xl:text-3xl">{game.caption}</p>
              <button
                type="button"
                onClick={() => router.push(game.link)}
                disabled={!game.isPublished ? true : false}
                className={`${
                  !game.isPublished
                    ? "opacity-50"
                    : " hover:pointer hover:bg-slate-200 hover:scale-105"
                } rounded-xl w-full bg-white text-black font-bold text-xl px-4 py-3 transition-all`}
              >
                {t("visitButton")}
              </button>
            </div>
            <div className="w-10/12 md:w-1/2 flex justify-center">
              <div
                className={`w-fit rounded-2xl overflow-clip border border-opacity-50 border-[${game.color}] shadow-[${game.color}] shadow-xl hover:shadow-[${game.color}] hover:shadow-2xl hover:scale-105 hover:cursor-pointer transition-all duration-200 ease-in-out`}
              >
                <Image
                  src={game.image}
                  alt={game.title}
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                  className={`w-[400px] h-[500px] ${
                    !game.isPublished ? "filter blur-lg" : ""
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
