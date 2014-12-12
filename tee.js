var toarray = require("./toarray");

module.exports = tee.tee = tee;

function tee() {
    var pipeline = toarray(arguments);

    return function (o) {
        pipeline.forEach(function (fn) {
            fn(o);
        });

        return o;
    };
}
