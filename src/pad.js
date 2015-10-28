export const pad = (input, width, padStr = " ", right = false) => {
    const output = String(input);

    if (width <= output.length) {
        return output;
    }

    const padding = padStr.repeat(width - output.length);

    return right ? output + padding : padding + output;
};
