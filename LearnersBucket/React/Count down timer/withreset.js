// app js

import "./styles.css";
import TimerWrapper from "./Timer/TimerWrapper";

export default function App() {
  const onExpire = () => {
    console.log("onExpire");
  };

  return (
    <div className="App">
      <TimerWrapper onExpire={onExpire} duration={5000} />
    </div>
  );
}

// TimerWrapper

import { useState } from "react";
import Timer from "./index";

const TimerWrapper = ({ duration, onExpire, beforeRestart }) => {
  const [hasExpired, setExpired] = useState(false);

  const onExpireHelper = () => {
    onExpire && onExpire();
    setExpired(true);
  };

  const handleRestart = () => {
    setExpired(false);
  };

  return !hasExpired ? (
    <Timer
      duration={duration}
      onExpire={onExpireHelper}
      beforeRestart={beforeRestart}
    />
  ) : (
    <button onClick={handleRestart}>Restart</button>
  );
};

// export default TimerWrapper;

// timer js

import { useState, useEffect } from "react";

// values in milliseconds
const SECONDS = 1000;
const MINUTES = 60 * SECONDS;
const HOUR = 60 * MINUTES;
const DAY = 24 * HOUR;

const Timer = ({ duration, onExpire }) => {
  const [time, setTime] = useState(duration);

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

// export default Timer;
