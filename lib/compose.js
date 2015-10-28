"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var compose = function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return function (inp) {
    return funcs.reduce(function (ret, func) {
      return func(ret);
    }, inp);
  };
};
exports.compose = compose;

