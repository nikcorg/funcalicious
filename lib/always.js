"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var always = function always(val) {
  return function () {
    return val;
  };
};
exports.always = always;

