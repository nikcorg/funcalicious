module.exports = always.always = always;

function always(val) {
    return function () {
        return val;
    };
}
