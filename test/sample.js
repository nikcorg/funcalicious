var test = require("tape");
var sample = require("../sample");

test("sample", function (t) {
    t.test("exports", function (t) {
        t.plan(1);
        t.equal(typeof sample, "function", "exports function");
    });

    t.test("exports redundant api", function (t) {
        t.plan(1);
        t.ok(sample.sample === sample);
    });

    t.test("callback invoked", function (t) {
        t.plan(1);
        sample([1, 2, 3], t.pass);
    });

    t.test("single item", function (t) {
        t.plan(1);
        sample([1], function (n) {
            t.equal(n, 1, "single item selected");
        });
    });

    t.test("callback not invoked", function (t) {
        t.plan(1);
        sample([], t.fail.bind(t, "should not be invoked"));
        t.pass("callback was never invoked");
    });

    t.test("return without callback", function (t) {
        t.plan(2);
        t.equal(sample([1]), 1);
        t.equal(typeof sample([1, 2, 3, 4]), "number");
    });
});
