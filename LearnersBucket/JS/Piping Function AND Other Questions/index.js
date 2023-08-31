/*

https://www.youtube.com/watch?v=anvBprk5q-c&list=PL_KW_uw2ITn84SjTLNQsugTU3hU4_EwLM&index=22

https://leetcode.com/discuss/interview-question/1169779/flipkart-ui-engineer


First round was Machine coding

We had to make something Gmail

Second Round was UI tech

I was asked to make a alert with a backdrop

Third round Problem solving

{
	a : {
		b : (a,b,c)=>a+b+c,
		c : (a,b,c) => a+b-c,
		},
		d : (a,b,c) => a-b-c
}

Create a function
Fn(obj)(1,1,1);
output
{
	a : {
		b : 3,
		c : 1
		}
		d: -1
},


2. Implement LRU Cache in JS 
3. return the missing number from 2 arrays 

*/

const obj = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b - c,
  },
  d: (a, b, c) => a - b - c,
  e: null,
  f: 1,
  g: [1, 2, 3, 4],
};

function getValues(obj) {
  return function (...args) {
    for (let key in obj) {
      const val = obj[key];

      if (typeof val === "function") {
        obj[key] = val(...args);
      } else if (val && typeof val === "object" && !Array.isArray(val)) {
        getValues(val)(...args);
      }
    }
  };
}

const values = getValues(obj);
values(1, 1, 1);
