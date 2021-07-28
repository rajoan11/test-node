export interface ServiceRead<T> {
  getList(): Promise<T[] | Partial<T>[]>;
  getById(id: string): Promise<T | null>;
}
