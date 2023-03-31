import StockDatapoint from "../types/StockDatapoint";
import AlphaVantageClient from "../utils/AlphaVantageClient";
import { processAplhaVantageStockData } from "../utils/AlphaVantageDataTransforms";

const StockDataService = {
  async getStockData(ticker: string): Promise<StockDatapoint[]> {
    const data = await AlphaVantageClient.getStockData(ticker);

    return processAplhaVantageStockData(data);
  },
};

export default StockDataService;
