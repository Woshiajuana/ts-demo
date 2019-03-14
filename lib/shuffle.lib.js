
/**
 * @method      -排序
 * @param       {Array}     arr     -数据
 * @return      {Array}
 * */
export const shufflePlus = (arr) => {
    let j, x, i;
    for (i = arr.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = arr[i - 1];
        arr[i - 1] = arr[j];
        arr[j] = x;
    }
    return arr;
};

/**
 * @method      -排序
 * @param       {Array}     arr     -数据
 * @return      {Array}
 * */
export const shufflePlusES6 = (arr) => {
    for (let i = arr.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
    }
    return arr;
};

/**
 * @method      -排序
 * @param       {Array}     arr     -数据
 * @return      {Array}
 * */
export const shuffleSort = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
};

export default {
    shufflePlusES6,
    shufflePlus,
    shuffleSort,
}
