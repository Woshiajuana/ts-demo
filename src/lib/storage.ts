
type typeFn = 'sessionStorage' | 'localStorage';

interface IStorageData<T> {
    key: string,
    value: T,
    expire: number,
}

interface IStorage {
    setItem<T>(key: string, value: T, expire: number): T,
    getItem<T>(key: string, defValue: T | null): T | null,
    removeItem(key: string): void,
    updateItem<T extends [] | object>(key: string, value: T, expire?: number): T,
    clear(key: string): void,
}

const setItem = function<T> (fn: typeFn, key: string, value: T, expire: number) : T {
    const storage = window[fn];
    storage.setItem(key, JSON.stringify({ key, value, expire }));
    return value;
};

const getItem = function<T>(fn: typeFn, key: string, defValue: T | null) {
    const storage = window[fn];
    let data = storage.getItem(key);
    if (data === null) {
        return defValue;
    }
    const { expire, value } = JSON.parse(data) as IStorageData<T>;
    if (expire === -1 || Date.now() < expire) {
        return value;
    }
    removeItem(fn, key);
    return defValue;
};

const removeItem = function (fn: typeFn, key: string) {
    window[fn].removeItem(key);
};

const updateItem = function<T extends [] | object> (fn: typeFn, key: string, value: T, expire?: number) : T {
    let data = getItem<T>(fn, key, null);
    if (data === null) {
        return setItem<T>(fn, key, value, expire || -1);
    }
    const { value: prevValue, expire: prevExpire } = data as IStorageData<T>;
    if (Array.isArray(value)) {
        value = [...prevValue as [], ...value] as T
    } else {
        value = Object.assign({}, prevValue, value);
    }
    return setItem<T>(fn, key, value, expire || prevExpire);
};

const clear = function (fn: typeFn) {
    window[fn].clear();
};

export const cache: IStorage = {
    setItem: (key, value, expire = -1) => setItem('sessionStorage', key, value, expire),
    getItem: (key, defValue = null) => getItem('sessionStorage', key, defValue),
    removeItem: key => removeItem('sessionStorage', key),
    updateItem: (key, value, expire?) => updateItem('sessionStorage', key, value, expire),
    clear: () => clear('sessionStorage'),
};

export const local: IStorage = {
    setItem: (key, value, expire = -1) => setItem('localStorage', key, value, expire),
    getItem: (key, defValue = null) => getItem('localStorage', key, defValue),
    removeItem: key => removeItem('localStorage', key),
    updateItem: (key, value, expire?) => updateItem('localStorage', key, value, expire),
    clear: () => clear('localStorage'),
};

export default {
    cache,
    local,
}
