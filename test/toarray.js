import test from "tape";
import { toarray as toa } from "../src/toarray";

test("toarray", t => {
    t.test("exports function", t => {
        t.plan(1);
        t.equal(typeof toa, "function", "exports function");
    });

    t.test("arraylike", t => {
        t.plan(3);
        const arraylike = { length: 10 };
        t.ok(Array.isArray(toa(arraylike)));
        t.equal(10, toa(arraylike).length);
        t.equal(8, toa(arraylike, 2).length);
    });
    t.test("arguments", t => {
        t.plan(3);
        !function () {
            t.ok(Array.isArray(toa(arguments)));
            t.equal(3, toa(arguments).length);
            t.equal("123", toa(arguments).join(""));
        }(1, 2, 3);
    });
});
