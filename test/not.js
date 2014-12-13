var test = require("tape");
var not = require("../not");

test("not", function (t) {
    t.test("exports function", function (t) {
        t.plan(1);
        t.equal(typeof not, "function", "exports function");
    });

    t.test("exports redundant api", function (t) {
        t.plan(1);
        t.ok(not.not === not);
    });

    t.test("returns function", function (t) {
        t.plan(1);
        t.equal(typeof not(), "function");
    });

    t.test(function (t) {
        t.plan(2);

        function rtrue() {
            return true;
        }

        t.notOk(not(rtrue)());
        t.ok(not(not(rtrue))());
    });
});
