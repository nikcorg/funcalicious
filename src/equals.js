export const equals = (what, strict) => {
    if (strict) {
        return that => that === what;
    }

    return that => that == what;
}
