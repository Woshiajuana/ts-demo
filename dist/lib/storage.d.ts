interface IStorage {
    setItem<T>(key: string, value: T, expire?: number): T;
    getItem<T>(key: string, defValue: T | null): T | null;
    removeItem(key: string): void;
    updateItem<T extends [] | object>(key: string, value: T, expire?: number): T;
    clear(key: string): void;
}
export declare const cache: IStorage;
export declare const local: IStorage;
export declare function createLocalStorage(key: string): {
    setItem: (value: unknown, expire?: number | undefined) => unknown;
};
declare const _default: {
    cache: IStorage;
    local: IStorage;
};
export default _default;
