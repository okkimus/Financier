import StockDatapoint from "../types/StockDatapoint";

const GraphOptions = {
  title: {
    text: "My chart",
  },
  rangeSelector: {
    selected: 1,
  },
  series: [
    {
      name: "AAPL Stock Price",
      data: new Array<StockDatapoint>(),
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

export default GraphOptions;
