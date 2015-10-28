import debug from "debug";
import { sign } from "./sign";

const log = debug("funcalicious:range");

export const range = (from, to, step) => {
    let steps;

    if (undefined == to) {
        to = from;
        from = 0;
    }

    from = Math.round(from);
    to = Math.round(to);

    if (undefined == step) {
        step = sign(to - from);
    }

    // Make sure range direction matches step sign
    if (sign(to - from) !== sign(step)) {
        throw new Error("Expected step to match range direction");
    }

    steps = Math.abs(to - from) / Math.abs(step);

    // Odd number of steps is not supported
    if (Math.round(steps) !== steps) {
        throw new Error("Invalid step increase for range");
    }

    log("from %d to %d (%d) step %d = %d steps", from, to, Math.abs(to - from), step, steps);

    return Array(...Array(steps)).map((_, i) => from + i * step);
};


