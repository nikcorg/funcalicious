var test = require("tape");
var range = require("../range");

test("range", function (t) {
    t.test("exports", function (t) {
        t.plan(1);
        t.equal(typeof range, "function", "exports function");
    });

    t.test("exports redundant api", function (t) {
        t.plan(1);
        t.ok(range.range === range);
    });

    t.test("from zero", function (t) {
        t.plan(3);

        var r = range(10);

        t.equal(10, r.length);
        t.equal(0, Math.min.apply(Math, r));
        t.equal(9, Math.max.apply(Math, r));
    });

    t.test("from non-zero", function (t) {
        t.plan(3);

        var r = range(10, 20);

        t.equal(10, r.length);
        t.equal(10, Math.min.apply(Math, r));
        t.equal(19, Math.max.apply(Math, r));
    });

    t.test("non-positive", function (t) {
        t.plan(3);

        var r = range(10, 0);

        t.equal(10, r.length, "length check");
        t.equal(r.shift(), 10, "head check");
        t.equal(r.pop(), 1, "tail check");
    });
});
