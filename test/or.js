import test from "tape";
import sinon from "sinon";
import { or } from "../src/or";

test("or", t => {
    t.test("exports function", t => {
        t.plan(1);
        t.equal(typeof or, "function");
    });

    t.test("returns function", t => {
        t.plan(1);
        t.equal(typeof or(), "function");
    });

    t.test("right is not called when left is true", t => {
        t.plan(3);

        const left = sinon.stub().returns(true);
        const right = sinon.stub().returns(false);

        const test = or(left, right);

        t.ok(test(true));
        t.equal(left.callCount, 1);
        t.equal(right.callCount, 0);
    });

    t.test("right is called when left is false", t => {
        t.plan(3);

        const left = sinon.stub().returns(false);
        const right = sinon.stub().returns(true);

        const test = or(left, right);

        t.ok(test(true));
        t.equal(left.callCount, 1);
        t.equal(right.callCount, 1);
    });
});
