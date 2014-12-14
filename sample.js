var randomize = require("./randomize");

module.exports = sample.sample = sample;

function sample(arr, fn) {
    var ret;

    if (arr.length < 1) {
        return undefined;
    }

    if (arr.length < 2) {
        ret = arr[0];
    } else {
        ret = arr[randomize(arr.length)];
    }

    if (typeof fn === "function") {
        return fn(ret);
    }

    return ret;
}

