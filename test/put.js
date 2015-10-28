import test from "tape";
import sinon from "sinon";
import { put } from "../src/put";

test("put", t => {
    t.test("exports function", t => {
        t.plan(1);
        t.equal(typeof put, "function", "exports function");
    });

    t.test("returns function", t => {
        t.plan(1);
        t.equal(typeof put(), "function");
    });

    t.test("does not mutate input", t => {
        t.plan(3);
        const putter = put("foo", "bar");
        const input = {};
        const altered = putter(input);
        t.notEqual(input, altered, "returns new object");
        t.notOk(input.hasOwnProperty("foo"));
        t.equal(altered.foo, "bar", "output has new property");
    });

    t.test("accepts function as value", t => {
        t.plan(3);

        const stub = sinon.stub().returns(42);
        const putter = put("meaningOfLifeTheUniverseAndEverything", stub);
        const output = putter({});

        t.ok(output.hasOwnProperty("meaningOfLifeTheUniverseAndEverything"), "has property");
        t.equal(output.meaningOfLifeTheUniverseAndEverything, 42);
        t.equal(stub.callCount, 1, "function was called");
    });
});
