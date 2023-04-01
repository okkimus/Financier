import AppConfig from "../configs/AppConfig";
import StockDatapoint from "../types/StockDatapoint";

const BASE_URL = AppConfig.API_URL;

const fetchStockData = async (ticker: string): Promise<StockDatapoint[]> => {
  const data = await fetch(`${BASE_URL}/stockdata?ticker=AAPL`);
  console.log("Data", data);
  return await data.json();
};

const DataService = { fetchStockData };

export default DataService;
