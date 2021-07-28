export interface RepositoryWrite<T> {
  create(item: T): Promise<T>;
  delete(id: string): Promise<boolean>;
  update(item: T): Promise<T>;
  partialUpdate(id: string, partial: Partial<T>): Promise<T | null>;
}
