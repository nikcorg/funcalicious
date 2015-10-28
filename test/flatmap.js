import test from "tape";
import sinon from "sinon";
import { flatmap } from "../src/flatmap";

test("flatmap", t => {
    t.test("exports function", t => {
        t.plan(1);
        t.equal(typeof flatmap, "function", "exports function");
    });

    t.test("applies function", t => {
        t.plan(1);
        const spy = sinon.stub().returnsArg(0);
        flatmap([1, 2, 3], spy);
        t.equal(spy.callCount, 3);
    });

    t.test("returns flattened array", t => {
        t.plan(1);
        const arr = flatmap([1, 3, 5], function (n) {
            return [n, n + 1];
        });
        t.equal(arr.join(","), "1,2,3,4,5,6");
    });
});
