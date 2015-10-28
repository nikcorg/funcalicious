"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var not = function not(fn) {
  return function () {
    return !fn.apply(undefined, arguments);
  };
};
exports.not = not;

