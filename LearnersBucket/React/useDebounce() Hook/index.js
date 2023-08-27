/*

https://www.youtube.com/watch?v=2oattxIGYFE&list=PL_KW_uw2ITn8xWRkGZjKTfb-9xj_pJfgT&index=15

https://codesandbox.io/s/throbbing-wildflower-kmr4cz

https://codesandbox.io/s/throbbing-wildflower-kmr4cz?file=/src/App.js:0-749


*/

import "./styles.css";
import { useCallback, useRef } from "react";

const useDounce = (fn, delay) => {
  let timerID = useRef(null);

  let debounce = useCallback(
    function () {
      const context = this;
      const args = arguments;
      clearInterval(timerID.current);
      timerID.current = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    },
    [fn, delay]
  );

  return debounce;
};

export default function App() {
  const onChange = (e) => {
    console.log(e.target.value);
  };

  const debouncedSearch = useDounce(onChange, 1000);
  return (
    <div className="App">
      <input
        placeholder="Enter your query"
        type="search"
        onChange={debouncedSearch}
      />
    </div>
  );
}

// with leading and trailing

const useDebounce = (fn, delay, option = { leading: true, trailing: true }) => {
  let timeout = useRef(null);
  let isLeadingInvoked = useRef(false);

  let debounce = useCallback(
    function () {
      const context = this;
      const args = arguments;

      if (timeout.current) {
        clearTimeout(timeout.current);
      }

      if (option.leading && !timeout.current) {
        fn.apply(context, args);
        isLeadingInvoked.current = true;
      } else {
        isLeadingInvoked.current = false;
      }

      timeout.current = setTimeout(() => {
        if (option.trailing && !isLeadingInvoked.current) {
          fn.apply(context, args);
        }

        timeout.current = null;
      }, delay);
    },
    [fn, delay, option]
  );

  return debounce;
};

const App = () => {
  const onChange = (e) => {
    console.log(e.target.value);
  };

  const debouncedSearch = useDebounce(onChange, 1000);

  return (
    <input
      type="search"
      onChange={debouncedSearch}
      placeholder="Enter your query"
    />
  );
};
