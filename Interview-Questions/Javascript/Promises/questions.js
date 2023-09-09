/*

https://www.youtube.com/watch?v=HaJdoFp2OEc&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=9

TIME: 29:44

*/

// 1: Whats the output?

console.log("start");
const promise = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
});
promise.then((res) => console.log(res));
console.log("end");

// 2: Whats the output?

console.log("start");
const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
  console.log(3);
});
promise1.then((res) => console.log(res));
console.log("end");

// 3: Whats the output?

console.log("start");
const promise2 = new Promise((resolve, reject) => {
  console.log(1);
  console.log(3);
});
promise2.then((res) => console.log("Result" + res));
console.log("end");

// 4: Whats the output?

console.log("start");
const promis = new Promise((resolve, reject) => {
  console.log(1);
  reject(2);
  console.log(3);
});
promis.catch((err) => console.log(err));
console.log("end");

// 5: Whats the output?

console.log("start");

// const fn = () => {
//   return new Promise((resolve, reject) => {
//     console.log(1);
//     resolve("success");
//   });
// };

// above can also be rewrite as

const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });

console.log("middle");

fn().then((res) => console.log(res));
console.log("end");

// 6: Whats the output?

function job() {
  return new Promise((resolve, reject) => {
    reject();
  });
}

let promises = job();

promises
  .then(() => {
    console.log("Success 1");
  })
  .then(() => {
    console.log("Success 2");
  })
  .then(() => {
    console.log("Success 3");
  })
  .catch(() => {
    console.log("Error 1");
  })
  .then(() => {
    console.log("Success 4");
  });

// 7: Whats the output?

function job(state) {
  return new Promise((resolve, reject) => {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let sub = job(true);

sub
  .then((res) => {
    console.log(res);
    return job(false);
  })
  .catch((err) => {
    console.log(err);

    return "Error Caught";
  })
  .then((res) => {
    console.log("string", res);

    return job(true);
  })
  .catch((err) => {
    console.log(err);
  });

// 8: Whats the output?

function job(state) {
  return new Promise((resolve, reject) => {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let prom = job(true);

prom
  .then((data) => {
    console.log(data); // success
    return job(true);
  })
  .then((data) => {
    if (data !== "victory") {
      throw "defeat";
    }
    return job(true);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err); // defeat
    return job(false);
  })
  .then((data) => {
    console.log(data);
    return job(true);
  })
  .catch((err) => {
    console.log(err); // error
    return "Error Caught";
  })
  .then((data) => {
    console.log(data); // Error Caught
    return new Error("test");
  })
  .then((data) => {
    console.log("Success:", data.message); // success test
  })
  .catch((data) => {
    console.log("Error:", data.message);
  });

// 9: Promise Chaining Question

/*

Create a promise called First Promise which will resolve to a text called First
And then we have to create another promise called Second Promise which will resolve our First Promise that we had created earlier
Resolve the second promise and the output of which we have to pass to our first promise and then print the first promise

*/

const firstPromise = new Promise((resolve, reject) => {
  resolve("First");
});

const secondPromise = new Promise((resolve, reject) => {
  resolve(firstPromise);
});

secondPromise
  .then((res) => {
    return res;
  })
  .then((res) => console.log(res));

// 10: Rewrite the example using async await

function loadJSON(url) {
  return fetch(url).then((res) => {
    if (res.status === 200) {
      return res.json();
    } else {
      throw new Error(res.status);
    }
  });
}

loadJSON("https:fakeurl.com/no-such-user.json").catch((err) =>
  console.log(err)
);

// using async await

async function loadJSON(url) {
  let response = await fetch(url);
  if (response.status === 200) {
    let json = await response.json();
    return json;
  }
  throw new Error(response.status);
}

loadJSON("https:fakeurl.com/no-such-user.json").catch((err) =>
  console.log(err)
);

// 11. Create a function called promRecurse which takes promises in the form of array and resolve them recursively

function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 1000);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like the ${video}`);
    }, 5000);
  });
}

function shareVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video}`);
    }, 200);
  });
}

function promRecurse(funcPromises) {
  if (funcPromises.length === 0) return;
  const currentPromise = funcPromises.shift();
  currentPromise
    .then((result) => console.log(result))
    .catch((err) => console.log(err));

  promRecurse(funcPromises);
}

promRecurse([
  importantAction("Harwork and Consistency"),
  likeTheVideo("My Journey to Google"),
  shareVideo("From tier 3 to Google"),
]);

// 12. Polyfill for promise basic implementation

function PromisePolyfill(executor) {
  let onResolve, onReject;

  function resolve(value) {
    onResolve(value);
  }

  function reject(value) {
    onReject(value);
  }

  this.then = function (callback) {
    onResolve = callback;
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;
    return this;
  };

  executor(resolve, reject);
}

const examplePromise = new PromisePolyfill((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});

examplePromise.then((res) => console.log(res)).catch((err) => console.log(err));

//  Polyfill for promise implementation if setTimeout not there (error)

function PromisePolyfill(executor) {
  let onResolve, onReject;

  function resolve(value) {
    onResolve(value);
  }

  function reject(value) {
    onReject(value);
  }

  this.then = function (callback) {
    onResolve = callback;
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;
    return this;
  };

  executor(resolve, reject);
}

const examplePromise1 = new PromisePolyfill((resolve, reject) => {
  resolve(2);
});

examplePromise1
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//  Polyfill for promise implementation which works with both sync and async

function PromisePolyfill(executor) {
  let onResolve,
    onReject,
    value,
    isFulfilled = false,
    isRejected = false,
    isCalled = false;

  function resolve(val) {
    isFulfilled = true;
    value = val;

    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }

  function reject(val) {
    isRejected = true;
    value = val;

    if (typeof onReject === "function") {
      onReject(val);
      isCalled = true;
    }
  }

  this.then = function (callback) {
    onResolve = callback;

    if (isFulfilled && !isCalled) {
      isCalled = true;
      onResolve(value);
    }

    return this;
  };

  this.catch = function (callback) {
    onReject = callback;

    if (isRejected && !isCalled) {
      isCalled = true;
      onReject(value);
    }

    return this;
  };

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

PromisePolyfill.resolve = (val) => {
  return new PromisePolyfill(function executor(resolve, reject) {
    resolve(val);
  });
};

PromisePolyfill.reject = (val) => {
  return new PromisePolyfill(function executor(resolve, reject) {
    reject(val);
  });
};

// const exampleProm = new PromisePolyfill((resolve, reject) => {
//   setTimeout(() => {
//     resolve(2);
//   }, 1000);
// });

// const exampleProm = new PromisePolyfill((resolve, reject) => {
//   resolve(2);
// });

// const exampleProm = new PromisePolyfill((resolve, reject) => {
//   setTimeout(() => {
//     reject(2);
//   }, 1000);
// });

const exampleProm = new PromisePolyfill((resolve, reject) => {
  reject(2);
});

exampleProm
  .then((res) => console.log(res))
  .catch((err) => console.log("coming in catch", err));

// 13. Polyfill for Promise.all

Promise.allPolyfill = (promises) => {
  return new Promise((resolve, reject) => {
    const results = [];
    if (!promises.length) {
      resolve(results);
      return;
    }

    let pending = promises.length;

    promises.forEach((promise, idx) => {
      Promise.resolve(promise).then((res) => {
        results[idx] = res;

        pending--;

        if (pending === 0) {
          resolve(results);
        }
      }, reject);
    });
  });
};
