import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import StockDataService from "./services/StockDataService";

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
  console.log(ticker);

  if (!ticker && typeof ticker !== "string") {
    res.status(400);
    return res.send("Request missing 'ticker' query parameter");
  }

  try {
    const data = await StockDataService.getStockData(ticker as string);
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

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
