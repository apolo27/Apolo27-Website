"use client";
import { useState, useEffect } from "react";

export const Timer = () => {
  const calculateTimeLeft = () => {
    // Usar formato ISO para prevenir problemas de interpretación de zonas horarias
    const targetDate = new Date("2025-03-25T12:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft();
      setTimeLeft(updatedTimeLeft);
    }, 1000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(timer);
  }, []);

  const format = (num) => String(num).padStart(2, "0");

  return (
    <div className="w-fit px-5 py-2 rounded-full bg-black/[0.6] border border-1 border-white/[0.6] flex items-center gap-4">
      <p className="text-xs bg-clip-text text-transparent bg-gradient-to-t font-semibold from-[#69bf77] via-[#3b9fc6] via-72% to-[#3099e0]">
        COUNTDOWN TIMER
      </p>
      <span className="text-2xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-t font-semibold from-[#69bf77] via-[#3b9fc6] via-72% to-[#3099e0]">
        {format(timeLeft.days)}d : {format(timeLeft.hours)}h :{" "}
        {format(timeLeft.minutes)}m : {format(timeLeft.seconds)}s
      </span>
    </div>
  );
};
