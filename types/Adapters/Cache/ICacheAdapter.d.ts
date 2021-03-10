export declare interface ICacheAdapter {
  /**
   * Get a value in the cache
   * @param {String} key Cache key to get
   * @return {Promise} that will eventually resolve to the value in the cache.
   */
  get(key: string): Promise<any>;

  /**
   * Set a value in the cache
   * @param {String} key Cache key to set
   * @param {String} value Value to set the key
   * @param {String} ttl Optional TTL
   */
  put(key: string, value: any, ttl?: number): Promise<void>;

  /**
   * Remove a value from the cache.
   * @param {String} key Cache key to remove
   */
  del(key: string): Promise<void>;

  /**
   * Empty a cache
   */
  clear(): Promise<void>;
}
