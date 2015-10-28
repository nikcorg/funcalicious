import test from "tape";
import { and } from "../src/and";

test("and", t => {
    t.test("exports function", t => {
        t.plan(1);
        t.equal(typeof and, "function");
    });

    t.test("returns function", t => {
        t.plan(1);
        t.equal(typeof and(), "function");
    });

    t.test("input is passed", t => {
        t.plan(2);

        var inp = true;

        and(i => {
            t.equal(i, inp, "input matches");
            return i;
        }, i => {
            t.equal(i, inp, "input matches");
            return i;
        })(inp);
    });

    t.test("lazy", t => {
        t.plan(1);

        var inp = false;

        and(i => {
            t.pass("left should be invoked");
            return i;
        }, i => {
            t.fail("right not be invoked");
            return i;
        })(inp);
    });

    t.test("returns", t => {
        const identity = _ => _;

        t.test("truthy", t => {
            t.plan(1);
            const inp = "truthy";
            t.equal(inp, and(identity, identity)(inp));
        });
        t.test("falsy", t => {
            t.plan(1);
            const inp = 0;
            t.equal(inp, and(identity, identity)(inp));
        });
    });
});
