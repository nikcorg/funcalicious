import test from "tape";
import { filter } from "../src/filter";

test("filter", t => {
    t.test("exports function", t => {
        t.plan(1);
        t.equal(typeof filter, "function");
    });

    t.test("returns function", t => {
        t.plan(1);
        t.equal(typeof filter([]), "function");
    });

    t.test("throws for invalid input", t => {
        t.plan(1);
        t.throws(function () {
            filter({ });
        });
    });

    t.test("empty terms is always true", t => {
        t.plan(3);
        const empty = filter([]);
        t.ok(empty(false));
        t.ok(empty(undefined));
        t.ok(empty(42));
    });

    t.test("$eq", t => {
        t.plan(2);
        const eq = filter([{ $eq: 3 }]);

        t.ok(eq(3));
        t.notOk(eq(4));
    });

    t.test("$neq", t => {
        t.plan(2);
        const neq = filter([{ $neq: 3 }]);

        t.ok(neq(4));
        t.notOk(neq(3));
    });

    t.test("$lt", t => {
        t.plan(3);
        const lt = filter([{ $lt: 3 }]);

        t.ok(lt(2));
        t.notOk(lt(3));
        t.notOk(lt(4));
    });

    t.test("$lte", t => {
        t.plan(3);
        const lte = filter([{ $lte: 3 }]);

        t.ok(lte(2));
        t.ok(lte(3));
        t.notOk(lte(4));
    });

    t.test("$gt", t => {
        t.plan(3);

        const gt = filter([{ $gt: 3 }]);

        t.ok(gt(4));
        t.notOk(gt(3));
        t.notOk(gt(2));
    });

    t.test("$gte", t => {
        t.plan(3);

        const gte = filter([{ $gte: 3 }]);

        t.ok(gte(4));
        t.ok(gte(3));
        t.notOk(gte(2));
    });

    t.test("$in", t => {
        t.plan(2);

        const exists = filter([{ $in: [1, 3, 7] }]);

        t.ok(exists(1));
        t.notOk(exists(2));
    });

    t.test("is composeable", t => {
        t.plan(3);
        const test = filter([{ $gt: 2, $lt: 5 }]);

        t.ok(test(3));
        t.notOk(test(2));
        t.notOk(test(5));
    });
});
