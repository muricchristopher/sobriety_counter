import "./App.css";
import Countdown from "./components/Countdown";
import React from "react";
import Timer from "./Timer";
import ConfigElement from "./components/ConfigElement";
import useLocalStorage from "./customHooks/useLocalStorage";

function App() {
  const [data, setData] = React.useState("");

  const [tempo, setTempo] = useLocalStorage("tempo", "");

  const [countdownTimer, setCountdownTimer] = React.useState(Timer(tempo));

  const [configElement, setConfigElement] = React.useState();

  const [intervalo, setIntervalo] = useLocalStorage(
    "intervalo",
    JSON.stringify(false)
  );

  const [sobrietyTitle, setSobrietyTitle] = useLocalStorage(
    "sobrietyTitle",
    "Sobriety Counter"
  );

  const [goal, setGoal] = React.useState(3);

  function handleClick() {
    if (JSON.parse(intervalo) === true) {
      setData(parseInt(data + countdownTimer.totalHours));
    }

    if (JSON.parse(intervalo) === false) {
      setTempo(new Date().getTime());
    }

    setIntervalo(!JSON.parse(intervalo));
  }

  React.useEffect(() => {}, [intervalo]);

  return (
    <div className="App">
      {configElement && (
        <ConfigElement
          countdownTimer={countdownTimer}
          sobrietyTitle={sobrietyTitle}
          setSobrietyTitle={setSobrietyTitle}
          configElement={configElement}
          setConfigElement={setConfigElement}
          goal={goal}
          setGoal={setGoal}
          data={data}
        ></ConfigElement>
      )}

      <div
        className={!configElement ? "Countdown" : "Countdown blur"}
        onClick={(e) => configElement && setConfigElement(!configElement)}
      >
        <h1>{sobrietyTitle}</h1>

        <div>
          <span
            onClick={() => setConfigElement(!configElement)}
            className="config-editor"
          >
            <i className="fa-solid fa-pencil"></i>
          </span>
        </div>
        <hr />

        <Countdown
          countdownTimer={countdownTimer}
          setCountdownTimer={setCountdownTimer}
          intervalo={intervalo}
          tempo={tempo}
          setTempo={setTempo}
          goal={goal}
          data={data}
        />

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
    </div>
  );
}

export default App;
