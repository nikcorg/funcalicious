"use strict";

var debug = require("debug")("funcalicious:range");
var sign = require("./sign");

module.exports = range.range = range;

function range(from, to, step) {
    var steps;

    if (undefined == to) {
        to = from;
        from = 0;
    }

    from = Math.round(from);
    to = Math.round(to);

    if (undefined == step) {
        step = sign(to - from);
    }

    // Make sure range direction matches step sign
    if (sign(to - from) !== sign(step)) {
        throw new Error("Step does not match range direction");
    }

    steps = Math.abs(to - from) / Math.abs(step);

    // Odd number of steps is not supported
    if (Math.round(steps) !== steps) {
        throw new Error("Invalid step increase for range");
    }

    debug("from %d to %d (%d) step %d = %d steps", from, to, Math.abs(to - from), step, steps);

    return Array.apply(Array, Array(steps)).
        map(function (_, i) {
            return from + i * step;
        });
}



