var test = require("tape");
var equals = require("equals");

test("equals", function (t) {
    t.test("exports function", function (t) {
        t.plan(1);
        t.equal(typeof equals, "function");
    });

    t.test("exports redundant api", function (t) {
        t.plan(2);
        t.equal(typeof equals.equals, "function");
        t.ok(equals === equals.equals);
    });

    t.test("returns function", function (t) {
        t.plan(1);
        t.equal(typeof equals(null), "function");
    });

    t.test("defaults to loose equal", function (t) {
        t.plan(4);
        var nullish = equals(null);
        t.ok(nullish(null));
        t.ok(nullish(undefined));

        var falsy = equals(false);
        t.ok(falsy(""));
        t.ok(falsy(0));
    });

    t.test("optionally strict equal", function (t) {
        t.plan(5);
        var strictnull = equals(null, true);
        t.ok(strictnull(null));
        t.notOk(strictnull(undefined));

        var strictfalse = equals(false, true);
        t.ok(strictfalse(false));
        t.notOk(strictfalse(""));
        t.notOk(strictfalse(0));
    });
});
