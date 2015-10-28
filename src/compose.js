export const compose = (...funcs) => inp => funcs.reduce((ret, func) => func(ret), inp);
