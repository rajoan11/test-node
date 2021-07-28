export interface ServiceWrite<T> {
    create(item: T): Promise<T>;
    delete(id: string): Promise<boolean>;
    update(item: T): Promise<T>;
}
