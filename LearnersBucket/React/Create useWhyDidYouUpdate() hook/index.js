/*

https://www.youtube.com/watch?v=T4f2YIESgXk&list=PL_KW_uw2ITn8xWRkGZjKTfb-9xj_pJfgT&index=4 


Create a custom hook in React to determine what caused the component to re-render


IMP: SEE from 14:00 as causing re render

https://codesandbox.io/s/ecstatic-goldstine-dpd7mq?file=/src/App.js:320-333
*/

import { useEffect, useRef } from "react";

const useWhyDidYouUpdate = (name, props) => {
  const prevProps = useRef();

  useEffect(() => {
    if (prevProps.current) {
      const keys = Object.keys({ ...prevProps.current, ...props });
      const whyUpdated = {};

      keys.forEach((key) => {
        if (
          typeof prevProps.current[key] === "object" &&
          props[key] === "object"
        ) {
          if (
            JSON.stringify(prevProps.current[key]) !==
            JSON.stringify(props[key])
          ) {
            whyUpdated[key] = {
              from: prevProps.current[key],
              to: props[key],
            };
          }
        } else {
          if (prevProps.current[key] !== props[key]) {
            whyUpdated[key] = {
              from: prevProps.current[key],
              to: props[key],
            };
          }
        }
      });

      if (Object.keys(whyUpdated).length) {
        console.log("this has caused re-render", whyUpdated);
      }
    }
    prevProps.current = props;
  }, [name, props]);
};

// export default useWhyDidYouUpdate;

//

import "./styles.css";
import useWhyDidYouUpdate1 from "./hook";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>CLick me </button>
      <Example count={count} fn={() => {}} />
    </div>
  );
}

const Example = (props) => {
  useWhyDidYouUpdate1("Example", props);
  return <div>{props.count}</div>;
};
