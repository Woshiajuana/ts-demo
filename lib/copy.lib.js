

/**
 * @method
 * @param   {*}     value       -需检测的值
 * @return  {Object | Array}
 * @desc    拷贝一个数组或对象
 * @todo    数组或者对象的属性里不能有函数
 * */
export const parseStringify = (value) => {
    return JSON.parse(JSON.stringify(value));
};


export default {
    parseStringify,
}

