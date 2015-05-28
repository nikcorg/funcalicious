"use strict";

module.exports = contains.contains = contains;

function contains(what) {
    if (! (Array.isArray(what) || typeof what === "string")) {
        throw new Error("only arrays and string are supported");
    }

    return function (i) {
        return what.indexOf(i) > -1;
    };
}

