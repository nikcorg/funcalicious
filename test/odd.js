import test from "tape";
import { odd } from "../src/odd";

test("odd", t => {
    t.test("exports function", t => {
        t.plan(1);
        t.equal(typeof odd, "function");
    });

    t.test("matches odd number", t => {
        t.plan(1);
        t.ok(odd(1));
    });

    t.test("fails even numbers", t => {
        t.plan(1);
        t.notOk(odd(2));
    });
});
