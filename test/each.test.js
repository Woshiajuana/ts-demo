
import {log}                from 'wow-cmd'
import each                 from './../lib/each.lib'

let arr = ['one', 'two', 'three', 'four'];
each(arr, (item, index) => {
    log(item);
    if (item === 'two') {
        arr.shift();
    }
});

// arr.forEach( (item, index) => {
//     log(item);
//     if (item === 'two') {
//         arr.shift();
//     }
// });
