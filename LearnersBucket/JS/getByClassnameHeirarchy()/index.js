/*

We have to write a polyfill for the getByClassnameHeirarchy()

https://www.youtube.com/watch?v=1p6Ow7qIH_k&list=PL_KW_uw2ITn84SjTLNQsugTU3hU4_EwLM&index=26

https://leetcode.com/discuss/interview-question/427896/dropbox-phone-screen-implement-getbyclassname-getbyclassnamehierarchy

*/

/*

a>c
["a","c"]
index = 0 "a"
index = 1 "c"



*/

const getByClassnameHierarchy = (root, className) => {
  const result = [];
  const classes = className.split(">");

  traverseDOM(root, classes, 0, result);

  return result;
};

const traverseDOM = (element, classes, index, result) => {
  const targetClass = classes[index];

  if (index === classes.length - 1 && element.classList.contains(targetClass)) {
    result.push(element);
    return;
  }

  for (let child of element.children) {
    if (element.classList.contains(targetClass)) {
      traverseDOM(child, classes, index + 1, result);
    } else {
      traverseDOM(child, classes, 0, result);
    }
  }
};

const root = document.getElementById("a-1");
console.log(getByClassnameHierarchy(root, "a>c"));
