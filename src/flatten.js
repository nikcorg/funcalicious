export const flatten = arr => {
    if (!Array.isArray(arr)) {
        throw new Error("Expected array");
    }
    return arr.reduce((flat, v) => [...flat, ...v], []);
};

