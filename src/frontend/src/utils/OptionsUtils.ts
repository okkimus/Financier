import * as Highcharts from "highcharts";
import StockDatapoint from "../types/StockDatapoint";

const updateOptions = (
  options: Highcharts.Options,
  title: string,
  data: StockDatapoint[]
): Highcharts.Options => {
  const newTitle = { title: { text: title } };
  const newDataSeries = {
    data,
    type: "area",
    threshold: null,
    tooltip: {
      valueDecimals: 2,
    },
  } satisfies Highcharts.SeriesOptionsType;

  const newOptions = {
    ...options,
    ...newTitle,
    series: [newDataSeries],
  };

  return newOptions;
};

export { updateOptions };
