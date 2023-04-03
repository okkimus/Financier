import StockDatapoint from "../types/StockDatapoint";

const GraphOptions = {
  title: {
    text: "",
  },
  series: [
    {
      data: new Array<StockDatapoint>(),
      type: "area",
      threshold: null,
      tooltip: {
        valueDecimals: 2,
      },
    } satisfies Highcharts.SeriesAreaOptions,
  ],
} satisfies Highcharts.Options;

export default GraphOptions;
