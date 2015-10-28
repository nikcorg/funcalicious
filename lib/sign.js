"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sign = function sign(n) {
  return isNaN(n) || n === 0 ? 0 : Math.abs(n) / n;
};
exports.sign = sign;

