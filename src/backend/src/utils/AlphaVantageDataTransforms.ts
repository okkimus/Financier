import ApiDailyStockDatapoint from "../types/ApiDailyStockDatapoint";
import StockDatapoint from "../types/StockDatapoint";
import TickerDetails from "../types/TickerDetails";
import TickerSearchResult from "../types/TickerSearchResult";

const transformAlphaVantageStockData = (data: any): Array<StockDatapoint> => {
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

const transformTickerSearchResult = (data: any): TickerDetails[] => {
  const tickers: TickerSearchResult[] = data["bestMatches"];

  if (!tickers) {
    return [];
  }

  return tickers.map((t) => ({
    symbol: t["1. symbol"],
    name: t["2. name"],
    region: t["4. region"],
    currency: t["8. currency"],
  }));
};

export { transformAlphaVantageStockData, transformTickerSearchResult };
