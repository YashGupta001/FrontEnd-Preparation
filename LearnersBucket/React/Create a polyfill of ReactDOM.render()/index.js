/*

Create a polyfill of ReactDOM.render()

https://www.youtube.com/watch?v=GKm4zBvCKqE&list=PL_KW_uw2ITn8xWRkGZjKTfb-9xj_pJfgT&index=25

https://leetcode.com/discuss/interview-question/1681654/facebook-frontend-engineer-oa-usa

Can only use JavaScript.

For a recursive description of DOM elements i.e.

const dom = {
  type: 'div',
  props: { id: 'hello', children: [{ type: 'h1', children: 'HELLO' }] },
};
Define a function that prepares a actual dom elements.

*/

const dom = {
  type: "div",
  props: { id: "hello" },
  children: [{ type: "h1", children: "HELLO" }],
};

const entry = document.getElementById("root");

const generateDOM = (domObj, entry) => {
  const helper = (obj) => {
    const { type, props, children } = obj;
    const el = document.createElement(type);

    if (props) {
      for (let property in props) {
        el[property] = props[property];
      }
    }

    if (typeof children === "string") {
      el.innerText = children;
    } else {
      const fragment = document.createDocumentFragment();

      for (let child of children) {
        fragment.appendChild(helper(child));
      }

      el.appendChild(fragment);
    }

    return el;
  };

  const generateddom = helper(domObj);
  entry.appendChild(generateddom);
};

generateDOM(dom, entry);
