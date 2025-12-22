import IORedis from "ioredis";
import env from "./env";

export const connection = new IORedis({
  tls: env.redisTLS,
  username: env.redisUsername,
  password: env.redisPassword,
  host: env.redisHost,
  port: env.redisPort,
  db: env.redisDB,
  maxRetriesPerRequest: null
});
