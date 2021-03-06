import test from "tape";
import { sign } from "../src/sign";

test("sign", t => {
    t.test("exports", t => {
        t.plan(1);
        t.equal(typeof sign, "function", "exports function");
    });

    t.test("returns sign", t => {
        t.plan(5);
        t.equal(0, sign("fubar"), "NaN returns zero");
        t.equal(-1, sign(-300), "negative return -1");
        t.equal(0, sign(0), "zero returns zero");
        t.equal(0, sign(-0), "negative zero returns zero");
        t.equal(1, sign(10), "positive returns 1");
    });
});
