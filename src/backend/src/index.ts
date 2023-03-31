import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import StockDataService from "./services/StockDataService";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("API running");
});

app.get("/stockdata", async (req: Request, res: Response) => {
  const { ticker } = req.query;
  console.log(ticker);

  if (!ticker && typeof ticker !== "string") {
    res.status(400);
    return res.send("Request missing 'ticker' query parameter");
  }

  const data = await StockDataService.getStockData(ticker as string);
  return res.send(data);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
