import axios from "axios";
import config from "../configs/config";
import ClientResponse from "../types/ClientResponse";

const BASE_URL = "https://www.alphavantage.co";

const AlphaVantageClient = {
  dailyAdjusted: async (ticker: string): Promise<ClientResponse> => {
    try {
      const response = await axios.get(BASE_URL + "/query", {
        params: {
          function: "TIME_SERIES_DAILY_ADJUSTED",
          symbol: ticker,
          outputsize: "full",
          apikey: config.ALPHAVANTAGE_API_KEY,
        },
      });

      const data = response.data;

      if (data["Error Message"]) {
        return {
          data: null,
          error: data["Error Message"],
        };
      }

      return {
        data: data,
        error: null,
      };
    } catch (e) {
      if (e instanceof Error) {
        return {
          data: null,
          error: e.message,
        };
      } else if (typeof e === "string") {
        return {
          data: null,
          error: e,
        };
      }
      return {
        data: null,
        error: "Error while fetching data from AlphaVantage",
      };
    }
  },

  tickerSearch: async (searchTerm: string) => {
    try {
      const response = await axios.get(BASE_URL + "/query", {
        params: {
          function: "SYMBOL_SEARCH",
          keywords: searchTerm,
          apikey: config.ALPHAVANTAGE_API_KEY,
        },
      });

      const data = response.data;

      if (data["Error Message"]) {
        return {
          data: null,
          error: data["Error Message"],
        };
      }

      return {
        data: data,
        error: null,
      };
    } catch (e) {
      if (e instanceof Error) {
        return {
          data: null,
          error: e.message,
        };
      } else if (typeof e === "string") {
        return {
          data: null,
          error: e,
        };
      }
      return {
        data: null,
        error: "Error while fetching data from AlphaVantage",
      };
    }
  },
};

export default AlphaVantageClient;
