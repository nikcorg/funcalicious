"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _debug = require("debug");

var _debug2 = _interopRequireDefault(_debug);

var _contains = require("./contains");

var _lessthan = require("./lessthan");

var _flatmap = require("./flatmap");

var _equals = require("./equals");

var _always = require("./always");

var _not = require("./not");

var _and = require("./and");

var _or = require("./or");

var log = (0, _debug2["default"])("funcalicious:filter");

var filter = function filter(terms) {
    if (!Array.isArray(terms)) {
        throw new Error("filter expects an array of terms");
    }

    if (0 === terms.length) {
        return (0, _always.always)(true);
    }

    var tests = (0, _flatmap.flatmap)(terms, function (_term) {
        return Object.entries(_term).map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2);

            var op = _ref2[0];
            var term = _ref2[1];

            var test = undefined;

            switch (op) {
                case "$eq":
                    test = (0, _equals.equals)(term);
                    break;
                case "$neq":
                    test = (0, _not.not)((0, _equals.equals)(term));
                    break;
                case "$lt":
                    test = (0, _lessthan.lessthan)(term);
                    break;
                case "$lte":
                    test = (0, _or.or)((0, _equals.equals)(term), (0, _lessthan.lessthan)(term));
                    break;
                case "$gt":
                    test = (0, _not.not)((0, _or.or)((0, _equals.equals)(term), (0, _lessthan.lessthan)(term)));
                    break;
                case "$gte":
                    test = (0, _not.not)((0, _lessthan.lessthan)(term));
                    break;
                case "$in":
                    test = (0, _contains.contains)(term);
                    break;
                default:
                    {
                        var error = new Error("Unknown operator " + op);
                        log(error);
                        throw error;
                    }
            }

            return test;
        });
    });

    var test = undefined;

    if (1 < tests.length) {
        test = tests.reduce(function (acc, test) {
            return (0, _and.and)(acc, test);
        });
    } else {
        test = tests.pop();
    }

    return function (i) {
        return test(i);
    };
};
exports.filter = filter;

