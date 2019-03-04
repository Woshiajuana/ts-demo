

export default {

    // 提取
    input () {
        let result = {};
        if (arguments.length === 0)
            return result;
        let params = Array.prototype.slice.apply(arguments);
        params.forEach((param) => {
            this.forEach(param, (item, key) => {
                result[key] = item.value;
            })
        });
        return result;
    },

    // 赋值
    assignment () {
        if (arguments.length < 2)
            return null;
        let params = Array.prototype.slice.apply(arguments);
        let source = params[0];
        let expects = params.slice(1);
        expects.forEach((expect) => {
            this.forEach(expect, (item, key) => {
                let value = source[key];
                if (typeof value === 'undefined' || value === null)
                    return null;
                item.value = value;
            })
        });
    },

    forEach (obj, callback) {
        for(let key in obj){
            callback && callback(obj[key], key);
        }
    },

}
