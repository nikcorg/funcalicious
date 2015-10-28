import test from "tape";
import { contains } from "../src/contains";

test("contains", t => {
    t.test("exports function", t => {
        t.plan(1);
        t.equal(typeof contains, "function");
    });

    t.test("returns function", t => {
        t.plan(1);
        t.equal(typeof contains(""), "function");
    });

    t.test("throws for invalid input", t => {
        t.plan(3);
        t.throws(function () {
            contains(null);
        });
        t.throws(function () {
            contains(42);
        });
        t.throws(function () {
            contains({ length: 42 });
        });
    });

    t.test("returns true for matches", t => {
        t.plan(2);
        t.ok(contains([1, 2, 3])(2));
        t.ok(contains("fubar"), "ub");
    });

    t.test("returns false for misses", t => {
        t.plan(2);
        t.notOk(contains([1, 2, 3])(4));
        t.notOk(contains("fubar")("baz"));
    });
});
