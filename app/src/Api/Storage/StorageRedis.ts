import { IStorageRedis } from './IStorageRedis';
import { redisClient } from '../../Database/RedisConfig';
import { promisify } from 'util';
import { loggerError } from '../Utils/Logger';

export class StorageRedis implements IStorageRedis {
  public async set(key: string, value: string, expireSeconds?: number): Promise<void> {
    try {
      redisClient.set(key, value);

      if (expireSeconds && expireSeconds > 0) {
        redisClient.expire(key, expireSeconds);
      }
    } catch (e) {
      loggerError(e);
    }
  }

  public async get(key: string): Promise<string> {
    try {
      const getAsync = promisify(redisClient.get).bind(redisClient);

      const jsonString = await getAsync(key);

      return Promise.resolve(jsonString);
    } catch (e) {
      loggerError(e);
    }

    return null;
  }

  public async del(key: string): Promise<void> {
    try {
      redisClient.del(key);
    } catch (e) {
      loggerError(e);
    }
  }
}
