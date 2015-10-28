export const tee = (...pipeline) => o => (pipeline.forEach(fn => fn(o)), o);
