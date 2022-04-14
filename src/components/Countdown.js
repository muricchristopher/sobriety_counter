import React from "react";
import Timer from "../Timer";
import TimerElement from "./TimerElement";

function Countdown({
  countdownTimer,
  setCountdownTimer,
  tempo,
  intervalo,
  goal,
  setTempo,
  data,
}) {
  React.useEffect(() => {
    if (JSON.parse(intervalo)) {
      const interval = setInterval(() => {
        setCountdownTimer(Timer(tempo));
      }, 1000);

      return () => clearInterval(interval);
    } else {
      setCountdownTimer({
        days: 1,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    }
  }, [intervalo, tempo, countdownTimer, setCountdownTimer]);

  // React.useEffect(() => {
  //   if (!intervalo) {
  //   }
  // }, []);

  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          width: ((countdownTimer.days * 100) / goal).toFixed(0) + "%",
        }}
        className="goal-counter"
      >
        {((countdownTimer.days * 100) / goal).toFixed(0) + "%"}
      </div>
      <div className="countdown-container">
        <TimerElement type="days" countdownTimer={countdownTimer} />
        <TimerElement type="hours" countdownTimer={countdownTimer} />
        <TimerElement type="minutes" countdownTimer={countdownTimer} />
        <TimerElement type="seconds" countdownTimer={countdownTimer} />
      </div>
    </>
  );
}

export default Countdown;
