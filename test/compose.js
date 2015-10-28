import test from "tape";
import { compose } from "../src/compose";

test("compose", t => {
    t.test("exports function", t => {
        t.plan(1);
        t.equal(typeof compose, "function");
    });

    t.test("composition", t => {
        t.plan(1);

        const cB = s => s + "b";
        const cC = s => s + "c";
        const co = compose(cB, cC);

        t.equal(co("a"), "abc");
    });
});
