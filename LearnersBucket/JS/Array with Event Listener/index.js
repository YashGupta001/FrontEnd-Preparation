/*

Array with Event Listener

We have to extend the array so that it can have event listener and trigger these events whenever an push or pop action is performed.

https://www.youtube.com/watch?v=3jKvw-iZOXk&list=PL_KW_uw2ITn8xWRkGZjKTfb-9xj_pJfgT&index=27

https://learnersbucket.com/examples/interview/array-with-event-listeners-in-javascript/


Input:
const arr = [];
arr.addListener('add', (eventName, items, array) => {
  console.log('items were added', items);
});

arr.addListener('remove', (eventName, item, array) => {
  console.log(item, ' was removed');
});

arr.pushWithEvent('add', [4, 5]);
arr.popWithEvent('remove');


Output:
"items were added again" // [object Array] (2)
[4,5]

5 " was removed"

*/

Array.prototype.listeners = {};

Array.prototype.addListener = function (eventName, callback) {
  if (!this.listeners[eventName]) {
    this.listeners[eventName] = [];
  }

  this.listeners[eventName].push(callback);
};

Array.prototype.pushWithEvent = function (eventName, values) {
  this.push(...values);
  this.triggerEvent(eventName, values);
};

Array.prototype.popWithEvent = function (eventName) {
  const val = this.pop();
  this.triggerEvent(eventName, val);
};

Array.prototype.triggerEvent = function (eventName, values) {
  if (this.listeners[eventName]) {
    this.listeners[eventName].forEach((callback) => {
      callback(eventName, values, this);
    });
  }
};

const arr = [];
arr.addListener("add", (eventName, items, array) => {
  console.log("items were added", items);
});

arr.addListener("add", (eventName, items, array) => {
  console.log("items were added again", items);
});

arr.addListener("remove", (eventName, item, array) => {
  console.log(item, " was removed");
});

arr.pushWithEvent("add", [4, 5]);
// "items were added again" // [object Array] (2)
// [4,5]

arr.popWithEvent("remove");
// 5 " was removed"
