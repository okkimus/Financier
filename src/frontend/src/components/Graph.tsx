import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import DataService from "../service/DataService";
import GraphOptions from "../configs/GraphOptions";
import { useEffect, useRef, useState } from "react";

const Graph = () => {
  const [options, setOptions] = useState(GraphOptions);
  const stockSymbolRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    updateData("AAPL");
  }, []);

  const updateData = (symbol: string) => {
    const newTitle = `Stock data for ${symbol.toUpperCase()}`;
    const titleObject = { title: { text: newTitle } };

    DataService.fetchStockData(symbol).then((d) => {
      const newOptions = {
        ...options,
        ...titleObject,
        series: [{ ...options.series[0], data: d }],
      };
      setOptions(newOptions);
    });
  };

  const handleDataSearch = () => {
    if (stockSymbolRef.current === null) {
      return;
    }

    const value = stockSymbolRef.current.value;
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
            placeholder="AAPL"
            required
          />
        </div>
        <button
          className="bg-sky-500 hover:bg-sky-700 rounded-lg text-white p-1"
          onClick={handleDataSearch}
        >
          Fetch data
        </button>
      </div>
    </div>
  );
};

export default Graph;
