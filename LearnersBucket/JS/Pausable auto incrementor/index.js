/*

https://www.youtube.com/watch?v=tf6Zc5kTS30&list=PL_KW_uw2ITn84SjTLNQsugTU3hU4_EwLM&index=49

Create a pausable auto incrementer in Javascript, which takes an initial value and steps as input and increments the initial value with given steps every second. The incrementer can be paused and resumed back

*/

const incremental = (initialValue = 0, steps = 1) => {
  let count = initialValue;
  let intervalId = null;

  const startTimer = () => {
    if (intervalId === null) {
      intervalId = setInterval(() => {
        console.log("count", count);
        count++;
      }, 1000);
    }
  };

  const pauseTimer = () => {
    clearInterval(intervalId);
    intervalId = null;
  };

  return {
    startTimer,
    pauseTimer,
  };
};

let timerObj = incremental(0, 10);
timerObj.startTimer();
setTimeout(() => {
  timerObj.pauseTimer();
}, 3000);
setTimeout(() => {
  timerObj.startTimer();
}, 5000);
