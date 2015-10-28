import test from "tape";
import { pad } from "../src/pad";

test("pad", t => {
    t.test("exports function", t => {
        t.plan(1);
        t.equal(typeof pad, "function", "exports function");
    });

    t.test("left pads strings", t => {
        t.plan(3);
        t.equal("2", pad(2, 1, "."));
        t.equal(".2", pad(2, 2, "."));
        t.equal("...2", pad(2, 4, "."));
    });

    t.test("right pads strings", t => {
        t.plan(3);
        t.equal("2", pad(2, 1, ".", true));
        t.equal("2.", pad(2, 2, ".", true));
        t.equal("2...", pad(2, 4, ".", true));
    });
});
