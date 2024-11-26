export const Timer = () => {
  return (
    <div className="w-fit px-5 py-2 rounded-full bg-black/[0.6] border border-1 border-white/[0.6] flex items-center gap-4  ">
      <p className="text-xs bg-clip-text text-transparent bg-gradient-to-t  font-semibold from-[#69bf77] via-[#3b9fc6] via-72% to-[#3099e0]">
        COUNTDOWN TIMER
      </p>
      <span className="text-2xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-t  font-semibold from-[#69bf77] via-[#3b9fc6] via-72% to-[#3099e0]">00:00:00:00:00:00</span>
    </div>
  );
};
