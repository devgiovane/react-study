export function get(key: string): string {
    return localStorage.getItem(key);
}

export function set(key: string, value: string): void {
    localStorage.setItem(key, value);
}

export function clear(): void {
    localStorage.clear();
}
