"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _debug = require("debug");

var _debug2 = _interopRequireDefault(_debug);

var _sign = require("./sign");

var log = (0, _debug2["default"])("funcalicious:range");

var range = function range(from, to, step) {
    var steps = undefined;

    if (undefined == to) {
        to = from;
        from = 0;
    }

    from = Math.round(from);
    to = Math.round(to);

    if (undefined == step) {
        step = (0, _sign.sign)(to - from);
    }

    // Make sure range direction matches step sign
    if ((0, _sign.sign)(to - from) !== (0, _sign.sign)(step)) {
        throw new Error("Expected step to match range direction");
    }

    steps = Math.abs(to - from) / Math.abs(step);

    // Odd number of steps is not supported
    if (Math.round(steps) !== steps) {
        throw new Error("Invalid step increase for range");
    }

    log("from %d to %d (%d) step %d = %d steps", from, to, Math.abs(to - from), step, steps);

    return Array.apply(undefined, _toConsumableArray(Array(steps))).map(function (_, i) {
        return from + i * step;
    });
};
exports.range = range;

