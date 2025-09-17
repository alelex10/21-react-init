// Ejercicio 3: Hook Personalizado
// Crea un hook useTimer que:

import { useState } from "react";

// Maneje un temporizador.
// Permita pausar/reanudar.
// Tenga función de reset.
// Ejecute callback cuando llegue a cero.
type stadeTimer = "Start" | "Pause" | "Resume";
export const Timer = () => {
  const [timerInput, setTimerInput] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [buttonText, setButtonText] = useState<stadeTimer>("Start");
  const textButton = {
    Start: "Start",
    Pause: "Pause",
    Resume: "Resume",
  }[buttonText];

  const interval = setInterval(() => {
    if (isRunning && timeLeft > 0) {
      setTimeLeft(timeLeft - 1);
    }
  }, 1000);

  const handlePause = () => {
    setIsRunning(false);
    setButtonText("Resume");
    if (timeLeft === 0) {
      setButtonText("Start");
    }

  };
  const handleStart = () => {
    setTimeLeft(timerInput);
    setButtonText("Pause");
    setIsRunning(true);
  };
  const handleResume = () => {
    setButtonText("Pause");
    setIsRunning(true   );
  };
  const handleTimer = {
    Start: handleStart,
    Pause: handlePause,
    Resume: handleResume,
  }[buttonText];

  const handleReset = () => {
    setIsRunning(false);
    setButtonText("Start");
    setTimeLeft(timerInput);
  };

  return (
    <div>
      <h1>Timer</h1>

      <input
        value={timerInput}
        type="number"
        onChange={(event) => setTimerInput(Number(event.target.value))}
      />
      <p>Time Left: {timeLeft} seconds</p>
      <button onClick={handleTimer}>{textButton}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
