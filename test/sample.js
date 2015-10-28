import test from "tape";
import { sample } from "../src/sample";

test("sample", t => {
    t.test("exports", t => {
        t.plan(1);
        t.equal(typeof sample, "function", "exports function");
    });

    t.test("callback invoked", t => {
        t.plan(1);
        sample([1, 2, 3], t.pass);
    });

    t.test("single item", t => {
        t.plan(1);
        sample([1], function (n) {
            t.equal(n, 1, "single item selected");
        });
    });

    t.test("callback not invoked", t => {
        t.plan(1);
        sample([], t.fail.bind(t, "should not be invoked"));
        t.pass("callback was never invoked");
    });

    t.test("return without callback", t => {
        t.plan(2);
        t.equal(sample([1]), 1);
        t.equal(typeof sample([1, 2, 3, 4]), "number");
    });
});
