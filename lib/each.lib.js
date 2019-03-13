

import {
    isArrayLike
}                           from './type.lib'

/**
 * @method
 * @param   {Array|Object}     obj          -类数组对象，需要遍历的对象
 * @param   {Function}         callback     -类数组对象，需要遍历的对象
 * @return  {Array|Object}
 * @desc    类数组，对象遍历
 * */
export default (obj, callback) => {
    if (isArrayLike(obj)) {
        for (let index = 0, length = obj.length; index < length; index++ ) {
            if (callback.call(obj[index], obj[index], index) === false)
                break;
        }
    } else {
        for (let key in obj) {
            if (callback.call(obj[key], obj[key], key) === false)
                break;
        }
    }
    return obj;
}
