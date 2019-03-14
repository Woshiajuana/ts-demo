
import log                  from './../uitl/log.util'
import each                 from './../lib/each.lib'
each(arr, (item, index) => {
    log(item);
    if (item === 'two') {
        arr.shift();
    }
});

arr.forEach( (item, index) => {
    log(item);
    if (item === 'two') {
        arr.shift();
    }
});


let per = ['one', 'two', 'three', 'four'];
let p = per.map((item) => {
    return item;
});
log('p', p);

let arr = ['one', 'two', 'three', 'four'];
let a = arr.map((item) => {
    return item;
});
log('a', a);

var person = ['xxxx', 'xxxxxxxx']
var name = person.map((item) => {
    return item;
})
var name1 = person.map((item) => {
    return item;
})
log('name', name);
