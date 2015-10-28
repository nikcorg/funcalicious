const callFunction = (fn, fixedArgs) => {
    return (...args) => {
        // Prepend fixed args when present
        if (fixedArgs && fixedArgs.length > 0) {
            args = [...fixedArgs, ...args];
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

        return fn(...args);
    };
}

const callMethod = (method, args) => {
    if (args.length > 0) {
        return o => {
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

            return o[method](...args);
        };
    }

    return o => {
        return o[method]();
    };
}

export const call = (fn, ...args) => {
    if (typeof fn === "string") {
        return callMethod(fn, args);
    }

    return callFunction(fn, args);
}

