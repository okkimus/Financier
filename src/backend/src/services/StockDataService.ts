import StockDatapoint from "../types/StockDatapoint";
import AlphaVantageClient from "../utils/AlphaVantageClient";
import { processAplhaVantageStockData } from "../utils/AlphaVantageDataTransforms";

const StockDataService = {
  async getStockData(ticker: string): Promise<StockDatapoint[]> {
    const res = await AlphaVantageClient.getStockData(ticker);

    if (res.error) {
      throw Error("Error while fetching data");
    }

    return processAplhaVantageStockData(res.data);
  },
};

export default StockDataService;
