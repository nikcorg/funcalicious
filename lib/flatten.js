"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var flatten = function flatten(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Expected array");
    }
    return arr.reduce(function (flat, v) {
        return [].concat(_toConsumableArray(flat), _toConsumableArray(v));
    }, []);
};
exports.flatten = flatten;

