export function get(key: string): string {
    return localStorage.getItem(key);
}

export function set(key: string, value: string): void {
    localStorage.setItem(key, value);
}

export function setObject<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getObject<T>(key: string): T {
    const value = localStorage.getItem(key);
    if (!value) return null;
    return JSON.parse(value);
}

export function clear(): void {
    localStorage.clear();
}
