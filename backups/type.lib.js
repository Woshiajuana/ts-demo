
export const typeofPlus = (value) => {
    return Object.prototype.toString.call(value).toLowerCase().match(/\s\w+/)[0].trim();
};

export const checkType = (check, type) => {
    return typeofPlus(check) === type.toLowerCase();
};

export default {
    isString: (check) => checkType(check, 'string'),
    isBoolean: (check) => checkType(check, 'boolean'),
    isArray: (check) => checkType(check, 'array'),
    isNumber: (check) => checkType(check, 'number'),
    isFunction: (check) => checkType(check, 'function'),
    isObject: (check) => checkType(check, 'object'),
    isError: (check) => checkType(check, 'error'),
    isEmpty: (value) => {
        if (checkType(value,'string') || checkType(value,'array')) {
            return value.length === 0;
        }
        if (checkType(value,'object')) {
            for (let key in value) {
                if (hasOwnProperty.call(value, key)) {
                    return false;
                }
            }
        }
        return true;
    }
}
