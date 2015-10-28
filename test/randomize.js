import test from "tape";
import { randomize} from "../src/randomize";

test("randomize", t => {
    t.test("exports function", t => {
        t.plan(1);
        t.equal(typeof randomize, "function");
    });

    t.test("simple random", t => {
        t.plan(2);
        const r = randomize(100);
        t.notOk(isNaN(r));
        t.ok(r >= 0 && r < 100);
    });

    t.test("stepped random", t => {
        t.plan(3);
        const r = randomize(100, 20);
        t.notOk(isNaN(r));
        t.ok(r % 20 === 0);
        t.ok(r >= 0 && r < 100);
    });
});
