import test from "tape";
import { equals } from "../src/equals";

test("equals", t => {
    t.test("exports function", t => {
        t.plan(1);
        t.equal(typeof equals, "function");
    });

    t.test("returns function", t => {
        t.plan(1);
        t.equal(typeof equals(null), "function");
    });

    t.test("defaults to loose equal", t => {
        t.plan(4);
        const nullish = equals(null);
        t.ok(nullish(null));
        t.ok(nullish(undefined));

        const falsy = equals(false);
        t.ok(falsy(""));
        t.ok(falsy(0));
    });

    t.test("optionally strict equal", t => {
        t.plan(5);
        const strictnull = equals(null, true);
        t.ok(strictnull(null));
        t.notOk(strictnull(undefined));

        const strictfalse = equals(false, true);
        t.ok(strictfalse(false));
        t.notOk(strictfalse(""));
        t.notOk(strictfalse(0));
    });
});
