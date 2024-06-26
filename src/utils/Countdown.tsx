"use client";
import React, { useEffect, useState } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(86400);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };
  return (
    <div>
      <p>End Time: {formatTime(timeLeft)}</p>
    </div>
  );
};

export default Countdown;
