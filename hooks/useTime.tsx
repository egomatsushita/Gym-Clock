import { useState, useEffect } from "react";

interface Time {
  hours: string;
  time: string;
}
const useTime = () => {
  const [currentTime, setCurrentTime] = useState<Time>(getCurrentTime());

  useEffect(() => {
    const secondsInterval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => {
      clearInterval(secondsInterval);
    };
  }, []);

  return currentTime;
};

const getCurrentTime = (): { hours: string; time: string } => {
  const now = new Date(Date.now());
  const hours = formatTime(now.getHours());
  const minutes = formatTime(now.getMinutes());
  const seconds = formatTime(now.getSeconds());

  return {
    hours,
    time: `${hours}:${minutes}:${seconds}`,
  };
};

const formatTime = (time: number): string => {
  return time < 10 ? `0${time}` : `${time}`;
};

export default useTime;
