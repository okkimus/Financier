import * as dotenv from "dotenv";

dotenv.config();

const config = {
  ALPHAVANTAGE_API_KEY: process.env.ALPHAVANTAGE_API_KEY,
  PORT: process.env.PORT,
} as const;

export default config;
