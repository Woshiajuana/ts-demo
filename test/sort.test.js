

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


console.log(sort([3,2,1]));
