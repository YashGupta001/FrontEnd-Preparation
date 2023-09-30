/*

https://www.youtube.com/watch?v=sZjlEKbaykc&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=4


Closuers is a function that references varibale in the outer scope from its inner scope
It can be used to create private varibles
can also be used to stop recalculating the large operation (time optimazation of code)


*/

//  one more example of call a function once there we can use closure: (28:00 time of video): POLYFILL OF ONCE

function once(func, context) {
  let ran;

  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }

    return ran;
  };
}

const hello = once(() => console.log("hello"));
hello();
hello();

// Implement caching or memoize function

function myMemoize(fn, context) {
  const res = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (!res[key]) {
      res[key] = fn.call(context || this, ...args);
    } else {
      return res[key];
    }
  };
}

const bigCal = (num1, num2) => {
  for (let i = 0; i < 1000000; i++) {}
  return num1 * num2;
};

const memoizedBigCal = myMemoize(bigCal);

// console.time("First Call");
// bigCal(2343, 6543);
// console.timeEnd("First Call");

// console.time("Second Call");
// bigCal(2343, 6543);
// console.timeEnd("Second Call");

console.time("First Call");
memoizedBigCal(2343, 6543);
console.timeEnd("First Call");

console.time("Second Call");
memoizedBigCal(2343, 6543);
console.timeEnd("Second Call");
