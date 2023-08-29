/*

https://www.youtube.com/watch?v=viwSxuaAtbo&list=PL_KW_uw2ITn_OO9Ln_z9A_R9kMFVZiEvD&index=2

https://codesandbox.io/s/relaxed-brook-zlqjvs?file=/src/App.js:0-238

*/

import { useState, useEffect } from "react";

// values in milliseconds
const SECONDS = 1000;
const MINUTES = 60 * SECONDS;
const HOUR = 60 * MINUTES;
const DAY = 24 * HOUR;

const Timer = ({ duration, onExpire }) => {
  // const [time, setTime] = useState(duration);
  const [time, setTime] = useState(DAY);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTime(time - 1000);
    }, 1000);

    // break condition
    if (time <= 0) {
      onExpire && onExpire();
      clearTimeout(timerId);
    }

    // clean up
    return () => {
      clearTimeout(timerId);
    };
  }, [time, onExpire]);

  const getFormatedTime = (time) => {
    const days = Math.floor(time / DAY);
    const hours = Math.floor((time % DAY) / HOUR);
    const minutes = Math.floor((time % HOUR) / MINUTES);
    const seconds = Math.floor((time % MINUTES) / SECONDS);

    return `${days}: ${hours}: ${minutes}: ${seconds}`;
  };

  return getFormatedTime(time);
};

export default Timer;

//

import "./styles.css";
import Timer from "./Timer";

// export default function App() {
const onExpire = () => {
  console.log("onExpire");
};

return (
  <div className="App">
    <Timer onExpire={onExpire} />
  </div>
);
// }
