import { randomize } from "./randomize";

export const sample = (arr, fn) => {
    let ret;

    if (0 === arr.length) {
        return undefined;
    }

    if (2 > arr.length) {
        ret = arr[0];
    } else {
        ret = arr[randomize(arr.length)];
    }

    if ("function" === typeof fn) {
        return fn(ret);
    }

    return ret;
};

