import axios from "axios";
import config from "../configs/config";

const BASE_URL = "https://www.alphavantage.co";

const AlphaVantageClient = {
  getStockData: async (ticker: string): Promise<any> => {
    try {
      const response = await axios.get(BASE_URL + "/query", {
        params: {
          function: "TIME_SERIES_DAILY_ADJUSTED",
          symbol: ticker,
          outputsize: "full",
          apikey: config.ALPHAVANTAGE_API_KEY,
        },
      });

      return response.data;
    } catch (e) {
      console.error(e);
    }
  },
};

export default AlphaVantageClient;
