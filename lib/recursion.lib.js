
/**
 * @method      -阶乘
 * @param       {Number}    n       -n阶
 * @return      {Number}
 * @desc        -算出n阶乘
 * */
export const factorial = (n) => {
    if (n === 1) return n;
    return n * factorial(n - 1);
};

/**
 * @method      -斐波那契数列
 * @param       {Number}    n       -多少位
 * @return      {Number}
 * @desc        -n位的斐波那契数
 * */
export const fibonacci = (n) => {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

/**
 * @method      -斐波那契数列
 * @param       {Number}    n       -多少位
 * @return      {Array}
 * @desc        -n位的斐波那契数
 * */
export const fibonacciArr = (n) => {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(fibonacci(i))
    }
    return arr;
};

/**
 * @method      -斐波那契数列
 * @param       {Number}    n       -多少位
 * @return      {Number}
 * @desc        -n位的斐波那契数的和
 * */
export const fibonacciAnd = (n) => {
    if (n === 1) return 1;
    return fibonacci(n) + fibonacciAnd(n - 1);
};
