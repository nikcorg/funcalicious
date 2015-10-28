"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var get = function get(prop) {
  return function (ob) {
    return ob[prop];
  };
};
exports.get = get;

