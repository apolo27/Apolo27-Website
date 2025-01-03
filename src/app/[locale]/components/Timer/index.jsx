import useTimer from "../../shared/hooks/useTimer";
import NumberFlow from "@number-flow/react";
export const Timer = () => {
  const { days, hours, minutes, seconds } = useTimer("2025-05-17T07:00:00");
  return (
    <div className="w-fit px-5 py-2 rounded-full bg-black/[0.6] border border-1 border-white/[0.6] flex items-center gap-4  ">
      <p className="text-xl bg-clip-text text-transparent bg-gradient-to-t  font-semibold from-[#69bf77] via-[#3b9fc6] via-72% to-[#3099e0]">
        TIMER FOR HERC
      </p>
      <span className="text-2xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-t  font-semibold from-[#69bf77] via-[#3b9fc6] via-72% to-[#3099e0]">
        <NumberFlow value={days} format={{ notation: "compact" }} />d{" "}
        <NumberFlow value={hours} format={{ notation: "compact" }} />h{" "}
        <NumberFlow value={minutes} format={{ notation: "compact" }} />m{" "}
        <NumberFlow value={seconds} format={{ notation: "compact" }} />s
      </span>
    </div>
  );
};
