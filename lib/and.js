"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var and = function and(left, right) {
  return function (o) {
    return left(o) && right(o);
  };
};
exports.and = and;

