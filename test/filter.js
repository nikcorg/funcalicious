var test = require("tape");
var filter = require("../filter");

test("filter", function (t) {
    t.test("exports a function", function (t) {
        t.plan(1);
        t.equal(typeof filter, "function");
    });

    t.test("exports a redundant api", function (t) {
        t.plan(1);
        t.equal(typeof filter.filter, "function");
    });

    t.test("$eq", function (t) {
        t.plan(2);
        var eq = filter({ $eq: 3 });

        t.ok(eq(3));
        t.notOk(eq(4));
    });

    t.test("$neq", function (t) {
        t.plan(2);
        var neq = filter({ $neq: 3 });

        t.ok(neq(4));
        t.notOk(neq(3));
    });

    t.test("$lt", function (t) {
        t.plan(3);
        var lt = filter({ $lt: 3 });

        t.ok(lt(2));
        t.notOk(lt(3));
        t.notOk(lt(4));
    });

    t.test("$lte", function (t) {
        t.plan(3);
        var lte = filter({ $lte: 3 });

        t.ok(lte(2));
        t.ok(lte(3));
        t.notOk(lte(4));
    });

    t.test("$gt", function (t) {
        t.plan(3);

        var gt = filter({ $gt: 3 });

        t.ok(gt(4));
        t.notOk(gt(3));
        t.notOk(gt(2));
    });

    t.test("$gte", function (t) {
        t.plan(3);

        var gte = filter({ $gte: 3 });

        t.ok(gte(4));
        t.ok(gte(3));
        t.notOk(gte(2));
    });

    t.test("is composeable", function (t) {
        t.plan(3);
        var test = filter({ $gt: 2, $lt: 5 });

        t.ok(test(3));
        t.notOk(test(2));
        t.notOk(test(5));
    });
});
