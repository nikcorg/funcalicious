var test = require("tape");
var sinon = require("sinon");
var tee = require("../tee");

test("tee", function (t) {
    t.test("exports function", function (t) {
        t.plan(1);
        t.equal(typeof tee, "function");
    });

    t.test("exports redundant api", function (t) {
        t.plan(1);
        t.ok(tee.tee === tee);
    });

    t.test("returns function", function (t) {
        t.plan(1);
        t.equal(typeof tee(), "function");
    });

    t.test("calls all functions", function (t) {
        t.plan(2);

        var fst = sinon.spy();
        var snd = sinon.spy();

        tee(fst, snd)(null);

        t.ok(fst.calledOnce);
        t.ok(snd.calledOnce);
    });

    t.test("all functions receive same input", function (t) {
        t.plan(2);

        var fst = sinon.spy();
        var snd = sinon.spy();
        var inp = "input";

        tee(fst, snd)(inp);

        t.ok(fst.calledWith(inp));
        t.ok(snd.calledWith(inp));
    });
});
