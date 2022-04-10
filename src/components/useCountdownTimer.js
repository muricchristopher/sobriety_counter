import React from "react";

const useCountdownTimer = (timer, date) => {
  const data = new Date(date).getTime();

  const [state, setState] = React.useState(timer(tempo));

  React.useEffect(() => {
    setInterval(() => {
      setState(timer(tempo));
    }, 1000);
  }, [timer, tempo]);

  return [state, setState];
};

export default useCountdownTimer;
