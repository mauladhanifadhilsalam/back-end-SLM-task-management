import IORedis from "ioredis";
import env from "./env";

export const connection = new IORedis({
  host: env.redisHost,
  port: env.redisPort,
  maxRetriesPerRequest: null,
});
