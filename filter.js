var debug = require("debug")("funcalicious:filter");

var contains = require("./contains");
var lessthan = require("./lessthan");
var flatmap = require("./flatmap");
var equals = require("./equals");
var always = require("./always");
var equal = require("./equals");
var not = require("./not");
var and = require("./and");
var or = require("./or");

module.exports = filter.filter = filter;

function filter(terms) {
    if (! Array.isArray(terms)) {
        throw new Error("filter expects an array of terms");
    }

    if (terms.length < 1) {
        return always(true);
    }

    var test;
    var tests = flatmap(terms, function (_term) {
        return Object.keys(_term).map(function (op) {
            var test;
            var term = _term[op];

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
                debug("unknown operator: %s", op);
                break;
            }

            return test;
        });
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
