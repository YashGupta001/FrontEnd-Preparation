/*

https://www.youtube.com/watch?v=xZxZFX-QEFE&list=PL_KW_uw2ITn84SjTLNQsugTU3hU4_EwLM&index=10

We have to create useToggle() hook in React that will take an array and start index as input and return the value on the index and a toggle function. The toggle function when invoked moves to the next value and reset if reached to the last.

https://codesandbox.io/s/stoic-bash-8jzgwh

*/

import { useCallback, useState } from "react";

export const useToggle = (array, index = 0) => {
  const [currentIdx, setCurrentIdx] = useState(index);

  const toggle = useCallback(() => {
    return setCurrentIdx((prev) => (prev >= array.length - 1 ? 0 : prev + 1));
  }, [array]);

  return [toggle, array[currentIdx]];
};

import { useToggle } from "./useToggle";
export default function App() {
  const [toggle, value] = useToggle([10, 20, 30, 40, 50], 2);
  return (
    <>
      <h1>Current value: {value}</h1>
      <button onClick={toggle}>Toggle</button>
    </>
  );
}
