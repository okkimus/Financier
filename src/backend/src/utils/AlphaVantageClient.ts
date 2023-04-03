import axios from "axios";
import config from "../configs/config";
import ClientResponse from "../types/ClientResponse";
import { getErrorMessage } from "./ErrorHandlers";

const BASE_URL = "https://www.alphavantage.co";
const FALLBACK_ERROR_MESSAGE = "Error while fetching data from AlphaVantage";

const callAlphavantage = async (params: any) => {
  const response = await axios.get(BASE_URL + "/query", { params });
  return response;
};

const AlphaVantageClient = {
  dailyAdjusted: async (ticker: string): Promise<ClientResponse> => {
    try {
      const response = await callAlphavantage({
        function: "TIME_SERIES_DAILY_ADJUSTED",
        symbol: ticker,
        outputsize: "full",
        apikey: config.ALPHAVANTAGE_API_KEY,
      });

      const data = response.data;
      if (data["Error Message"]) {
        throw data["Error Message"];
      }

      return {
        data: data,
        error: null,
      };
    } catch (e) {
      return {
        data: null,
        error: getErrorMessage(e, FALLBACK_ERROR_MESSAGE),
      };
    }
  },

  tickerSearch: async (searchTerm: string) => {
    try {
      const response = await callAlphavantage({
        function: "SYMBOL_SEARCH",
        keywords: searchTerm,
        apikey: config.ALPHAVANTAGE_API_KEY,
      });

      const data = response.data;
      if (data["Error Message"]) {
        throw data["Error Message"];
      }

      return {
        data: data,
        error: null,
      };
    } catch (e) {
      return {
        data: null,
        error: getErrorMessage(e, FALLBACK_ERROR_MESSAGE),
      };
    }
  },
};

export default AlphaVantageClient;
