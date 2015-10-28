import debug from "debug";

const log = debug("funcalicious:filter");

import { contains } from "./contains";
import { lessthan } from "./lessthan";
import { flatmap } from "./flatmap";
import { equals } from "./equals";
import { always } from "./always";
import { not } from "./not";
import { and } from "./and";
import { or } from "./or";

export const filter = terms => {
    if (!Array.isArray(terms)) {
        throw new Error("filter expects an array of terms");
    }

    if (0 === terms.length) {
        return always(true);
    }

    const tests = flatmap(terms, _term => {
        return Object.entries(_term).map(([op, term]) => {
            let test;

            switch (op) {
            case "$eq":
                test = equals(term);
                break;
            case "$neq":
                test = not(equals(term));
                break;
            case "$lt":
                test = lessthan(term);
                break;
            case "$lte":
                test = or(equals(term), lessthan(term));
                break;
            case "$gt":
                test = not(or(equals(term), lessthan(term)));
                break;
            case "$gte":
                test = not(lessthan(term));
                break;
            case "$in":
                test = contains(term);
                break;
            default:
                {
                    const error = new Error(`Unknown operator ${op}`);
                    log(error);
                    throw error;
                }
            }

            return test;
        });
    });


    let test;

    if (1 < tests.length) {
        test = tests.reduce((acc, test) => and(acc, test));
    } else {
        test = tests.pop();
    }

    return i => test(i);
}
