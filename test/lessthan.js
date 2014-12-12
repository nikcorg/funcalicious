var test = require("tape");
var lessthan = require("../lessthan");

test("lessthan", function (t) {
    t.test("exports function", function (t) {
        t.plan(1);
        t.equal(typeof lessthan, "function");
    });

    t.test("exports redundant api", function (t) {
        t.plan(2);
        t.equal(typeof lessthan.lessthan, "function");
        t.equal(typeof lessthan.lessThan, "function");
    });

    t.test("returns function", function (t) {
        t.plan(1);
        t.equal(typeof lessthan(0), "function");
    });

    t.test("returns boolean", function (t) {
        t.plan(1);
        t.equal(typeof lessthan(2)(1), "boolean");
    });

    t.test("returns expected", function (t) {
        t.plan(3);
        t.ok(lessthan(2)(1));
        t.notOk(lessthan(2)(2));
        t.notOk(lessthan(2)(3));
    });
});
