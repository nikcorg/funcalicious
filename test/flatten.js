import test from "tape";
import { flatten } from "../src/flatten";

test("flatten", t => {
    t.test("exports function", t => {
        t.plan(1);
        t.equal(typeof flatten, "function");
    });

    t.test("throws for non-array input", t => {
        t.plan(2);
        t.throws(() => flatten("hello"));
        t.throws(() => flatten({ length: 2, [1]: "hello", [2]: "world" }));
    });

    t.test("returns flattened array", t => {
        t.plan(1);
        const arr = flatten([[1], [2, 3], [4], [5, 6, 7]]);
        t.equal(arr.join(","), "1,2,3,4,5,6,7");
    });
});
