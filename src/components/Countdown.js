import React from "react";
import Timer from "../Timer";
import TimerElement from "./TimerElement";
import ConfigElement from "./ConfigElement";
// import useCountdownTimer from "./useCountdownTimer";

function Countdown() {
  // const [input, setInput] = React.useState("2020-04-12");

  const [tempo, setTempo] = React.useState(new Date().getTime());

  const [countdownTimer, setCountdownTimer] = React.useState({});

  const [configElement, setConfigElement] = React.useState(false);

  const [intervalo, setIntervalo] = React.useState(false);

  const [habitName, setHabitName] = React.useState("");

  const [goal, setGoal] = React.useState(3);

  function handleClick() {
    setIntervalo(!intervalo);
    setTempo(new Date().getTime());
  }

  React.useEffect(() => {
    if (intervalo) {
      const interval = setInterval(() => {
        setCountdownTimer(Timer(tempo));
      }, 1000);

      return () => clearInterval(interval);
    } else {
      setCountdownTimer({ days: 20, hours: 0, minutes: 0, seconds: 0 });
    }
  }, [intervalo, tempo]);

  return (
    <>
      {configElement && (
        <ConfigElement
          countdownTimer={countdownTimer}
          habitName={habitName}
          setHabitName={setHabitName}
          configElement={configElement}
          setConfigElement={setConfigElement}
          goal={goal}
          setGoal={setGoal}
        ></ConfigElement>
      )}

      <div
        className={!configElement ? "Countdown" : "Countdown blur"}
        onClick={(e) => configElement && setConfigElement(!configElement)}
      >
        {habitName ? <h1>{habitName}</h1> : <h1>Sobriety counter</h1>}
        <div>
          <span
            onClick={() => setConfigElement(!configElement)}
            className="config-editor"
          >
            <i className="fa-solid fa-pencil"></i>
          </span>
        </div>
        <hr />
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

        <button
          onClick={handleClick}
          style={{
            outline: "none",
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          <span className="click">
            <i className="fa-solid fa-power-off "></i>
            -- Report relapse
          </span>
        </button>
      </div>
    </>
  );
}

export default Countdown;
