import * as dotenv from "dotenv";

dotenv.config();

const config = {
  ALPHAVANTAGE_API_KEY: process.env.ALPHAVANTAGE_API_KEY,
  PORT: process.env.PORT,
  FRONTEND_URL: process.env.FRONTEND_URL,
  REDIS_URL: process.env.REDIS_URL,
} as const;

export default config;
