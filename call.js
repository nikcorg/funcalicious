var toarray = require("./toarray");

module.exports = call.call = call;

function call(fn) {
    var args = toarray(arguments).slice(1);

    if (typeof fn === "string") {
        return callMethod(fn, args);
    }

    return callFunction(fn, args);
}

function callFunction(fn, _args) {
    return function () {
        var args = toarray(arguments).slice(0);

        // Prepend fixed args when present
        if (_args && _args.length > 0) {
            args = _args.concat(args);
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
        }

        return fn.apply(undefined, args);
    };
}

function callMethod(method, args) {
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

            return o[method].apply(o, args);
        };
    }

    return function (o) {
        return o[method]();
    };
}

