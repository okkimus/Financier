import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import data from "../data/mock.json";
import DataService from "../service/DataService";

const Graph = () => {
  const options = {
    title: {
      text: "My chart",
    },
    rangeSelector: {
      selected: 1,
    },
    series: [
      {
        name: "AAPL Stock Price",
        data: DataService.processAplhaVantageStockData(data),
        type: "area",
        threshold: null,
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            chart: {
              height: 300,
            },
            subtitle: {
              text: null,
            },
            navigator: {
              enabled: false,
            },
          },
        },
      ],
    },
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"stockChart"}
      options={options}
    />
  );
};

export default Graph;
