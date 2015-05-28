"use strict";

module.exports = equals.equals = equals;

function equals(what, strict) {
    if (strict) {
        return function (that) {
            return that === what;
        };
    }

    return function (that) {
        return that == what;
    };
}
