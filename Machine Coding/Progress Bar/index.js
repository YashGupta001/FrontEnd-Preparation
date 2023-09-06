/*

https://www.youtube.com/watch?v=9Ez_gdsgGiM&list=PLKhlp2qtUcSYQojD5G-ElgHezoCyq2Hgo&index=7

https://codesandbox.io/s/stoic-cori-zqjdnd

https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility

https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes

https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles

*/

import ProgressBar from "./components/ProgressBar";
import { useState, useEffect } from "react";

export default function App() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 100);
  }, []);

  return (
    <div className="app">
      <span> ProgressBar </span>
      <ProgressBar value={value} onComplete={() => setSuccess(true)} />
      <span>{success ? "Complete" : "Loading..."}</span>
    </div>
  );
}

//

import { useState, useEffect } from "react";
import { MIN, MAX } from "../constants";

const ProgressBar = ({ value = MIN, onComplete = () => {} }) => {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(MAX, Math.max(value, MIN)));

    if (value >= MAX) {
      onComplete();
    }
  }, [value]);

  return (
    <div className="progress">
      <span style={{ color: percent > 49 ? "white" : "black" }}>
        {percent.toFixed()}%
      </span>
      <div
        // style={{ width: `${percent}%` }} // doing this animation with width is bad for performance
        style={{
          transform: `scaleX(${percent / MAX})`,
          transformOrigin: "left",
        }}
        role="progressbar"
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        aria-valuenow={percent.toFixed()}
      />
    </div>
  );
};

// export default ProgressBar;

export const MIN = 0;
export const MAX = 100;

/*

body {
  font-family: sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px;
}

.progress {
  height: 20px;
  width: 500px;
  background-color: rgb(233, 236, 239);
  border: 1px solid black;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
}

.progress span {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.progress div {
  height: 100%;
  background-color: #00c251;
}


*/
