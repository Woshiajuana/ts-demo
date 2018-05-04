
export default {

    /**
     * 查询数组序列
     * @param  arr      [Array]                         需要查询的数组
     * @param  filter   [Function, String, Number]      过滤条件
     * */
    findFirstIndexForArr (arr = [], filter = () => {}) {
        if (!this.isArray(arr)) throw Error('arr must is array');
        let index = -1;
        arr.forEach((item, i) => {
            if(typeof filter === 'function' && filter(item)) return index = i;
            if(typeof filter !== 'function' && item === filter) return index = i;
        });
        return index;
    },

    /**
     * 查询数组序列
     * @param  arr      [Array]                         需要查询的数组
     * @param  filter   [Function, String, Number]      过滤条件
     * */
    findLastIndexForArr (arr = [], filter = () => {}) {
        if (!this.isArray(arr)) throw Error('arr must is array');
        arr = arr.reverse();
        return this.findFirstIndexForArr(arr, filter);
    },

    /**
     * 判断是否是数组的方法
     * @param  obj      [Array]         需要查询的对象
     * */
    isArray(obj = '') {
        return Object.prototype.toString.call(obj) === '[object Array]';
    }

}