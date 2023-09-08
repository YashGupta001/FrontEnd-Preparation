/*

Publisher-Subscriber Design Pattern in JavaScript 

https://www.youtube.com/watch?v=_gI-rIa6pGI&list=PL_KW_uw2ITn8xWRkGZjKTfb-9xj_pJfgT&index=1

We will see what is a pub-sub design pattern and how we can use it to solve recurring problems in the front end. How to create different variations of subscriptions and how to un-subscribe to existing ones.

*/

// Basic Implementation

// function Event() {
//   this.subscriptionList = new Map();

//   this.subscribe = function (name, callback) {
//     if (!this.subscriptionList.has(name)) {
//       this.subscriptionList.set(name, [callback]);
//     } else {
//       const existingCallbacks = this.subscriptionList.get(name);
//       this.subscriptionList.set(name, [...existingCallbacks, callback]);
//     }

//     return {
//       remove: () => {
//         const existingCallbacks = this.subscriptionList.get(name);
//         const filtered = existingCallbacks.filter((el) => el !== callback);
//         this.subscriptionList.set(name, filtered);
//       },
//     };
//   };

//   this.publish = function (name, data) {
//     const callbacks = this.subscriptionList.get(name);
//     callbacks.forEach((element) => {
//       element(data);
//     });
//   };

//   this.publishAll = function (data) {
//     const entries = this.subscriptionList.entries();

//     for (let [key, value] of entries) {
//       value.forEach((el) => el(data));
//     }
//   };
// }

// const events = new Event();
// const newUserNewsSubscription = events.subscribe(
//   "new-user",
//   function (payload) {
//     console.log(`Sending Q1 news to: ${payload}`);
//   }
// );

// events.publish("new-user", "yash");

// const newUserNewsSubscription2 = events.subscribe(
//   "new-user",
//   function (payload) {
//     console.log(`Sending Q2 news to: ${payload}`);
//   }
// );

// events.publish("new-user", "Shruti");

// newUserNewsSubscription.remove();

// const newUserNewsSubscription3 = events.subscribe(
//   "new-user1",
//   function (payload) {
//     console.log(`Sending Q3 news to: ${payload}`);
//   }
// );

// events.publish("new-user1", "Gupta");

// events.publishAll("Interview");

/* **************************************************************** */
// Subscribe once and with async

function Events() {
  this.subscriptionList = new Map();
  this.subscribeOnceList = new Map();
  this.subscribeOnceAsyncList = new Map();

  this.subscribe = function (name, callback) {
    if (!this.subscriptionList.has(name)) {
      this.subscriptionList.set(name, [callback]);
    } else {
      const exisitngCallbacks = this.subscriptionList.get(name);
      this.subscriptionList.set(name, [...exisitngCallbacks, callback]);
    }

    return {
      remove: () => {
        const exisitngCallbacks = this.subscriptionList.get(name);
        const filtered = exisitngCallbacks.filter((e) => e !== callback);
        this.subscriptionList.set(name, filtered);
      },
    };
  };

  this.subscribeOnce = function (name, callback) {
    if (!this.subscribeOnceList.has(name)) {
      this.subscribeOnceList.set(name, [callback]);
    } else {
      const exisitngCallbacks = this.subscribeOnceList.get(name);
      this.subscribeOnceList.set(name, [...exisitngCallbacks, callback]);
    }
  };

  this.subscribeOnceAsync = async function (name) {
    return new Promise((resolve, reject) => {
      if (!this.subscribeOnceAsyncList.has(name)) {
        this.subscribeOnceAsyncList.set(name, [resolve]);
      } else {
        const exisitngCallbacks = this.subscribeOnceAsyncList.get(name);
        this.subscribeOnceAsyncList.set(name, [...exisitngCallbacks, resolve]);
      }
    });
  };

  this.publish = function (name, data) {
    const callbacks = this.subscriptionList.get(name) || [];
    callbacks.forEach((e) => {
      e(data);
    });

    const subscribeOnceCallbacks = this.subscribeOnceList.get(name) || [];
    subscribeOnceCallbacks.forEach((e) => {
      e(data);
    });

    this.subscribeOnceList.set(name, []);

    const subscribeOnceAsyncCallbacks =
      this.subscribeOnceAsyncList.get(name) || [];
    subscribeOnceAsyncCallbacks.forEach((e) => {
      e(data);
    });

    this.subscribeOnceAsyncList.set(name, []);
  };

  this.publishAll = function (data) {
    const entries = this.subscriptionList.entries();
    for (let [key, value] of entries) {
      value.forEach((e) => {
        e(data);
      });
    }
  };
}

const events = new Events();

// const newUserNewsSubscription = events.subscribe("new-user", function (
//   payload
// ) {
//   console.log(`Sending Q1 News to: ${payload}`);
// });

// // events.publish("new-user", "Jhon");

// const newUserNewsSubscription2 = events.subscribe("new-user", function (
//   payload
// ) {
//   console.log(`Sending Q2 News to: ${payload}`);
// });

// // events.publish("new-user", "Doe");

// // newUserNewsSubscription.remove();

// // events.publish("new-user", "Foo");

// events.publishAll("FooBar");

// events.subscribeOnce("new-user", function (payload) {
//   console.log(`I am invoked once ${payload}`);
// });

// events.publish("new-user", "Foo Once");
// events.publish("new-user", "Foo Twice");

events.subscribeOnceAsync("new-user").then(function (payload) {
  console.log(`I am invoked once ${payload}`);
});

events.publish("new-user", "Foo Once Async");
