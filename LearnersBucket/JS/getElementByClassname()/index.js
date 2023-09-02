/*

We have to write a polyfill for the getElementByClassname()

https://www.youtube.com/watch?v=3b35wf3CLeQ&list=PL_KW_uw2ITn84SjTLNQsugTU3hU4_EwLM&index=25

https://leetcode.com/discuss/interview-question/427896/dropbox-phone-screen-implement-getbyclassname-getbyclassnamehierarchy

*/

const getByClassName = (root, c) => {
  const search = (node) => {
    let result = [];

    if (node.classList.contains(c)) {
      result.push(node); // or node.id
    }

    for (const child of node.children) {
      const res = search(child);
      result = [...result, ...res];
    }

    return result;
  };

  return search(root);
};

const root = document.getElementById("root");
console.log(getByClassName(root, "a"));
