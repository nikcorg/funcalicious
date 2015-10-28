import debug from "debug";

const log = debug("funcalicious:randomize");

export const randomize = (max, step = 1) => {
    const randmax = max / step - 1;

    log("randmax=%d (%d, %d)", randmax, step, max);

    return Math.round(randmax * Math.random()) * step;
}

