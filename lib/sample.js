"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _randomize = require("./randomize");

var sample = function sample(arr, fn) {
    var ret = undefined;

    if (0 === arr.length) {
        return undefined;
    }

    if (2 > arr.length) {
        ret = arr[0];
    } else {
        ret = arr[(0, _randomize.randomize)(arr.length)];
    }

    if ("function" === typeof fn) {
        return fn(ret);
    }

    return ret;
};
exports.sample = sample;

