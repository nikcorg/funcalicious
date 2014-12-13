var test = require("tape");
var compose = require("../compose");

test("compose", function (t) {
    t.test("exports function", function (t) {
        t.plan(1);
        t.equal(typeof compose, "function");
    });

    t.test("exports redundant api", function (t) {
        t.plan(1);
        t.ok(compose.compose === compose);
    });

    t.test("composition", function (t) {
        t.plan(1);

        function cB(s) {
            return s + "b";
        }
        function cC(s) {
            return s + "c";
        }
        var co = compose(cB, cC);

        t.equal(co("a"), "abc");
    });
});
