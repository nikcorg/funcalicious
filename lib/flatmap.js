"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flatten = require("./flatten");

var flatmap = function flatmap(arr, fn) {
  return (0, _flatten.flatten)(arr.map(fn));
};
exports.flatmap = flatmap;

