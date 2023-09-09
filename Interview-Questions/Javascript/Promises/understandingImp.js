/*

https://www.youtube.com/watch?v=HaJdoFp2OEc&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=9 (watch video)

*/

// 1. Callbacks

// Message comes as undefined
console.log("start");

function importantAction(username, cb) {
  setTimeout(() => {
    return `Subscribe to ${username}`;
  }, 0);
}

const message = importantAction("My Journey of Hardwork and Patience");
console.log("message", message);
console.log("stop");
console.log("message", message);

// To Print the message

console.log("start");

function importantAction(username, cb) {
  setTimeout(() => {
    cb(`Subscribe to ${username}`);
  }, 0);
}

const mess = importantAction(
  "My Journey of Hardwork and Patience",
  function (message) {
    console.log("callback message", message);
  }
);
console.log("stop");

// Now lets say we want to invoke another function after first function finishes its execution

console.log("start");

function importantAction(username, cb) {
  setTimeout(() => {
    cb(`Subscribe to ${username}`);
  }, 0);
}

function likeTheVideo(video, cb) {
  setTimeout(() => {
    cb(`Like the ${video}`);
  }, 1000);
}

importantAction("My Journey of Hardwork and Patience", function (message) {
  console.log("callback message", message);
  likeTheVideo("Consistency", (action) => {
    console.log("action", action);
  });
});
console.log("stop");

// calling them separate

console.log("start");

function importantAction(username, cb) {
  setTimeout(() => {
    cb(`Subscribe to ${username}`);
  }, 1000);
}

function likeTheVideo(video, cb) {
  setTimeout(() => {
    cb(`Like the ${video}`);
  }, 500);
}

importantAction("My Journey of Hardwork and Patience", function (message) {
  console.log("callback message", message);
});

likeTheVideo("Consistency", (action) => {
  console.log("action", action);
});
console.log("stop");

// callbacks helps in achieving that (here you notice if the share video is outisde of like then based on interval it will run)

console.log("start");

function importantAction(username, cb) {
  setTimeout(() => {
    cb(`Subscribe to ${username}`);
  }, 1000);
}

function likeTheVideo(video, cb) {
  setTimeout(() => {
    cb(`Like the ${video}`);
  }, 500);
}

function shareVideo(video, cb) {
  setTimeout(() => {
    cb(`Share the ${video}`);
  }, 0);
}

importantAction("My Journey of Hardwork and Patience", function (message) {
  console.log("callback message", message);
  likeTheVideo("Consistency", (action) => {
    console.log("action", action);
  });
  shareVideo("Consistency and Hardwork", (newAction) => {
    console.log("new Action", newAction);
  });
});
console.log("stop");

// fix the above so that it can run after exuction of other

console.log("start");

function importantAction(username, cb) {
  setTimeout(() => {
    cb(`Subscribe to ${username}`);
  }, 1000);
}

function likeTheVideo(video, cb) {
  setTimeout(() => {
    cb(`Like the ${video}`);
  }, 500);
}

function shareVideo(video, cb) {
  setTimeout(() => {
    cb(`Share the ${video}`);
  }, 0);
}

importantAction("My Journey of Hardwork and Patience", function (message) {
  console.log("callback message", message);
  likeTheVideo("Consistency", (action) => {
    console.log("action", action);
    shareVideo("Consistency and Hardwork", (newAction) => {
      console.log("new Action", newAction);
    });
  });
});
console.log("stop");

// The problem here is that the callback functions made our code messy, and lets say we have much such callback functions then it will become hell (same knows as callback hell or pyramid of doom)
// its very hard to read and understand our code so what we can do ?

// 2. Promises: Promise basically represent the upcoming completion or a failure of an asyn event and its resulting value

console.log("start");
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = true;
    if (result) {
      resolve("Patience and Consistency");
    } else {
      reject(new Error("Rejection will help you achive the ultimate success"));
    }
  }, 2000);
});
console.log("promise", promise);
promise.then((res) => console.log(res)).catch((err) => console.log(err));
console.log("end");

// Directly resolve or reject the promise

console.log("start");
console.log(Promise.resolve("Promise resolved"));
console.log("end");

//

console.log("start");
const sub = Promise.resolve("Promise resolved");
sub.then((res) => console.log("res", res));
console.log("end");

// solve the problem that we face with callback hell, but here also you notice the promise hell

console.log("start");

function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 0);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like the ${video}`);
    }, 0);
  });
}

function shareVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video}`);
    }, 0);
  });
}

importantAction("Hardwork")
  .then((res) => {
    console.log(res);
    likeTheVideo("consistency").then((res) => {
      console.log(res);
      shareVideo("journey").then((res) => console.log(res));
    });
  })
  .catch((err) => {
    console.log(err);
  });

console.log("stop");

// another way of using promise: Promises Chaining

console.log("start");

function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 0);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like the ${video}`);
    }, 0);
  });
}

function shareVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video}`);
    }, 0);
  });
}

importantAction("Hardwork")
  .then((res) => {
    console.log(res);
    return likeTheVideo("Consistency");
  })
  .then((res) => {
    console.log(res);
    return shareVideo("journey");
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

console.log("stop");

/*


The above is also a very lengthy way of doing it thats why we hace one more approach which is Promise combinator
Promie combinator basically helps us to execute more than one promise at one time then return the result accordingly
So there are four types of promise combinator:

1. Promise.all -> Run all the promises in parallel, returns the array of fulfilled promises if all the promises resolve otherwise it fails all
2. Promise.race --> Returns first promise that gets rejected or fulfilled 
3. Promise.allSettled --> works same as all but return all the promises that are fulfilled and rejected
4. Promise.any --> works same as race but only returns first resolve promise and ignore the fail

*/

// Promise.all
console.log("start");

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

Promise.all([
  importantAction("Hardwork"),
  likeTheVideo("Consistency"),
  shareVideo("journey"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

console.log("stop");

// Promise.race

console.log("start");

function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Subscribe to ${username}`);
    }, 1000);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like the ${video}`);
    }, 0);
  });
}

function shareVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video}`);
    }, 200);
  });
}

Promise.race([
  importantAction("Hardwork"),
  likeTheVideo("Consistency"),
  shareVideo("journey"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

console.log("stop");

// Promise.allSettled

console.log("start");

function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Subscribe to ${username}`);
    }, 1000);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like the ${video}`);
    }, 500);
  });
}

function shareVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video}`);
    }, 2000);
  });
}

Promise.allSettled([
  importantAction("Hardwork"),
  likeTheVideo("Consistency"),
  shareVideo("journey"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

console.log("stop");

// Promise.any

console.log("start");

function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Subscribe to ${username}`);
    }, 1000);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Like the ${video}`);
    }, 500);
  });
}

function shareVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video}`);
    }, 2000);
  });
}

Promise.any([
  importantAction("Hardwork"),
  likeTheVideo("Consistency"),
  shareVideo("journey"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

console.log("stop");

// More modern approach of handling promises using async and await

console.log("start");

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
    }, 500);
  });
}

function shareVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video}`);
    }, 2000);
  });
}

const result = async () => {
  const message1 = await importantAction("Hardwork");
  const message2 = await likeTheVideo("Consistency");
  const message3 = await shareVideo("Journey");

  console.log({ message1, message2, message3 });
};

result();

console.log("stop");

// lets reject one promise in async await

console.log("start");

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
    }, 500);
  });
}

function shareVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Share the ${video}`);
    }, 2000);
  });
}

const result1 = async () => {
  const message1 = await importantAction("Hardwork");
  const message2 = await likeTheVideo("Consistency");
  const message3 = await shareVideo("Journey");

  console.log({ message1, message2, message3 });
};

result1();

console.log("stop");

// lets handle the error in async await

console.log("start");

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
    }, 500);
  });
}

function shareVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Share the ${video}`);
    }, 2000);
  });
}

const result2 = async () => {
  try {
    const message1 = await importantAction("Hardwork");
    const message2 = await likeTheVideo("Consistency");
    const message3 = await shareVideo("Journey");
    console.log({ message1, message2, message3 });
  } catch (err) {
    console.log("Error Occured", err);
  }
};

result2();

console.log("stop");
