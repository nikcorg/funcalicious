import test from "tape";
import sinon from "sinon";
import { tee } from "../src/tee";

test("tee", t => {
    t.test("exports function", t => {
        t.plan(1);
        t.equal(typeof tee, "function");
    });

    t.test("returns function", t => {
        t.plan(1);
        t.equal(typeof tee(), "function");
    });

    t.test("calls all functions", t => {
        t.plan(2);

        const fst = sinon.spy();
        const snd = sinon.spy();

        tee(fst, snd)(null);

        t.ok(fst.calledOnce);
        t.ok(snd.calledOnce);
    });

    t.test("all functions receive same input", t => {
        t.plan(2);

        const fst = sinon.spy();
        const snd = sinon.spy();
        const inp = "input";

        tee(fst, snd)(inp);

        t.ok(fst.calledWith(inp));
        t.ok(snd.calledWith(inp));
    });
});
