/*

https://www.youtube.com/watch?v=bTMEFFrupyY&list=PL_KW_uw2ITn8xWRkGZjKTfb-9xj_pJfgT&index=35

Implement a function in JavaScript that takes a string and list of keywords and highlights all the keywords in the string. It is the easier version of the WYSIWYG editor. : What you see what you get

https://learnersbucket.com/examples/interview/highlight-the-words-in-the-string/

*/

// edge case here is as you see End so it should only highlist the Front(end) in the string and if in words ["Front", "End"] given then the entire FrontEnd in str should wrapped inside single strong element

const str = "Ultimate Javascript / FrontEnd guide";
const keywords = ["Front", "End", "Javascript"];

// highlist(str, words)

function highlight(str, keywords, caseInsensitive = false) {
  if (caseInsensitive) {
    keywords = keywords.map((e) => e.toLowerCase());
  }

  const uniqueKeywords = new Set(keywords);
  const words = str.split(" ");

  const hasWord = (word) => {
    word = caseInsensitive ? word.toLowerCase() : word;
    return uniqueKeywords.has(word);
  };

  const result = words.map((word) => {
    let output = "";
    if (hasWord(word)) {
      output = `<strong>${word}</strong>`;
    } else {
      for (let i = 0; i < word.length; i++) {
        const prefix = word.slice(0, i + 1);
        const suffix = word.slice(i + 1);

        if (hasWord(prefix) && hasWord(suffix)) {
          output = `<strong>${prefix + suffix}</strong>`;
        } else if (hasWord(prefix) && !hasWord(suffix)) {
          output = `<strong>${prefix}</strong>${suffix}`;
        } else if (!hasWord(prefix) && hasWord(suffix)) {
          output = `${prefix}<strong>${suffix}</strong>`;
        }
      }
    }

    return output !== "" ? output : word;
  });

  return result.join(" ");
}

console.log(highlight(str, keywords));

/*

Incase some one is thinking of how to show it in the UI
const parser = new DOMParser();

const htmlString = "<strong>Beware of the leopard</strong>";
const doc3 = parser.parseFromString(htmlString, "text/html");

console.log(doc3.body.firstChild.textContent)  // Beware of the leopard


*/
