/*

Debounce and Throttling are two ways to optimize the event handling

https://www.youtube.com/watch?v=kCfTEoeQvQw&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=10

Debouncing: It limits the execution of function calls and wait for a certain amount of time before running it again

Throttling: Throttling is a technique to limit the execution of event handler function even when this event is triggered continuously due to user action like scrolling, resizing the window

*/

// 1. Create a button UI and add debounce and throttle as follows
//                      show button pressed X times everytime button is pressed
//                      Increase triggered Y times count after 800ms of debounce/throttle

const btn = document.querySelector(".increment_btn");
const btnPressed = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

let pressedCount = 0;
let triggerCount = 0;

const debounce = (fn, delay) => {
  let timer;
  return function (...args) {
    const arguments = args;
    const context = this;

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn.apply(context, arguments);
    }, delay);
  };
};

const debounceCount = debounce(() => {
  triggerCount++;
  count.innerHTML = triggerCount;
}, 800);

const throttle = (fn, delay) => {
  console.log("are you coming");
  let last = 0;

  return (...args) => {
    const arguments = args;
    const context = this;
    let now = new Date().getTime();
    if (now - last < delay) {
      return;
    }
    last = now;
    return fn.apply(context, arguments);
  };
};

const throttleCount = throttle(() => {
  triggerCount++;
  count.innerHTML = triggerCount;
}, 800);

btn.addEventListener("click", () => {
  btnPressed.innerHTML = ++pressedCount;
  //   debounceCount();
  throttleCount();
});
