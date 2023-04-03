import { useRef, useState } from "react";
import DataService from "../service/DataService";
import TickerDetails from "../types/TickerDetails";

const TickerSearch = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [tickers, setTickers] = useState<TickerDetails[]>([]);

  const search = async (searchTerm: string) => {
    DataService.searchForTickers(searchTerm).then((d) => setTickers(d));
  };

  return (
    <div>
      <h2>Search for tickers</h2>
      <input ref={searchRef} type="text" />
      <button onClick={() => search(searchRef.current?.value ?? "")}>
        Search
      </button>
      <ul>
        {tickers.map((t, i) => (
          <li key={i}>
            <span>{t.symbol} - </span>
            <span>{t.name} - </span>
            <span>{t.region}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TickerSearch;
