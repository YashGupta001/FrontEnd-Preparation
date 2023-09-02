/*

https://www.youtube.com/watch?v=jYmG4nbrmOw&list=PL_KW_uw2ITn84SjTLNQsugTU3hU4_EwLM&index=48

We have to implement a custom array iterator method next() and done(), that when invoked returns the next element from the array.


*/

const helper = (array) => {
  let idx = 0;

  const next = () => {
    const val = array[idx];
    idx++;
    return val ? val : null;
  };

  const done = () => {
    return idx >= array.length;
  };

  return {
    next,
    done,
  };
};

// Learner bucket solution

const helper1 = (array) => {
  let idx = 0;

  return {
    next: function () {
      return idx < array.length ? array[idx++] : null;
    },
    done: function () {
      return idx >= array.length;
    },
  };
};

const iterator = helper([1, 2, "hello"]);

console.log(iterator.next()); // 1
console.log(iterator.next()); // 2
console.log(iterator.done()); // false
console.log(iterator.next()); // hello
console.log(iterator.done()); // true
console.log(iterator.next()); // null
