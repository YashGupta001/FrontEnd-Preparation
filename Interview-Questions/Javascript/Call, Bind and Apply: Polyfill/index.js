/*

https://www.youtube.com/watch?v=VkmUOktYDAU&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=8

*/

// Q1

const age = 10;

const person = {
  age: 20,
  getAge() {
    return this.age;
  },
};

const person2 = {
  age: 69,
};

person.getAge.call(person2);

// Q2

var status = "&"; // change it to const and see

setTimeout(() => {
  const status = "&";

  const person = {
    status: "*",
    getStatus: function () {
      return this.status;
    },
  };

  console.log("first", person.getStatus());
  console.log("second", person.getStatus.call(this));
}, 0);

// Q3: Append and array to another array

const yash = [1, 2, 3, 4];
const gupta = [5, 6, 7, 8];
yash.push.apply(yash, gupta);

// Q4: using apply to enhance built in functionality

// Find the min or max in an array

const arr = [1, 3, 13, 43, 23, 0];

Math.max(arr); //--> gives you NAN
Math.max.apply(null, arr);

// Q4:

function f() {
  console.log(this);
}

let user = {
  g: f.bind(null),
};

user.g();

// Q5:

function f1() {
  console.log(this.name);
}

f = f1.bind({ name: "John" }).bind({ name: "Cena" });
f();

// arrow function always takes this from its parent function, so we cant manipulate the context of this in case of call bind apply

// Polyfill for call method

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "Its not Callable");
  }

  context.fn = this;
  context.fn(...args);
};

// Apply

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + "Its not Callable");
  }

  if (!Array.isArray(args)) {
    throw new Error("Not valid arguments");
  }

  context.fn = this;
  context.fn(...args);
};

// Bind: we can provide the argument at first or in the return function call time

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "Its not Callable");
  }

  context.fn = this;

  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};
