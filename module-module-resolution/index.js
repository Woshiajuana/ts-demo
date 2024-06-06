"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add_js_1 = require("./add.js");
const sub_js_1 = require("./sub.js");
const utils_1 = require("@daysnap/utils");
const result = (0, add_js_1.add)((0, sub_js_1.sub)(2, 1), 1);
console.log('result => ', result);
const xx = (0, utils_1.omit)({ x: '1', y: '2' }, ['x']);
