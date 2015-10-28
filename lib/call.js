"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var callFunction = function callFunction(fn, fixedArgs) {
    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        // Prepend fixed args when present
        if (fixedArgs && fixedArgs.length > 0) {
            args = [].concat(_toConsumableArray(fixedArgs), _toConsumableArray(args));
        }

        switch (args.length) {
            case 4:
                return fn(args[0], args[1], args[2], args[3]);
            case 3:
                return fn(args[0], args[1], args[2]);
            case 2:
                return fn(args[0], args[1]);
            case 1:
                return fn(args[0]);
            case 0:
                return fn();
        }

        return fn.apply(undefined, _toConsumableArray(args));
    };
};

var callMethod = function callMethod(method, args) {
    if (args.length > 0) {
        return function (o) {
            switch (args.length) {
                case 4:
                    return o[method](args[0], args[1], args[2], args[3]);
                case 3:
                    return o[method](args[0], args[1], args[2]);
                case 2:
                    return o[method](args[0], args[1]);
                case 1:
                    return o[method](args[0]);
            }

            return o[method].apply(o, _toConsumableArray(args));
        };
    }

    return function (o) {
        return o[method]();
    };
};

var call = function call(fn) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
    }

    if (typeof fn === "string") {
        return callMethod(fn, args);
    }

    return callFunction(fn, args);
};
exports.call = call;

