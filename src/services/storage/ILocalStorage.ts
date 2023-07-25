export interface ILocalStorage {
    get(key: string): string;
    set(key: string, value: string): void;
    getObject<T>(key: string): T;
    setObject<T>(key: string, value: T): void;
    clear(): void;
}
