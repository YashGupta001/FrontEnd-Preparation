/*

https://www.youtube.com/watch?v=vTLRpmNMQ8E&list=PL_KW_uw2ITn8xWRkGZjKTfb-9xj_pJfgT&index=11

This is a machine-coding round question that I have solved in Reactjs, in which we have been asked to create a search with auto-suggestion with the given mock API.

https://codesandbox.io/s/nostalgic-snowflake-h56ncc?file=/src/App.js:0-2456

*/

// Remove the onblur from input as not able to click on suggestion list instead we put it in window can see where we are clicking it

import "./styles.css";
import React, { useState, useEffect } from "react";

// Mock Server
const FAILURE_COUNT1 = 10;
const LATENCY1 = 200;

function getRandomBool(n) {
  const threshold = 1000;
  if (n > threshold) n = threshold;
  return Math.floor(Math.random() * threshold) % n === 0;
}

function getSuggestions(text) {
  var pre = "pre";
  var post = "post";
  var results = [];
  if (getRandomBool(2)) {
    results.push(pre + text);
  }
  if (getRandomBool(2)) {
    results.push(text);
  }
  if (getRandomBool(2)) {
    results.push(text + post);
  }
  if (getRandomBool(2)) {
    results.push(pre + text + post);
  }
  return new Promise((resolve, reject) => {
    const randomTimeout = Math.random() * LATENCY1;
    setTimeout(() => {
      if (getRandomBool(FAILURE_COUNT1)) {
        reject();
      } else {
        resolve(results);
      }
    }, randomTimeout);
  });
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [list, setList] = useState([]);
  const [suggestionAreaVisible, setSuggestionAreaVisibility] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
    makeApiCall(value);
  };

  const makeApiCall = async (query) => {
    try {
      let res = await getSuggestions(query);
      setList(res);
    } catch (e) {
      setList([]);
      console.log("Error while getting suggestion list", e);
    }
  };

  const handleClick = (value) => {
    console.log("value", value);
    setSearchQuery(value);
  };

  return (
    <main className="App">
      <input
        type="text"
        name="search"
        placeholder="search"
        id="search"
        value={searchQuery}
        onFocus={() => setSuggestionAreaVisibility(true)}
        onBlur={() => setSuggestionAreaVisibility(false)}
        onChange={handleChange}
      />
      {suggestionAreaVisible && (
        <div id="suggestion-area">
          {list.map((e) => (
            <div key={e} onClick={() => handleClick(e)}>
              {e}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

// FInal Code
import "./styles.css";
import React, { useState, useEffect, useRef } from "react";

// Mock Server
const FAILURE_COUNT = 10;
const LATENCY = 200;

function getRandomBool(n) {
  const threshold = 1000;
  if (n > threshold) n = threshold;
  return Math.floor(Math.random() * threshold) % n === 0;
}

function getSuggestions(text) {
  var pre = "pre";
  var post = "post";
  var results = [];
  if (getRandomBool(2)) {
    results.push(pre + text);
  }
  if (getRandomBool(2)) {
    results.push(text);
  }
  if (getRandomBool(2)) {
    results.push(text + post);
  }
  if (getRandomBool(2)) {
    results.push(pre + text + post);
  }
  return new Promise((resolve, reject) => {
    const randomTimeout = Math.random() * LATENCY;
    setTimeout(() => {
      if (getRandomBool(FAILURE_COUNT)) {
        reject();
      } else {
        resolve(results);
      }
    }, randomTimeout);
  });
}

export default function App() {
  const inputRef = useRef();
  const suggestionAreaRef = useRef();
  const [searchQuery, setSearchQuery] = useState("");
  const [list, setList] = useState([]);
  const [suggestionAreaVisible, setSuggestionAreaVisibility] = useState(false);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (
        e.target !== inputRef.current &&
        e.target !== suggestionAreaRef.current
      ) {
        setSuggestionAreaVisibility(false);
      }
    });

    return () => window.removeEventListener("click", () => {});
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
    makeApiCall(value);
  };

  const makeApiCall = async (query) => {
    try {
      let res = await getSuggestions(query);
      setList(res);
    } catch (e) {
      setList([]);
      console.log("Error while getting suggestion list", e);
    }
  };

  const handleClick = (value) => {
    setSearchQuery(value);
  };

  return (
    <main className="App">
      <input
        type="text"
        name="search"
        placeholder="search"
        id="search"
        value={searchQuery}
        onFocus={() => setSuggestionAreaVisibility(true)}
        onChange={handleChange}
        ref={inputRef}
      />
      {suggestionAreaVisible && (
        <div id="suggestion-area" ref={suggestionAreaRef}>
          {list.map((e) => (
            <div key={e} onClick={() => handleClick(e)}>
              {e}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}


/*

main {
  width: 500px;
  margin: 10px auto 0 auto;
}
#search {
  padding: 10px;
  width: 100%;
}

#suggestion-area {
  border: 1px solid red;
  margin-top: 10px;
  min-height: 100px;
  padding: 5px;
  position: relative;
  display: block;
}


*/