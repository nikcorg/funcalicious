"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var contains = function contains(what) {
    if (!(Array.isArray(what) || typeof what === "string")) {
        throw new Error("Expected a string or an array");
    }

    return function (i) {
        return -1 < what.indexOf(i);
    };
};
exports.contains = contains;

