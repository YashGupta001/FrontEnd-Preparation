/*

We will see what is a singleton design pattern and how we can use it to solve recurring problems

https://www.youtube.com/watch?v=PZlXG_-ZdfU&list=PL_KW_uw2ITn84SjTLNQsugTU3hU4_EwLM&index=66


in this we create the instance once and it will be used whereever possible

Using the singleton pattern design the analytical SDK

*/

function Counter() {
  this.count = 0;

  this.increment = function () {
    this.count++;
  };

  this.decrement = function () {
    this.count--;
  };
}

// const c1 = new Counter();
// const c2 = new Counter();

// console.log(c1 === c2);

const singleton = (function () {
  let instance;
  return {
    getInsance() {
      if (!instance) {
        instance = new Counter();
      }
      return instance;
    },
  };
})();

const c1 = singleton.getInsance();
const c2 = singleton.getInsance();

console.log(c1 === c2);
