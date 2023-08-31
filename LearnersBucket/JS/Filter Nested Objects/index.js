/*

https://www.youtube.com/watch?v=XMEYVsxelxk&list=PL_KW_uw2ITn84SjTLNQsugTU3hU4_EwLM&index=21

https://leetcode.com/discuss/interview-question/328553/Amazon-or-Phone-Screen-or-Deep-Filter/302364

Example 1
Input Object

{
  a: 1,
  b: {
   c: 2,
    d: -3,
    e: {
      f: {
        g: -4,
      },
    },
    h: {
      i: 5,
      j: 6,
    },
  }
Input Function
const filter = (n) => n >= 0

Output

{ a: 1, b: { c: 2, h: { i: 5, j: 6 } } }
Example 2

Input Object

{
  a: 1,
  b: {
    c: 'Hello World',
    d: 2,
    e: {
      f: {
        g: -4,
      },
    },
    h: 'Good Night Moon',
  },
}
Input Function
const filter = (s) => typeof s === 'string'

Output

{ b: { c: 'Hello World', h: 'Good Night Moon' } } 

*/

const obj = {
  a: 1,
  b: {
    c: 2,
    d: -3,
    e: {
      f: {
        g: -4,
      },
    },
    h: {
      i: 5,
      j: 6,
    },
  },
};

const obj1 = {
  a: 1,
  b: {
    c: "Hello World",
    d: 2,
    e: {
      f: {
        g: -4,
      },
    },
    h: "Good Night Moon",
  },
};

const filter = (n) => n >= 0;
const filter1 = (s) => typeof s === "string";

// We will be going with dfs approach

function deepFiltered(obj, filterFn) {
  for (let key in obj) {
    const val = obj[key];

    // val to remove the null and other
    if (val && typeof val === "object" && !Array.isArray(val)) {
      deepFiltered(val, filterFn);
    } else {
      if (filterFn(val) === false) {
        delete obj[key];
      }
    }

    // to delete the parent one
    if (JSON.stringify(val) === "{}") {
      delete obj[key];
    }
  }

  return obj;
}

deepFiltered(obj1, filter1);
deepFiltered(obj, filter);
