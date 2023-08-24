/*

It is a classic machine coding round question where you are asked to demonstrate the working of Infinite scrolling which is a pagination technique in React. You can expect this question in Atlassian, Uber, Rippling, Flipkart, Navi, Amazon, Google, Microsoft, Meta, etc.

https://www.youtube.com/watch?v=Ckka1HhE2kM&list=PL_KW_uw2ITn8xWRkGZjKTfb-9xj_pJfgT&index=9


https://codesandbox.io/s/quizzical-voice-w6jpft?file=/src/App.js:0-692

*/

import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(50);

  useEffect(() => {
    const onScroll = () => {
      // 10x is a buffer for not getting to extreme end
      if (
        window.innerHeight + window.scrollY >=
        window.document.body.offsetHeight - 10
      ) {
        setCount(count + 50);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [count]);

  let elements = [];
  for (let i = 0; i < count; i++) {
    elements.push(<div key={i}>{i + 1}</div>);
  }
  return <main>{elements}</main>;
}
