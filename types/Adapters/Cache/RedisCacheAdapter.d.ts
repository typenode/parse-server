import { ClientOpts } from "redis";
import { ICacheAdapter } from "./ICacheAdapter";

export declare class RedisCacheAdapter implements ICacheAdapter {
  constructor(redisCtx: string | ClientOpts, ttl?: number);
  get(key: string): Promise<any>;
  put(key: string, value: any, ttl?: number): Promise<void>;
  del(key: string): Promise<void>;
  clear(): Promise<void>;
}
