import test from "tape";
import { range } from "../src/range";

test("range", function (t) {
    t.test("exports", function (t) {
        t.plan(1);
        t.equal(typeof range, "function", "exports function");
    });

    t.test("from zero", function (t) {
        t.plan(3);

        var r = range(10);

        t.equal(10, r.length);
        t.equal(0, Math.min.apply(Math, r));
        t.equal(9, Math.max.apply(Math, r));
    });

    t.test("from non-zero", function (t) {
        t.plan(3);

        var r = range(10, 20);

        t.equal(10, r.length);
        t.equal(10, Math.min.apply(Math, r));
        t.equal(19, Math.max.apply(Math, r));
    });

    t.test("non-positive", function (t) {
        t.plan(3);

        var r = range(10, 0);

        t.equal(10, r.length, "length check");
        t.equal(r.shift(), 10, "head check");
        t.equal(r.pop(), 1, "tail check");
    });

    t.test("custom step", function (t) {
        t.plan(3);

        var r = range(0, 10, 2);

        t.equal(5, r.length, "length check");
        t.equal(r.pop(), 8, "tail check");
        t.equal(r.shift(), 0, "head check");
    });

    t.test("custom negative step", function (t) {
        t.plan(3);

        var r = range(15, 0, -3);

        t.equal(5, r.length, "length check");
        t.equal(r.pop(), 3, "tail check");
        t.equal(r.shift(), 15, "head check");
    });

    t.test("invalid step sign throws", function (t) {
        t.plan(1);
        t.throws(function () {
            range(15, 0, 3);
        });
    });

    t.test("invalid step size throws", function (t) {
        t.plan(1);
        t.throws(function () {
            range(0, 10, 3);
        });
    });
});
