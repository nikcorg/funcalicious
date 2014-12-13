var test = require("tape");
var pad = require("../pad");

test("pad", function (t) {
    t.test("exports function", function (t) {
        t.plan(1);
        t.equal(typeof pad, "function", "exports function");
    });

    t.test("exports redundant api", function (t) {
        t.plan(1);
        t.ok(pad.pad === pad);
    });

    t.test("left pads strings", function (t) {
        t.plan(3);
        t.equal("2", pad(2, 1, "."));
        t.equal(".2", pad(2, 2, "."));
        t.equal("...2", pad(2, 4, "."));
    });

    t.test("right pads strings", function (t) {
        t.plan(3);
        t.equal("2", pad(2, 1, ".", true));
        t.equal("2.", pad(2, 2, ".", true));
        t.equal("2...", pad(2, 4, ".", true));
    });
});
