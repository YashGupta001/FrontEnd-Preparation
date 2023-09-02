/*

https://www.youtube.com/watch?v=MHW8tGONRtk&list=PL_KW_uw2ITn84SjTLNQsugTU3hU4_EwLM&index=43

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet

Input:
const List = function(val){
  this.next = null;
  this.val = val;
};

const item1 = new List(10);
const item2 = new List(20);
const item3 = new List(30);

item1.next = item2;
item2.next = item3;
item3.next = item1;

// this form a cycle, if you console.log this you will see a circular object, 
// like, item1 -> item2 -> item3 -> item1 -> so on.

Output:
// removes cycle
// item1 -> item2 -> item3

*/

const List = function (val) {
  this.next = null;
  this.val = val;
};

const item1 = new List(10);
const item2 = new List(20);
const item3 = new List(30);

item1.next = item2;
item2.next = item3;
item3.next = item1;

// console.log("list1", item1);
// console.log("list1 stringify", JSON.stringify(item1)); // Will get below error

/*

VM45:15 Uncaught TypeError: Converting circular structure to JSON
    --> starting at object with constructor 'List'
    |     property 'next' -> object with constructor 'List'
    |     property 'next' -> object with constructor 'List'
    --- property 'next' closes the circle
    at JSON.stringify (<anonymous>)
    at <anonymous>:15:37

*/

function removeCircle(obj) {
  const store = new WeakSet([obj]);

  function helper(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        const val = obj[key];
        if (typeof val === "object") {
          if (store.has(val)) {
            obj[key] = null;
            // or
            // delete obj[key]
          } else {
            store.add(val);
            helper(val);
          }
        }
      }
    }
  }

  helper(obj);
}

removeCircle(item1);
console.log(item1);
console.log(JSON.stringify(item1));

// 2. Another way of doing this

function circleRemoval() {
  const store = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value) {
      if (store.has(value)) {
        return;
      } else {
        store.add(value);
      }
    }

    return value;
  };
}

console.log(JSON.stringify(item1, circleRemoval()));
