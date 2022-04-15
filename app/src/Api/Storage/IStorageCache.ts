export interface IStorageCache<T> {
  save(entity: T, expireSeconds?: number): Promise<T>;

  findKey(key: string): Promise<T>;

  deleteKey(key: string): Promise<void>;
}
