import ApiDailyStockDatapoint from "../types/ApiDailyStockDatapoint";
import StockDatapoint from "../types/StockDatapoint";

const fetchStockData = async (ticker: string): Promise<StockDatapoint[]> => {
  const data = await fetch("http://localhost:3001/stockdata?ticker=AAPL");
  console.log("Data", data);
  return await data.json();
};

const DataService = { fetchStockData };

export default DataService;
