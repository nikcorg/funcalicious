"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var or = function or(left, right) {
  return function (o) {
    return left(o) || right(o);
  };
};
exports.or = or;

