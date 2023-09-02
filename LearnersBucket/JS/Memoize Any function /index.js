/*

https://www.youtube.com/watch?v=ktL5L2DnYYg&list=PL_KW_uw2ITn84SjTLNQsugTU3hU4_EwLM&index=42

Memoization is technique of caching the function value for the same arguments and return the cached result for subsequent calls for same arguments.

Memoization can only work for pure function and pure functions are those functions in javascript that does not has any side effect, for the given input it always returns the same output

*/

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

function fibonacci(num) {
  if (num < 2) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

function memoize(fn) {
  let cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) return cache[key];
    cache[key] = fn(...args);
    return cache[key];
  };
}

let memoized = memoize(fibonacci);
console.log("slow", memoized(40));
console.log("fast", memoized(40));
