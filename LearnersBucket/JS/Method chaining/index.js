/*

https://www.youtube.com/watch?v=aAJ_P8-84ac&list=PL_KW_uw2ITn84SjTLNQsugTU3hU4_EwLM&index=16

We have to showcase the working of method chaining by implementing the computeAmount() function that calculates and returns the value.


Builder design pattern

*/

function computeAmount() {
  const temp = {
    total: 0,
    lacs: function (num) {
      this.total += num * Math.pow(10, 5);
      return this;
    },
    crore: function (num) {
      this.total += num * Math.pow(10, 7);
      return this;
    },
    thousand: function (num) {
      this.total += num * Math.pow(10, 3);
      return this;
    },
    value: function () {
      return this.total;
    },
  };

  return temp;
}

// const amount = temp
//   .lacs(15)
//   .crore(5)
//   .crore(2)
//   .lacs(20)
//   .thousand(45)
//   .crore(7)
//   .value();

// console.log("amount", amount);

const total = computeAmount()
  .lacs(15)
  .crore(5)
  .crore(2)
  .lacs(20)
  .thousand(45)
  .crore(7)
  .value();

console.log(total);

// Now value is the termination

const computedObj = computeAmount();
const amount1 = computedObj
  .lacs(15)
  .crore(5)
  .crore(2)
  .lacs(20)
  .thousand(45)
  .crore(7)
  .value();

const amount2 = computedObj.crore(5).value();

console.log(amount1);
console.log(amount2);

// to prevent this we can have a constructor function and create multiple instances

function ComputeAmount() {
  (this.total = 0),
    (this.lacs = function (num) {
      this.total += num * Math.pow(10, 5);
      return this;
    });
  this.crore = function (num) {
    this.total += num * Math.pow(10, 7);
    return this;
  };
  this.thousand = function (num) {
    this.total += num * Math.pow(10, 3);
    return this;
  };
  this.value = function () {
    return this.total;
  };
}

const computedObj11 = new ComputeAmount();
const amount11 = computedObj11
  .lacs(15)
  .crore(5)
  .crore(2)
  .lacs(20)
  .thousand(45)
  .crore(7)
  .value();

const computedObj22 = new ComputeAmount();
const amount22 = computedObj22.crore(5).value();

console.log(amount11);
console.log(amount22);
