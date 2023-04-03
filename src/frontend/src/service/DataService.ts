import AppConfig from "../configs/AppConfig";
import StockDatapoint from "../types/StockDatapoint";

const BASE_URL = AppConfig.API_URL;

const fetchStockData = async (ticker: string): Promise<StockDatapoint[]> => {
  const data = await fetch(`${BASE_URL}/stockdata?ticker=${ticker}`);
  return await data.json();
};

const searchForTickers = async (search: string): Promise<any> => {
  const data = await fetch(`${BASE_URL}/tickers?search=${search}`);
  return await data.json();
};

const DataService = { fetchStockData, searchForTickers };

export default DataService;
