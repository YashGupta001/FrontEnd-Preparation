/*

https://www.youtube.com/watch?v=gXIHJCCDJPQ&list=PL_KW_uw2ITn8xWRkGZjKTfb-9xj_pJfgT&index=26


This problem is the polyfill for _.get() lodash method.

*/

const obj = {
  a: {
    b: {
      c: [1, 2, 3],
    },
  },
};

const get = (obj, stringPath) => {
  if (!stringPath || stringPath.length === 0) {
    return;
  }

  const excludePath = ["[", "]", "."];
  const keys = [];

  for (let i = 0; i < stringPath.length; i++) {
    if (!excludePath.includes(stringPath[i])) {
      keys.push(stringPath[i]);
    }
  }

  // reduce is a very powerful method it uses an entry obj and on that entry obj we can use it further to perform operation and return the same value or the new value

  let value = keys.reduce((obj, key) => {
    return obj[key]; // the first return value will become obj and key will move to next value : watch from 10:00 https://www.youtube.com/watch?v=gXIHJCCDJPQ&list=PL_KW_uw2ITn8xWRkGZjKTfb-9xj_pJfgT&index=26
  }, obj);

  return value;
};

console.log(get(obj, "a.b.c"));
console.log(get(obj, "a.b.c.0"));
console.log(get(obj, "a.b.c[1]"));
console.log(get(obj, ["a", "b", "c", "2"]));
console.log(get(obj, "a.b.c[3]"));
console.log(get(obj, "a.c"));
