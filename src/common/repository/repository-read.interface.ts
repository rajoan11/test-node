export interface RepositoryRead<T> {
  find(conditions: Partial<T>): Promise<T[]>;
  findById(id: string): Promise<T | null>;
  findOne(condition: Partial<T>): Promise<T | null>;
}
