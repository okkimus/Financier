import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import DataService from "../service/DataService";
import GraphOptions from "../configs/GraphOptions";
import React, { useEffect, useRef, useState } from "react";
import ErrorToast, { showError } from "./ErrorToast";
import { createOptions } from "../utils/OptionsUtils";

const APPLE_TICKER = "AAPL";

const Graph = () => {
  const [options, setOptions] = useState<Highcharts.Options>(GraphOptions);
  const stockSymbolRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Show Apple stock price by default
    updateData(APPLE_TICKER);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateData = async (symbol: string) => {
    const newTitle = `Stock data for ${symbol.toUpperCase()}`;

    try {
      const data = await DataService.fetchStockData(symbol);
      const newOptions = createOptions(options, newTitle, data);
      setOptions(newOptions);
    } catch (e) {
      const errorMsg = `Error fetching data. Check that the stock symbol (${symbol}) is correct.`;
      showError(errorMsg);
    }
  };

  const handleEnter = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      searchForData();
    }
  };

  const searchForData = () => {
    if (stockSymbolRef.current === null) {
      return;
    }

    const value = stockSymbolRef.current.value;
    if (!value || value.length === 0) {
      return;
    }

    updateData(value);
  };

  return (
    <div className="md:w-2/3 w-full">
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options}
      />

      <div className="flex justify-center space-x-4">
        <div className="space-x-2">
          <label htmlFor="symbol">Symbol</label>
          <input
            id="symbol"
            className="border border-gray-300 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500"
            ref={stockSymbolRef}
            type="text"
            placeholder={APPLE_TICKER}
            required
            onKeyDown={handleEnter}
          />
        </div>
        <button
          className="bg-sky-500 hover:bg-sky-700 rounded-lg text-white p-1"
          onClick={searchForData}
        >
          Fetch data
        </button>
        <ErrorToast />
      </div>
    </div>
  );
};

export default Graph;
