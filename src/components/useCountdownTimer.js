import React from "react";

const useCountdownTimer = (timer, date) => {
  const data = new Date(date).getTime();

  const [tempo, setTempo] = React.useState(data);
  const [state, setState] = React.useState(timer(tempo));

  React.useEffect(() => {
    const interval = setInterval(() => {
      setState(timer(tempo));
    }, 1000);
  }, [timer, tempo]);

  return [state, setState];
};

export default useCountdownTimer;
