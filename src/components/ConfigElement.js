import React from "react";

const ConfigElement = ({
  habitName,
  setHabitName,
  setConfigElement,
  configElement,
  goal,
  setGoal,
  countdownTimer,
}) => {
  return (
    <div className="ConfigElement">
      <span onClick={() => setConfigElement(!configElement)}>
        <i className="fa-solid fa-minus"></i>
      </span>

      <h2>Preferences</h2>
      <hr></hr>
      <form>
        <div className="configInput">
          <label>Title streak: </label>
          <input
            type="text"
            value={habitName}
            onChange={({ target }) => setHabitName(target.value)}
          ></input>
        </div>
        <div className="configInput">
          <label>Goal: </label>
          <input
            type="range"
            min={countdownTimer.days + 3}
            max="240"
            value={goal}
            onChange={({ target }) => setGoal(parseInt(target.value))}
          ></input>
          <span>{goal} days</span>
        </div>
        <div className="configInput">
          <label>Sobriety total time: </label>
          <span>44hrs</span>
        </div>
      </form>
    </div>
  );
};

export default ConfigElement;
