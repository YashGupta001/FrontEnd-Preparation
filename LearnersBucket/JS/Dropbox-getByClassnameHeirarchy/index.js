/*

Dropbox frontend interview question | getByClassnameHeirarchy() 

https://leetcode.com/discuss/interview-question/427896/dropbox-phone-screen-implement-getbyclassname-getbyclassnamehierarchy

https://www.youtube.com/watch?v=1p6Ow7qIH_k&list=PL_KW_uw2ITn8xWRkGZjKTfb-9xj_pJfgT&index=19


*/

// 1. polyfill or Implement getByClassName()
// element.children => HTMLCollection
// element.className => string

/**
 * @function getByClassName
 * @param {Element} root – The root of the DOM tree
 * @param {string} className
 * @return {Array<Element>} nodes – All the nodes in the tree which include the target className in their classes.
 */
function getByClassName(root, className) {
  // todo
}

const { JSDOM } = require("jsdom");
const { document } = new JSDOM(`
  <div class='a' id="root">
    <div class='b' id='b-1'>
      <div class='a' id='a-2'>
        <div class='d' id='d-1'></div>
      </div>
      <div class='c' id='c-1'>
        <div class='a' id='a-3'>
          <div class='d' id='d-2'></div>
        </div>
      </div>
    </div>
  </div>
`).window;
const getIds = (elements = []) => Array.from(elements).map((x) => x.id);
const root = document.getElementById("root");
console.log("actual:  ", getIds(getByClassName(root, "a")));
console.log("expected:", `[ 'root', 'a-2', 'a-3' ]`);
