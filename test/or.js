var test = require("tape");
var sinon = require("sinon");
var or = require("../or");

test("or", function (t) {
    t.test("exports function", function (t) {
        t.plan(1);
        t.equal(typeof or, "function");
    });

    t.test("exports redundant api", function (t) {
        t.plan(1);
        t.equal(typeof or.or, "function");
    });

    t.test("right is not called when left is true", function (t) {
        t.plan(3);

        var left = sinon.stub().returns(true);
        var right = sinon.stub().returns(false);

        var test = or(left, right);

        t.ok(test(true));
        t.equal(left.callCount, 1);
        t.equal(right.callCount, 0);
    });

    t.test("right is called when left is false", function (t) {
        t.plan(3);

        var left = sinon.stub().returns(false);
        var right = sinon.stub().returns(true);

        var test = or(left, right);

        t.ok(test(true));
        t.equal(left.callCount, 1);
        t.equal(right.callCount, 1);
    });
});
