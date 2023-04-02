import StockDatapoint from "../types/StockDatapoint";
import AlphaVantageClient from "../utils/AlphaVantageClient";
import {
  processAplhaVantageStockData,
  transformTickerSearchResult,
} from "../utils/AlphaVantageDataTransforms";

const StockDataService = {
  async getStockData(ticker: string): Promise<StockDatapoint[]> {
    const res = await AlphaVantageClient.dailyAdjusted(ticker);

    if (res.error) {
      throw Error("Error while fetching data");
    }

    return processAplhaVantageStockData(res.data);
  },

  async getTickers(search: string) {
    const res = await AlphaVantageClient.tickerSearch(search);

    if (res.error) {
      throw Error("Error while fetching data");
    }

    return transformTickerSearchResult(res.data);
  },
};

export default StockDataService;
