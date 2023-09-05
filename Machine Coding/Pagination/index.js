/*

https://www.youtube.com/watch?v=cBsB7hhOzQI&list=PLKhlp2qtUcSYQojD5G-ElgHezoCyq2Hgo&index=4

https://codesandbox.io/s/wizardly-architecture-2px8h5

https://dummyjson.com/docs/products

Pagination allows us to present a lot of information in a small and managable chunks

*/

// when the pages are backend driven

import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchProducts = async () => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
    );
    const data = await res.json();

    if (data && data.products) {
      setProducts(data.products);
      setTotalPages(data.total / 10); // because of api
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  // BEM convention to give className like __

  return (
    <div>
      {products.length > 0 && (
        <div className="products">
          {products.map((prod) => {
            return (
              <span className="products__single" key={prod.id}>
                <img src={prod.thumbnail} alt={prod.title} />
                <span>{prod.title}</span>
              </span>
            );
          })}
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          <span
            onClick={() => selectPageHandler(page - 1)}
            className={page > 1 ? "" : "pagination__disable"}
          >
            ◀️
          </span>
          {[...Array(totalPages)].map((_, idx) => {
            return (
              <span
                className={page === idx + 1 ? "pagination__selected" : ""}
                onClick={() => selectPageHandler(idx + 1)}
                key={idx}
              >
                {idx + 1}
              </span>
            );
          })}
          <span
            onClick={() => selectPageHandler(page + 1)}
            className={page < totalPages ? "" : "pagination__disable"}
          >
            ▶️
          </span>
        </div>
      )}
    </div>
  );
}


// When we are getting all the products from the API

import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();

    if (data && data.products) {
      setProducts(data.products);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  // BEM convention to give className like __

  return (
    <div>
      {products.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((prod) => {
            return (
              <span className="products__single" key={prod.id}>
                <img src={prod.thumbnail} alt={prod.title} />
                <span>{prod.title}</span>
              </span>
            );
          })}
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          <span
            onClick={() => selectPageHandler(page - 1)}
            className={page > 1 ? "" : "pagination__disable"}
          >
            ◀️
          </span>
          {[...Array(products.length / 10)].map((_, idx) => {
            return (
              <span
                className={page === idx + 1 ? "pagination__selected" : ""}
                onClick={() => selectPageHandler(idx + 1)}
                key={idx}
              >
                {idx + 1}
              </span>
            );
          })}
          <span
            onClick={() => selectPageHandler(page + 1)}
            className={page < products.length / 10 ? "" : "pagination__disable"}
          >
            ▶️
          </span>
        </div>
      )}
    </div>
  );
}

/*

.products {
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0;
  margin: 20px;
}

.products__single {
  height: 150px;
  padding: 20px;
  background-color: rgb(220, 220, 220);
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
}

.products__single > img {
  width: 100%;
  height: 90%;
  object-fit: cover;
  margin-bottom: 1px;
}

.pagination {
  padding: 10px;
  margin: 15px 0;
  display: flex;
  justify-content: center;
}

.pagination > span {
  padding: 15px 20px;
  border: 1px solid gray;
  cursor: pointer;
}

.pagination__selected {
  background-color: rgb(220, 220, 220);
}

.pagination__disable {
  display: none; vs 
  opacity: 0;
}


*/
