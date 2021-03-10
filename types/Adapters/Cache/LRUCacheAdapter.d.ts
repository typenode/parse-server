import { ICacheAdapter } from "./ICacheAdapter";

export declare class LRUCacheAdapter implements ICacheAdapter {
  constructor(props: { ttl?: number; maxSize?: number });
  get(key: string): Promise<any>;
  put(key: string, value: any, ttl?: number): Promise<void>;
  del(key: string): Promise<void>;
  clear(): Promise<void>;
}
