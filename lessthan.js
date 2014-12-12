module.exports = lessthan.lessthan = lessthan.lessThan = lessthan;

function lessthan(what) {
    return function (i) {
        return i < what;
    };
}

