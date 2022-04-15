export interface IStorage<T> {
  save(entity: T): Promise<T>;

  update(entity: T): Promise<T>;

  findAll(page?: number, pageSize?: number): Promise<T[]>;
}
