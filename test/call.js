import test from "tape";
import sinon from "sinon";
import { call } from "../src/call";

test("call", t => {
    t.test("exports function", t => {
        t.plan(1);
        t.equal(typeof call, "function");
    });

    t.test("returns function", t => {
        t.plan(2);
        t.equal(typeof call("foo"), "function");
        t.equal(typeof call(sinon.spy()), "function");
    });

    t.test("invokes method", t => {
        t.plan(1);
        const c = call("foo");
        c({
            "foo": function () {
                t.pass("method was invoked");
            }
        });
    });

    t.test("passes in arguments", t => {
        t.plan(2);
        const c = call("foo", "bar", "baz");
        c({
            "foo": function (a1, a2) {
                t.equal(a1, "bar");
                t.equal(a2, "baz");
            }
        });
    });

    t.test("calls function", t => {
        t.plan(1);
        const fn = sinon.spy();
        call(fn)();
        t.ok(fn.calledOnce);
    });

    t.test("function receives fixed arguments", t => {
        t.plan(1);
        const fn = sinon.spy();
        call(fn, 1, 2)();
        t.ok(fn.calledWith(1, 2));
    });

    t.test("function receives call time arguments", t => {
        t.plan(1);
        const fn = sinon.spy();
        call(fn)(3, 4);
        t.ok(fn.calledWith(3, 4));
    });

    t.test("function receives merged arguments", t => {
        t.plan(1);
        const fn = sinon.spy();
        call(fn, 1, 2)(3, 4);
        t.ok(fn.calledWith(1, 2, 3, 4));
    });
});

