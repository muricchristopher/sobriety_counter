import React from "react";
import Timer from "../Timer";
import TimerElement from "./TimerElement";
// import useCountdownTimer from "./useCountdownTimer";

function Countdown() {
  // const [input, setInput] = React.useState("2020-04-12");

  const [tempo, setTempo] = React.useState(new Date().getTime());

  const [countdownTimer, setCountdownTimer] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [intervalo, setIntervalo] = React.useState(false);

  function handleClick() {
    setIntervalo(!intervalo);
    setTempo(new Date().getTime());
  }
  function handleZero() {}

  React.useEffect(() => {
    if (intervalo) {
      const interval = setInterval(() => {
        setCountdownTimer(Timer(tempo));
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCountdownTimer({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  }, [intervalo, tempo]);

  return (
    <div className="Countdown">
      <h1>Teste</h1>
      <hr />
      <div className="countdown-container">
        <TimerElement type="days" countdownTimer={countdownTimer} />
        <TimerElement type="hours" countdownTimer={countdownTimer} />
        <TimerElement type="minutes" countdownTimer={countdownTimer} />
        <TimerElement type="seconds" countdownTimer={countdownTimer} />
      </div>

      <button onClick={handleClick}>Iniciar</button>
      <button onClick={handleZero}>Zerar</button>
    </div>
  );
}

export default Countdown;
