import test from "tape";
import { always } from "../src/always";

test("always", t => {
    t.test("exports function", function (t) {
        t.plan(1);
        t.equal(typeof always, "function");
    });

    t.test("returns function", function (t) {
        t.plan(1);
        t.equal(typeof always(null), "function");
    });

    t.test("always returns input", function (t) {
        t.plan(3);

        const rand = Math.random() * 9999;
        const rval = always(rand);

        t.equal(rval("foo"), rand);
        t.equal(rval(-42), rand);
        t.equal(rval(undefined), rand);
    });
});
