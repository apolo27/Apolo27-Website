import useTimer from "../../shared/hooks/useTimer";
import NumberFlow from "@number-flow/react";
import { useTranslations } from "next-intl";
export const Timer = () => {
  const t = useTranslations('timer');
  const { days, hours, minutes, seconds } = useTimer("2025-05-17T07:00:00");
  return (
    <div className="z-10 w-fit px-5 py-2 rounded-full bg-black/[0.6] border border-1 border-white/[0.6] flex items-center gap-4  ">
      <p className="text-xs xs:text-md md:text-lg bg-clip-text text-transparent bg-gradient-to-t  font-semibold from-[#87e496] via-[#60bee4] via-72% to-[#37afff]">
        {t("title")}
      </p>
      <p className="text-md xs:text-xl lg:text-3xl font-semibold timer-text">
        {days}<span className="font-bold">d</span>{" "}
        {hours}<span className="font-bold">h</span>{" "}
        {minutes}<span className="font-bold">m</span>{" "}
        {seconds}<span className="font-bold">s</span>
      </p>
    </div>
  );
};
