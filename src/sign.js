export const sign = n => isNaN(n) || n === 0 ? 0 : Math.abs(n) / n;
