
import log              from './../uitl/log.util'
import {
    parseStringify,
    cloneDeep,
    cloneShallow,
    extend,
}                       from './../lib/clone.lib'

let x = [1,2,3];
let y = [2,3,4];

log(`测试 parseStringify ==========================`);
log(`拷贝x：`, parseStringify(x));
log(`比较x与拷贝x的值是否一致：`, parseStringify(x) === x);

log(`测试 extend ==========================`);
