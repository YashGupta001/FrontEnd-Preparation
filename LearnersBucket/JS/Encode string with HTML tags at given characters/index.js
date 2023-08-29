/*

Encode string with HTML tags at given characters

https://www.youtube.com/watch?v=Yp2qvzkA1r8&list=PL_KW_uw2ITn8xWRkGZjKTfb-9xj_pJfgT&index=1



You can expect this frontend coding question in Rippling, Uber, Flipkart, Atlassian, Meta, Google, Microsoft, Dropbox


For example: 'Hello, world', [[0, 2, 'i'], [4, 9, 'b'], [7, 10, 'u']]


We will be using the stack to track the open and close tags 
Ans use the priority queue to sort these ([[0, 2, 'i'], [4, 9, 'b'], [7, 10, 'u']]) indexes based on the range see sort.png

https://learnersbucket.com/examples/interview/html-encoding-of-a-string/

*/

// helper function works as Priority queue
// to add tags and sort them in descending order
// based on the difference between the start and end
function addAndSort(track, index, data) {
  if (!track[index]) track[index] = [];
  track[index] = [...track[index], data];
  track[index].sort((a, b) => a.getRange() > b.getRange());
}

function Stack() {
  let items = [];
  let top = 0;

  //Push an item in the Stack
  this.push = function (element) {
    items[top++] = element;
  };

  //Pop an item from the Stack
  this.pop = function () {
    return items[--top];
  };

  //Peek top item from the Stack
  this.peek = function () {
    return items[top - 1];
  };
}
// helper function to form a tag
// and trace the string
function Tag(start, end, tag) {
  this.start = start;
  this.end = end;
  this.tag = tag;
  this.text = "";

  this.getRange = () => {
    return this.end - this.start;
  };
}

function parse(str, markups) {
  // create an empty array for all the indexes of the string
  const track = new Array(str.length).fill(null);

  // add the tag at the starting point
  // of each text mentined in the markups
  for (let markup of markups) {
    const [start, end, tag] = markup;
    addAndSort(track, start, new Tag(start, end, tag));
  }

  // create a new stack
  const html = new Stack();

  // initilize with a new Tag that has max range and empty string
  html.push(new Tag(0, Number.MAX_VALUE, ""));

  // iterate each character of the string
  for (let i = 0; i < str.length; i++) {
    // check for opening tags and add them
    while (track[i] && track[i].length > 0) {
      const cur = track[i].shift();
      cur.text = `<${cur.tag}>`;

      // for example in [0, 2, 'i'] , [1, 3, 'b']
      // b is starting from 1 and ending at 3, i is inbetween b.
      // <i> <b> </b> </i> <b> </b>
      // if the end of the nested tag is larger than the parent, split the tag
      // and insert the remaining split to the bucket after its parent
      if (cur.end > html.peek().end) {
        const split = new Tag(html.peek().end + 1, cur.end, cur.tag);
        cur.end = html.peek().end;
        addAndSort(track, html.peek().end + 1, split);
      }

      // push the new tag
      html.push(cur);
    }

    // add the current character to the currently topmost tag
    html.peek().text += str[i];

    // heck for closing tags and close them.
    while (html.peek().end === i) {
      html.peek().text += `</${html.peek().tag}>`;
      const temp = html.pop().text;
      html.peek().text += temp;
    }
  }

  // return the topmost
  return html.pop().text;
}

const encoded = parse("Hello, World", [
  [0, 2, "i"],
  [7, 10, "u"],
  [4, 9, "b"],
  [2, 7, "i"],
  [7, 9, "u"],
]);

console.log(encoded);
