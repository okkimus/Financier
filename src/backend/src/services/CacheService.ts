import { createClient } from "redis";
import config from "../configs/config";

const client = createClient({
  url: config.REDIS_URL,
});

client.on("error", (err) => console.log("Redis Client Error", err));

const setKey = async (key: string, value: string) => {
  await client.connect();
  await client.set(key, value);
  await client.disconnect();
};

const getValue = async (key: string) => {
  await client.connect();
  const value = await client.get(key);
  await client.disconnect();
  return value;
};

const CacheService = {
  setKey,
  getValue,
};

export default CacheService;
