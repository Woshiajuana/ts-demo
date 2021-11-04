const setItem = function (fn, key, value, expire = -1) {
    window[fn].setItem(key, JSON.stringify({ key, value, expire }));
    return value;
};
const getItem = function (fn, key, defValue = null) {
    const data = window[fn].getItem(key);
    if (data === null) {
        return defValue;
    }
    const { expire, value } = JSON.parse(data);
    if (expire === -1 || Date.now() < expire) {
        return value;
    }
    removeItem(fn, key);
    return defValue;
};
const removeItem = function (fn, key) {
    window[fn].removeItem(key);
};
const updateItem = function (fn, key, value, expire) {
    const data = window[fn].getItem(key);
    if (data) {
        const { value: prevValue, expire: prevExpire } = JSON.parse(data);
        if (prevExpire === -1 || Date.now() < prevExpire) {
            if (Array.isArray(value)) {
                value = [...prevValue, ...value];
            }
            else {
                value = Object.assign({}, prevValue, value);
            }
            if (!expire) {
                expire = prevExpire;
            }
        }
    }
    return setItem(fn, key, value, expire);
};
const clear = function (fn) {
    window[fn].clear();
};
export const cache = {
    setItem: (key, value, expire = -1) => setItem('sessionStorage', key, value, expire),
    getItem: (key, defValue = null) => getItem('sessionStorage', key, defValue),
    removeItem: key => removeItem('sessionStorage', key),
    updateItem: (key, value, expire) => updateItem('sessionStorage', key, value, expire),
    clear: () => clear('sessionStorage'),
};
export const local = {
    setItem: (key, value, expire = -1) => setItem('localStorage', key, value, expire),
    getItem: (key, defValue = null) => getItem('localStorage', key, defValue),
    removeItem: key => removeItem('localStorage', key),
    updateItem: (key, value, expire) => updateItem('localStorage', key, value, expire),
    clear: () => clear('localStorage'),
};
export function createLocalStorage(key) {
    return {
        setItem: local.setItem.bind(null, key)
    };
}
export default {
    cache,
    local
};
