import StockDatapoint from "../types/StockDatapoint";
import AlphaVantageClient from "../utils/AlphaVantageClient";
import {
  transformAlphaVantageStockData,
  transformTickerSearchResult,
} from "../utils/AlphaVantageDataTransforms";

const StockDataService = {
  /**
   * Searches stock data from AlphaVantage and transforms it to StockDatapoint array.
   * @param ticker Stock symbol to search data for
   * @returns Array of StockDatapoint with timestamp and values
   */
  async getStockData(ticker: string): Promise<StockDatapoint[]> {
    const res = await AlphaVantageClient.dailyAdjusted(ticker);

    if (res.error) {
      throw Error("Error while fetching data");
    }

    return transformAlphaVantageStockData(res.data);
  },

  /**
   * Searches AlphaVantage for tickers with given search term and transforms them into TickerDetails array
   * @param search Search term to look for i.e. company name or ticker ("Apple", "TSLA")
   * @returns Array of TickerDetails
   */
  async getTickers(search: string) {
    const res = await AlphaVantageClient.tickerSearch(search);

    if (res.error) {
      throw Error("Error while fetching data");
    }

    return transformTickerSearchResult(res.data);
  },
};

export default StockDataService;
