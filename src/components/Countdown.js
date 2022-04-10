import React from "react";
import Timer from "../Timer";
import TimerElement from "./TimerElement"

function Countdown() {
  const countDownDate = new Date("Apr,29 2023 23:19:02").getTime();
  const [countdownTimer, setCountdownTimer] = React.useState({});
  const [titlePage, setTitlePage] = React.useState("Titulo estático")

  function advanceCountDown(){
      setInterval(() => {
        setCountdownTimer(Timer(countDownDate))
      }, 1000)
  }

  if(countdownTimer !== false){
    advanceCountDown()
  }

  return (
    <div className="Countdown">
      <h1>{titlePage}</h1>
      <hr />
      <div className="countdown-container">
        <TimerElement type="days"  countdownTimer={countdownTimer}/>
          <TimerElement type="hours"  countdownTimer={countdownTimer}/>
            <TimerElement type="minutes"  countdownTimer={countdownTimer}/>
              <TimerElement type="seconds"  countdownTimer={countdownTimer}/>
      </div>
    </div>
  );
}

export default Countdown;
