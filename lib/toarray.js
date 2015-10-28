"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var toarray = function toarray(arraylike) {
  var skip = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
  return Array.from(arraylike).slice(skip);
};
exports.toarray = toarray;

