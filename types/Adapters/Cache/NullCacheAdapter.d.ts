import { ICacheAdapter } from "./ICacheAdapter";

export declare class NullCacheAdapter implements ICacheAdapter {
  constructor();
  get(key?: string): Promise<any>;
  put(key?: string, value?: any, ttl?: number): Promise<void>;
  del(key?: string): Promise<void>;
  clear(): Promise<void>;
}
