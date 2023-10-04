/*

https://leetcode.com/problems/design-hashmap/?envType=daily-question&envId=2023-10-04

*/

class MyHashMap {
  constructor() {
    this.data = new Array(1000001);
  }
  put(key, val) {
    this.data[key] = val;
  }
  get(key) {
    let val = this.data[key];
    return val !== undefined ? val : -1;
  }
  remove(key) {
    delete this.data[key];
  }
}
