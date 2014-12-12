var test = require("tape");
var sinon = require("sinon");
var put = require("../put");

test("put", function (t) {
    t.test("exports", function (t) {
        t.plan(2);
        t.equal(typeof put, "function", "exports function");
        t.equal(typeof put.put, "function", "exports redundant api");
    });
    t.test("assigns property to input", function (t) {
        t.plan(1);
        var putter = put("foo", "bar");
        var baz = {};
        putter(baz);
        t.equal(baz.foo, "bar");
    });
    t.test("accepts function as value", function (t) {
        t.plan(2);
        var stub = sinon.stub().returns(42);
        var putter = put("meaningOfLifeTheUniverseAndEverything", stub);

        t.equal(putter({}).meaningOfLifeTheUniverseAndEverything, 42);
        t.ok(stub.calledOnce, "function was called");
    });
});
