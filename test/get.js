import test from "tape";
import { get } from "../src/get";

test("get", t => {
    t.test("exports function", t => {
        t.plan(1);
        t.equal(typeof get, "function", "exports function");
    });

    t.test("returns function", t => {
        t.plan(1);
        t.equal(typeof get("foo"), "function");
    });

    t.test(t => {
        t.plan(1);
        const getter = get("foo");
        t.equal(getter({"foo": "bar"}), "bar", "returns prop val");
    });
});
