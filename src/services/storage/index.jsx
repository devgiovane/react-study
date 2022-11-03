export class StorageService {

    static set(key, value) {
        localStorage.setItem(String(key), String(value));
    }

    static get(key) {
        return localStorage.getItem(String(key));
    }

    static setObject(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static getObject(key) {
        const value = localStorage.getItem(String(key));
        return JSON.parse(value);
    }

    static remove(key) {
        localStorage.removeItem(String(key));
    }

    static clear() {
        localStorage.clear();
    }

}
