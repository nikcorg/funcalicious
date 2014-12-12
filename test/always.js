var test = require("tape");
var always = require("../always");

test("always", function (t) {
    t.test("always returns input", function (t) {
        t.plan(3);

        var rand = Math.random() * 9999;
        var rval = always(rand);

        t.equal(rval("foo"), rand);
        t.equal(rval(-42), rand);
        t.equal(rval(undefined), rand);
    });
});
