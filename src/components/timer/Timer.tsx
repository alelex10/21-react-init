import { useTimer } from "./useTimer";
import styles from "./Timer.module.css"; // Import CSS Modules

export const Timer = () => {
  const { timerInput, timeLeft, textButtonAux, handleTimer, handleReset, setTimerInput } =
    useTimer();

  // Determine button class based on textButtonAux()
  const getButtonClass = () => {
    if (textButtonAux() === "Start") {
      return styles.startButton;
    } else if (textButtonAux() === "Pause") {
      return styles.pauseButton;
    }
    return ""; // Default or unexpected cases
  };

  return (
    <div className={styles.timerContainer}>
      <h1>Timer</h1>

      <input
        value={timerInput}
        type="number"
        onChange={(event) => setTimerInput(Number(event.target.value))}
        className={styles.timerInput}
        placeholder="Enter seconds"
      />
      <p className={styles.timeLeft}>Time Left: {timeLeft} seconds</p>
      <div className={styles.buttonGroup}>
        <button onClick={handleTimer} className={`${styles.timerButton} ${getButtonClass()}`}>
          {textButtonAux()}
        </button>
        <button onClick={handleReset} className={`${styles.timerButton} ${styles.resetButton}`}>
          Reset
        </button>
      </div>
    </div>
  );
};
export default Timer;