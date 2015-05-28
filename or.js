"use strict";

module.exports = or.or = or;

function or(left, right) {
    return function (o) {
        return left(o) || right(o);
    };
}
