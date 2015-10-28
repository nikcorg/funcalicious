"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _debug = require("debug");

var _debug2 = _interopRequireDefault(_debug);

var log = (0, _debug2["default"])("funcalicious:randomize");

var randomize = function randomize(max) {
    var step = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

    var randmax = max / step - 1;

    log("randmax=%d (%d, %d)", randmax, step, max);

    return Math.round(randmax * Math.random()) * step;
};
exports.randomize = randomize;

