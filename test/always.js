var test = require("tape");
var always = require("../always");

test("always", function (t) {
    t.test("exports function", function (t) {
        t.plan(1);
        t.equal(typeof always, "function");
    });

    t.test("exports redundant api", function (t) {
        t.plan(1);
        t.ok(always.always == always);
    });

    t.test("returns function", function (t) {
        t.plan(1);
        t.equal(typeof always(null), "function");
    });

    t.test("always returns input", function (t) {
        t.plan(3);

        var rand = Math.random() * 9999;
        var rval = always(rand);

        t.equal(rval("foo"), rand);
        t.equal(rval(-42), rand);
        t.equal(rval(undefined), rand);
    });
});
