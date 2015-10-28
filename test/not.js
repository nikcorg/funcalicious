import test from "tape";
import { not } from "../src/not";

test("not", t => {
    t.test("exports function", t => {
        t.plan(1);
        t.equal(typeof not, "function", "exports function");
    });

    t.test("returns function", t => {
        t.plan(1);
        t.equal(typeof not(), "function");
    });

    t.test(t => {
        t.plan(2);
        const rtrue = () => true;
        t.notOk(not(rtrue)());
        t.ok(not(not(rtrue))());
    });
});
