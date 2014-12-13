var test = require("tape");
var get = require("../get");

test("get", function (t) {
    t.test("exports function", function (t) {
        t.plan(1);
        t.equal(typeof get, "function", "exports function");
    });

    t.test("exports redundant api", function (t) {
        t.plan(1);
        t.ok(get.get === get);
        t.end();
    });

    t.test("returns function", function (t) {
        t.plan(1);
        t.equal(typeof get("foo"), "function");
    });

    t.test(function (t) {
        t.plan(1);
        var getter = get("foo");

        t.equal(getter({"foo": "bar"}), "bar", "returns prop val");
    });
});
