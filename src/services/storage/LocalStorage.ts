import { ILocalStorage } from "~@Services/storage/ILocalStorage";

export class LocalStorage implements ILocalStorage {

    public get(key: string): string {
        return localStorage.getItem(key);
    }

    public getObject<T>(key: string): T {
        const value = localStorage.getItem(key);
        if (!value) return null;
        return JSON.parse(value);
    }

    public set(key: string, value: string): void {
        localStorage.setItem(key, value);
    }

    public setObject<T>(key: string, value: T): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    public clear(): void {
        localStorage.clear();
    }

}
