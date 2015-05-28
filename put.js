"use strict";

module.exports = put.put = put;

function put(prop, val) {
    return function (o) {
        if (typeof val === "function") {
            o[prop] = val(o);
        } else {
            o[prop] = val;
        }

        return o;
    };
}

