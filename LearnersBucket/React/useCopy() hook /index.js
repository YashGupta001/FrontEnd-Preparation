/*

https://www.youtube.com/watch?v=C1qOaRdSwwc&list=PL_KW_uw2ITn8xWRkGZjKTfb-9xj_pJfgT&index=33

https://codesandbox.io/s/bitter-darkness-htrdq5?file=/src/App.js:0-754

*/

import "./styles.css";
import React, { useState } from "react";

const useCopy = () => {
  const copy = async (text) => {
    if (!navigator?.clipboard) {
      console.log("Clipboard is not enabled or available");
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
    } catch (Error) {
      console.log(`There was an error copying text: ${Error}`);
    }
  };

  return copy;
};

export default function App() {
  const [value, setValue] = useState("");
  const copy = useCopy();
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="App">
      <textarea value={value} onChange={handleChange}></textarea>
      <button onClick={() => copy(value)}>Copy</button>
    </div>
  );
}
