
import log              from './../uitl/log.util'
import {
    parseStringify,
    cloneDeep,
    cloneShallow,
    extend,
}                       from './../lib/clone.lib'

let x = [1,2,3];
let y = [2,3,4];

// log(`测试 parseStringify ==========================`);
// log(`拷贝x：`, parseStringify(x));
// log(`比较x与拷贝x的值是否一致：`, parseStringify(x) === x);

log(`测试 extend ==========================`);
log(extend(true, [1,2,3], [4,5,6]));
log(extend(true, [1,2,3], [4,5,6], {x:1}));
log(extend(true, [1,2,3], [4,5,6], {x:1}));

var obj1 = {
    a: 1,
    b: { b1: 1, b2: 2 }
};

var obj2 = {
    b: { b1: 3, b3: 4 },
    c: 3
};

var obj3 = {
    d: 4
}

log(extend(true, obj1, obj2, obj3));

var obj1 = {
    a: 1,
    b: {
        c: 2
    }
}

var obj2 = {
    b: {
        c: [5],

    }
}
log(extend(true, obj1, obj2));
