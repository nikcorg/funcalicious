var test = require("tape");
var toa = require("../toarray");

test("toarray", function (t) {
    t.test("exports function", function (t) {
        t.plan(1);
        t.equal(typeof toa, "function", "exports function");
    });

    t.test("exports redundant api", function (t) {
        t.plan(4);
        t.ok(toa.toa === toa);
        t.ok(toa.toA === toa);
        t.ok(toa.toArray === toa);
        t.ok(toa.toarray === toa);
    });

    t.test("arraylike", function (t) {
        t.plan(3);
        var arraylike = { length: 10 };
        t.ok(Array.isArray(toa(arraylike)));
        t.equal(10, toa(arraylike).length);
        t.equal(8, toa(arraylike, 2).length);
    });
    t.test("arguments", function (t) {
        t.plan(3);
        !function () {
            t.ok(Array.isArray(toa(arguments)));
            t.equal(3, toa(arguments).length);
            t.equal("123", toa(arguments).join(""));
        }(1, 2, 3);
    });
});
