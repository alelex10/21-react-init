import { useEffect, useState } from "react";

export const useTimer = () => {
  const [timerInput, setTimerInput] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const interval = () => {
    return setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft === 0) {
          setIsRunning(false);
          return 0;
        }
        return timeLeft - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    let idInterval: number;

    if (isRunning) idInterval = interval();

    return () => clearTimeout(idInterval);
  }, [isRunning]);

  let textButton: string;

  switch (isRunning) {
    case true:
      textButton = "Pause";
      break;
    case false:
      timeLeft === 0 ? (textButton = "Start") : (textButton = "Resume");
      break;
    default:
      textButton = "Start";
      break;
  }

  const textButtonAux = () => {
    if (isRunning) return "Pause";
    if (timeLeft === 0 || timeLeft == timerInput) return "Start";
    return "Resume";
  };

  const handleTimer = () => {
    let timeLeftAux = timeLeft !== timerInput && timeLeft !== 0 ? timeLeft : timerInput;
    setTimeLeft(timeLeftAux);
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setTimeLeft(timerInput);
    setIsRunning(false);
  };

  return {
    timerInput,
    setTimerInput,
    timeLeft,
    setTimeLeft,
    isRunning,
    setIsRunning,
    textButton,
    textButtonAux,
    handleTimer,
    handleReset,
  };
};
