/*

https://www.youtube.com/watch?v=rv7Q11KWmKU&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=7

There are two types when it comes to object binding

1. Implicit Binding: It applies when you invoke the function in object using the dot notation (this) keyword in this scenario pointing to the object using which the function was invoked

2. Explicit Binding: Can be applied using call, bind and apply method



Explain this keyword?
In JS this keyword is used to refer something like object so what this keyword mean is depend on the context we are currently in


*/

// here this is in global context so he point to our global object which is window in browser

this.a = 5;
console.log(a);

//  in case of function here this will target to its parent which is again window

this.b = 5;
function getParam() {
  console.log(this.b);
}

getParam();

//  in case of arrow function here this will target to its parent which is again window, but the normal and arrow function works differently for this we see in other example, in this case it target the window but normally what arrow function does is it takes its this from its outer normal function

this.c = 5;
const getParam = () => {
  console.log(this.c);
};

getParam();

// In the below case the this keyword will point to the user object

let user = {
  name: "yash",
  age: 30,
  getDetails() {
    console.log(this);
    console.log(this.name);
  },
};

user.getDetails();

// In the below case the this keyword will point to the childObj object, so normal function points to the immediate parent

let user1 = {
  name: "yash",
  age: 30,
  childObj: {
    newName: "gupta",
    getDetails() {
      console.log(this);
      console.log(this.newName, "and", this.name);
    },
  },
};

user1.childObj.getDetails();

// In case of arrow function now this will point to window object, so how the arrow function works is that the this keyword value of arrow function comes from its parent function so take another example to understand that

let user2 = {
  name: "yash",
  age: 30,
  getDetails: () => {
    console.log(this);
    console.log(this.name);
  },
};

user2.getDetails();

// arrow function here the this keyword point to the value of this of parent normal function which is  taking the this from user object

let user4 = {
  name: "yash",
  age: 30,
  getDetails() {
    const nestedArrow = () => {
      console.log(this);
      console.log(this.name);
    };
    nestedArrow();
  },
};

user4.getDetails();

// How the this keywords works inside the class or constructor

// here the this inside the class will point this to everything inside the constructor

class User {
  constructor(name) {
    this.name = name;
  }
  getName() {
    console.log(this.name);
  }
}

const users = new User("yash");
users.getName();

// here also same
class User {
  constructor(name) {
    this.name = name;
  }
  getName = () => {
    console.log(this.name);
  };
}

const use = new User("yash");
use.getName();

// Whats the output?

const data = {
  firstName: "Yash",
  getName() {
    const firstName = "Gupta";
    return this.firstName;
  },
};

data.getName();

// WHat is the result of accessing its ref ?  why ?

function makeUser() {
  return {
    name: "Yash",
    ref: this,
  };
}

let a = makeUser(); // its because when we are caling the this here the parent object is windoe

a;
a.ref.name;

// Fix the above function so that ref point to that return object

function makeUser() {
  return {
    name: "Yash",
    ref() {
      // now the this will point to above object
      return this;
    },
  };
}

let a = makeUser();

a.ref();
a.ref().name;

// Whats the output?

const newUser = {
  name: "yash gupta",
  logMessage() {
    console.log(this.name, "and", this);
  },
};

setTimeout(newUser.logMessage, 1000); // here it will point back to window as setTimeout using newUser.logMessage as a callback rather than a method so the function completely copies inside the setTimeout and it losses the object so this now points to the window

// How to fix the above code

const newUser1 = {
  name: "yash gupta",
  logMessage() {
    console.log(this.name, "and", this);
  },
};

setTimeout(function () {
  newUser1.logMessage(); // do not use the function directly as callback
}, 1000);

// Whats the output ?

const userss = {
  name: "Yash",
  greet() {
    return `Hello, ${this.name}! `;
  },
  farewell: () => {
    return `Goodbye, ${this.name}! `;
  },
};

userss.greet();
userss.farewell();

// Create an object calculator

let calculator = {
  read() {
    this.a = +prompt("a = ", 0); // added a and b to the object
    this.b = +prompt("b = ", 0); // + will convert it into number
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

calculator.read();
calculator.sum();
calculator.mul();

// What will be the output

var length = 4;

function callback() {
  console.log(this.length);
}

const object = {
  length: 5,
  method(fn) {
    fn();
  },
};

object.method(callback);

// WHat will be the output

var length = 4;

function callback() {
  console.log(this.length);
}

const object1 = {
  length: 5,
  method() {
    arguments[0](); // arguments = [callback,2,1]
  },
};

object1.method(callback, 2, 1);

// Impelemnt calc

const calc = {
  total: 0,
  add(n) {
    this.total += n;
    return this;
  },

  multiply(n) {
    this.total *= n;
    return this;
  },

  subtract(n) {
    this.total -= n;
    return this;
  },
};

const result = calc.add(10).multiply(5).subtract(30).add(10);
result.total;
