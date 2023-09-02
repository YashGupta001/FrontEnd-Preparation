/*

https://www.youtube.com/watch?v=gytPGYlK8gI&list=PL_KW_uw2ITn84SjTLNQsugTU3hU4_EwLM&index=40

The curry function accepts a callback function and returns a function, the returned function will keep on accepting the arguments as much as the callback function is expecting and once we have the required amount of arguments it will be passed to the callback function and return the output from that callback function.

*/

const curry = (fn) => {
  const helper = (...args) => {
    if (fn.length <= args.length) {
      return fn(...args);
    } else {
      const temp = (...args2) => {
        return helper(...args, ...args2);
      };
      return temp;
    }
  };

  return helper;
};

/*

const curry = (fn) => {
  return function helper(...args) {
    if (fn.length <= args.length) {
      return fn(...args);
    } else {
      const temp = (...args2) => {
        return helper(...args, ...args2);
      };
      return temp;
    }
  };
};

*/

function sum(a, b, c, d) {
  return a + b + c + d;
}

let curriedSum = curry(sum);
console.log(curriedSum(1, 2, 3, 4));
console.log(curriedSum(1)(2)(3)(4));
console.log(curriedSum(1)(2, 3, 4));
