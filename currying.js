const sum = (a, b, c, d) => a + b + c + d;

function currying(fn, ...args) {
    return (...restArgs) => {
        const allArgs = [...args, ...restArgs];
        if (allArgs.length === fn.length) return fn(...allArgs)
        return currying(fn, ...allArgs);
    }
}