
export default {

    findFirstIndexForArr (arr = [], filter = () => {}) {
        if (!this.isArray(arr)) throw Error('arr must is array');
        let index = -1;
        arr.forEach((item, i) => {
            if(typeof filter === 'function' && filter(item)) return index = i;
            if(typeof filter !== 'function' && item === filter) return index = i;
        });
        return index;
    },

    findLastIndexForArr (arr = [], filter = () => {}) {
        if (!this.isArray(arr)) throw Error('arr must is array');
        arr = arr.reverse();
        return this.findFirstIndexForArr(arr, filter);
    },

    deleteItemByIndex (arr = [], index = -1) {
        if (!this.isArray(arr)) throw Error('arr must is array');
        let result = [...arr];
        result.splice(index, 1);
        return result;
    },

    deleteItemByItem (arr = [], item = '') {
        if (!this.isArray(arr)) throw Error('arr must is array');
        let index = this.findFirstIndexForArr(arr, item);
        return this.deleteItemByIndex(arr, index);
    },

    isArray(obj = '') {
        return Object.prototype.toString.call(obj) === '[object Array]';
    },

}
