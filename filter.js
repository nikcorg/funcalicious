var not = require("./not");
var and = require("./and");
var or = require("./or");

module.exports = filter.filter = filter;

function filter(terms) {
    var tests = Object.keys(terms).
        map(function (op) {
            var test;
            var term = terms[op];

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
            }

            return test;
        });

    if (tests.length > 1) {
        test = tests.reduce(function (acc, test) {
            return and(acc, test);
        });
    } else {
        test = tests.pop();
    }

    return function (i) {
        return test(i);
    };
}

function equals(what) {
    return function (i) {
        return i == what;
    };
}

function lessthan(what) {
    return function (i) {
        return i < what;
    };
}

function contains(what) {
    if (! Array.isArray(what)) {
        throw new Error("$in only works for arrays");
    }

    return function (i) {
        return what.indexOf(i) > -1;
    };
}
