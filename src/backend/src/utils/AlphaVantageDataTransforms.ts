import ApiDailyStockDatapoint from "../types/ApiDailyStockDatapoint";
import StockDatapoint from "../types/StockDatapoint";

const processAplhaVantageStockData = (data: any): Array<StockDatapoint> => {
  const datapoints = data["Time Series (Daily)"];
  const dataKeys = Object.keys(datapoints);
  const sortedKeys = [...dataKeys].sort();

  const stockDatapoints = sortedKeys.map((k) =>
    apiDatapointToStockDatapoint(datapoints[k], k)
  );

  return stockDatapoints;
};

const apiDatapointToStockDatapoint = (
  datapoint: ApiDailyStockDatapoint,
  date: string
): StockDatapoint => {
  return [new Date(date).valueOf(), parseFloat(datapoint["4. close"])];
};

export { processAplhaVantageStockData };
