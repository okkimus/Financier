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

/**
 * Tries to set the key-value pair in Redis. Keys are set to expire
 * after certain time.
 * @param key Key to be set
 * @param value Value to be set to the key
 */
const setKey = async (key: string, value: string): Promise<void> => {
  try {
    await client.connect();
    await client.set(key, value, SET_OPTIONS);
    await client.disconnect();
  } catch (e) {
    console.error("Error while setting key to Redis");
  }
};

/**
 * Tries to retrieve value with given key from Redis
 * @param key Cache key to look for in Redis
 * @returns Value if key is found and null if error happens
 */
const getValue = async (key: string) => {
  try {
    await client.connect();
    const value = await client.get(key);
    await client.disconnect();
    return value;
  } catch (e) {
    console.error("Error while setting key to Redis");
    return null;
  }
};

const CacheService = {
  setKey,
  getValue,
};

export default CacheService;
