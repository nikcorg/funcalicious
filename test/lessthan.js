import test from "tape";
import { lessthan } from "../src/lessthan";

test("lessthan", t => {
    t.test("exports function", t => {
        t.plan(1);
        t.equal(typeof lessthan, "function");
    });

    t.test("returns function", t => {
        t.plan(1);
        t.equal(typeof lessthan(0), "function");
    });

    t.test("returns boolean", t => {
        t.plan(1);
        t.equal(typeof lessthan(2)(1), "boolean");
    });

    t.test("returns expected", t => {
        t.plan(3);
        t.ok(lessthan(2)(1));
        t.notOk(lessthan(2)(2));
        t.notOk(lessthan(2)(3));
    });
});
