import { ArrowDownOnSquareIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";
import {
  ArrowLeftIcon,
} from "@heroicons/react/20/solid";
import { Link } from "../../../../../i18n/routing";

export default function MathGame() {
  const t = useTranslations("Games.MathGame");
  return (
    <div className="flex-col my-20 justify-center items-center">
      <p className="text-center font-bold text-purple-500 text-6xl mb-10">
        {t("title")}
      </p>
      <div className="w-2/3 bg-gray-200 rounded-2xl z-10 flex justify-center items-center self-center text-center h-96 mb-10">
        <p className="text-slate-700 text-3xl lg:text-6xl font-bold">
          Coming Soon...
        </p>
      </div>
      <section className="flex flex-col gap-5 items-center">
        <p className="font-bold text-white text-xl w-2/3 text-center">
          {t("description")}
        </p>
        <div className="flex gap-5">
          <Link
            href="https://ctrl-sebastian.itch.io/space-typing-hero"
            className=" bg-white px-4 py-3 text-2xl font-bold text-black rounded-xl"
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
        <Link
          href="/games"
          className="z-50 gap-5 text-lg text-white font-semibold bg-gradient-to-br from-cyan-800 to-violet-700 flex rounded-xl items-center px-4 py-3"
        >
          {" "}
          <ArrowLeftIcon className="w-8 h-8" />
          Other Games{" "}
        </Link>
      </section>
    </div>
  );
}
