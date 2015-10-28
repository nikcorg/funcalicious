export const put = (prop, val) => {
    if ("function" === typeof val) {
        return o => ({ ...o, [prop]: val(o) });
    }

    return o => ({ ...o, [prop]: val });
};

