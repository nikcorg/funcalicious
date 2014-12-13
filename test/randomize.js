var test = require("tape");
var rand = require("../randomize");

test("randomize", function (t) {
    t.test("exports function", function (t) {
        t.plan(1);
        t.equal(typeof rand, "function");
    });

    t.test("exports redundant api", function (t) {
        t.plan(1);
        t.ok(rand.randomize === rand);
    });

    t.test("simple random", function (t) {
        t.plan(2);
        var r = rand(100);
        t.notOk(isNaN(r));
        t.ok(r >= 0 && r < 100);
    });

    t.test("stepped random", function (t) {
        t.plan(3);
        var r = rand(100, 20);
        t.notOk(isNaN(r));
        t.ok(r % 20 === 0);
        t.ok(r >= 0 && r < 100);
    });
});
