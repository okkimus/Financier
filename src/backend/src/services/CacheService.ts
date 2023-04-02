import { SetOptions, createClient } from "redis";
import config from "../configs/config";

const client = createClient({
  url: config.REDIS_URL,
});

const EXPIRE_AFTER_SECONDS = 5 * 60; // 5 minutes
const SET_OPTIONS = {
  EX: EXPIRE_AFTER_SECONDS,
  NX: true, // Only add key if it doesn't exist
} satisfies SetOptions;

client.on("error", (err) => console.log("Redis Client Error", err));

const setKey = async (key: string, value: string) => {
  await client.connect();
  await client.set(key, value, SET_OPTIONS);
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
