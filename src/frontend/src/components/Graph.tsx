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
    <div>
      <input ref={stockSymbolRef} type="text" />
      <button onClick={handleDataSearch}>Fetch data</button>

      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options}
      />
    </div>
  );
};

export default Graph;
