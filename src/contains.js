export const contains = what => {
    if (!(Array.isArray(what) || typeof what === "string")) {
        throw new Error("Expected a string or an array");
    }

    return i => -1 < what.indexOf(i);
}

