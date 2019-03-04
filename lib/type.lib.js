

/**
 * @method
 * @param   {*}     value       -需检测的值
 * @return  {String}
 * @desc    检测一个值的类型，并返回这个类型结果
 * */
export const typeOfPlus = (value) => {
    return Object.prototype.toString.call(value).toLowerCase().match(/\s\w+/)[0].trim();
};

/**
 * @method
 * @param   {*}         value       -需检测的值
 * @param   {String}    [type=0]    -检测的类型
 * @return  {Boolean}
 * @desc    比较值的类型，返回一个boolean结果
 * */
export const check = (value, type = '') => {
    return typeOfPlus(value) === type.toLowerCase();
};

/**
 * @method
 * @param   {*}     value       -需要检测的值
 * @return  {Boolean}
 * @desc    是否是String类型
 * */
export const isString = (value) => check(value, 'string');

/**
 * @method
 * @param   {*}     value       -需要检测的值
 * @return  {Boolean}
 * @desc    是否是Boolean类型
 * */
export const isBoolean = (value) => check(value, 'boolean');

/**
 * @method
 * @param   {*}     value       -需要检测的值
 * @return  {Boolean}
 * @desc    是否是Array类型
 * */
export const isArray = (value) => check(value, 'array');

/**
 * @method
 * @param   {*}     value       -需要检测的值
 * @return  {Boolean}
 * @desc    是否是Number类型
 * */
export const isNumber = (value) => check(value, 'number');

/**
 * @method
 * @param   {*}     value       -需要检测的值
 * @return  {Boolean}
 * @desc    是否是Function类型
 * */
export const isFunction = (value) => check(value, 'function');

/**
 * @method
 * @param   {*}     value       -需要检测的值
 * @return  {Boolean}
 * @desc    是否是Object类型
 * */
export const isObject = (value) => check(value, 'object');

/**
 * @method
 * @param   {*}     value       -需要检测的值
 * @return  {Boolean}
 * @desc    是否是Error类型
 * */
export const isError = (value) => check(value, 'error');

/**
 * @method
 * @param   {*}     value       -需要检测的值
 * @return  {Boolean}
 * @desc    是否是一个空对象
 * */
export const isEmptyObject = (value) => {
    if (!isObject(value))
        return false;
    for (let key in value) {
        return false;
    }
    return true;
};

export default {
    typeOfPlus,
    check,
    isString,
    isBoolean,
    isArray,
    isNumber,
    isFunction,
    isObject,
    isError,
    isEmptyObject,
}


