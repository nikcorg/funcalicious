var test = require("tape");
var flatmap = require("../flatmap");

test("flatmap", function (t) {
    t.test("exports function", function (t) {
        t.plan(1);
        t.equal(typeof flatmap, "function", "exports function");
    });

    t.test("exports redundant api", function (t) {
        t.plan(2);
        t.ok(flatmap.flatmap === flatmap);
        t.ok(flatmap.flatMap === flatmap);
    });

    t.test("returns flattened array", function (t) {
        t.plan(1);
        var arr = flatmap([1, 3, 5], function (n) {
            return [n, n + 1];
        });
        t.equal(arr.join(","), "1,2,3,4,5,6");
    });
});
