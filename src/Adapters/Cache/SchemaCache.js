import { InMemoryCache } from './InMemoryCache';

const SCHEMAS = '__SCHEMAS__';

export class SchemaCache {
  cache: InMemoryCache;
  constructor() {
    this.cache = new InMemoryCache({ ttl: 10000 });
  }
  all() {
    const allClasses = this.cache.get(SCHEMAS);
    return [...(allClasses || [])];
  }
  get(className) {
    return this.all().find(cached => cached.className === className);
  }
  put(allSchema) {
    this.cache.put(SCHEMAS, allSchema);
  }
  clear() {
    this.cache.del(SCHEMAS);
    this.cache.clear();
  }
}

export default new SchemaCache();
