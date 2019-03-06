
import {
    isBoolean,
    isFunction,
}                   from './type.lib'

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
 * @method [deep], target, object1 [, objectN ]
 * @desc 模拟jQuery的extend 方法
 */
// 此处为什么不用箭头函数，是因为在转es5的时候，
// 箭头函数和 arguments 一并使用会有冲突，
// arguments的值会不正确（测试下是这个情况）
export const extend = function () {
    let target = arguments[0] || {}; // 目标对象
    let length = arguments.length;
    if (length < 2)
        return target;
    let deep = false; // 是否深拷贝
    let index = 1; // 合并对象的起始位置
    // 判断是否是深拷贝
    let arg1 = arguments[0];
    if (isBoolean(arg1)) {
        deep = arg1;
        target = arguments[1];
        index++;
    }
    // 判断目标函数是否是对象类型
    if (typeof target !== 'object')
        target = {};
    // 循环遍历
    for (; index < length; index++) {

    }

};


export default {
    parseStringify,
    shallow: cloneShallow,
    deep: cloneDeep,
    extend,
}

