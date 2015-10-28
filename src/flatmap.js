import { flatten } from "./flatten";

export const flatmap = (arr, fn) => flatten(arr.map(fn));
