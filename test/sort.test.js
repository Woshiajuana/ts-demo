

function sort (arr) {
    for (var i = 1; i < arr.length; i++) {
        var e = arr[i];
        console.log('e', e);
        for (var j = i - 1; j >= 0; j--) {
            let t = arr[j];
            console.log('j', j);
            console.log('t', t);
            if (t > e) {
                arr[j + 1] = t;
            } else {
                break;
            }
        }
        console.log('e', e);
        console.log('j', j);
        arr[j + 1] = e;
    }
    return arr;
}


function qSort (arr) {
    if (arr.length <= 1)
        return arr;
    let left = [];
    let right = [];
    let len = arr.length;
    let mid = arr.splice(Math.floor(len / 2), 1)[0];
    for (let i = 0; i < len; i++) {
        if (arr[i] > mid) {
            right.push(mid);
        } else {
            left.push(mid);
        }
    }
    return qSort(left).concat([mid], qSort(right));
}

function bSort (arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            if (arr[i] > arr[j]) {
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr;
}


function formatMoney (s) {
    s = s + '';
    if (s === '0')
        return s;
    let l = s.split('.')[0].split('').reverse();
    let t = '';
    l.forEach((ll, key) => {
        t += l[key] + ((key + 1) % 3 === 0 && (key + 1) !== l.length ? ',' : '');
    });
    return t.split('').reverse().join('');
}

function formatCalculator (number) {
    number = number + '';
    if (number === '0') return number;
    let arr = number.split('').reverse();
    let result = '';
    let index = 0;
    let symbol = ['+', '-', '*', '/', '='];
    arr.forEach((item, i) => {
        index++;
        if (symbol.indexOf(item) > -1) {
            index = 0;
            result += item;
        } else {
            result += item + ((index % 3 === 0 && index !== 0 && arr[i+1] && symbol.indexOf(arr[i+1]) === -1) ? ',' : '');
        }
    });
    return result.split('').reverse().join('');
}


console.log(formatCalculator('123456+789=10002'));
console.log(formatCalculator('2312312+1=321312'));
