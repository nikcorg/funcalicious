var test = require("tape");
var and = require("../and");

test("and", function (t) {
    t.test("exports function", function (t) {
        t.plan(1);
        t.equal(typeof and, "function");
    });

    t.test("exports redundant api", function (t) {
        t.plan(1);
        t.ok(and.and === and);
    });

    t.test("returns function", function (t) {
        t.plan(1);
        t.equal(typeof and(), "function");
    });

    t.test("input is passed", function (t) {
        t.plan(2);

        var inp = true;

        and(function (i) {
            t.equal(i, inp, "input matches");
            return i;
        }, function (i) {
            t.equal(i, inp, "input matches");
            return i;
        })(inp);
    });

    t.test("lazy", function (t) {
        t.plan(1);

        var inp = false;

        and(function (i) {
            t.pass("left should be invoked");
            return i;
        }, function (i) {
            t.fail("right not be invoked");
            return i;
        })(inp);
    });

    t.test("returns", function (t) {
        function identity(_) { return _; }

        t.test("truthy", function (t) {
            t.plan(1);
            var inp = "truthy";
            t.equal(inp, and(identity, identity)(inp));
        });
        t.test("falsy", function (t) {
            t.plan(1);
            var inp = 0;
            t.equal(inp, and(identity, identity)(inp));
        });
    });
});
