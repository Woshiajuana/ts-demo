
/**
 * @method
 * @param   {Array}         arr             -数据源
 * @param   {Function}      predicate       -条件函数
 * @param   {*}             context         -上下文环境
 * @desc    -查找元素
 * */
export const findIndexOfArr = createIndexFinder(1);

/**
 * @method
 * @param   {Array}         arr             -数据源
 * @param   {Function}      predicate       -条件函数
 * @param   {*}             context         -上下文环境
 * @desc    -查找元素
 * */
export const findLastIndexOfArr = createIndexFinder(-1);

// 构建函数 提出公共部分
function createIndexFinder(dir) {
    return (arr, predicate, context) => {
        let len = arr.length;
        let i = dir > 0 ? 0 : len - 1;
        for (; i >= 0 && i < len; i += dir) {
            if (predicate.call(context, arr[i], i, arr))
                return i;
        }
        return -1;
    }
}


export default {
    findIndex: findIndexOfArr,
    findLastIndex: findLastIndexOfArr,
}
