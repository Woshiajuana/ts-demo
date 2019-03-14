

/**
 * @method      -插入排序
 * @param       {Array}     arr     -需要排序的数组
 * @desc        -将第一个元素视为有序序列，遍历数组，将
 * 之后的元素依次插入到这个构建的有序序列中
 * */
export const insertionSort = (arr) => {
    for (var i = 1; i < arr.length; i++) {
        var element = arr[i];
        for (var j = i -1; j >= 0; j--) {
            let tmp = arr[j];
            let order = tmp - element;
            if (order > 0) {
                arr[j + 1] = tmp;
            } else {
                break;
            }
        }
        arr[j + 1] = element;
    }
    return arr;
};

/**
 * @method      -快速排序
 * @param       {Array}     arr     -需要排序的数组
 * @desc        -1.选择一个元素作为基准；
 * 2.小于基准的元素，都移到基准的左边；大于基准的元素，都移到基准的右边
 * 3.对基准左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止
 * */
export const quickSort = (arr) => {
    if (arr.length <= 1)
        return arr;
    let left = [];
    let right = [];
    let midIndex = Math.floor(arr.length/2);
    let mid = arr[midIndex];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < mid) {
            left.push(arr[i]);
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([mid], quickSort(right));
};

/**
 * @method      -冒泡排序
 * @param       {Array}     arr     -需要排序的数组
 * @desc        -一个一个比较替换位置
 * */
export const bubbleSort = (arr) => {
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        for (let j = i; j < length; j++) {
            let temp = arr[i];
            if (arr[i] > arr[j]) {
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
};




