

/**
 * @method
 * @param   {Object | Array}     source       -需拷贝的值
 * @return  {Object | Array}
 * @desc    拷贝一个数组或对象(浅拷贝)
 * @todo    数组或者对象的属性里不能有函数，
 * @todo    JSON.stringify(..) 在对象中遇到 undefined 、 function 和 symbol 时会自动将其忽略， 在 数组中则会返回 null （以保证单元位置不变）。
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
export const cloneShallow = (source) => {
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
export const cloneDeep = (source) => {
    if (typeof source !== 'object')
        throw 'source must be Object or Array';
    let result = source instanceof Array
        ? []
        : {};
    for (let key in result) {
        if (result.hasOwnProperty(key))
            result[key] = typeof source[key] === 'object'
                ? cloneDeep(source[key])
                : source[key];
    }
    return result;
};

/**
 * @method
 * @desc 模拟jQuery的extend 方法
 */
//[deep], target, object1 [, objectN ]
export const extend = () => {

};


export default {
    parseStringify,
    shallow: cloneShallow,
    deep: cloneDeep,
    extend,
}

