"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var equals = function equals(what, strict) {
    if (strict) {
        return function (that) {
            return that === what;
        };
    }

    return function (that) {
        return that == what;
    };
};
exports.equals = equals;

