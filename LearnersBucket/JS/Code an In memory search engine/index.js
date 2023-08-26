/*



https://www.youtube.com/watch?v=8I5RbXzhzKI&list=PL_KW_uw2ITn8xWRkGZjKTfb-9xj_pJfgT&index=1


Code an in-memory search engine where you can store
documents under a particular namepsace and search on them
and sort the search results by passing orderBy parameter.
Code should be runnable and of production standard.
search(namespace, filterFn, orderBy);


const searchEngine = new InMemorySearch();
searchEngine.addDocuments(
  "Movies",
  { name: "Avengers", rating: 8.5, year: 2017 },
  { name: "Black Adam", rating: 8.7, year: 2022 },
  { name: "Jhon wick 4", rating: 8.2, year: 2023 },
  { name: "Black Panther", rating: 9.0, year: 2022 }
);
const result = searchEngine.search("Movies", (e) => e.rating >= 8.5, {
  key: "rating",
  asc: false
});
console.log(result);

*/

function InMemorySearch() {
  this.entries = new Map();

  this.addDocuments = function (namespace, ...documents) {
    const existing = this.entries.get(namespace);
    if (existing) {
      this.entries.set(namespace, [...existing, ...documents]);
    } else {
      this.entries.set(namespace, [...documents]);
    }
  };

  this.search = function (namepsace, filterFn, orderBy) {
    const documents = this.entries.get(namepsace);
    const filtered = documents.filter(filterFn);

    if (orderBy) {
      const { key, asc } = orderBy;
      return filtered.sort((a, b) => {
        if (asc) {
          return a[key] - b[key];
        } else {
          return b[key] - a[key];
        }
      });
    }

    return filtered;
  };
}

const searchEngine = new InMemorySearch();
searchEngine.addDocuments(
  "Movies",
  { name: "Avengers", rating: 8.5, year: 2017 },
  { name: "Black Adam", rating: 8.7, year: 2022 },
  { name: "Jhon wick 4", rating: 8.2, year: 2023 },
  { name: "Black Panther", rating: 9.0, year: 2022 }
);
const result = searchEngine.search("Movies", (e) => e.rating >= 8.5, {
  key: "rating",
  asc: false,
});
console.log(result);
