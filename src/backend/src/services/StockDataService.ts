import StockDatapoint from "../types/StockDatapoint";
import AlphaVantageClient from "../utils/AlphaVantageClient";

const StockDataService = {
  async getStockData(ticker: string): Promise<any> {
    return await AlphaVantageClient.getStockData(ticker);
  },
};

export default StockDataService;
