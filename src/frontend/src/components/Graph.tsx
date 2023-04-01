import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import DataService from "../service/DataService";
import GraphOptions from "../configs/GraphOptions";
import { useEffect, useState } from "react";

const Graph = () => {
  const [options, setOptions] = useState(GraphOptions);

  useEffect(() => {
    DataService.fetchStockData("AAPL").then((d) => {
      const newOptions = {
        ...options,
        series: [{ ...options.series[0], data: d }],
      };
      setOptions(newOptions);
    });
  }, []);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"stockChart"}
      options={options}
    />
  );
};

export default Graph;
