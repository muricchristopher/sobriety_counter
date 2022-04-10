import React from "react";
const TimerElement = ({ type, countdownTimer }) => {
  return (
    <div className="countdown-el">
      <p className="big-text" id={type}>
        {countdownTimer[type]}
      </p>
      <span>{type}</span>
    </div>
  );
};

export default TimerElement;

//   <div className="countdown-el hours-c">
//     <p className="big-text" id="hours">
//       {countdownTimer.hours}
//     </p>
//     <span>hours</span>
//   </div>
//   <div className="countdown-el minutes-c">
//     <p className="big-text" id="minutes">
//       {countdownTimer.minutes}
//     </p>
//     <span>minutes</span>
//   </div>
//   <div className="countdown-el seconds-c">
//     <p className="big-text" id="seconds">
//       {countdownTimer.seconds}
//     </p>
//     <span>seconds</span>
//   </div>
// </div>
