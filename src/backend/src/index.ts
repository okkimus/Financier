import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import StockDataService from "./services/StockDataService";
import CacheService from "./services/CacheService";
import { getErrorMessage } from "./utils/ErrorHandlers";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
var corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

app.get("/", (req: Request, res: Response) => {
  res.send("API running");
});

app.get("/stockdata", async (req: Request, res: Response) => {
  const { ticker } = req.query;
  console.log("Searching for ticker:", ticker);

  res.contentType("application/json");

  if (!ticker && typeof ticker !== "string") {
    res.status(400);
    return res.send({ error: "Request missing 'ticker' query parameter" });
  }

  const cached = await CacheService.getValue(ticker as string);
  if (cached) {
    return res.send(cached);
  }

  try {
    const data = await StockDataService.getStockData(ticker as string);
    CacheService.setKey(ticker as string, JSON.stringify(data));
    return res.send(data);
  } catch (e) {
    res.status(500);
    if (typeof e === "string") {
      return res.send(e);
    } else if (e instanceof Error) {
      return res.send(e.message);
    }
  }
});

app.get("/tickers", async (req: Request, res: Response) => {
  const { search } = req.query;
  console.log("Search", search);

  if (!search && typeof search !== "string") {
    res.status(400);
    return res.send({ error: "Request missing 'search' query parameter" });
  }

  try {
    const data = await StockDataService.getTickers(search as string);
    return res.send(data);
  } catch (e) {
    res.status(500);
    return res.send({
      error: getErrorMessage(e, "Error while searching tickers"),
    });
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
