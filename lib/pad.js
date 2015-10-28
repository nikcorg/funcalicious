"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var pad = function pad(input, width) {
    var padStr = arguments.length <= 2 || arguments[2] === undefined ? " " : arguments[2];
    var right = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

    var output = String(input);

    if (width <= output.length) {
        return output;
    }

    var padding = padStr.repeat(width - output.length);

    return right ? output + padding : padding + output;
};
exports.pad = pad;

