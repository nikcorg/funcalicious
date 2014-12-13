var test = require("tape");
var odd = require("../odd");

test("odd", function (t) {
    t.test("exports function", function (t) {
        t.plan(1);
        t.equal(typeof odd, "function");
    });

    t.test("exports redundant api", function (t) {
        t.plan(1);
        t.ok(odd.odd = odd);
    });

    t.test("matches odd number", function (t) {
        t.plan(1);
        t.ok(odd(1));
    });

    t.test("fails even numbers", function (t) {
        t.plan(1);
        t.notOk(odd(2));
    });
});
