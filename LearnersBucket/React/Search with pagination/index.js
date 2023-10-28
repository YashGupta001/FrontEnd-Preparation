/*

https://www.youtube.com/watch?v=BZ-SOzQfLK8&list=PL_KW_uw2ITn8xWRkGZjKTfb-9xj_pJfgT&index=46

https://codesandbox.io/s/compassionate-bash-psl2yd

*/
import "./styles.css";
import { useEffect, useState } from "react";

const URL = `https://api.punkapi.com/v2/beers`;
const PERPAGE = 25;

export default function App() {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);
  const [beerName, setBeerName] = useState("");

  const makeApiCall = async (beerName, page, PERPAGE) => {
    try {
      const beerNameSearch = beerName !== "" ? `&beer_name=${beerName}` : "";
      let resp = await fetch(
        `${URL}?page=${page}&per_page=${PERPAGE}${beerNameSearch}`
      );
      resp = await resp.json();
      setBeers(resp);
    } catch (e) {
      console.error("Error while calling the api", e);
    }
  };

  useEffect(() => {
    makeApiCall(beerName, page, PERPAGE);
  }, [page, beerName]);

  return (
    <div className="App">
      <h1>Beers list</h1>
      <div>
        <input
          type="text"
          placeholder="Type Beer Name"
          onChange={(e) => setBeerName(e.target.value)}
          value={beerName}
        />
      </div>
      <div>
        <label htmlFor="page">Page</label>
        <select id="page" onChange={(e) => setPage(e.target.value)}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>

      {beers.map((e) => (
        <Beer key={e.name} {...e} />
      ))}
    </div>
  );
}

const Beer = ({ name, tagline, image_url }) => {
  return (
    <div class="beer">
      <div>
        <img src={image_url} alt={name} />
      </div>
      <div>
        <h2>{name}</h2>
        <p>{tagline}</p>
      </div>
    </div>
  );
};

/*

.App {
  font-family: sans-serif;
  text-align: center;
}

.beer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.beer img {
  width: 50px;
}

.beer > div:nth-child(2) {
  display: inline-flex;
  flex: 1 80%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.beer > div:nth-child(2) > h2 {
  display: inline-flex;
  flex: 1 100%;
  text-align: center;
  justify-content: center;
}



*/
