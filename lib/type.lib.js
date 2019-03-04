

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
export const checkType = (value, type = '') => {
    return typeOfPlus(value) === type.toLowerCase();
};

