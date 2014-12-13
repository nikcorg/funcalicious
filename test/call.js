var test = require("tape");
var sinon = require("sinon");
var call = require("../call");

test("call", function (t) {
    t.test("exports function", function (t) {
        t.plan(1);
        t.equal(typeof call, "function");
    });

    t.test("exports redundant api", function (t) {
        t.plan(1);
        t.ok(call.call === call);
    });

    t.test("returns function", function (t) {
        t.plan(2);
        t.equal(typeof call("foo"), "function");
        t.equal(typeof call(sinon.spy()), "function");
    });

    t.test("invokes method", function (t) {
        t.plan(1);
        var c = call("foo");
        c({
            "foo": function () {
                t.pass("method was invoked");
            }
        });
    });

    t.test("passes in arguments", function (t) {
        t.plan(2);
        var c = call("foo", "bar", "baz");
        c({
            "foo": function (a1, a2) {
                t.equal(a1, "bar");
                t.equal(a2, "baz");
            }
        });
    });

    t.test("calls function", function (t) {
        t.plan(1);
        var fn = sinon.spy();
        call(fn)();
        t.ok(fn.calledOnce);
    });

    t.test("function receives fixed arguments", function (t) {
        t.plan(1);
        var fn = sinon.spy();
        call(fn, 1, 2)();
        t.ok(fn.calledWith(1, 2));
    });

    t.test("function receives call time arguments", function (t) {
        t.plan(1);
        var fn = sinon.spy();
        call(fn)(3, 4);
        t.ok(fn.calledWith(3, 4));
    });

    t.test("function receives merged arguments", function (t) {
        t.plan(1);
        var fn = sinon.spy();
        call(fn, 1, 2)(3, 4);
        t.ok(fn.calledWith(1, 2, 3, 4));
    });
});

