"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var tee = function tee() {
  for (var _len = arguments.length, pipeline = Array(_len), _key = 0; _key < _len; _key++) {
    pipeline[_key] = arguments[_key];
  }

  return function (o) {
    return (pipeline.forEach(function (fn) {
      return fn(o);
    }), o);
  };
};
exports.tee = tee;

