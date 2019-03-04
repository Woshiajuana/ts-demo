

/**
 * @method
 * @param   {Object | Array}     source       -需拷贝的值
 * @return  {Object | Array}
 * @desc    拷贝一个数组或对象(浅拷贝)
 * @todo    数组或者对象的属性里不能有函数
 * */
export const parseStringify = (source) => {
    return JSON.parse(JSON.stringify(source));
};


/**
 * @method
 * @param   {Object | Array}     source       -需拷贝的值
 * @return  {Object | Array}
 * @desc    拷贝一个数组或对象(浅拷贝)
 * */
export const copyShallow = (source) => {
    if (typeof source !== 'object')
        throw 'source must be Object or Array';
    let result = source instanceof Array
        ? []
        : {};
    for (let key in result) {
        if (result.hasOwnProperty(key))
            result[key] = source[key];
    }
    return result;
};

/**
 * @method
 * @param   {Object | Array}     source       -需拷贝的值
 * @return  {Object | Array}
 * @desc    拷贝一个数组或对象(深拷贝)
 * */
export const copyDeep = (source) => {
    if (typeof source !== 'object')
        throw 'source must be Object or Array';
    let result = source instanceof Array
        ? []
        : {};
    for (let key in result) {
        if (result.hasOwnProperty(key))
            result[key] = typeof source[key] === 'object'
                ? copyDeep(source[key])
                : source[key];
    }
    return result;
};

export default {
    parseStringify,
    shallow: copyShallow,
    deep: copyDeep,
}

