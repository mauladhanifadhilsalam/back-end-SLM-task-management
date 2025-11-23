import IORedis from 'ioredis';
import env from '../utils/env';

export const connection = new IORedis({
  host: env.redisHost,
  port: env.redisPort,
  maxRetriesPerRequest: null
});
