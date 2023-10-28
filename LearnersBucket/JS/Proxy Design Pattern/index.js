/*

https://www.youtube.com/watch?v=Vgn38W7vC8I&list=UULF2275rwUB7t9rkZBjPE02eQ&index=4

*/

const obj = {
  name: "Yash",
  age: 30,
  gender: "Male",
};

// obj.gender = 3 (should not happen as JS is loosly types language so create proxy)

const proxiedObj = new Proxy(obj, {
  get(obj, prop) {
    return obj[prop];
  },
  set(obj, prop, value) {
    if (prop === "gender" && typeof value !== "string") {
      console.log(`The value for ${[prop]} should be a string`);
    } else {
      return (obj[prop] = value);
    }

    return true;
  },
});

proxiedObj.gender = 3;
console.log(proxiedObj);
